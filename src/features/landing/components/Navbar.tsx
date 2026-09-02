"use client";

import Image from "next/image";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-20 w-full">
      <div className="max-w-[1294px] mx-auto flex items-center justify-between px-6 md:px-10 pt-[40px] md:pt-[53px] pb-4">
        <Image src="/somaWhite.svg" alt="Soma" width={130} height={28} className="brightness-0 invert" />

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8 px-8 h-[53px] rounded-[20px] border border-white/15 bg-white/5 backdrop-blur-sm">
          {["Home", "Product", "Why SOMA", "For schools", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className={`text-[16px] font-medium transition-colors ${
                item === "Home" ? "text-white" : "text-[#9098AC] hover:text-white"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Desktop right */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="https://checksoma.com/login" className="text-sm font-semibold text-white hover:text-white/80 transition-colors">
            Login
          </a>
          <a
            href="https://checksoma.com/onboarding"
            className="px-6 py-3 text-sm font-medium text-soma-black bg-white rounded-full hover:bg-white/90 transition-colors"
          >
            Get Started
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-soma-black/95 backdrop-blur-lg border-b border-white/10 px-6 py-6 flex flex-col gap-4">
          {["Home", "Product", "Why SOMA", "For schools", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setOpen(false)}
              className={`text-[16px] font-medium ${
                item === "Home" ? "text-white" : "text-[#9098AC]"
              }`}
            >
              {item}
            </a>
          ))}
          <hr className="border-white/10" />
          <a href="https://checksoma.com/login" className="text-sm font-semibold text-white">
            Login
          </a>
          <a
            href="https://checksoma.com/onboarding"
            className="px-6 py-3 text-sm font-medium text-soma-black bg-white rounded-full text-center"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
