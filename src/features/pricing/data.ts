export type PlanTier = {
  name: string;
  description: string;
  tag?: string;
  highlight?: boolean;
  includes?: string[];
  price?: string;
  priceNote?: string;
  priceAction?: "contact-sales";
};

export const planTiers: PlanTier[] = [
  {
    name: "Free",
    description:
      "For schools with 50 students or fewer. Set up, import your records and run a full term before you pay anything.",
    price: "₦0",
  },
  {
    name: "School",
    tag: "Most schools",
    highlight: true,
    description:
      "You pay for students above the first 50. Teachers and staff are included, and you can upgrade as you grow without any interruption.",
    includes: [
      "1 staff account per 5 students",
      "Extra staff accounts ₦500 each per term",
      "Billed at the start of each term",
      "₦750 per student for the full session",
    ],
    price: "₦250",
    priceNote: "per student, per term",
  },
  {
    name: "Enterprise",
    description:
      "For 701+ students, several campuses or a large data migration. We agree the price with you and plan the move together.",
    priceAction: "contact-sales",
  },
];

export const teacherRoles = [
  {
    name: "Run",
    description: "Principals, owners and administrators see the whole school.",
    tag: "Included",
  },
  {
    name: "Teach",
    description: "Teachers mark attendance and record scores, offline too.",
    tag: "Included",
  },
  {
    name: "Connect",
    description: "Parents follow attendance, scores and fees.",
    tag: "Free, unlimited",
  },
  {
    name: "Grow",
    description: "Students get their own view of school.",
    tag: "In the student price",
  },
];

export const priceExamples = [
  { students: 50, share: "0%", staffIncluded: 10, perTerm: "₦0", perSession: "₦0" },
  { students: 80, share: "4.6%", staffIncluded: 16, perTerm: "₦7,500", perSession: "₦22,500" },
  { students: 150, share: "15.4%", staffIncluded: 30, perTerm: "₦25,000", perSession: "₦75,000" },
  { students: 300, share: "38.5%", staffIncluded: 60, perTerm: "₦62,500", perSession: "₦187,500" },
  { students: 700, share: "100%", staffIncluded: 140, perTerm: "₦162,500", perSession: "₦487,500" },
];

export const billingPoints = [
  {
    title: "Start free",
    description:
      "Set up your school, import your records and invite teachers before you pay anything.",
  },
  {
    title: "Pay each term",
    description:
      "Paid schools are billed at the start of the term, or once for the whole session.",
  },
  {
    title: "Grow without a hard stop",
    description:
      "If you pass your student count mid-term, nothing stops working. We adjust it on the next bill.",
  },
  {
    title: "Nothing extra",
    description: "No setup fee and no long-term contract.",
  },
];

export const pricingFaqs = [
  {
    question: "Do I pay for all my students, or only above 50?",
    answer:
      "Only the students above 50. A school with 80 students pays for 30.",
  },
  {
    question: "Why does a session cost the same as three terms?",
    answer:
      "The rate is the same either way. Paying per session is one payment instead of three, and it covers the whole academic year.",
  },
  {
    question: "Do teachers need to pay?",
    answer:
      "No. Teachers and staff are included with your school's account. The school is the account, and the school pays.",
  },
  {
    question: "What if we need more staff accounts?",
    answer:
      "Every school gets 1 staff account for every 5 students, and at least 5. Each extra account is ₦500 per term, or ₦1,500 for the full session. You only pay for the accounts above your allowance, one account at a time.",
  },
  {
    question: "What counts as a staff account?",
    answer:
      "Anyone who signs in to run or support the school: teachers, bursars, administrators and school leaders. Parents and guardians never count.",
  },
  {
    question: "What if students join mid-term?",
    answer:
      "Add them whenever you need to. Your student count updates and we adjust it on the next bill, so nothing gets blocked.",
  },
  {
    question: "Does it cost more to use SOMA offline?",
    answer:
      "No. Attendance, results, fees and lesson notes save on the device and sync when you reconnect. The price is the same.",
  },
];
