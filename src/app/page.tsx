import Link from "next/link";
import { Navbar } from "@/features/landing/components/Navbar";
import { HeroImages } from "@/features/landing/components/HeroImages";
import { HeroBackground } from "@/features/landing/components/HeroBackground";
import { SecondSection } from "@/features/landing/components/SecondSection";
import { ThirdSection } from "@/features/landing/components/ThirdSection";
import { FourthSection } from "@/features/landing/components/FourthSection";
import { FifthSection } from "@/features/landing/components/FifthSection";
import { SixthSection } from "@/features/landing/components/SixthSection";
import { SeventhSection } from "@/features/landing/components/SeventhSection";
import { Footer } from "@/features/landing/components/Footer";

export default function Home() {
  return (
    <>
      <div id="home" className="h-screen min-h-[700px] p-[10px]">
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

            <p className="max-w-[484px] mx-auto text-center text-white/60 text-[15px] md:text-[18px] mt-8 md:mt-10 leading-[1.7] bg-soma-black md:bg-transparent rounded-[16px] px-4 py-3 md:p-0 relative z-10">
              SOMA brings the people, information and everyday work of your school
              together, so your team can spend less time chasing things and more time
              moving students forward.
            </p>

            <div className="flex items-center justify-center gap-3 md:gap-4 mt-12 md:mt-16">
              <Link
                href="#contact-sales"
                className="px-6 md:px-8 py-3 md:py-3.5 text-[12px] md:text-[13px] font-medium text-soma-black bg-white rounded-full hover:bg-white/90 transition-colors"
              >
                Contact Sales
              </Link>
              <Link
                href="#product"
                className="px-6 md:px-8 py-3 md:py-3.5 text-[12px] md:text-[13px] font-medium text-white bg-soma-blue rounded-full hover:bg-soma-blue/90 transition-colors"
              >
                Explore SOMA
              </Link>
            </div>
          </main>

          <HeroImages />
        </div>
      </div>
      <div className="px-[10px]">
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <SeventhSection />
        <Footer />
      </div>
    </>
  );
}
