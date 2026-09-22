import type { Metadata } from "next";
import Link from "next/link";
import { MarketingPage } from "@/features/landing/components/MarketingPage";

const siteUrl = "https://checksoma.com";

export const metadata: Metadata = {
  title: "Guides — School Management in Nigeria | SOMA Knowledge Base",
  description:
    "Practical guides for Nigerian schools: moving from paper to apps, digitising attendance and results, managing fees offline, and more. Written for principals, administrators and teachers.",
  keywords: [
    "school management guides Nigeria",
    "school records management Nigeria",
    "school software guides",
    "offline school app Nigeria",
  ],
  alternates: {
    canonical: `${siteUrl}/guides`,
    languages: {
      "en-NG": `${siteUrl}/guides`,
      "x-default": `${siteUrl}/guides`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/guides`,
    siteName: "Soma",
    title: "SOMA Guides — School Management for Nigerian Schools",
    description:
      "Practical guides for moving Nigerian schools from paper to an offline-first app: attendance, results, fees and more.",
    images: [{ url: "/somaBg.png", width: 1200, height: 630, alt: "SOMA guides for school management in Nigeria" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SOMA Guides — School Management for Nigerian Schools",
    description: "Practical guides for moving Nigerian schools from paper to an offline-first app.",
    images: ["/somaBg.png"],
  },
};

const posts = [
  {
    href: "/guides/offline-school-management-app-nigeria",
    title: "Offline School Management App in Nigeria: How SOMA Works Without Internet",
    excerpt:
      "Why reliable internet is still a challenge for many Nigerian schools — and how an offline-first app keeps attendance, results and fees running no matter what.",
    date: "2026-09-22",
  },
  {
    href: "/guides/digital-attendance-and-results",
    title: "How to Digitise School Attendance and Results: From Paper and Excel to One App",
    excerpt:
      "A step-by-step plan for moving records from paper registers and Excel sheets into a school management app — without losing your work or training your staff for weeks.",
    date: "2026-09-22",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "SOMA Guides for School Management in Nigeria",
  itemListElement: posts.map((post, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${siteUrl}${post.href}`,
    name: post.title,
  })),
};

export default function GuidesPage() {
  return (
    <MarketingPage>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-[860px] mx-auto">
        <p className="text-[12px] md:text-[13px] font-semibold text-soma-blue tracking-widest uppercase mb-4">
          Guides
        </p>
        <h1 className="text-[32px] sm:text-[44px] md:text-[56px] font-semibold leading-[1.08] tracking-tight text-soma-black">
          Running a school in Nigeria,{" "}
          <span className="font-hand font-bold italic text-soma-blue">made simpler.</span>
        </h1>
        <p className="text-[16px] md:text-[18px] text-gray-4 leading-[1.7] mt-6 max-w-[640px]">
          Practical, no-fluff guides for principals, administrators and teachers — covering
          everything from going offline-first to digitising results and fees.
        </p>
      </div>

      <div className="flex flex-col gap-6 mt-14 md:mt-16 max-w-[860px] mx-auto">
        {posts.map((post) => (
          <Link
            key={post.href}
            href={post.href}
            className="group bg-soma-white-card rounded-[20px] p-6 md:p-8 hover:bg-black transition-colors duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:justify-between">
              <h2 className="text-[20px] md:text-[24px] font-semibold text-soma-black group-hover:text-white leading-snug">
                {post.title}
              </h2>
              <time className="text-[13px] text-gray-4 group-hover:text-white/60 shrink-0 md:ml-6">
                {new Date(post.date).toLocaleDateString("en", { month: "short", day: "numeric", year: "numeric" })}
              </time>
            </div>
            <p className="text-[15px] text-gray-4 group-hover:text-white/70 leading-[1.7] mt-3">
              {post.excerpt}
            </p>
            <span className="inline-block mt-4 text-[14px] font-medium text-soma-blue group-hover:text-white">
              Read guide →
            </span>
          </Link>
        ))}
      </div>
    </MarketingPage>
  );
}