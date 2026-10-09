import { BillingSection } from "./BillingSection";
import { PlanTiers } from "./PlanTiers";
import { PricingCta } from "./PricingCta";
import { PricingExamples } from "./PricingExamples";
import { PricingFaq } from "./PricingFaq";
import { PricingHero } from "./PricingHero";
import { TeachersSection } from "./TeachersSection";
import styles from "../pricing.module.css";

export function PricingSections() {
  return (
    <div className={styles.page}>
      <PricingHero />
      <PlanTiers />
      <TeachersSection />
      <PricingExamples />
      <BillingSection />
      <PricingFaq />
      <PricingCta />
    </div>
  );
}
