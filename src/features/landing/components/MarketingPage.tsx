import type { ReactNode } from "react";
import { Navbar } from "@/features/landing/components/Navbar";
import { Footer } from "@/features/landing/components/Footer";

export function MarketingPage({ children }: { children: ReactNode }) {
  return (
    <div className="px-[10px]">
      <div className="relative bg-soma-black rounded-[30px] overflow-hidden">
        <Navbar />
      </div>
      <div className="w-full max-w-[1294px] mx-auto px-[18px] md:px-[62px] py-14 md:py-20">
        {children}
      </div>
      <Footer />
    </div>
  );
}