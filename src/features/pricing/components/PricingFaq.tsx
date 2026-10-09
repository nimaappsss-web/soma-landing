import { pricingFaqs } from "../data";
import styles from "../pricing.module.css";

export function PricingFaq() {
  return (
    <section className={styles.section}>
      <div className={`${styles.wrap} ${styles.faq}`}>
        <h2>Questions about pricing</h2>
        {pricingFaqs.map((faq) => (
          <details key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
