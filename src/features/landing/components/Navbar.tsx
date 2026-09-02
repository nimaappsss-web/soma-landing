import Image from "next/image";

export function Navbar() {
  return (
    <nav className="relative z-20 w-full">
      <div className="max-w-[1294px] mx-auto flex items-center justify-between px-10 pt-[53px] pb-4">
        <Image src="/somaWhite.svg" alt="Soma" width={130} height={28} className="brightness-0 invert" />

      <div className="hidden md:flex items-center gap-8 px-8 h-[53px] rounded-[20px] border border-white/15 bg-white/5 backdrop-blur-sm">
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

        <div className="flex items-center gap-6">
          <a href="#login" className="text-sm font-semibold text-white hover:text-white/80 transition-colors">
            Login
          </a>
          <a
            href="#get-started"
            className="px-6 py-3 text-sm font-medium text-soma-black bg-white rounded-full hover:bg-white/90 transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
