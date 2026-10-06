"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { trackCTAClick, trackNavLink } from "@/lib/analytics";
import { MoveRight } from "lucide-react";
import somaWhite from "../../../../public/somaWhite.svg";

const navItems = [
  { label: "Home", hash: "home" },
  { label: "Product", hash: "product" },
  { label: "Why SOMA", hash: "why-soma" },
  { label: "For schools", hash: "for-schools" },
  { label: "Contact", hash: "contact-sales" },
];

const CLOSE_MS = 450;

function scrollToHash(hash: string) {
  const el = document.getElementById(hash);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  else window.scrollTo({ top: 0, behavior: "smooth" });
}

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setClosing(false);
    setOpen(true);
  };

  const closeMenu = (onClosed?: () => void) => {
    if (closing) return;
    if (!open) {
      onClosed?.();
      return;
    }
    setClosing(true);
    closeTimer.current = setTimeout(() => {
      closeTimer.current = null;
      setOpen(false);
      setClosing(false);
      if (onClosed) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => onClosed());
        });
      }
    }, CLOSE_MS);
  };

  const closeMenuRef = useRef(closeMenu);

  useEffect(() => {
    closeMenuRef.current = closeMenu;
  });

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenuRef.current();
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        if (closeTimer.current) {
          clearTimeout(closeTimer.current);
          closeTimer.current = null;
        }
        setOpen(false);
        setClosing(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  useEffect(() => {
    if (pathname !== "/") return;
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    let attempts = 0;
    let raf = 0;
    const tryScroll = () => {
      const el = document.getElementById(hash);
      if (el) {
        scrollToHash(hash);
        return;
      }
      if (++attempts < 20) raf = requestAnimationFrame(tryScroll);
    };
    raf = requestAnimationFrame(tryScroll);
    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  const handleNavClick = (
    e: React.MouseEvent,
    item: { label: string; hash: string },
    afterClose?: () => void
  ) => {
    trackNavLink(item.label);
    const run = () => {
      e.preventDefault();
      if (pathname === "/") {
        window.history.replaceState(null, "", `/#${item.hash}`);
        scrollToHash(item.hash);
      } else {
        router.push(`/#${item.hash}`);
      }
      afterClose?.();
    };
    if (open) closeMenu(run);
    else run();
  };

  const goHome = (e: React.MouseEvent) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (open) closeMenu();
  };

  return (
    <nav className="relative z-50 w-full">
      {/* Header row (desktop only, acts as spacer on mobile) */}
      <div className="max-w-[1294px] mx-auto flex items-center justify-between px-6 md:px-10 pt-[40px] md:pt-[53px] pb-4 min-h-[84px] lg:min-h-0">
        <Link href="/" aria-label="Soma home" onClick={goHome} className="hidden lg:block">
          <Image
            src={somaWhite}
            alt="Soma"
            width={130}
            height={28}
            className="brightness-0 invert"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8 px-8 h-[53px] rounded-[20px] border border-white/15 bg-white/5 backdrop-blur-sm">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={`/#${item.hash}`}
              onClick={(e) => handleNavClick(e, item)}
              className={`text-[16px] font-medium transition-colors ${
                item.label === "Home" ? "text-white" : "text-[#9098AC] hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop right */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="https://checksoma.com/login" onClick={() => trackCTAClick("Login", "navbar")} className="text-sm font-semibold text-white hover:text-white/80 transition-colors">
            Login
          </a>
          <a
            href="https://app.checksoma.com"
            onClick={() => trackCTAClick("Get Started", "navbar")}
            className="px-6 py-3 text-sm font-medium text-soma-black bg-white rounded-full hover:bg-white/90 transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Floating mobile logo */}
      <Link
        href="/"
        aria-label="Soma home"
        onClick={goHome}
        className="lg:hidden fixed top-4 left-4 z-[60] flex items-center rounded-xl bg-soma-black px-3 py-2.5 shadow-lg animate-menuLink"
        style={{ animationDelay: "0.1s" }}
      >
        <Image src={somaWhite} alt="Soma" width={118} height={26} className="brightness-0 invert" />
      </Link>

      {/* Floating mobile menu button */}
      <button
        onClick={() => (open ? closeMenu() : openMenu())}
        className="lg:hidden fixed top-4 right-4 z-[60] flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-xl bg-soma-black shadow-lg animate-menuLink"
        style={{ animationDelay: "0.15s" }}
        aria-label={open ? "Close menu" : "Menu"}
        aria-expanded={open}
      >
        <span className={`block w-5 h-0.5 bg-white transition-transform duration-300 ${open && !closing ? "translate-y-[3.5px] rotate-45" : ""}`} />
        <span className={`block w-5 h-0.5 bg-white transition-opacity duration-300 ${open && !closing ? "opacity-0" : ""}`} />
        <span className={`block w-5 h-0.5 bg-white transition-transform duration-300 ${open && !closing ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
      </button>

      {/* Mobile full-screen menu */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className={`fixed inset-0 z-50 lg:hidden flex flex-col bg-soma-black overscroll-none ${
            closing ? "animate-menuPanelOut" : "animate-menuPanelIn"
          }`}
        >
          {/* Links */}
          <nav className="flex flex-1 flex-col justify-center px-6 py-4">
            {navItems.map((item, i) => (
              <a
                key={item.label}
                href={`/#${item.hash}`}
                onClick={(e) => handleNavClick(e, item)}
                className={`group flex items-center gap-4 rounded-2xl py-2.5 transition-colors ${
                  closing ? "animate-menuLinkOut" : "animate-menuLink"
                }`}
                style={{
                  animationDelay: closing
                    ? `${(navItems.length - 1 - i) * 0.04}s`
                    : `${0.2 + i * 0.07}s`,
                }}
              >
                <span className="w-5 shrink-0 font-mono text-[11px] text-soma-blue">
                  0{i + 1}
                </span>
                <span className="text-[34px] font-semibold uppercase leading-none tracking-tight text-white transition-colors group-hover:text-soma-blue sm:text-[40px]">
                  {item.label}
                </span>
                <MoveRight
                  size={22}
                  strokeWidth={1.75}
                  className="ml-auto -translate-x-2 text-soma-blue opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                />
              </a>
            ))}
          </nav>

          {/* Bottom CTAs */}
          <div
            className={`shrink-0 border-t border-white/10 px-6 pt-5 pb-8 flex flex-col gap-3 ${
              closing ? "animate-menuLinkOut" : "animate-menuLink"
            }`}
            style={{ animationDelay: closing ? "0.06s" : "0.5s" }}
          >
            <a
              href="https://checksoma.com/login"
              onClick={() => trackCTAClick("Login", "navbar-mobile")}
              className="rounded-full border border-white/15 py-3 text-center text-[15px] font-semibold text-white transition-colors active:bg-white/10"
            >
              Login
            </a>
            <a
              href="https://app.checksoma.com"
              onClick={() => trackCTAClick("Get Started", "navbar-mobile")}
              className="rounded-full bg-white py-3.5 text-center text-[15px] font-semibold text-soma-black transition-colors active:bg-white/80"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
