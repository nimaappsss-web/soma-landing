# email-to-telegram (Cloudflare Email Worker)

Cloudflare Email Routing sends inbound emails to `support@checksoma.com` to this Worker; it:
- Parses the email (via postal-mime).
- Posts to `soma-backend` at `/api/telegram/inbound-email` with a shared secret (so it reuses existing Telegram config/chat).
- Falls back to direct Telegram if backend isn't configured.
- Optionally forwards to a real mailbox (e.g. support@checksoma.com) for archive.

## Setup (Cloudflare)

1. Install deps and login
   ```bash
   cd workers/email-to-telegram
   npm i
   npx wrangler login
   ```

2. Set secrets/vars (in Cloudflare Workers → Settings → Variables, or wrangler)
   - TELEGRAM_BOT_TOKEN (secret)
   - TELEGRAM_CHAT_ID (var or secret; both work; var easier for read-only; can be string)
   - BACKEND_URL (e.g. https://api.checksoma.com) — set if backend is deployed
   - EMAIL_WEBHOOK_SECRET (secret) — must match EMAIL_WEBHOOK_SECRET in soma-backend .env
   - FORWARD_TO (var, optional) — verified destination in Email Routing (e.g. support@checksoma.com)

   Or via CLI:
   ```bash
   npx wrangler secret put TELEGRAM_BOT_TOKEN
   npx wrangler secret put TELEGRAM_CHAT_ID  # or add as var in wrangler.toml
   npx wrangler secret put EMAIL_WEBHOOK_SECRET
   ```

3. Deploy
   ```bash
   npx wrangler deploy
   ```

4. Wire Email Routing
   In Cloudflare → Email → Email Routing → Routes, add `support@checksoma.com` and set action to "Send to a Worker"; select `email-to-telegram`.

Backend must have EMAIL_WEBHOOK_SECRET set (same value). The backend endpoint `/api/telegram/inbound-email` exists (added to /api/telegram routes).

## Notes
- `x-email-secret` header is checked; Telegram format uses HTML parse_mode for nicer rendering.
- Body is truncated to ~3000 chars.
