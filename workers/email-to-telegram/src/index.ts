import PostalMime from "postal-mime";

interface Env {
  TELEGRAM_BOT_TOKEN: string;
  TELEGRAM_CHAT_ID: string;
  FORWARD_TO?: string;
  BACKEND_URL?: string;
  EMAIL_WEBHOOK_SECRET?: string;
}

const MAX = 3000;

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

async function sendTelegram(env: Env, text: string) {
  const res = await fetch(
    `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        chat_id: env.TELEGRAM_CHAT_ID,
        text,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    },
  );
  if (!res.ok) {
    throw new Error(`Telegram API ${res.status}: ${await res.text()}`);
  }
}

async function sendToBackend(env: Env, payload: Record<string, unknown>) {
  if (!env.BACKEND_URL || !env.EMAIL_WEBHOOK_SECRET) return;
  try {
    await fetch(`${env.BACKEND_URL}/api/telegram/inbound-email`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-email-secret": env.EMAIL_WEBHOOK_SECRET,
      },
      body: JSON.stringify(payload),
    });
  } catch (e) {
    console.error("[email-worker] backend forward failed:", e);
  }
}

export default {
  async email(message: any, env: Env, ctx: any) {
    const parsed = await PostalMime.parse(message.raw);
    const fromAddr = parsed.from?.address ?? message.from;
    const fromName = parsed.from?.name;
    const name = fromName ? `${fromName} <${fromAddr}>` : fromAddr;
    const subject = parsed.subject?.trim() || "(no subject)";
    const body =
      (parsed.text ??
        (parsed.html
          ? parsed.html.replace(/<[^>]+>/g, " ")
          : "")) ||
      "";
    const normalized = body
      .replace(/\r\n/g, "\n")
      .replace(/\s+\n/g, "\n")
      .replace(/[ \t]{2,}/g, " ")
      .trim();
    const trimmed = normalized.length > MAX ? `${normalized.slice(0, MAX)}…` : normalized || "(empty message)";

    const text = [
      "📧 <b>New sales enquiry</b>",
      `<b>From:</b> ${escapeHtml(name)}`,
      `<b>Subject:</b> ${escapeHtml(subject)}`,
      "",
      escapeHtml(trimmed),
    ].join("\n");

    // Try backend first (reuses existing config/chat), else direct Telegram
    await sendToBackend(env, {
      from: fromAddr,
      fromName,
      subject,
      text: normalized,
      html: parsed.html || undefined,
    });

    if (!env.BACKEND_URL || !env.EMAIL_WEBHOOK_SECRET) {
      try {
        await sendTelegram(env, text);
      } catch (err) {
        console.error(err);
        throw err;
      }
    }

    if (env.FORWARD_TO) {
      await message.forward(env.FORWARD_TO);
    }
  },
} satisfies ExportedHandler<Env, unknown>;
