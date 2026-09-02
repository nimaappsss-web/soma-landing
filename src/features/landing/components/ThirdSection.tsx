import Image from "next/image";
import { Teacher, People } from "iconsax-react";

export function ThirdSection() {
  return (
    <section className="w-full max-w-[1294px] mx-auto mt-[72px] mb-[86px]">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left card - taller */}
        <div className="flex-[1.2] bg-[#FAFAFA] rounded-[30px] p-10 relative overflow-hidden min-h-[440px]">
          <Teacher variant="Bold" size={28} color="#0D0D0D" className="mb-5" />
          <h3 className="text-[24px] font-semibold text-soma-black mb-3 leading-tight">
            Know every student, clearly.
          </h3>
          <p className="text-[16px] text-[#32353E] leading-[1.6] max-w-[406px]">
            Keep student and guardian information organized in one secure place,
            with the right people getting access to the information they need.
          </p>
          <div className="absolute bottom-0 right-0 w-[75%] h">
            <Image
              src="/work1.png"
              alt="Students dashboard"
              width={500}
              height={320}
              className="w-full h-auto rounded-tl-2xl object-cover object-top"
            />
          </div>
        </div>

        {/* Right card - shorter */}
        <div className="flex-1 bg-[#FAFAFA] rounded-[30px] p-10 relative overflow-hidden min-h-[380px]">
          <People variant="Bold" size={28} color="#0D0D0D" className="mb-5" />
          <h3 className="text-[24px] font-semibold text-soma-black mb-3 leading-tight">
            Keep staff in the loop.
          </h3>
          <p className="text-[16px] text-[#32353E] leading-[1.6] max-w-[406px]">
            Connect teachers, admins, and staff with seamless communication
            tools that keep everyone on the same page.
          </p>
          <div className="absolute bottom-0 right-0 w-[75%]">
            <Image
              src="/work2.png"
              alt="Staff management"
              width={500}
              height={280}
              className="w-full h-auto rounded-tl-2xl object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
