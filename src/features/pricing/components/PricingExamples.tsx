import { priceExamples } from "../data";
import styles from "../pricing.module.css";

export function PricingExamples() {
  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <h2>What schools pay</h2>
        <p className={styles.sub}>Some common school sizes, with the first 50 students free.</p>

        <div className={styles.examples} role="table" aria-label="Example prices">
          <div className={`${styles.exampleRow} ${styles.exampleHead}`} role="row">
            <span role="columnheader">Students</span>
            <span role="columnheader">Share of a 700-student bill</span>
            <span role="columnheader" className={styles.right}>
              Staff included
            </span>
            <span role="columnheader" className={styles.right}>
              Per term
            </span>
            <span role="columnheader" className={styles.right}>
              Per session
            </span>
          </div>
          {priceExamples.map((row) => (
            <div key={row.students} className={styles.exampleRow} role="row">
              <b role="cell">{row.students}</b>
              <div className={styles.bar} aria-hidden="true">
                <i style={{ width: row.share }} />
              </div>
              <span role="cell" className={styles.right}>
                {row.staffIncluded}
              </span>
              <span role="cell" className={styles.right}>
                {row.perTerm}
              </span>
              <span role="cell" className={styles.right}>
                {row.perSession}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
