import type { Metadata } from "next";
import { MarketingPage } from "@/features/landing/components/MarketingPage";

const siteUrl = "https://checksoma.com";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How SOMA (Check Soma) collects, uses and protects data for schools, teachers, parents and students. Read our privacy policy.",
  alternates: {
    canonical: `${siteUrl}/privacy`,
    languages: {
      "en-NG": `${siteUrl}/privacy`,
      "x-default": `${siteUrl}/privacy`,
    },
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <MarketingPage>
      <article className="max-w-[780px] mx-auto">
        <h1 className="text-[30px] sm:text-[40px] md:text-[48px] font-semibold leading-[1.1] tracking-tight text-soma-black">
          Privacy Policy
        </h1>
        <p className="text-[14px] text-gray-4 mt-2">Effective: September 2026</p>

        <div className="mt-10 text-gray-4 leading-[1.8] space-y-6 text-[16px] md:text-[17px]">
          <h2 className="text-[22px] md:text-[24px] font-semibold text-soma-black">
            Information we collect
          </h2>
          <p>
            SOMA (&quot;Check Soma&quot;) collects the information schools and teachers provide
            when setting up and using the app — school details, student records, staff records,
            attendance data, results, fee records and contact details. We also collect limited
            technical data (such as device and usage information) to keep the app working and
            to improve it.
          </p>

          <h2 className="text-[22px] md:text-[24px] font-semibold text-soma-black">
            How we use information
          </h2>
          <p>
            We use the information collected to run the school management features you rely on:
            recording attendance, calculating results, generating report cards and invoices,
            sharing announcements, and syncing data across the devices in your school. We do not
            sell student or school data.
          </p>

          <h2 className="text-[22px] md:text-[24px] font-semibold text-soma-black">
            Storage and security
          </h2>
          <p>
            Data is stored securely and, where the app works offline, on the devices where work is
            performed. We use encryption and access controls appropriate for school records.
            Downloads and exports made by your school remain under your control.
          </p>

          <h2 className="text-[22px] md:text-[24px] font-semibold text-soma-black">
            Sharing
          </h2>
          <p>
            We share data only with the service providers needed to operate the app (such as
            hosting and analytics), with schools acting on their own records, or where required
            by law.
          </p>

          <h2 className="text-[22px] md:text-[24px] font-semibold text-soma-black">
            Contact
          </h2>
          <p>
            Questions about this policy? Email{" "}
            <a href="mailto:support@checksoma.com" className="text-soma-blue hover:underline">
              support@checksoma.com
            </a>
            .
          </p>
        </div>
      </article>
    </MarketingPage>
  );
}