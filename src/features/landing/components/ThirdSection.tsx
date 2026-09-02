import Image from "next/image";
import { Teacher, People } from "iconsax-react";

export function ThirdSection() {
  return (
    <section className="w-full max-w-[1294px] mx-auto mt-[72px] mb-[86px]">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left card - taller */}
        <div className="flex-[1.5] bg-soma-white-card rounded-[30px] pl-10 pt-[30px] relative overflow-hidden">
          <Teacher variant="Bold" size={28} color="#0D0D0D" className="mb-5" />
          <h3 className="text-[24px] font-semibold text-soma-black mb-1 leading-tight">
            Know every student, clearly.
          </h3>
          <p className="text-[16px] text-gray-4 leading-[1.6] max-w-[406px]">
            Keep student and guardian information organized in one secure place,
            with the right people getting access to the information they need.
          </p>
          <div className="bg-soma-bg rounded-tl-[30px] right-0 w-[75%] h-55.5 overflow-hidden ml-auto mt-39.75 pl-4.5 pt-4">
            <Image
              src="/work1.png"
              alt="Students dashboard"
              width={450}
              height={320}
              className="w-full h-full rounded-tl-[30px] object-cover object-top-left border-t-10 border-l-10 border-soma-red "
            />
          </div>
        </div>
 
        {/* Right card - shorter */}
        <div className="flex-1 bg-soma-white-card rounded-[30px] pl-10 pt-[30px] relative overflow-hidden">
          <People variant="Bold" size={28} color="#0D0D0D" className="mb-5" />
          <h3 className="text-[24px] font-semibold text-soma-black mb-1 leading-tight">
            Keep staff in the loop.
          </h3>
          <p className="text-[16px] text-gray-4 leading-[1.6] max-w-[406px]">
            Connect teachers, admins, and staff with seamless communication
            tools that keep everyone on the same page.
          </p>
          <div className="bg-soma-bg rounded-tl-[30px] right-0 w-[75%] h-55.5 overflow-hidden ml-auto mt-39.75 pl-4.5 pt-4">
            <Image
              src="/work2.png"
              alt="Staff management"
              width={450}
              height={320}
              className="w-full h-full rounded-tl-[30px] object-cover object-top-left border-t-10 border-l-10 border-yellow-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
