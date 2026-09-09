"use client";

import { useEffect, useState } from "react";
import { trackScrollDepth } from "@/lib/analytics";

const THRESHOLDS = [25, 50, 75, 90, 100];

export function ScrollTracker() {
  const [fired, setFired] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const percent = Math.round((scrollTop / docHeight) * 100);

      THRESHOLDS.forEach((threshold) => {
        if (percent >= threshold && !fired.includes(threshold)) {
          setFired((prev) => [...prev, threshold]);
          trackScrollDepth(threshold);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fired]);

  return null;
}
