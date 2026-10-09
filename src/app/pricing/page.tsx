import type { Metadata } from "next";
import { Footer } from "@/features/landing/components/Footer";
import { PricingSections, pricingFaqs } from "@/features/pricing";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing | Free School Management App for Small Schools | SOMA",
  description:
    "SOMA's school management app pricing: free for schools with 50 students or fewer, then ₦250 per student per term (₦750 per session). Teachers are free, no setup fee and no long-term contract. Built for Nigerian schools and beyond.",
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
    title: "SOMA Pricing | Free for Schools Under 50 Students",
    description:
      "Free for schools with 50 students or fewer, then ₦250 per student per term. Teachers come free. No setup fee, no long-term contract.",
    images: [{ url: "/somaBg.png", width: 1200, height: 630, alt: "SOMA school management app pricing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SOMA Pricing | Free School Management App",
    description: "Free for schools under 50 students. ₦250 per student per term beyond that.",
    images: ["/somaBg.png"],
  },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "SOMA School Management App",
  description:
    "Free offline-first school management app. Free for schools with 50 students or fewer; ₦250 per student per term for larger schools.",
  url: `${siteUrl}/pricing`,
  image: `${siteUrl}/somaBg.png`,
  brand: { "@type": "Brand", name: "Soma" },
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "0",
    highPrice: "250",
    priceCurrency: "NGN",
    offerCount: "2",
    offers: [
      {
        "@type": "Offer",
        name: "Free",
        price: "0",
        priceCurrency: "NGN",
        description: "Free for schools with 50 students or fewer",
      },
      {
        "@type": "Offer",
        name: "School",
        price: "250",
        priceCurrency: "NGN",
        description: "₦250 per student per term for schools above 50 students",
      },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: pricingFaqs.map((faq) => ({
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
    <>
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
      <div className="min-h-[700px] p-[10px]">
        <div className="relative bg-soma-black rounded-[30px] overflow-hidden">
          <PricingSections />
        </div>
      </div>
      <Footer />
    </>
  );
}
