import Image from "next/image";
import { Calendar, Setting2 } from "iconsax-react";

export function FourthSection() {
  return (
    <section className="w-full max-w-[1294px] mx-auto mb-[86px]">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left card - taller */}
        <div className="flex-[1.2] bg-soma-white-card rounded-[30px] pl-10 pt-[30px] relative overflow-hidden">
          <Calendar variant="Bold" size={28} color="#0D0D0D" className="mb-5" />
          <h3 className="text-[24px] font-semibold text-soma-black mb-1 leading-tight">
            Plan your academic year with ease.
          </h3>
          <p className="text-[16px] text-gray-4 leading-[1.6] max-w-[406px]">
            Set up terms, sessions, and holidays in advance so your team
            always knows what's coming next.
          </p>
          <div className="bg-soma-bg rounded-tl-[30px] right-0 w-[75%] h-55.5 overflow-hidden ml-auto mt-39.75 pl-4.5 pt-4">
            <Image
              src="/work3.png"
              alt="Calendar"
              width={500}
              height={320}
              className="w-full h-full rounded-tl-[30px] object-cover object-top-left border-t-10 border-l-10 border-yellow-400"
            />
          </div>
        </div>

        {/* Right card - shorter */}
        <div className="flex-1 bg-soma-white-card rounded-[30px] pl-10 pt-[30px] relative overflow-hidden">
          <Setting2 variant="Bold" size={28} color="#0D0D0D" className="mb-5" />
          <h3 className="text-[24px] font-semibold text-soma-black mb-1 leading-tight">
            Configure it your way.
          </h3>
          <p className="text-[16px] text-gray-4 leading-[1.6] max-w-[406px]">
            Customize roles, permissions, and settings to match how your
            school actually operates.
          </p>
          <div className="bg-soma-bg rounded-tl-[30px] right-0 w-[75%] h-55.5 overflow-hidden ml-auto mt-39.75 pl-4.5 pt-4">
            <Image
              src="/work4.png"
              alt="Settings"
              width={500}
              height={280}
              className="w-full h-full rounded-tl-[30px] object-cover object-top-left border-t-10 border-l-10 border-yellow-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
