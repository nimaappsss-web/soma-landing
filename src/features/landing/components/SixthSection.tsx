"use client";

import { useState } from "react";
import { Add, Minus } from "iconsax-react";

const faqs = [
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

export function SixthSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(4);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-[1294px] mx-auto mt-[72px] mb-[86px] px-[18px] md:px-[62px]">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Left */}
        <div className="lg:w-[40%]">
          <p className="text-[12px] md:text-[13px] font-semibold text-soma-black tracking-widest uppercase mb-5">
            Let&apos;s answer some questions
          </p>
          <h2 className="text-[32px] sm:text-[40px] md:text-[52px] lg:text-[66px] font-semibold leading-[1.05] tracking-tight text-soma-black mb-5">
            Before you bring{" "}
            <br className="hidden sm:block" />
            your school{" "}
            <span className="font-hand font-bold text-soma-blue italic">
              online.
            </span>
          </h2>
          <p className="text-[14px] md:text-[16px] text-gray-4 leading-[1.7] max-w-[380px]">
            The last thing you need is another complicated rollout. SOMA is
            designed to start with the way your school already works.
          </p>
        </div>

        {/* Right - FAQ Grid */}
        <div className="lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-0">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`border-b border-soma-black/10 ${
                  i < faqs.length - (faqs.length % 2 === 0 ? 2 : 1)
                    ? "sm:border-b"
                    : ""
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between py-5 md:py-6 text-left gap-4"
                >
                  <span className="text-[15px] md:text-[16px] font-medium text-soma-black">
                    {faq.question}
                  </span>
                  <span className="shrink-0">
                    {isOpen ? (
                      <Minus variant="Bold" size={20} color="#0D0D0D" />
                    ) : (
                      <Add variant="Bold" size={20} color="#0D0D0D" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div className="pb-5 md:pb-6">
                    <p
                      className="text-[14px] md:text-[15px] text-gray-4 leading-[1.7]"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
