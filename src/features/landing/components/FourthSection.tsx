"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  TickCircle,
  UserAdd,
  AddSquare,
  People,
  Chart,
  TimerStart,
  Document,
  DollarCircle,
} from "iconsax-react";

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
        Icon: UserAdd,
        title: "Invite Teachers",
        description: "Onboard teachers and staff",
        iconBg: "bg-soma-blue/10",
        iconColor: "#1D4ED8",
      },
      {
        Icon: AddSquare,
        title: "Create Classes",
        description: "Define class levels and specific arms",
        iconBg: "bg-yellow-100",
        iconColor: "#EAB308",
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
        Icon: People,
        title: "Parent Portal",
        description: "Keep guardians in the loop",
        iconBg: "bg-soma-green/10",
        iconColor: "#23A64E",
      },
      {
        Icon: Chart,
        title: "Live Dashboard",
        description: "See what matters at a glance",
        iconBg: "bg-soma-blue/10",
        iconColor: "#1D4ED8",
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
        Icon: TimerStart,
        title: "Auto Reminders",
        description: "Never miss a deadline again",
        iconBg: "bg-soma-red/10",
        iconColor: "#CD432F",
      },
      {
        Icon: Document,
        title: "Digital Records",
        description: "All files in one secure place",
        iconBg: "bg-soma-green/10",
        iconColor: "#23A64E",
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
        Icon: Chart,
        title: "Performance Charts",
        description: "Track student progress over time",
        iconBg: "bg-soma-blue/10",
        iconColor: "#1D4ED8",
      },
      {
        Icon: DollarCircle,
        title: "Fee Reports",
        description: "Complete financial overview",
        iconBg: "bg-soma-green/10",
        iconColor: "#23A64E",
      },
    ],
  },
];

export function FourthSection() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const activeContent = tabs.find((t) => t.id === activeTab) ?? tabs[0];
  const tabRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const trackRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const btn = tabRefs.current.get(activeTab);
    const track = trackRef.current;
    if (btn && track) {
      const trackRect = track.getBoundingClientRect();
      const btnRect = btn.getBoundingClientRect();
      setIndicator({
        left: btnRect.left - trackRect.left,
        width: btnRect.width,
      });
    }
  }, [activeTab]);

  return (
    <section className="w-full max-w-[1294px] mx-auto mt-[72px] mb-[86px] px-[18px] md:px-[62px] overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-16 mb-8 md:mb-14">
        <div>
          <p className="text-[12px] md:text-[13px] font-semibold text-soma-black tracking-widest uppercase mb-4 md:mb-5">
            The SOMA Advantage
          </p>
          <h2 className="text-[32px] sm:text-[40px] md:text-[52px] lg:text-[66px] font-semibold leading-[1.05] tracking-tight text-soma-black">
            Less paperwork.
          </h2>
          <p className="text-[32px] sm:text-[40px] md:text-[52px] lg:text-[66px] font-hand font-bold text-soma-blue leading-[1.1] italic">
            More school.
          </p>
        </div>
        <div className="md:pt-14">
          <p className="text-[14px] md:text-[16px] lg:text-[18px] text-gray-4 leading-[1.7] max-w-[400px]">
            Everything your school needs to manage academics, tuition, staff,
            students and parents in one application.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-8 md:mb-16">
        <div
          ref={trackRef}
          className="relative flex md:flex-wrap gap-1.5 md:gap-2 bg-white rounded-full p-1.5 w-full md:w-fit overflow-x-auto scrollbar-hide"
        >
          {/* Sliding indicator - desktop only */}
          <div
            className="absolute top-1.5 bottom-1.5 bg-soma-black rounded-full transition-all duration-300 ease-in-out hidden md:block"
            style={{ left: indicator.left, width: indicator.width }}
          />
          {tabs.map((tab) => (
            <button
              key={tab.id}
              ref={(el) => {
                if (el) tabRefs.current.set(tab.id, el);
              }}
              onClick={() => setActiveTab(tab.id)}
              className={`relative z-10 px-3 md:px-5 py-2 md:py-2.5 rounded-full text-[12px] md:text-[14px] font-medium transition-colors duration-300 whitespace-nowrap shrink-0 ${
                activeTab === tab.id
                  ? "bg-soma-black md:bg-transparent text-white"
                  : ""
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
        {/* Left */}
        <div className="flex-1">
          <h3 className="text-[22px] sm:text-[28px] md:text-[32px] font-semibold text-soma-black leading-tight mb-4 md:mb-5">
            {activeContent.title}
          </h3>
          <p className="text-[14px] md:text-[16px] text-gray-4 leading-[1.7] mb-6 md:mb-8">
            {activeContent.description}
          </p>
          <div className="flex flex-col gap-5 md:gap-6">
            {activeContent.bullets.map((bullet, i) => (
              <div key={i} className="flex gap-3 md:gap-4 items-start">
                <TickCircle
                  variant="Bold"
                  size={24}
                  color="#0D0D0D"
                  className="mt-0.5 shrink-0"
                />
                <p className="text-[14px] md:text-[16px] text-soma-black leading-[1.6]">
                  {bullet}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Image */}
        <div className="flex-1 relative w-full">
          <div
            key={activeTab}
            className="rounded-[20px] md:rounded-[24px] overflow-hidden animate-fadeIn"
          >
            <Image
              src={activeContent.image}
              alt={activeContent.label}
              width={476}
              height={476}
              className="w-full h-auto aspect-square object-cover object-center"
            />
          </div>
          {/* Floating cards */}
          {activeContent.floatingCards.map((card, i) => {
            const { Icon, title, description, iconBg, iconColor } = card;
            return (
              <div
                key={i}
                className={`absolute bg-white rounded-[23px] px-3 md:px-4 py-2.5 md:py-3 flex items-center gap-2.5 md:gap-3 shadow-lg ${
                  i === 0
                    ? "bottom-12 md:bottom-20 -left-2 md:-left-8"
                    : "top-1/3 -right-1 md:-right-6"
                }`}
              >
                <div
                  className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl ${iconBg}`}
                >
                  <Icon variant="Bold" size={18} color={iconColor} />
                </div>
                <div>
                  <p className="text-[12px] md:text-[14px] font-semibold text-soma-black leading-tight">
                    {title}
                  </p>
                  <p className="text-[10px] md:text-[12px] text-gray-4 leading-tight">
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
