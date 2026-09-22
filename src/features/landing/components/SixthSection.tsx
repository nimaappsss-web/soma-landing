"use client";

import { useState } from "react";
import { Add, Minus } from "iconsax-react";
import { trackFAQToggle } from "@/lib/analytics";

const leftFaqs = [
  {
    question: "What is SOMA?",
    answer:
      'SOMA is a free, offline-first school management app that brings attendance, results, fees, and announcements into one place. It works online and offline — everything saves on your device and syncs when you reconnect. See all <a href="/features" class="text-soma-blue underline">school management app features</a>.',
  },
  {
    question: "Does SOMA really work offline?",
    answer:
      "Yes. Every feature works without internet — attendance, results, fees, lesson notes, and announcements. Data saves locally on your device and syncs automatically in the background when you reconnect. No data is ever lost.",
  },
  {
    question: "Can we bring our existing student data?",
    answer:
      'Absolutely. SOMA supports importing your existing student, staff, and school records so you don\'t have to start from scratch. You can add students individually or in bulk. Get the step-by-step in our <a href="/guides" class="text-soma-blue underline">school management guides</a>.',
  },
];

const rightFaqs = [
  {
    question: "How much does SOMA cost?",
    answer:
      'SOMA is free for schools with 50 students or fewer. Larger schools pay a simple per-student fee per term — no upfront cost, no long-term contract. Reach out to our <a href="#contact-sales" class="text-soma-blue underline">Sales Team</a> for details, or compare plans on the <a href="/pricing" class="text-soma-blue underline">pricing page</a>.',
  },
  {
    question: "How long does setup take?",
    answer:
      "Setup is guided and straightforward. The setup wizard walks you through creating classes, inviting teachers, adding students, and configuring your school terms. Most schools are up and running in a single session.",
  },
  {
    question: "Who is SOMA for?",
    answer:
      "SOMA is built for school principals and administrators, teachers, and parents. Principals get a full overview of attendance, results, and fees. Teachers mark attendance and record scores. Parents follow their child's progress and get notified about attendance.",
  },
];

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-soma-black/10">
      <button
        onClick={() => {
          onToggle();
          trackFAQToggle(question, isOpen ? "close" : "open");
        }}
        className="w-full flex items-center justify-between py-7 md:py-8 text-left gap-4"
      >
        <span className="text-[15px] md:text-[16px] font-semibold text-soma-black">
          {question}
        </span>
        <span className="shrink-0 transition-transform duration-300">
          {isOpen ? (
            <Minus variant="Bold" size={22} color="#0D0D0D" />
          ) : (
            <Add variant="Bold" size={22} color="#0D0D0D" />
          )}
        </span>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="pb-5 md:pb-6">
            <p
              className="text-[14px] md:text-[15px] text-gray-4 leading-[1.7]"
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function SixthSection() {
  const [openLeft, setOpenLeft] = useState<number | null>(null);
  const [openRight, setOpenRight] = useState<number | null>(1);

  return (
    <section id="for-schools" className="w-full max-w-[1294px] mx-auto mt-[72px] mb-[86px] px-[18px] md:px-[62px]">
      {/* Header */}
      <div className="mb-12 md:mb-16">
        <p className="text-[12px] md:text-[13px] font-semibold text-soma-black tracking-widest uppercase mb-5">
          Frequently asked questions
        </p>
        <h2 className="text-[66px] font-semibold leading-[1.05] tracking-tight text-soma-black mb-5">
          Everything you need{" "}
          <br className="hidden sm:block" />
          before you{" "}
          <span className="font-hand font-bold text-soma-blue italic">
            get started.
          </span>
        </h2>
        <p className="text-[18px] text-gray-4 leading-[1.7] max-w-[428px]">
          The last thing you need is another complicated rollout. SOMA starts
          with the way your school already works — and grows with you.
        </p>
      </div>

      {/* FAQ Grid */}
      <div className="flex flex-col sm:flex-row gap-x-8 gap-y-0">
          {/* Left column */}
          <div className="flex-1">
            {leftFaqs.map((faq, i) => (
              <FaqItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openLeft === i}
                onToggle={() => setOpenLeft(openLeft === i ? null : i)}
              />
            ))}
          </div>

          {/* Right column */}
          <div className="flex-1">
            {rightFaqs.map((faq, i) => (
              <FaqItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openRight === i}
                onToggle={() => setOpenRight(openRight === i ? null : i)}
              />
            ))}
          </div>
        </div>
    </section>
  );
}
