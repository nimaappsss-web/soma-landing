import { teacherRoles } from "../data";
import styles from "../pricing.module.css";

export function TeachersSection() {
  return (
    <section className={`${styles.section} ${styles.sectionDark}`}>
      <div className={`${styles.wrap} ${styles.teacherGrid}`}>
        <div>
          <h2>What about teachers?</h2>
          <p className={styles.sub}>
            Teachers are the reason SOMA works, so we don&apos;t charge for them. Your price
            follows the number of students, and the people who teach them come with it.
          </p>
          <div className={styles.allowance}>
            <span className={styles.note} aria-hidden="true">
              no per-teacher fee
            </span>
            <p>
              <b>Every school gets 1 staff account for every 5 students, and at least 5.</b> That
              covers teachers, bursars and administrators.{" "}
              <b>Need more? Each extra staff account is ₦500 per term,</b> or ₦1,500 for the full
              session. You only pay for the accounts above your allowance.
            </p>
          </div>
        </div>

        <div className={styles.roles}>
          {teacherRoles.map((role) => (
            <div key={role.name} className={styles.role}>
              <h3>{role.name}</h3>
              <p>{role.description}</p>
              <span className={styles.tag}>{role.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
