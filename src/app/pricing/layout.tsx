import type { ReactNode } from "react";
import { Footer } from "@/features/landing/components/Footer";

export default function PricingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-[700px] p-[10px]">
      <div className="relative bg-soma-black rounded-[30px] overflow-hidden">
        {children}
      </div>
      <Footer />
    </div>
  );
}
