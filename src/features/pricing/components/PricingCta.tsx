import { TrackedCTA } from "@/components/TrackedCTA";
import styles from "../pricing.module.css";

export function PricingCta() {
  return (
    <section className={`${styles.sectionDark} ${styles.cta}`} id="contact-sales">
      <div className={`${styles.pat} ${styles.patT}`} aria-hidden="true"></div>
      <div className={`${styles.wrap} ${styles.ctaInner}`}>
        <h2>Less paperwork. More school.</h2>
        <p className={styles.lead}>
          Start free with up to 50 students, or talk to us about a bigger school or several
          campuses. Setup takes one session.
        </p>
        <div className={styles.ctaBtns}>
          <TrackedCTA
            href="https://app.checksoma.com"
            section="pricing-cta"
            buttonName="Start free"
            className={`${styles.btn} ${styles.btnPrimary}`}
          >
            Start free
          </TrackedCTA>
          <TrackedCTA
            href="https://www.checksoma.com/contact"
            section="pricing-cta"
            buttonName="Contact sales"
            className={`${styles.btn} ${styles.btnGhostDark}`}
          >
            Contact sales
          </TrackedCTA>
        </div>
      </div>
    </section>
  );
}
