import { TrackedCTA } from "@/components/TrackedCTA";
import { planTiers } from "../data";
import styles from "../pricing.module.css";

export function PlanTiers() {
  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <h2>One rate. Every feature.</h2>
        <p className={styles.sub}>
          Attendance, results, fees, announcements and records come with every plan, online and
          offline. You pay for the size of your school, not for features.
        </p>

        <div className={styles.rates}>
          {planTiers.map((tier) => (
            <div
              key={tier.name}
              className={`${styles.rateRow}${tier.highlight ? ` ${styles.rateRowHighlight}` : ""}`}
            >
              {tier.highlight ? (
                <div>
                  <h3>{tier.name}</h3>
                  <span className={styles.tag} style={{ marginTop: 10 }}>
                    {tier.tag}
                  </span>
                </div>
              ) : (
                <h3>{tier.name}</h3>
              )}

              <div>
                <p>{tier.description}</p>
                {tier.includes && (
                  <div className={styles.includes}>
                    {tier.includes.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                )}
              </div>

              <div className={styles.ratePrice}>
                {tier.priceAction === "contact-sales" ? (
                  <TrackedCTA
                    href="https://www.checksoma.com/contact"
                    section="pricing-plans"
                    buttonName="Contact sales"
                    className={`${styles.btn} ${styles.btnGhostLight}`}
                  >
                    Contact sales
                  </TrackedCTA>
                ) : (
                  <>
                    {tier.price}
                    {tier.priceNote && <small>{tier.priceNote}</small>}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
