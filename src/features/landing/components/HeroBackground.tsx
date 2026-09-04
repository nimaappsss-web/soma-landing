import Image from "next/image";
import somaLineBg from "../../../../public/somaLineBg.svg";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <Image
        src={somaLineBg}
        alt=""
        fill
        className="object-cover object-left-top md:object-center"
        priority
      />
    </div>
  );
}
