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

const siteUrl = "https://soma.edu";

export const metadata: Metadata = {
  title: {
    default: "Soma — Free School Management App | Offline Attendance, Results & Fees",
    template: "%s | Soma",
  },
  description:
    "SOMA is a free offline-first school management app for principals, teachers, and parents. Track attendance, manage results, collect fees, and send announcements — all without internet. Install on any phone or laptop, syncs across devices. Free for schools under 50 students.",
  keywords: [
    "school management app",
    "free school management software",
    "offline school management app",
    "school attendance app",
    "school results management",
    "school fee collection software",
    "education technology app",
    "school administration app",
    "teacher attendance app",
    "parent school portal",
    "school communication app",
    "student management system",
    "school operating system",
    "offline education app",
    "school PWA app",
    "school management system Nigeria",
    "school software Africa",
    "free attendance tracking app",
    "school report card software",
    "school timetable app",
    "edu tech app",
    "school management app free",
    "best school management app",
    "school management software for small schools",
    "offline school software",
    "school results app",
    "school fees app",
    "school announcements app",
    "education management software",
    "school records management",
    "mobile school management app",
    "school app for teachers and parents",
    "multi-device school software",
    "school app that works offline",
  ],
  authors: [{ name: "Soma" }],
  creator: "Soma",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Soma",
    title: "Soma — Free Offline School Management App | Attendance, Results & Fees",
    description:
      "SOMA is a free offline-first school management app for principals, teachers, and parents. Track attendance, manage results, collect fees — all without internet. Install on any phone, syncs across devices.",
    images: [
      {
        url: "/somaBg.png",
        width: 1200,
        height: 630,
        alt: "Soma — Free offline-first school management app for attendance, results, and fees",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soma — Free Offline School Management App",
    description:
      "SOMA is a free offline-first school management app. Track attendance, manage results, collect fees — all without internet. Install on any phone, syncs across devices.",
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
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web, Android, iOS",
    description:
      "Free offline-first school management app for principals, teachers, and parents. Track attendance, manage results, collect fees, and send announcements — all without internet.",
    url: siteUrl,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free for schools with 50 students or fewer",
    },
    featureList: [
      "Offline attendance tracking",
      "Student results and report cards",
      "School fee collection and invoices",
      "Staff and parent communication",
      "Timetable management",
      "Student and teacher records",
      "Multi-device sync across phone and laptop",
      "Mobile-friendly PWA install",
      "Works offline and online",
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
    url: siteUrl,
    logo: `${siteUrl}/favicon.svg`,
    description:
      "Soma builds offline-first school management software for schools in Africa and beyond.",
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
          text: "SOMA is a free offline-first school management app that brings attendance, results, fees, and announcements into one place. It works online and offline — everything saves on your device and syncs when you reconnect.",
        },
      },
      {
        "@type": "Question",
        name: "Does SOMA work offline?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. SOMA is built as an offline-first application. Every feature — attendance, results, fees, announcements — works without internet. Data saves locally and syncs automatically when you reconnect.",
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
          text: "Yes. SOMA adapts to your school's unique structure — whether you run a single campus or multiple branches, with any class or arm configuration.",
        },
      },
      {
        "@type": "Question",
        name: "Who is SOMA for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SOMA is built for school principals and administrators, teachers, and parents. Each role gets a dedicated dashboard with the features they need — attendance for teachers, results and fees for parents, and a full overview for administrators.",
        },
      },
    ],
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
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <AnimatedFavicon />
        {children}
      </body>
    </html>
  );
}
