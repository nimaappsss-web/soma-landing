"use client";

import { useState } from "react";
import Image from "next/image";
import { TickCircle } from "iconsax-react";

const tabs = [
  {
    id: "onboarding",
    label: "Easy Onboarding",
    title: "Set up your school without the usual headache.",
    description:
      "SOMA helps you bring your school's structure, people and existing information into one place with guided setup that gets your team ready without any complexity.",
    bullets: [
      "Guided setup and clear documentation helps your team configure SOMA with confidence",
      "Move your existing student and school information into SOMA without rebuilding everything from scratch.",
      "The simple interface makes it easy for administrators and staff to understand the system and get moving.",
    ],
    image: "/exp1.webp",
    floatingCards: [
      {
        icon: "🎓",
        title: "Invite Teachers",
        description: "Onboard teachers and staff",
        iconBg: "bg-soma-blue/10",
        iconColor: "text-soma-blue",
      },
      {
        icon: "📋",
        title: "Create Classes",
        description: "Define class levels and specific arms",
        iconBg: "bg-yellow-100",
        iconColor: "text-yellow-600",
      },
    ],
  },
  {
    id: "friendly",
    label: "User-Friendly",
    title: "Designed for everyone, not just tech people.",
    description:
      "SOMA's clean interface means your staff can start using it on day one without lengthy training sessions or technical background.",
    bullets: [
      "Intuitive navigation that feels familiar from the first click",
      "Minimal learning curve so staff can focus on their actual work",
      "Built for real school workflows, not generic business templates",
    ],
    image: "/exp2.webp",
    floatingCards: [
      {
        icon: "👥",
        title: "Parent Portal",
        description: "Keep guardians in the loop",
        iconBg: "bg-soma-green/10",
        iconColor: "text-soma-green",
      },
      {
        icon: "📊",
        title: "Live Dashboard",
        description: "See what matters at a glance",
        iconBg: "bg-soma-blue/10",
        iconColor: "text-soma-blue",
      },
    ],
  },
  {
    id: "workflow",
    label: "Optimized Workflow",
    title: "Less time on tasks, more time for students.",
    description:
      "SOMA streamlines your daily operations so your team spends less time on repetitive admin work and more on what matters.",
    bullets: [
      "Automate routine tasks like attendance tracking and fee reminders",
      "Centralized communication between staff, students and parents",
      "Quick access to records without digging through filing cabinets",
    ],
    image: "/exp3.webp",
    floatingCards: [
      {
        icon: "⏰",
        title: "Auto Reminders",
        description: "Never miss a deadline again",
        iconBg: "bg-soma-red/10",
        iconColor: "text-soma-red",
      },
      {
        icon: "📁",
        title: "Digital Records",
        description: "All files in one secure place",
        iconBg: "bg-soma-green/10",
        iconColor: "text-soma-green",
      },
    ],
  },
  {
    id: "reporting",
    label: "Precise Reporting",
    title: "Real insights, not just raw data.",
    description:
      "Generate accurate reports and analytics that help you make informed decisions about your school's performance.",
    bullets: [
      "Detailed academic reports with continuous assessment tracking",
      "Financial summaries and fee collection reports in one click",
      "Attendance analytics across classes and time periods",
    ],
    image: "/exp4.webp",
    floatingCards: [
      {
        icon: "📈",
        title: "Performance Charts",
        description: "Track student progress over time",
        iconBg: "bg-soma-blue/10",
        iconColor: "text-soma-blue",
      },
      {
        icon: "💰",
        title: "Fee Reports",
        description: "Complete financial overview",
        iconBg: "bg-soma-green/10",
        iconColor: "text-soma-green",
      },
    ],
  },
];

export function FourthSection() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const activeContent = tabs.find((t) => t.id === activeTab) ?? tabs[0];

  return (
    <section className="w-full max-w-[1294px] mx-auto mt-[72px] mb-[86px] px-[18px] md:px-[62px]">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-16 mb-10 md:mb-14">
        <div>
          <p className="text-[13px] font-semibold text-soma-black tracking-widest uppercase mb-5">
            The SOMA Advantage
          </p>
          <h2 className="text-[40px] md:text-[52px] lg:text-[66px] font-semibold leading-[1.05] tracking-tight text-soma-black">
            Less paperwork.
          </h2>
          <p className="text-[40px] md:text-[52px] lg:text-[66px] font-hand font-bold text-soma-blue leading-[1.1] italic">
            More school.
          </p>
        </div>
        <div className="md:pt-14">
          <p className="text-[16px] md:text-[18px] text-gray-4 leading-[1.7] max-w-[400px]">
            Everything your school needs to manage academics, tuition, staff,
            students and parents in one application.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 bg-white rounded-full p-1.5 w-fit mb-12 md:mb-16">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 rounded-full text-[14px] font-medium transition-colors ${
              activeTab === tab.id
                ? "bg-soma-black text-white"
                : "text-gray-4 hover:text-soma-black"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
        {/* Left */}
        <div className="flex-1">
          <h3 className="text-[28px] md:text-[32px] font-semibold text-soma-black leading-tight mb-5">
            {activeContent.title}
          </h3>
          <p className="text-[16px] text-gray-4 leading-[1.7] mb-8">
            {activeContent.description}
          </p>
          <div className="flex flex-col gap-6">
            {activeContent.bullets.map((bullet, i) => (
              <div key={i} className="flex gap-4 items-start">
                <TickCircle
                  variant="Bold"
                  size={28}
                  color="#0D0D0D"
                  className="mt-0.5 shrink-0"
                />
                <p className="text-[16px] text-soma-black leading-[1.6]">
                  {bullet}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Image */}
        <div className="flex-1 relative">
          <div className="rounded-[24px] overflow-hidden">
            <Image
              src={activeContent.image}
              alt={activeContent.label}
              width={600}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Floating cards */}
          {activeContent.floatingCards.map((card, i) => (
            <div
              key={i}
              className={`absolute bg-white rounded-2xl px-4 py-3 flex items-center gap-3 shadow-lg ${
                i === 0
                  ? "bottom-20 -left-4 md:-left-8"
                  : "top-1/3 -right-2 md:-right-6"
              }`}
            >
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-xl ${card.iconBg}`}
              >
                <span className={`text-xl ${card.iconColor}`}>{card.icon}</span>
              </div>
              <div>
                <p className="text-[14px] font-semibold text-soma-black leading-tight">
                  {card.title}
                </p>
                <p className="text-[12px] text-gray-4 leading-tight">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
