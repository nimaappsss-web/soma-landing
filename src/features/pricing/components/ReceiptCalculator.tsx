"use client";

import { useState } from "react";
import styles from "../pricing.module.css";

const naira = (value: number) => "₦" + Math.round(value).toLocaleString("en-NG");

const STUDENTS_PER_TERM = 250;
const STAFF_PER_TERM = 500;
const FREE_STUDENTS = 50;
const SALES_THRESHOLD = 700;

export function ReceiptCalculator() {
  const [students, setStudents] = useState("180");
  const [staff, setStaff] = useState("");
  const [period, setPeriod] = useState<"term" | "session">("term");

  const n = Math.max(0, parseInt(students, 10) || 0);
  const s = parseInt(staff, 10) || 0;
  const multiplier = period === "term" ? 1 : 3;

  const billable = Math.max(0, n - FREE_STUDENTS);
  const includedStaff = Math.max(5, Math.floor(n / 5));
  const extraStaff = Math.max(0, s - includedStaff);

  const subscription = billable * STUDENTS_PER_TERM * multiplier;
  const addOn = extraStaff * STAFF_PER_TERM * multiplier;
  const total = subscription + addOn;

  const message =
    n <= FREE_STUDENTS
      ? "You pay nothing at 50 students or fewer."
      : n > SALES_THRESHOLD
        ? "This is the standard rate. For 700+ students, contact sales for volume pricing."
        : "";

  return (
    <div className={styles.receipt} role="group" aria-label="Price estimate">
      <div className={styles.receiptHead}>
        <h3>Your school&apos;s bill</h3>
        <span>Estimate</span>
      </div>

      <div className={styles.field}>
        <label htmlFor="students">Students enrolled</label>
        <input
          id="students"
          type="number"
          min={1}
          max={5000}
          value={students}
          inputMode="numeric"
          onChange={(e) => setStudents(e.target.value)}
        />
      </div>
      <input
        type="range"
        min={1}
        max={1000}
        value={Math.min(n, 1000)}
        aria-label="Students slider"
        onChange={(e) => setStudents(e.target.value)}
      />
      <p className={styles.hint}>Count the students enrolled at the start of the term.</p>

      <div className={styles.segment} role="group" aria-label="Billing period">
        <button
          type="button"
          aria-pressed={period === "term"}
          onClick={() => setPeriod("term")}
        >
          Per term
        </button>
        <button
          type="button"
          aria-pressed={period === "session"}
          onClick={() => setPeriod("session")}
        >
          Per session
        </button>
      </div>

      <div className={styles.line}>
        <span>First {FREE_STUDENTS} students</span>
        <b>Free</b>
      </div>
      <div className={styles.line}>
        <span>Students billed</span>
        <b>
          {billable
            ? `${billable.toLocaleString("en-NG")} × ${naira(STUDENTS_PER_TERM * multiplier)}`
            : "None"}
        </b>
      </div>
      <div className={`${styles.line} ${styles.lineNote}`}>
        <span>Staff accounts included</span>
        <span className={styles.note} aria-hidden="true">
          teachers too!
        </span>
        <b>{includedStaff}</b>
      </div>
      <div className={styles.line}>
        <span>Parents and guardians</span>
        <b>Free, unlimited</b>
      </div>

      <div className={`${styles.field} ${styles.fieldSmall}`}>
        <label htmlFor="staff">Total staff you need <em>(optional)</em></label>
        <input
          id="staff"
          type="number"
          min={0}
          max={2000}
          placeholder="0"
          inputMode="numeric"
          value={staff}
          onChange={(e) => setStaff(e.target.value)}
        />
      </div>
      <p className={styles.hint} style={{ margin: 0, marginBottom: 8 }}>
        Count every teacher, bursar and admin who needs a login. Extra accounts are ₦500 each per
        term. If you need more than we include, the cost shows below.
      </p>

      {extraStaff > 0 && (
        <div className={styles.line}>
          <span>Extra staff accounts</span>
          <b>
            {extraStaff} × {naira(STAFF_PER_TERM * multiplier)}
          </b>
        </div>
      )}

      <div className={styles.total}>
        <span>Total</span>
        <div>
          <b aria-live="polite">{naira(total)}</b>
          <small>{period === "term" ? "per term" : "per session"}</small>
        </div>
      </div>

      <p className={styles.msg}>{message}</p>
    </div>
  );
}
