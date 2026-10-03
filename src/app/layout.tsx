import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Caveat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { AnimatedFavicon } from "@/components/AnimatedFavicon";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const siteUrl = "https://checksoma.com";

export const metadata: Metadata = {
  title: {
    default:
      "Soma (Check Soma) | #1 EduTech & School Management App in Nigeria",
    template: "%s | Soma",
  },
  description:
    "SOMA is a free school management app built for Nigerian schools. Take attendance, record results and collect fees with or without internet, then sync across every device your team signs in on. Free for schools with 50 students or fewer.",
  keywords: [
    "Soma",
    "Check Soma",
    "checksoma",
    "checksoma.com",
    "Soma school management app",
    "school management app Nigeria",
    "free school management app",
    "offline school management app",
    "school attendance app Nigeria",
    "school results app",
    "school fees app Nigeria",
    "edutech Nigeria",
    "edu tech company Nigeria",
    "school administration software",
    "student management system",
    "school app that works offline",
    "Nigeria school software",
  ],
  authors: [{ name: "Soma" }],
  creator: "Soma",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-NG": siteUrl,
      "x-default": siteUrl,
    },
  },
  other: {
    "geo.region": "NG",
    "geo.placename": "Nigeria",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Soma",
    title:
      "Soma (Check Soma) | Nigeria's #1 EduTech Platform",
    description:
      "A free, offline-first school management app for Nigerian schools. Take attendance, record results and collect fees with or without internet. Install it on any device.",
    images: [
      {
        url: "/somaBg.png",
        width: 1200,
        height: 630,
        alt: "Soma app screens showing attendance, results and fees",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soma (Check Soma) | #1 School Management App in Nigeria",
    description:
      "A free, offline-first school management app. Attendance, results and fees that work when the internet does not.",
    images: ["/somaBg.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0D0D0D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Soma",
    alternateName: ["Check Soma", "SOMA", "CheckSoma", "checksoma", "Soma EduTech"],
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web, Android, iOS",
    description:
      "A free school management app for Nigerian schools. Records attendance, results and fees, and keeps working when the internet goes down.",
    url: siteUrl,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free for schools with 50 students or fewer",
    },
    featureList: [
      "Attendance register that works without internet",
      "Continuous assessment, exam scores and report cards",
      "Fee structures, invoices and payment records",
      "Announcements for staff and parents",
      "Timetables and lesson notes",
      "Bulk import of student and staff records",
      "Sync across phone and laptop",
      "Installable as a mobile app",
    ],
    screenshot: `${siteUrl}/somaBg.png`,
    softwareVersion: "1.0",
    author: {
      "@type": "Organization",
      name: "Soma",
      url: siteUrl,
    },
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Soma",
    alternateName: ["Check Soma", "CheckSoma"],
    url: siteUrl,
    logo: `${siteUrl}/favicon.svg`,
    description:
      "Soma builds offline-first school management software for schools in Nigeria and beyond, covering attendance, results, fees and announcements in one app.",
    sameAs: [
      "https://instagram.com/checksomaapp",
      "https://x.com/checksomaapp",
      "https://facebook.com/checksomaapp",
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is SOMA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SOMA is a free offline-first school management app. Attendance, results, fees and announcements all live in one place. It works with or without internet, saving on your device and syncing when you reconnect.",
        },
      },
      {
        "@type": "Question",
        name: "Does SOMA work offline?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. SOMA is offline-first, so every feature runs without internet, including attendance, results, fees and announcements. Data saves on the device and syncs automatically once you reconnect.",
        },
      },
      {
        "@type": "Question",
        name: "How much does SOMA cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SOMA is free for schools with 50 students or fewer. Larger schools pay a per-student fee per term. There is no upfront cost and no long-term contract.",
        },
      },
      {
        "@type": "Question",
        name: "Can we import existing student data into SOMA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. SOMA supports importing your existing student and school records so you don't have to start from scratch.",
        },
      },
      {
        "@type": "Question",
        name: "Can SOMA fit our school structure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SOMA fits the structure your school already has, whether that is a single campus or several branches, with any class and arm setup.",
        },
      },
      {
        "@type": "Question",
        name: "Who is SOMA for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SOMA is built for principals, administrators, teachers and parents. Each role opens on its own dashboard: teachers mark attendance and record scores, parents follow their child's progress, and administrators see the whole school at a glance.",
        },
      },
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Soma",
    alternateName: ["Check Soma", "SOMA", "CheckSoma", "checksoma", "Soma EduTech"],
    url: siteUrl,
    description:
      "Nigeria's leading edu tech platform, a free offline-first school management app for schools across Nigeria and the world.",
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} h-full antialiased`}
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6Y9CV04WZZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6Y9CV04WZZ', { send_page_view: true });
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <AnimatedFavicon />
        {children}
      </body>
    </html>
  );
}
