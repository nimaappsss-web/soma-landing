"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { trackTabClick } from "@/lib/analytics";

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
import exp1 from "../../../../public/exp1.webp";
import exp2 from "../../../../public/exp2.webp";
import exp3 from "../../../../public/exp3.webp";
import exp4 from "../../../../public/exp4.webp";

const tabs = [
  {
    id: "onboarding",
    label: "Easy Setup",
    title: "Set up your school in minutes, not days.",
    description:
      "A guided setup wizard walks you through every step — from creating classes to inviting teachers. Import existing student records without starting from scratch.",
    bullets: [
      "Guided setup wizard with a progress checklist your team can follow step by step",
      "Import existing student and staff data without rebuilding everything from scratch",
      "Simple interface that teachers and administrators can use on day one, no training required",
    ],
    image: exp1,
    floatingCards: [
      {
        Icon: UserAdd,
        title: "Invite Teachers",
        description: "Share a link or send by email",
        iconBg: "bg-soma-blue/10",
        iconColor: "#1D4ED8",
      },
      {
        Icon: AddSquare,
        title: "Create Classes",
        description: "Define class levels and arms",
        iconBg: "bg-yellow-100",
        iconColor: "#EAB308",
      },
    ],
  },
  {
    id: "offline",
    label: "Works Offline",
    title: "Every feature works without internet.",
    description:
      "SOMA saves everything on your device and syncs when you reconnect. Install it on any phone or laptop — attendance, results, fees, lesson notes all work offline and sync across every device you sign in on.",
    bullets: [
      "Attendance is saved as you go and synced to the school, even offline",
      "Install as a mobile app on any phone — works from your home screen like a native app",
      "Multi-device sync: changes on your phone show up on your laptop and vice versa, automatically",
    ],
    image: exp2,
    floatingCards: [
      {
        Icon: People,
        title: "Multi-Device Sync",
        description: "Changes show up everywhere",
        iconBg: "bg-soma-green/10",
        iconColor: "#23A64E",
      },
      {
        Icon: Chart,
        title: "Mobile Friendly",
        description: "Install on any phone",
        iconBg: "bg-soma-blue/10",
        iconColor: "#1D4ED8",
      },
    ],
  },
  {
    id: "workflow",
    label: "Daily Workflow",
    title: "Less admin, more teaching.",
    description:
      "SOMA handles the repetitive work — attendance marking, fee reminders, result compilation — so your team can focus on students instead of paperwork.",
    bullets: [
      "Swipe to mark attendance, bulk-mark present, then correct the few exceptions",
      "Record CA and exam scores per subject, they roll up into report cards automatically",
      "Generate per-student invoices and send fee reminders to parents in one tap",
    ],
    image: exp3,
    floatingCards: [
      {
        Icon: TimerStart,
        title: "Auto Reminders",
        description: "Fee due dates and alerts",
        iconBg: "bg-soma-red/10",
        iconColor: "#CD432F",
      },
      {
        Icon: Document,
        title: "Report Cards",
        description: "Generate and print results",
        iconBg: "bg-soma-green/10",
        iconColor: "#23A64E",
      },
    ],
  },
  {
    id: "reporting",
    label: "Reports & Finance",
    title: "See everything. Decide with confidence.",
    description:
      "From attendance coverage to fee collection, SOMA gives administrators a clear picture of what's happening across the school — without digging through files.",
    bullets: [
      "See daily attendance coverage per class and a list of absentees at a glance",
      "Track expected, collected, and outstanding fees across all classes",
      "Review teacher submissions before results reach parents with the approval workflow",
    ],
    image: exp4,
    floatingCards: [
      {
        Icon: Chart,
        title: "Attendance Reports",
        description: "Coverage across all classes",
        iconBg: "bg-soma-blue/10",
        iconColor: "#1D4ED8",
      },
      {
        Icon: DollarCircle,
        title: "Fee Tracking",
        description: "Expected, collected, outstanding",
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
    <section id="product" className="w-full max-w-[1294px] mx-auto mt-[72px] mb-[86px] px-[18px] md:px-[62px] overflow-hidden">
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
            Everything your school needs — attendance, results, fees, and
            communication — working offline and online in one app.
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
              onClick={() => {
                setActiveTab(tab.id);
                trackTabClick(tab.label);
              }}
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
