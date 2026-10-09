import type { ReactNode } from "react";
import { MarketingPage } from "@/features/landing/components/MarketingPage";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return <MarketingPage>{children}</MarketingPage>;
}
