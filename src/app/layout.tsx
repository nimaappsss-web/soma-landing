import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Caveat } from "next/font/google";
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

export const metadata: Metadata = {
  title: {
    default: "Soma — Make School Easier to Run",
    template: "%s | Soma",
  },
  description:
    "SOMA brings the people, information and everyday work of your school together, so your team can spend less time chasing things and more time moving students forward.",
  keywords: [
    "school management",
    "student management",
    "school software",
    "education platform",
    "school administration",
    "attendance tracking",
    "academic management",
  ],
  authors: [{ name: "Soma" }],
  creator: "Soma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://soma.edu",
    siteName: "Soma",
    title: "Soma — Make School Easier to Run",
    description:
      "SOMA brings the people, information and everyday work of your school together, so your team can spend less time chasing things and more time moving students forward.",
    images: [
      {
        url: "/somaBg.png",
        width: 1200,
        height: 630,
        alt: "Soma — School Management Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soma — Make School Easier to Run",
    description:
      "SOMA brings the people, information and everyday work of your school together, so your team can spend less time chasing things and more time moving students forward.",
    images: ["/somaBg.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0D0D0D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <AnimatedFavicon />
        {children}
      </body>
    </html>
  );
}
