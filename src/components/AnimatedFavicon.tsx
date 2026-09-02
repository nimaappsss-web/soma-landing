"use client";

import { useAnimatedFavicon } from "@/hooks/useAnimatedFavicon";

export function AnimatedFavicon() {
  useAnimatedFavicon(["/favicon2.svg", "/favicon.svg"], [3000, 600]);
  return null;
}
