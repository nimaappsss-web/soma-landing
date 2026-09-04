import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Message } from "iconsax-react";
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
        <div className="flex items-center gap-4">
          <Link href="#" className="text-white hover:text-white/80 transition-colors">
            <Facebook variant="Bold" size={20} color="currentColor" />
          </Link>
          <Link href="#" className="text-white hover:text-white/80 transition-colors">
            <Message variant="Bold" size={20} color="currentColor" />
          </Link>
          <Link href="#" className="text-white hover:text-white/80 transition-colors">
            <Instagram variant="Bold" size={20} color="currentColor" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
        {/* Copyright */}
        <p className="text-[13px] text-white/40">
          &copy; 2026 Soma. All Rights Reserved.
        </p>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[13px] text-white/60 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
