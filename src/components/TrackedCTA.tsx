"use client";

import Link from "next/link";
import { type ReactNode } from "react";
import { trackCTAClick } from "@/lib/analytics";

interface TrackedCTAProps {
  href: string;
  section: string;
  buttonName: string;
  children: ReactNode;
  className?: string;
}

export function TrackedCTA({
  href,
  section,
  buttonName,
  children,
  className,
}: TrackedCTAProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => trackCTAClick(buttonName, section)}
    >
      {children}
    </Link>
  );
}
