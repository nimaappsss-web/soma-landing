import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram } from "iconsax-react";
import somaWhite from "../../../../public/somaWhite.svg";

const footerLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Knowledge Base", href: "#kb" },
  { label: "Support", href: "#support" },
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms of Service", href: "#terms" },
];

export function Footer() {
  return (
    <footer className="w-full bg-soma-black rounded-[30px] mt-2 mb-[10px] px-[18px] md:px-[62px] py-8 md:py-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
        {/* Logo */}
        <Image src={somaWhite} alt="SOMA" width={80} height={30} />

        {/* Social icons */}
        <div className="flex items-center gap-4 border border-white/15 rounded-[35px] px-[13px] py-[11px]">
          <Link href="#" className="text-white hover:text-white/80 transition-colors">
            <Facebook variant="Bold" size={24} color="currentColor" />
          </Link>
          <Link href="#" className="text-white hover:text-white/80 transition-colors">
            <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </Link>
          <Link href="https://www.instagram.com/checksomaapp/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
            <Instagram variant="Bold" size={24} color="currentColor" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
        {/* Copyright */}
        <p className="text-[13px] text-[#626262]">
          &copy; 2026 Soma. All Rights Reserved.
        </p>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[13px] text-[#626262] hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
