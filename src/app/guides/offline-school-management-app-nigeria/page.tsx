import type { Metadata } from "next";
import Link from "next/link";
import { MarketingPage } from "@/features/landing/components/MarketingPage";

const siteUrl = "https://checksoma.com";

export const metadata: Metadata = {
  title: "Offline School Management App in Nigeria: How SOMA Works Without Internet",
  description:
    "How an offline-first school management app works without internet and why it is the right choice for Nigerian schools. Attendance, results and fees that keep working through network outages.",
  keywords: [
    "offline school management app Nigeria",
    "school app that works offline",
    "offline attendance app Nigeria",
    "school software without internet",
  ],
  alternates: {
    canonical: `${siteUrl}/guides/offline-school-management-app-nigeria`,
    languages: {
      "en-NG": `${siteUrl}/guides/offline-school-management-app-nigeria`,
      "x-default": `${siteUrl}/guides/offline-school-management-app-nigeria`,
    },
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: `${siteUrl}/guides/offline-school-management-app-nigeria`,
    siteName: "Soma",
    title: "Offline School Management App in Nigeria: How SOMA Works Without Internet",
    description:
      "Why Nigeria's internet reality makes offline-first school software the smart choice — and how SOMA keeps attendance, results and fees running without internet.",
    images: [{ url: "/somaBg.png", width: 1200, height: 630, alt: "Offline school management app Nigeria" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Offline School Management App in Nigeria",
    description: "Why offline-first is the right choice for Nigerian schools.",
    images: ["/somaBg.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Offline School Management App in Nigeria: How SOMA Works Without Internet",
  description:
    "How an offline-first school management app works without internet and why it is the right choice for Nigerian schools.",
  author: { "@type": "Organization", name: "Soma", url: siteUrl },
  publisher: { "@type": "Organization", name: "Soma", url: siteUrl, logo: `${siteUrl}/favicon.svg` },
  datePublished: "2026-09-22",
  dateModified: "2026-09-22",
  mainEntityOfPage: `${siteUrl}/guides/offline-school-management-app-nigeria`,
};

const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteUrl}/guides` },
    {
      "@type": "ListItem",
      position: 3,
      name: "Offline School Management App in Nigeria",
      item: `${siteUrl}/guides/offline-school-management-app-nigeria`,
    },
  ],
};

export default function OfflineNigeriaGuide() {
  return (
    <MarketingPage>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <article className="max-w-[780px] mx-auto">
        <Link href="/guides" className="text-[14px] font-medium text-soma-blue hover:underline">
          ← All guides
        </Link>
        <h1 className="text-[30px] sm:text-[40px] md:text-[48px] font-semibold leading-[1.1] tracking-tight text-soma-black mt-6">
          Offline School Management App in Nigeria: How SOMA Works Without Internet
        </h1>
        <p className="text-[14px] text-gray-4 mt-4">September 22, 2026 · 5 min read</p>

        <div className="mt-10 text-gray-4 leading-[1.8] space-y-6 text-[16px] md:text-[17px]">
          <p>
            In many parts of Nigeria, the internet is unreliable. Subscriptions expire, signals
            drop, and the classroom is the last place you want to depend on a strong connection
            to take attendance or record a test score.
          </p>
          <p>
            Most school management apps overlook this. They assume a school has fast, unlimited
            broadband — which is why so many deployments fail after the first month. An{" "}
            <strong>offline school management app</strong> is designed for the reality Nigerian
            schools actually live in.
          </p>

          <h2 className="text-[22px] md:text-[26px] font-semibold text-soma-black mt-10">
            What does an offline school management app do differently?
          </h2>
          <p>
            An offline-first app saves everything to the device itself. When you mark attendance,
            record a score or add a fee payment, it is written to the phone or laptop immediately
            — not to a cloud server that may be unreachable. It only syncs when a connection
            becomes available.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Attendance is saved as you go, even with zero network.</li>
            <li>Results and lesson notes are never lost in a network drop.</li>
            <li>Changes sync across every device automatically when you reconnect.</li>
            <li>Staff and parent notifications queue up and push once you are online.</li>
          </ul>

          <h2 className="text-[22px] md:text-[26px] font-semibold text-soma-black mt-10">
            Why this matters more in Nigeria than anywhere else
          </h2>
          <p>
            Schools in Nigeria juggle multiple realities: large class sizes, limited admin staff,
            and network conditions that change room by room. A cloud-only app fails when these
            realities collide. An offline-first school management app keeps working at the point
            where the work actually happens — in the classroom.
          </p>

          <h2 className="text-[22px] md:text-[26px] font-semibold text-soma-black mt-10">
            SOMA: free and offline-first, built for Nigerian schools
          </h2>
          <p>
            SOMA is a free, offline-first school management app covering attendance, results,
            fees and announcements. It installs like an app on any phone, works without internet,
            and syncs across every device your team signs in on.
          </p>
          <p>
            It&apos;s free for schools with 50 students or fewer — a practical starting point for
            most Nigerian schools. See{" "}
            <Link href="/features" className="text-soma-blue hover:underline font-medium">
              all features
            </Link>{" "}
            or{" "}
            <Link href="/pricing" className="text-soma-blue hover:underline font-medium">
              compare pricing
            </Link>.
          </p>
        </div>
      </article>
    </MarketingPage>
  );
}