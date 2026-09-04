"use client";

import { useState } from "react";
import { Add, Minus } from "iconsax-react";

const leftFaqs = [
  {
    question: "What is SOMA?",
    answer:
      "SOMA is a simple, offline-first school operating system that brings your school's people, information and everyday work together in one place.",
  },
  {
    question: "Can SOMA fit our school structure?",
    answer:
      "Yes. SOMA is built to adapt to your school's unique structure — whether you run a single campus or multiple branches, with any class or arm configuration.",
  },
  {
    question: "Can we bring our existing student data?",
    answer:
      "Absolutely. SOMA supports importing your existing student and school records so you don't have to start from scratch.",
  },
];

const rightFaqs = [
  {
    question: "What does setup look like for administrators?",
    answer:
      "Setup is guided and straightforward. Your team can configure SOMA step by step with clear documentation and support along the way.",
  },
  {
    question: "How much does SOMA cost?",
    answer:
      'The specific pricing details are provided in the <a href="#pricing" class="text-soma-blue underline">Pricing Page</a>. You can also reach out directly to our <a href="#sales" class="text-soma-blue underline">Sales Team</a> for information on pricing and migrating from your current software.',
  },
  {
    question: "Is SOMA available offline?",
    answer:
      "Yes. SOMA is designed as an offline-first application, so your team can continue working even without a stable internet connection.",
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
        onClick={onToggle}
        className="w-full flex items-center justify-between py-7 md:py-8 text-left gap-4"
      >
        <span className="text-[15px] md:text-[16px] font-semibold text-soma-black">
          {question}
        </span>
        <span className="shrink-0 transition-transform duration-300">
          {isOpen ? (
            <Minus variant="Bold" size={16} color="#0D0D0D" />
          ) : (
            <Add variant="Bold" size={16} color="#0D0D0D" />
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
    <section className="w-full max-w-[1294px] mx-auto mt-[72px] mb-[86px] px-[18px] md:px-[62px]">
      {/* Header */}
      <div className="mb-12 md:mb-16">
        <p className="text-[12px] md:text-[13px] font-semibold text-soma-black tracking-widest uppercase mb-5">
          Let&apos;s answer some questions
        </p>
        <h2 className="text-[66px] font-semibold leading-[1.05] tracking-tight text-soma-black mb-5">
          Before you bring{" "}
          <br className="hidden sm:block" />
          your school{" "}
          <span className="font-hand font-bold text-soma-blue italic">
            online.
          </span>
        </h2>
        <p className="text-[18px] text-gray-4 leading-[1.7] max-w-[428px]">
          The last thing you need is another complicated rollout. SOMA is
          designed to start with the way your school already works.
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
