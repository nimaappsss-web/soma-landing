"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";
import { Teacher, People, Clipboard, PresentionChart } from "iconsax-react";
import work1 from "../../../../public/work1.png";
import work2 from "../../../../public/work2.png";
import work3 from "../../../../public/work3.png";
import work4 from "../../../../public/work4.png";

function HoverCard({
  icon,
  title,
  description,
  children,
  className,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
}) {
  const [hovering, setHovering] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={`relative overflow-hidden flex flex-col transition-colors duration-500 ${
        hovering ? "bg-black" : "bg-soma-white-card"
      } ${className ?? ""}`}
    >
      {/* Circular reveal from top-left origin — behind images */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[30px]"
        style={{
          background: "#0D0D0D",
          clipPath: hovering
            ? "circle(150% at 0 0)"
            : "circle(0% at 0 0)",
          transition: "clip-path 0.6s ease",
          zIndex: 0,
        }}
      />
      <div className="relative z-10 pl-4 md:pl-10 pr-4 pt-[30px]">
        <div
          className={`transition-colors duration-500 ${
            hovering ? "text-white" : "text-soma-black"
          }`}
        >
          {icon}
        </div>
        <h3
          className={`text-[24px] font-semibold mb-1 leading-tight transition-colors duration-500 ${
            hovering ? "text-white" : "text-soma-black"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-[14px] md:text-[16px] leading-[1.5] md:leading-[1.6] max-w-[406px] transition-colors duration-500 ${
            hovering ? "text-white/80" : "text-gray-4"
          }`}
        >
          {description}
        </p>
      </div>
      {children}
    </div>
  );
}

export function ThirdSection() {
  return (
    <section className="w-full max-w-[1294px] mx-auto mt-[72px] mb-[86px] px-[18px] md:px-[62px]">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left card - taller */}
          <HoverCard
            className="flex-[1.5] rounded-[30px]"
            icon={<Teacher variant="Bold" size={28} color="currentColor" className="mb-5" />}
            title="Students, teachers, and parents — connected."
            description="Add students in bulk, invite teachers with a link, and let parents follow their child's attendance, results, and fees. Everyone sees what they need."
          >
            <div className="pl-4 md:pl-10 mt-auto pt-10 relative z-10">
              <div className="bg-soma-bg rounded-tl-[30px] overflow-hidden pl-4.5 pt-4">
                <div className="border-t-10 border-l-10 border-soma-red rounded-tl-[30px] h-full">
                  <Image
                    src={work1}
                    alt="Students dashboard"
                    width={700}
                    height={520}
                    className="h-full w-full rounded-tl-[30px] object-cover object-top-left"
                  />
                </div>
              </div>
            </div>
          </HoverCard>

          {/* Right card - shorter */}
          <HoverCard
            className="flex-1 rounded-[30px]"
            icon={<People variant="Bold" size={28} color="currentColor" className="mb-5" />}
            title="Staff management that works."
            description="Invite teachers and non-teaching staff by email or link. Bursars get access to finance. Everyone gets the right tools for their role."
          >
            <div className="pl-4 md:pl-10 mt-auto pt-10 relative z-10">
              <div className="bg-soma-bg rounded-tl-[30px] overflow-hidden pl-4.5 pt-4">
                <div className="border-t-10 border-l-10 border-yellow-400 rounded-tl-[30px] h-full">
                  <Image
                    src={work2}
                    alt="Staff management"
                    width={700}
                    height={520}
                    className="w-full h-full rounded-tl-[30px] object-cover object-top-left"
                  />
                </div>
              </div>
            </div>
          </HoverCard>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left bottom card */}
          <HoverCard
            className="flex-1 rounded-[30px]"
            icon={<Clipboard variant="Bold" size={28} color="currentColor" className="mb-5" />}
            title="Attendance that works offline."
            description="Swipe and tap to mark students present or absent. Saved as you go and synced to the school, even if you go offline. Parents are notified instantly."
          >
            <div className="pl-4 md:pl-10 mt-auto pt-10 relative z-10">
              <div className="bg-soma-bg rounded-tl-[30px] overflow-hidden pl-4.5 pt-4">
                <div className="border-t-10 border-l-10 border-soma-green rounded-tl-[30px] h-full">
                  <Image
                    src={work3}
                    alt="Attendance"
                    width={700}
                    height={520}
                    className="w-full h-full rounded-tl-[30px] object-cover object-top-left"
                  />
                </div>
              </div>
            </div>
          </HoverCard>

          {/* Right bottom card */}
          <HoverCard
            className="flex-1 rounded-[30px]"
            icon={<PresentionChart variant="Bold" size={28} color="currentColor" className="mb-5" />}
            title="Announcements, exams, and fees."
            description="Share updates with staff and parents. Manage CA and exam scores. Build fee structures, generate invoices, and track payments — all in one place."
          >
            <div className="pl-4 md:pl-10 mt-auto pt-10 relative z-10">
              <div className="bg-soma-bg rounded-tl-[30px] overflow-hidden pl-4.5 pt-4">
                <div className="border-t-10 border-l-10 border-soma-blue rounded-tl-[30px] h-full">
                  <Image
                    src={work4}
                    alt="Communication"
                    width={700}
                    height={520}
                    className="w-full h-full rounded-tl-[30px] object-cover object-top-left"
                  />
                </div>
              </div>
            </div>
          </HoverCard>
        </div>
      </div>
    </section>
  );
}
