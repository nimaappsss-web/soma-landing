import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    image: "/made1.webp",
    label: "LEADERSHIP",
    labelColor: "text-yellow-500",
    title: "Run",
    description:
      "See the school clearly. Make decisions with current information.",
  },
  {
    image: "/made2.webp",
    label: "TEACHERS",
    labelColor: "text-soma-blue",
    title: "Teach",
    description:
      "Spend less time on admin. Keep classes and learning moving.",
  },
  {
    image: "/made3.webp",
    label: "GUARDIANS",
    labelColor: "text-soma-red",
    title: "Connect",
    description:
      "Understand what is happening with the child they care about.",
  },
  {
    image: "/made4.webp",
    label: "STUDENTS",
    labelColor: "text-soma-blue",
    title: "Grow",
    description:
      "Experience a school where the systems around learning feel joined up.",
  },
];

export function FifthSection() {
  return (
    <section className="w-full bg-soma-black rounded-[30px] mt-[72px] mb-[86px] overflow-hidden relative">
      {/* Blue geometric lines background */}
      <div className="absolute inset-0 opacity-30">
        <svg
          className="w-full h-full"
          viewBox="0 0 1294 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M200 0L400 800M0 200L800 0M1294 0L900 800M1294 200L500 0"
            stroke="#1D4ED8"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1294px] mx-auto px-[18px] md:px-[62px] pt-[72px] md:pt-[100px] pb-[72px] md:pb-[100px]">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
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
              href="#explore"
              className="px-6 md:px-8 py-3 md:py-3.5 text-[12px] md:text-[13px] font-medium text-soma-black bg-white rounded-full hover:bg-white/90 transition-colors"
            >
              Explore SOMA
            </Link>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-[#1A1A1A] rounded-[20px] overflow-hidden"
            >
              <div className="rounded-t-[20px] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={400}
                  height={260}
                  className="w-full h-auto aspect-[3/2] object-cover object-center"
                />
              </div>
              <div className="p-4 md:p-5">
                <p
                  className={`text-[11px] font-semibold tracking-wider uppercase mb-2 ${card.labelColor}`}
                >
                  {card.label}
                </p>
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
