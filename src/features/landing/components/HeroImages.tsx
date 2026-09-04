import Image from "next/image";
import heroPic1 from "../../../../public/heroPic1.png";
import heroPic2 from "../../../../public/heroPic2.png";
import heroPic3 from "../../../../public/heroPic3.png";

export function HeroImages() {
  return (
    <div className="relative w-full max-w-[900px] mx-auto h-[250px] sm:h-[300px] md:h-[340px] lg:h-[380px]">
      <Image
        src={heroPic3}
        alt="Graduate"
        width={215}
        height={300}
        className="absolute left-[10px] sm:left-[40px] lg:left-[80px] bottom-0 z-[1] rounded-[16px] sm:rounded-[24px] w-[140px] sm:w-[180px] lg:w-[215px] h-auto"
      />
      <Image
        src={heroPic2}
        alt="Students"
        width={379}
        height={360}
        className="absolute left-1/2 -translate-x-1/2 bottom-0 z-0 rounded-[16px] sm:rounded-[24px] w-[220px] sm:w-[280px] lg:w-[379px] h-auto"
      />
      <Image
        src={heroPic1}
        alt="Teacher"
        width={226}
        height={300}
        className="absolute right-[10px] sm:right-[40px] lg:right-[80px] bottom-0 z-[1] rounded-[16px] sm:rounded-[24px] w-[150px] sm:w-[190px] lg:w-[226px] h-auto"
      />

      {/* Stat card - Students Enrolled */}
      <div className="absolute left-[80px] sm:left-[160px] lg:left-[200px] top-[40px] sm:top-[50px] lg:top-[60px] bg-white w-[100px] sm:w-[115px] lg:w-[131.25px] rounded-[8px] sm:rounded-[11.25px] pl-[11.5px] pr-[11.5px] pt-[8px] pb-[13.5px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] z-10">
        <span className="inline-block h-[14px] lg:h-[16.79px] leading-[14px] lg:leading-[16.79px] px-2 lg:px-3 text-[5px] lg:text-[6.75px] font-bold text-soma-blue bg-soma-blue/10 rounded-[749.25px] uppercase tracking-wider">Today</span>
        <p className="text-[16px] lg:text-[21px] font-semibold text-soma-black leading-tight mt-1 lg:mt-2">1,240</p>
        <p className="text-[6px] lg:text-[7.5px] text-[#9098AC] mt-0.5 lg:mt-1">Students Enrolled</p>
      </div>

      {/* Stat card - Academics */}
      <div className="absolute right-[60px] sm:right-[120px] lg:right-[160px] bottom-[60px] lg:bottom-[80px] bg-white w-[100px] sm:w-[115px] lg:w-[131.25px] rounded-[8px] sm:rounded-[11.25px] pl-[11.5px] pr-[11.5px] pt-[8px] pb-[13.5px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] z-10">
        <span className="inline-block h-[14px] lg:h-[16.79px] leading-[14px] lg:leading-[16.79px] px-2 lg:px-3 text-[5px] lg:text-[6.75px] font-bold text-soma-blue bg-soma-blue/10 rounded-[749.25px] uppercase tracking-wider">Academics</span>
        <p className="text-[12px] lg:text-[16px] font-semibold text-soma-black mt-1 lg:mt-2">SS 2 Science</p>
        <p className="text-[6px] lg:text-[7.5px] text-[#9098AC] mt-0.5 lg:mt-1">94% Results Ready</p>
      </div>
    </div>
  );
}
