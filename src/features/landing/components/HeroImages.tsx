import Image from "next/image";

export function HeroImages() {
  return (
    <div className="relative w-full max-w-[900px] mx-auto h-[380px]">
      <Image
        src="/heroPic3.png"
        alt="Graduate"
        width={215}
        height={300}
        className="absolute left-[80px] bottom-0 z-[1] rounded-[24px]"
      />
      <Image
        src="/heroPic2.png"
        alt="Students"
        width={379}
        height={360}
        className="absolute left-1/2 -translate-x-1/2 bottom-0 z-0 rounded-[24px]"
      />
      <Image
        src="/heroPic1.png"
        alt="Teacher"
        width={226}
        height={300}
        className="absolute right-[80px] bottom-0 z-[1] rounded-[24px]"
      />

      <div className="absolute left-[200px] top-[10px] bg-white w-[131.25px] rounded-[11.25px] pl-[11.5px] pr-[11.5px] pt-[8px] pb-[13.5px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] z-10">
        <span className="inline-block h-[16.79px] leading-[16.79px] px-3 text-[6.75px] font-bold text-soma-blue bg-soma-blue/10 rounded-[749.25px] uppercase tracking-wider">Today</span>
        <p className="text-[21px] font-semibold text-soma-black leading-tight mt-2">1,240</p>
        <p className="text-[7.5px] text-[#9098AC] mt-1">Students Enrolled</p>
      </div>

      <div className="absolute right-[160px] bottom-[80px] bg-white w-[131.25px] rounded-[11.25px] pl-[11.5px] pr-[11.5px] pt-[8px] pb-[13.5px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] z-10">
        <span className="inline-block h-[16.79px] leading-[16.79px] px-3 text-[6.75px] font-bold text-soma-blue bg-soma-blue/10 rounded-[749.25px] uppercase tracking-wider">Academics</span>
        <p className="text-[16px] font-semibold text-soma-black mt-2">SS 2 Science</p>
        <p className="text-[7.5px] text-[#9098AC] mt-1">94% Results Ready</p>
      </div>
    </div>
  );
}
