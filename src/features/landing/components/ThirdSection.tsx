import Image from "next/image";
import { BookOpen, Award } from "lucide-react";

export function ThirdSection() {
  return (
    <section className="w-full max-w-[1294px] mx-auto mt-[72px] mb-[86px] px-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left card - longer */}
        <div className="flex-1 bg-[#FAFAFA] rounded-[30px] overflow-hidden">
          <div className="bg-[#EDEDED] px-6 md:px-[162px] pt-8 pb-0">
            <div className="rounded-2xl overflow-hidden border border-white/50">
              <Image
                src="/work1.png"
                alt="Features"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="px-8 py-8">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-soma-blue/10">
              <BookOpen className="w-6 h-6 text-soma-blue" />
            </div>
            <h3 className="text-[24px] font-semibold text-soma-black mb-3">
              Smart Attendance
            </h3>
            <p className="text-[16px] text-[#32353E] leading-[1.6] max-w-[406px]">
              Track student and staff attendance in real-time with automated
              notifications and comprehensive reporting.
            </p>
          </div>
        </div>

        {/* Right card - shorter */}
        <div className="flex-1 bg-[#FAFAFA] rounded-[30px] overflow-hidden">
          <div className="bg-[#EDEDED] px-6 md:px-[162px] pt-8 pb-0">
            <div className="rounded-2xl overflow-hidden border border-white/50">
              <Image
                src="/work2.png"
                alt="Analytics"
                width={400}
                height={250}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="px-8 py-8">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-soma-blue/10">
              <Award className="w-6 h-6 text-soma-blue" />
            </div>
            <h3 className="text-[24px] font-semibold text-soma-black mb-3">
              Report Cards
            </h3>
            <p className="text-[16px] text-[#32353E] leading-[1.6] max-w-[406px]">
              Generate detailed report cards with continuous assessment scores
              and final exam results in one click.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
