import Link from "next/link";
import { Navbar } from "@/features/landing/components/Navbar";
import { HeroImages } from "@/features/landing/components/HeroImages";
import { HeroBackground } from "@/features/landing/components/HeroBackground";

export default function Home() {
  return (
    <div className="h-screen min-h-[700px] p-[10px]">
      <div className="relative h-full min-h-[680px] bg-soma-black rounded-[30px] overflow-hidden flex flex-col">
        <HeroBackground />
        <Navbar />

        <main className="relative z-10 w-full max-w-[1294px] mx-auto flex flex-col items-center px-6 pt-16 md:pt-20 flex-1">
          <h1 className="text-[32px] sm:text-[44px] md:text-[60px] lg:text-[80px] font-bold text-white text-center leading-[1.05] tracking-tight">
            Make school easier
          </h1>
          <p className="text-[32px] sm:text-[44px] md:text-[60px] lg:text-[80px] font-hand font-bold text-soma-blue text-center leading-[1.1] italic mt-3 md:mt-4">
            To run.
          </p>

          <p className="max-w-[484px] mx-auto text-center text-white/60 text-[15px] md:text-[18px] mt-8 md:mt-10 leading-[1.7] bg-white/5 md:bg-transparent rounded-[16px] px-4 py-3 md:p-0">
            SOMA brings the people, information and everyday work of your school
            together, so your team can spend less time chasing things and more time
            moving students forward.
          </p>

          <div className="flex items-center justify-center gap-3 md:gap-4 mt-12 md:mt-16">
            <Link
              href="#contact-sales"
              className="px-6 md:px-8 py-3 md:py-3.5 text-[12px] md:text-[13px] font-medium text-white bg-soma-black border border-white/25 rounded-full hover:bg-soma-black/80 transition-colors"
            >
              Contact Sales
            </Link>
            <Link
              href="#explore"
              className="px-6 md:px-8 py-3 md:py-3.5 text-[12px] md:text-[13px] font-medium text-white bg-soma-blue rounded-full hover:bg-soma-blue/90 transition-colors"
            >
              Explore SOMA
            </Link>
          </div>
        </main>

        <HeroImages />
      </div>
    </div>
  );
}
