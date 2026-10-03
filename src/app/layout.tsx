import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Caveat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { AnimatedFavicon } from "@/components/AnimatedFavicon";
import { siteUrl } from "@/lib/site";

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

export const metadata: Metadata = {
  title: {
    default: "Check Soma | Free Offline School Management App Nigeria",
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
    locale: "en_NG",
    url: siteUrl,
    siteName: "Soma",
    title: "Check Soma | Free Offline School Management App Nigeria",
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
    title: "Check Soma | Free Offline School Management App Nigeria",
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
      lang="en-NG"
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
