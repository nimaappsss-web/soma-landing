import { useEffect, useRef } from "react";

export const useAnimatedFavicon = (frames: string[], schedule: number[]) => {
  const framesRef = useRef(frames);
  const scheduleRef = useRef(schedule);

  useEffect(() => {
    framesRef.current = frames;
    scheduleRef.current = schedule;
  }, [frames, schedule]);

  useEffect(() => {
    framesRef.current.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    let index = 0;
    let timer: ReturnType<typeof setTimeout>;
    let cancelled = false;

    const setIcon = (href: string) => {
      const existing = document.querySelector("link[rel~='icon']");
      if (existing) {
        existing.setAttribute("href", href);
      } else {
        const link = document.createElement("link");
        link.rel = "icon";
        link.href = href;
        document.head.appendChild(link);
      }
    };

    const tick = () => {
      if (cancelled) return;
      setIcon(framesRef.current[index]!);
      const delay = scheduleRef.current[index] ?? scheduleRef.current[0]!;
      index = (index + 1) % framesRef.current.length;
      timer = setTimeout(tick, delay);
    };

    tick();

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);
};
