import Image from "next/image";
import Link from "next/link";
import last from "../../../../public/last.webp";

export function SeventhSection() {
  return (
    <section className="w-full bg-soma-black rounded-[30px] mt-[72px] mb-2 overflow-hidden">
      <div className="max-w-[1294px] mx-auto px-[18px] md:px-[62px] pt-[72px] md:pt-[100px] pb-0 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-[32px] sm:text-[40px] md:text-[52px] lg:text-[66px] font-semibold leading-[1.05] tracking-tight text-white mb-5">
            Make the system around{" "}
            <br className="hidden sm:block" />
            your school better.
          </h2>
          <p className="text-[14px] md:text-[16px] lg:text-[18px] text-white/60 leading-[1.7] max-w-[420px] mx-auto mb-8 md:mb-10">
            See how SOMA can bring your school&apos;s everyday work into one
            connected experience.
          </p>
          <div className="flex items-center justify-center gap-3 md:gap-4">
            <Link
              href="#contact-sales"
              className="px-6 md:px-8 py-3 md:py-3.5 text-[12px] md:text-[13px] font-medium text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors"
            >
              Contact Sales
            </Link>
            <Link
              href="#explore"
              className="px-6 md:px-8 py-3 md:py-3.5 text-[12px] md:text-[13px] font-medium text-soma-black bg-white rounded-full hover:bg-white/90 transition-colors"
            >
              Explore SOMA
            </Link>
          </div>
        </div>

        {/* Laptop Image */}
        <div className="w-full max-w-[800px] mx-auto -mb-1">
          <Image
            src={last}
            alt="SOMA Dashboard on laptop"
            width={800}
            height={500}
            className="w-full h-auto object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
