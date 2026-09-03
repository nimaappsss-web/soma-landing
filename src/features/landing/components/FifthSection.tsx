import Image from "next/image";

const images = [
  {
    src: "/made1.webp",
    alt: "School management",
    badge: { label: "Schools", value: "2,400+" },
  },
  {
    src: "/made2.webp",
    alt: "Student tracking",
    badge: { label: "Students", value: "48,000+" },
  },
  {
    src: "/made3.webp",
    alt: "Staff management",
    badge: { label: "Staff", value: "6,200+" },
  },
  {
    src: "/made4.webp",
    alt: "Parent engagement",
    badge: { label: "Parents", value: "32,000+" },
  },
];

export function FifthSection() {
  return (
    <section className="w-full bg-soma-black rounded-[30px] mt-[72px] mb-[86px] overflow-hidden">
      <div className="max-w-[1294px] mx-auto px-[18px] md:px-[62px] py-[72px] md:py-[100px]">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[32px] sm:text-[40px] md:text-[52px] lg:text-[66px] font-semibold leading-[1.05] tracking-tight text-white mb-5">
            Built how schools{" "}
            <span className="font-hand font-bold text-soma-blue italic">
              actually work.
            </span>
          </h2>
          <p className="text-[14px] md:text-[16px] lg:text-[18px] text-white/60 leading-[1.7] max-w-[600px] mx-auto">
            From attendance to report cards, SOMA handles the everyday work of
            your school so your team can focus on what matters most.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {images.map((img, i) => (
            <div key={i} className="relative rounded-[20px] md:rounded-[24px] overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="w-full h-auto aspect-[4/3] object-cover object-center"
              />
              {/* Floating badge */}
              <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 bg-white/90 backdrop-blur-sm rounded-[14px] px-3 md:px-4 py-2 md:py-2.5 flex items-center gap-2 md:gap-3">
                <div>
                  <p className="text-[14px] md:text-[16px] font-semibold text-soma-black leading-tight">
                    {img.badge.value}
                  </p>
                  <p className="text-[11px] md:text-[12px] text-gray-4 leading-tight">
                    {img.badge.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
