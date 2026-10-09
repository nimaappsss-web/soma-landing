import { billingPoints } from "../data";
import styles from "../pricing.module.css";

export function BillingSection() {
  return (
    <section className={`${styles.section} ${styles.sectionDark}`}>
      <div className={styles.wrap}>
        <h2>How billing works</h2>
        <p className={styles.sub}>So you know what happens next, before you start.</p>

        <div className={styles.billingGrid}>
          {billingPoints.map((point) => (
            <div key={point.title}>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
