import Image from "next/image";
import { Teacher, People, Clipboard, PresentionChart } from "iconsax-react";
import work1 from "../../../../public/work1.png";
import work2 from "../../../../public/work2.png";
import work3 from "../../../../public/work3.png";
import work4 from "../../../../public/work4.png";

export function ThirdSection() {
  return (
    <section className="w-full max-w-[1294px] mx-auto mt-[72px] mb-[86px] px-[18px] md:px-[62px]">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left card - taller */}
          <div className="flex-[1.5] bg-soma-white-card rounded-[30px] relative overflow-hidden flex flex-col">
            <div className="pl-4 md:pl-10 pr-4 pt-[30px]">
              <Teacher variant="Bold" size={28} color="#0D0D0D" className="mb-5" />
              <h3 className="text-[24px] font-semibold text-soma-black mb-1 leading-tight">
                Know every student, clearly.
              </h3>
              <p className="text-[14px] md:text-[16px] text-gray-4 leading-[1.5] md:leading-[1.6] max-w-[406px]">
                Keep student and guardian information organized in one secure place,
                with the right people getting access to the information they need.
              </p>
            </div>
            <div className="pl-4 md:pl-10 mt-10">
              <div className="bg-soma-bg rounded-tl-[30px] flex-1 overflow-hidden pl-4.5 pt-4">
                <div className="border-t-10 border-l-10 border-soma-red bg-white rounded-tl-[30px] h-full">
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
          </div>

          {/* Right card - shorter */}
          <div className="flex-1 bg-soma-white-card rounded-[30px] relative overflow-hidden flex flex-col">
            <div className="pl-4 md:pl-10 pr-4 pt-[30px]">
              <People variant="Bold" size={28} color="#0D0D0D" className="mb-5" />
              <h3 className="text-[24px] font-semibold text-soma-black mb-1 leading-tight">
                Keep staff in the loop.
              </h3>
              <p className="text-[14px] md:text-[16px] text-gray-4 leading-[1.5] md:leading-[1.6] max-w-[406px]">
                Connect teachers, admins, and staff with seamless communication
                tools that keep everyone on the same page.
              </p>
            </div>
            <div className="pl-4 md:pl-10 mt-10 flex-1">
              <div className="bg-soma-bg rounded-tl-[30px] overflow-hidden pl-4.5 pt-4">
                <div className="border-t-10 border-l-10 border-yellow-400 bg-white rounded-tl-[30px] h-full">
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
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left bottom card */}
          <div className="flex-1 bg-soma-white-card rounded-[30px] relative overflow-hidden flex flex-col">
            <div className="pl-4 md:pl-10 pr-4 pt-[30px]">
              <Clipboard variant="Bold" size={28} color="#0D0D0D" className="mb-5" />
              <h3 className="text-[24px] font-semibold text-soma-black mb-1 leading-tight">
                Make attendance easier to manage.
              </h3>
              <p className="text-[14px] md:text-[16px] text-gray-4 leading-[1.5] md:leading-[1.6] max-w-[406px] min-h-[77px]">
                Track attendance consistently, spot gaps early and give your team a
                clearer picture of what&apos;s happening across classes.
              </p>
            </div>
            <div className="pl-4 md:pl-10 mt-10">
              <div className="bg-soma-bg rounded-tl-[30px] aspect-[4/3] overflow-hidden pl-4.5 pt-4">
                <div className="border-t-10 border-l-10 border-soma-green bg-white rounded-tl-[30px] h-full">
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
          </div>

          {/* Right bottom card */}
          <div className="flex-1 bg-soma-white-card rounded-[30px] relative overflow-hidden flex flex-col">
            <div className="pl-4 md:pl-10 pr-4 pt-[30px]">
              <PresentionChart variant="Bold" size={28} color="#0D0D0D" className="mb-5" />
              <h3 className="text-[24px] font-semibold text-soma-black mb-1 leading-tight">
                Put everyone on the same page.
              </h3>
              <p className="text-[14px] md:text-[16px] text-gray-4 leading-[1.5] md:leading-[1.6] max-w-[406px] line-clamp-3 min-h-[77px]">
                Share updates, results, and notices with staff and parents so nothing
                gets lost in translation.
              </p>
            </div>
            <div className="pl-4 md:pl-10 mt-10">
              <div className="bg-soma-bg rounded-tl-[30px] aspect-[4/3] overflow-hidden pl-4.5 pt-4">
                <div className="border-t-10 border-l-10 border-soma-blue bg-white rounded-tl-[30px] h-full">
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
          </div>
        </div>
      </div>
    </section>
  );
}
