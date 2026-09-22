import type { Metadata } from "next";
import Link from "next/link";
import { MarketingPage } from "@/features/landing/components/MarketingPage";

const siteUrl = "https://checksoma.com";

export const metadata: Metadata = {
  title: "Pricing — Free School Management App for Small Schools | SOMA",
  description:
    "SOMA's school management app pricing: free for schools with 50 students or fewer, and a simple per-student per-term fee for larger schools. No upfront cost, no long-term contract. Built for Nigerian schools and beyond.",
  keywords: [
    "school management app pricing",
    "free school management app Nigeria",
    "school management app cost",
    "school fees software pricing",
    "free school software",
  ],
  alternates: {
    canonical: `${siteUrl}/pricing`,
    languages: {
      "en-NG": `${siteUrl}/pricing`,
      "x-default": `${siteUrl}/pricing`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/pricing`,
    siteName: "Soma",
    title: "SOMA Pricing — Free for Schools Under 50 Students",
    description:
      "Free for schools with 50 students or fewer. A simple per-student per-term fee for larger schools. No upfront cost, no long-term contract.",
    images: [{ url: "/somaBg.png", width: 1200, height: 630, alt: "SOMA school management app pricing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SOMA Pricing — Free School Management App",
    description: "Free for schools under 50 students. Simple per-student per-term pricing beyond that.",
    images: ["/somaBg.png"],
  },
};

const faqs = [
  {
    question: "Is SOMA really free for small schools?",
    answer:
      "Yes. SOMA is completely free for schools with 50 students or fewer — every feature, no time limit. Larger schools pay a simple per-student fee per term.",
  },
  {
    question: "How much does SOMA cost for larger schools?",
    answer:
      "Schools above 50 students pay a simple per-student fee per term. There is no upfront cost, no setup fee, and no long-term contract. Contact our sales team for a quote for your school.",
  },
  {
    question: "What is included in the free plan?",
    answer:
      "Everything. Offline attendance, results and report cards, fees and invoices, announcements, timetables, lesson notes, the parent portal and multi-device sync — all included at no cost.",
  },
  {
    question: "Are there hidden charges?",
    answer:
      "No. There are no hidden charges, no per-feature add-ons and no surprise fees. You only ever pay for the students on your roll.",
  },
];

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "SOMA School Management App",
  description:
    "Free offline-first school management app. Free for schools with 50 students or fewer; simple per-student per-term fee for larger schools.",
  url: `${siteUrl}/pricing`,
  image: `${siteUrl}/somaBg.png`,
  brand: { "@type": "Brand", name: "Soma" },
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "0",
    highPrice: "0",
    priceCurrency: "USD",
    offerCount: "2",
    offers: [
      {
        "@type": "Offer",
        name: "Free",
        price: "0",
        priceCurrency: "USD",
        description: "Free for schools with 50 students or fewer",
      },
      {
        "@type": "Offer",
        name: "Per-student per term",
        price: "0",
        priceCurrency: "USD",
        description: "Simple per-student per-term fee for larger schools — contact sales",
      },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Pricing", item: `${siteUrl}/pricing` },
  ],
};

export default function PricingPage() {
  return (
    <MarketingPage>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <div className="max-w-[860px] mx-auto text-center">
        <p className="text-[12px] md:text-[13px] font-semibold text-soma-blue tracking-widest uppercase mb-4">
          Pricing
        </p>
        <h1 className="text-[32px] sm:text-[44px] md:text-[56px] font-semibold leading-[1.08] tracking-tight text-soma-black">
          Start for free.{" "}
          <span className="font-hand font-bold italic text-soma-blue">Grow when you&apos;re ready.</span>
        </h1>
        <p className="text-[16px] md:text-[18px] text-gray-4 leading-[1.7] mt-6 max-w-[640px] mx-auto">
          No upfront cost. No long-term contract. Every feature included — whether your
          school has 20 students or 2,000.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-14 md:mt-16 max-w-[900px] mx-auto">
        <div className="bg-soma-black rounded-[24px] p-8 md:p-10 text-white flex flex-col">
          <h2 className="text-[22px] md:text-[26px] font-semibold">Free</h2>
          <p className="mt-3 text-5xl font-semibold">
            $0<span className="text-lg text-white/60 font-normal"> / forever</span>
          </p>
          <p className="mt-4 text-white/70 text-[15px] leading-relaxed mb-6">
            For schools with 50 students or fewer. Every feature, free, no time limit.
          </p>
          <ul className="space-y-3 text-[15px] text-white/85 mt-auto">
            {[
              "Offline-first — works without internet",
              "Unlimited attendance, results & fees",
              "Parent portal included",
              "Multi-device sync",
              "Free setup and onboarding",
              "No credit card required",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-soma-green">✓</span> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-soma-white-card rounded-[24px] p-8 md:p-10 flex flex-col">
          <h2 className="text-[22px] md:text-[26px] font-semibold text-soma-black">
            Per-student per term
          </h2>
          <p className="mt-3 text-5xl font-semibold text-soma-black">
            Simple<span className="text-lg font-normal text-gray-4">, affordable</span>
          </p>
          <p className="mt-4 text-gray-4 text-[15px] leading-relaxed mb-6">
            For schools above 50 students. A fair, per-student fee each term — no minimums,
            no hidden charges.
          </p>
          <ul className="space-y-3 text-[15px] text-soma-black mt-auto">
            {[
              "Same full feature set",
              "All classes and arms",
              "Bulk student import",
              "Terms, sessions & multiple campuses",
              "Priority onboarding support",
              "Flexible, contract-free",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-soma-blue">✓</span> {item}
              </li>
            ))}
          </ul>
          <Link
            href="#contact-sales"
            className="mt-8 inline-block text-center px-6 py-3 rounded-full bg-soma-blue text-white text-sm font-medium hover:bg-soma-blue/90 transition-colors"
          >
            Contact sales for a quote
          </Link>
        </div>
      </div>

      <div className="mt-16 max-w-[860px] mx-auto">
        <h2 className="text-[24px] md:text-[30px] font-semibold text-soma-black mb-8">
          Pricing questions, answered.
        </h2>
        <div className="flex flex-col gap-5">
          {faqs.map((faq) => (
            <div key={faq.question} className="bg-soma-white-card rounded-[18px] p-6">
              <h3 className="text-[17px] md:text-[18px] font-semibold text-soma-black mb-2">
                {faq.question}
              </h3>
              <p className="text-[15px] text-gray-4 leading-[1.7]">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </MarketingPage>
  );
}