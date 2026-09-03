import Image from "next/image";
import { Teacher, People, Clipboard, PresentionChart } from "iconsax-react";

export function ThirdSection() {
  return (
    <section className="w-full max-w-[1294px] mx-auto mt-[72px] mb-[86px]">
      <div className="flex flex-col gap-6">
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
            <div className="bg-soma-bg rounded-tl-[30px] right-0 w-full h-full overflow-hidden ml-auto mt-10 pl-4.5 pt-4">
              <div className="border-t-10 border-l-10 border-soma-red bg-white rounded-tl-[30px]">
                <Image
                  src="/work1.png"
                  alt="Students dashboard"
                  width={700}
                  height={520}
                  className="h-full w-full rounded-tl-[30px] object-cover object-top-left "
                />
              </div>
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
            <div className="bg-soma-bg rounded-tl-[30px] right-0 h-full overflow-hidden ml-auto mt-10 pl-4.5 pt-4">
              <div className="border-t-10 border-l-10 border-yellow-400 bg-white rounded-tl-[30px]">
                <Image
                  src="/work2.png"
                  alt="Staff management"
                  width={700}
                  height={520}
                  className="w-full h-full rounded-tl-[30px] object-cover object-top-left"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left bottom card */}
          <div className="flex-1 bg-soma-white-card rounded-[30px] pl-10 pt-[30px] relative overflow-hidden">
            <Clipboard variant="Bold" size={28} color="#0D0D0D" className="mb-5" />
            <h3 className="text-[24px] font-semibold text-soma-black mb-1 leading-tight">
              Make attendance easier to manage.
            </h3>
            <p className="text-[16px] text-gray-4 leading-[1.6] max-w-[406px]">
              Track attendance consistently, spot gaps early and give your team a
              clearer picture of what's happening across classes.
            </p>
            <div className="bg-soma-bg rounded-tl-[30px] right-0 h-full overflow-hidden ml-auto mt-10 pl-4.5 pt-4">
              <div className="border-t-10 border-l-10 border-sky-400 bg-white rounded-tl-[30px]">
                <Image
                  src="/work3.png"
                  alt="Attendance"
                  width={700}
                  height={520}
                  className="w-full h-full rounded-tl-[30px] object-cover object-top-left"
                />
              </div>
            </div>
          </div>

          {/* Right bottom card */}
          <div className="flex-1 bg-soma-white-card rounded-[30px] pl-10 pt-[30px] relative overflow-hidden">
            <PresentionChart variant="Bold" size={28} color="#0D0D0D" className="mb-5" />
            <h3 className="text-[24px] font-semibold text-soma-black mb-1 leading-tight">
              Put everyone on the same page.
            </h3>
            <p className="text-[16px] text-gray-4 leading-[1.6] max-w-[406px]">
              Share updates, results, and notices with staff and parents so nothing
              gets lost in translation.
            </p>
            <div className="bg-soma-bg rounded-tl-[30px] right-0 h-full overflow-hidden ml-auto mt-10 pl-4.5 pt-4">
              <div className="border-t-10 border-l-10 border-sky-400 bg-white rounded-tl-[30px]">
                <Image
                  src="/work4.png"
                  alt="Communication"
                  width={700}
                  height={520}
                  className="w-full h-full rounded-tl-[30px] object-cover object-top-left"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
