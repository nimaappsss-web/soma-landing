import Image from "next/image";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <Image
        src="/somaLineBg.svg"
        alt=""
        fill
        className="object-cover object-left-top md:object-center"
        priority
      />
    </div>
  );
}
