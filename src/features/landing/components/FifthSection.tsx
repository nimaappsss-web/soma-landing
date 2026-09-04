import Image from "next/image";
import Link from "next/link";
import made1 from "../../../../public/made1.webp";
import made2 from "../../../../public/made2.webp";
import made3 from "../../../../public/made3.webp";
import made4 from "../../../../public/made4.webp";
import somaLineBg from "../../../../public/somaLineBg.svg";

const cards = [
  {
    image: made1,
    label: "LEADERSHIP",
    labelBg: "bg-yellow-500",
    labelColor: "text-soma-black",
    title: "Run",
    description:
      "See the school clearly. Make decisions with current information.",
  },
  {
    image: made2,
    label: "TEACHERS",
    labelBg: "bg-soma-green",
    labelColor: "text-soma-black",
    title: "Teach",
    description:
      "Spend less time on admin. Keep classes and learning moving.",
  },
  {
    image: made3,
    label: "GUARDIANS",
    labelBg: "bg-soma-red",
    labelColor: "text-white",
    title: "Connect",
    description:
      "Understand what is happening with the child they care about.",
  },
  {
    image: made4,
    label: "STUDENTS",
    labelBg: "bg-soma-blue",
    labelColor: "text-white",
    title: "Grow",
    description:
      "Experience a school where the systems around learning feel joined up.",
  },
];

export function FifthSection() {
  return (
    <section id="why-soma" className="w-full bg-black rounded-[30px] mt-[72px] mb-[86px] overflow-hidden relative">
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={somaLineBg}
          alt=""
          fill
          className="object-cover object-left-top md:object-center"
        />
      </div>

      <div className="relative z-10 max-w-[1294px] mx-auto px-[18px] md:px-[62px] pt-[72px] md:pt-[100px] pb-[72px] md:pb-[100px]">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 max-w-[390px] mx-auto">
          <h2 className="text-[32px] sm:text-[40px] md:text-[52px] lg:text-[66px] font-semibold leading-[1.05] tracking-tight text-white mb-5">
            Made for the{" "}
            <span className="font-hand font-bold text-yellow-400 italic">
              whole
            </span>{" "}
            school.
          </h2>
          <p className="text-[14px] md:text-[16px] lg:text-[18px] text-white/60 leading-[1.7] max-w-[500px] mx-auto mb-8 md:mb-10">
            The experience changes with the person using it, while every
            underlying information stays connected.
          </p>
          <div className="flex items-center justify-center gap-3 md:gap-4">
            <Link
              href="#contact-sales"
              className="px-6 md:px-8 py-3 md:py-3.5 text-[12px] md:text-[13px] font-medium text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors"
            >
              Contact Sales
            </Link>
            <Link
              href="#product"
              className="px-6 md:px-8 py-3 md:py-3.5 text-[12px] md:text-[13px] font-medium text-soma-black bg-white rounded-full hover:bg-white/90 transition-colors"
            >
              Explore SOMA
            </Link>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[9px]">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-[#1A1A1A] rounded-[30px] overflow-hidden"
            >
              <div className="rounded-t-[30px] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={400}
                  height={260}
                  className="w-full h-auto aspect-[3/2] object-cover object-center"
                />
              </div>
              <div className="p-4 md:p-4">
                <span
                  className={`inline-block text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-[5px] mb-3 ${card.labelBg} ${card.labelColor}`}
                >
                  {card.label}
                </span>
                <h3 className="text-[20px] md:text-[22px] font-semibold text-white mb-2 leading-tight">
                  {card.title}
                </h3>
                <p className="text-[13px] md:text-[14px] text-white/60 leading-[1.6]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
