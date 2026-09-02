import Image from "next/image";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Image
        src="/somaLineBg.svg"
        alt=""
        fill
        className="object-cover opacity-60 md:opacity-40"
        priority
      />
    </div>
  );
}
