import type { Metadata } from "next";
import Link from "next/link";
import { MarketingPage } from "@/features/landing/components/MarketingPage";

const siteUrl = "https://checksoma.com";

export const metadata: Metadata = {
  title: "School Management App Features — Attendance, Results, Fees & More",
  description:
    "Explore SOMA's school management app features for Nigerian schools: offline attendance, results & report cards, fee collection, announcements, timetables, lesson notes and a parent portal — all in one free offline-first app.",
  keywords: [
    "school management app features",
    "offline school management app Nigeria",
    "school attendance software",
    "school results and report card software",
    "school fee collection app",
    "school administration software",
  ],
  alternates: {
    canonical: `${siteUrl}/features`,
    languages: {
      "en-NG": `${siteUrl}/features`,
      "x-default": `${siteUrl}/features`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/features`,
    siteName: "Soma",
    title: "SOMA Features — The Offline-First School Management App for Nigeria",
    description:
      "Offline attendance, results, fees, announcements, timetables and a parent portal in one free app built for the way Nigerian schools actually work.",
    images: [{ url: "/somaBg.png", width: 1200, height: 630, alt: "SOMA school management app features" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SOMA Features — Offline-First School Management App",
    description:
      "Offline attendance, results, fees, announcements, timetables and a parent portal in one free app.",
    images: ["/somaBg.png"],
  },
};

const features = [
  {
    title: "Offline-first that actually works",
    description:
      "Every feature runs without internet. Attendance, results, fees and announcements save on the device and sync automatically when you reconnect — nothing is ever lost, even in areas with poor network.",
  },
  {
    title: "Attendance, marked in seconds",
    description:
      "Teachers swipe or tap to mark students present or absent. Bulk-mark the class, then correct the few exceptions. Parents get instant notifications when their child is marked.",
  },
  {
    title: "Results, CA and exam scores",
    description:
      "Record continuous assessment and exam scores per subject. They roll up into report cards automatically, with an approval workflow before results reach parents.",
  },
  {
    title: "Fees, invoices and payment tracking",
    description:
      "Build fee structures, generate per-student invoices and send fee reminders in one tap. Track expected, collected and outstanding fees across all classes.",
  },
  {
    title: "Announcements and school communication",
    description:
      "Share updates with staff and parents in one tap. Every announcement is delivered to the right audience without email threads or printed circulars.",
  },
  {
    title: "Timetables and lesson notes",
    description:
      "Plan timetables for every class, record lesson notes by curriculum topic and keep everything synced and printable. The entire school runs on one operating system.",
  },
  {
    title: "Multi-device sync",
    description:
      "Install on any phone or laptop. Changes on one device show up on every other device your team signs in on — automatically, online or offline.",
  },
  {
    title: "Simple setup, no training required",
    description:
      "A guided setup wizard walks your team through classes, teachers and student import. Most schools are fully set up within one session, with zero training.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "SOMA School Management App Features",
  itemListElement: features.map((f, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: f.title,
  })),
};

const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Features", item: `${siteUrl}/features` },
  ],
};

export default function FeaturesPage() {
  return (
    <MarketingPage>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <div className="max-w-[860px] mx-auto">
        <p className="text-[12px] md:text-[13px] font-semibold text-soma-blue tracking-widest uppercase mb-4">
          Features
        </p>
        <h1 className="text-[32px] sm:text-[44px] md:text-[56px] font-semibold leading-[1.08] tracking-tight text-soma-black">
          Everything your school runs on,{" "}
          <span className="font-hand font-bold italic text-soma-blue">in one offline-first app.</span>
        </h1>
        <p className="text-[16px] md:text-[18px] text-gray-4 leading-[1.7] mt-6 max-w-[640px]">
          SOMA is a free school management app built for Nigerian schools and schools
          worldwide. Attendance, results, fees, announcements, timetables and lesson
          notes — all working offline, all synced across every device your team signs in on.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-14 md:mt-16">
        {features.map((feature) => (
          <div key={feature.title} className="bg-soma-white-card rounded-[22px] p-6 md:p-8">
            <h2 className="text-[20px] md:text-[22px] font-semibold text-soma-black mb-2">
              {feature.title}
            </h2>
            <p className="text-[15px] md:text-[16px] text-gray-4 leading-[1.7]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-soma-black rounded-[24px] p-8 md:p-12 text-center text-white">
        <h2 className="text-[26px] md:text-[34px] font-semibold leading-tight">
          Start using it today — free for schools under 50 students.
        </h2>
        <p className="text-white/70 mt-4 max-w-[560px] mx-auto text-[15px] md:text-[16px]">
          See the full product in action on{" "}
          <Link href="https://app.checksoma.com" className="underline text-soma-blue hover:text-white transition-colors">
            app.checksoma.com
          </Link>{" "}
          or{" "}
          <Link href="/pricing" className="underline">
            compare plans
          </Link>.
        </p>
      </div>
    </MarketingPage>
  );
}