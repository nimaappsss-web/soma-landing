import { TrackedCTA } from "@/components/TrackedCTA";
import { Navbar } from "@/features/landing/components/Navbar";
import { ReceiptCalculator } from "./ReceiptCalculator";
import styles from "../pricing.module.css";

export function PricingHero() {
  return (
    <header className={styles.hero} id="top">
      <div className={styles.pat} aria-hidden="true"></div>
      <Navbar />
      <div className={styles.wrap}>
        <div className={styles.heroGrid}>
          <div>
            <h1>
              Pay per student.
              <br />
              Teachers come free.
            </h1>
            <p className={styles.lead}>
              ₦250 per student each term, or ₦750 for the whole session. Free for schools with 50
              students or fewer. No setup fee, no contract.
            </p>
            <TrackedCTA
              href="https://app.checksoma.com"
              section="pricing-hero"
              buttonName="Start free"
              className={`${styles.btn} ${styles.btnPrimary}`}
            >
              Start free
            </TrackedCTA>
          </div>
          <div>
            <ReceiptCalculator />
          </div>
        </div>
      </div>
    </header>
  );
}
