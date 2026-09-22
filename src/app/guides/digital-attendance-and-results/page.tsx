import type { Metadata } from "next";
import Link from "next/link";
import { MarketingPage } from "@/features/landing/components/MarketingPage";

const siteUrl = "https://checksoma.com";

export const metadata: Metadata = {
  title: "How to Digitise School Attendance and Results: From Paper and Excel to One App",
  description:
    "Move your school from paper registers and Excel sheets to a digital school management app. A step-by-step plan for attendance, results, report cards and fees — with bulk student import.",
  keywords: [
    "digitise school records Nigeria",
    "school attendance app Nigeria",
    "digital results and report cards",
    "school records management",
    "automatic report card software",
  ],
  alternates: {
    canonical: `${siteUrl}/guides/digital-attendance-and-results`,
    languages: {
      "en-NG": `${siteUrl}/guides/digital-attendance-and-results`,
      "x-default": `${siteUrl}/guides/digital-attendance-and-results`,
    },
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: `${siteUrl}/guides/digital-attendance-and-results`,
    siteName: "Soma",
    title: "How to Digitise School Attendance and Results",
    description:
      "A step-by-step plan for moving Nigerian schools from paper registers and Excel sheets to one offline-first app.",
    images: [{ url: "/somaBg.png", width: 1200, height: 630, alt: "Digitise school attendance and results Nigeria" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digitise School Attendance and Results",
    description: "From paper and Excel to one offline-first app, without losing your work.",
    images: ["/somaBg.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Digitise School Attendance and Results: From Paper and Excel to One App",
  description:
    "Move your school from paper registers and Excel sheets to a digital school management app, step by step.",
  author: { "@type": "Organization", name: "Soma", url: siteUrl },
  publisher: { "@type": "Organization", name: "Soma", url: siteUrl, logo: `${siteUrl}/favicon.svg` },
  datePublished: "2026-09-22",
  dateModified: "2026-09-22",
  mainEntityOfPage: `${siteUrl}/guides/digital-attendance-and-results`,
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
      name: "Digitise School Attendance and Results",
      item: `${siteUrl}/guides/digital-attendance-and-results`,
    },
  ],
};

export default function DigitiseGuide() {
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
          How to Digitise School Attendance and Results: From Paper and Excel to One App
        </h1>
        <p className="text-[14px] text-gray-4 mt-4">September 22, 2026 · 5 min read</p>

        <div className="mt-10 text-gray-4 leading-[1.8] space-y-6 text-[16px] md:text-[17px]">
          <p>
            Every Nigerian school holds the same pain: attendance that has to be counted from
            registers, results that get typed into Excel sheet after Excel sheet, and report
            cards assembled by hand every term. It is slow, error-prone, and burns admin hours.
          </p>
          <p>
            The good news is that digitising does not require a two-month IT project or training
            your staff for weeks. With the right school management app, most schools make the
            switch within a single term — and the transition can be gentle.
          </p>

          <h2 className="text-[22px] md:text-[26px] font-semibold text-soma-black mt-10">
            Step 1: Move your student records first
          </h2>
          <p>
            Before touching attendance or results, bring over your student register. A good app
            lets you <strong>import in bulk</strong> — names, classes, arms and guardian details —
            so you don&apos;t start from a blank page. SOMA supports bulk import from spreadsheets,
            which removes the most tedious part of the switch.
          </p>

          <h2 className="text-[22px] md:text-[26px] font-semibold text-soma-black mt-10">
            Step 2: Replace the paper attendance register
          </h2>
          <p>
            Begin with one class or one arm. Teachers mark attendance with a swipe or tap, and
            bulk-mark the class present before correcting the few exceptions. Attendance is saved
            instantly and works offline — no internet required in the classroom.
          </p>

          <h2 className="text-[22px] md:text-[26px] font-semibold text-soma-black mt-10">
            Step 3: Typing scores once counts for CA and exams
          </h2>
          <p>
            Record continuous assessment and exam scores per subject. Because the app already knows
            your classes and subjects, scores roll up into report cards automatically. The
            endless Excel copying — and the errors that come with it — disappear.
          </p>

          <h2 className="text-[22px] md:text-[26px] font-semibold text-soma-black mt-10">
            Step 4: Review before results reach parents
          </h2>
          <p>
            Add an approval step so administrators can review teacher submissions before report
            cards are finalised. Parents follow attendance and results in the parent portal, which
            reduces &quot;which office do I collect from?&quot; visits.
          </p>

          <h2 className="text-[22px] md:text-[26px] font-semibold text-soma-black mt-10">
            Start this term
          </h2>
          <p>
            SOMA is free for schools with 50 students or fewer, works fully offline, and syncs
            across every device your team signs in on.{" "}
            <Link href="/features" className="text-soma-blue hover:underline font-medium">
              Browse the features
            </Link>{" "}
            or{" "}
            <Link href="https://app.checksoma.com" className="text-soma-blue hover:underline font-medium">
              open the app
            </Link>{" "}
            to get started.
          </p>
        </div>
      </article>
    </MarketingPage>
  );
}