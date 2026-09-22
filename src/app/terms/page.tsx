import type { Metadata } from "next";
import { MarketingPage } from "@/features/landing/components/MarketingPage";

const siteUrl = "https://checksoma.com";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern the use of SOMA (Check Soma), the offline-first school management app for schools, teachers, parents and students.",
  alternates: {
    canonical: `${siteUrl}/terms`,
    languages: {
      "en-NG": `${siteUrl}/terms`,
      "x-default": `${siteUrl}/terms`,
    },
  },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <MarketingPage>
      <article className="max-w-[780px] mx-auto">
        <h1 className="text-[30px] sm:text-[40px] md:text-[48px] font-semibold leading-[1.1] tracking-tight text-soma-black">
          Terms of Service
        </h1>
        <p className="text-[14px] text-gray-4 mt-2">Effective: September 2026</p>

        <div className="mt-10 text-gray-4 leading-[1.8] space-y-6 text-[16px] md:text-[17px]">
          <h2 className="text-[22px] md:text-[24px] font-semibold text-soma-black">
            1. About these terms
          </h2>
          <p>
            These terms govern your use of the SOMA school management app (&quot;the Service&quot;),
            available at app.checksoma.com and installable as an app on phones and laptops. By
            using the Service, you agree to these terms.
          </p>

          <h2 className="text-[22px] md:text-[24px] font-semibold text-soma-black">
            2. Accounts and responsibilities
          </h2>
          <p>
            Schools are responsible for the accuracy of the data they enter and for managing
            access for their staff, teachers and parents. You must keep account credentials
            secure and use the Service in line with your school&apos;s policies and the law.
          </p>

          <h2 className="text-[22px] md:text-[24px] font-semibold text-soma-black">
            3. Free and paid use
          </h2>
          <p>
            SOMA is free for schools with 50 students or fewer. Schools above this size pay a
            per-student per-term fee. Pricing is described on the{" "}
            <a href="/pricing" className="text-soma-blue hover:underline">
              pricing page
            </a>{" "}
            and may change with notice. No credit card is required to start.
          </p>

          <h2 className="text-[22px] md:text-[24px] font-semibold text-soma-black">
            4. Data
          </h2>
          <p>
            You retain ownership of the school records you enter. Our responsibility for that data
            is described in the{" "}
            <a href="/privacy" className="text-soma-blue hover:underline">
              privacy policy
            </a>
            . You should keep appropriate backups of important records.
          </p>

          <h2 className="text-[22px] md:text-[24px] font-semibold text-soma-black">
            5. Acceptable use
          </h2>
          <p>
            You agree not to misuse the Service, attempt to disrupt it, or use it for unlawful or
            harmful purposes. SOMA may suspend access where these terms are violated.
          </p>

          <h2 className="text-[22px] md:text-[24px] font-semibold text-soma-black">
            6. Contact
          </h2>
          <p>
            Questions about these terms? Email{" "}
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