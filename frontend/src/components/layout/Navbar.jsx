import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks } from "../../data/siteData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#home" className="flex shrink-0 items-center">
            <img
              src="/logo.png"
              alt="Fitness Sports Center logo"
              className="h-24 w-auto object-contain md:h-28"
            />
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-[16px] font-medium text-zinc-300 transition duration-300 hover:text-yellow-400"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-3 text-sm font-bold text-black transition duration-300 hover:scale-105 hover:bg-yellow-300"
            >
              Join Now
            </a>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-zinc-200 transition hover:border-yellow-400/40 hover:text-yellow-400 lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[999] lg:hidden transition-all duration-500 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/80 backdrop-blur-xl transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        <div
          className={`absolute inset-0 flex flex-col bg-[#050505]/95 px-6 pt-6 pb-10 transition-transform duration-500 ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="flex items-center"
            >
              <img
                src="/logo.png"
                alt="Fitness Sports Center logo"
                className="h-20 w-auto object-contain"
              />
            </a>

            <button
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-zinc-200 transition hover:border-yellow-400/40 hover:text-yellow-400"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="mt-16 flex flex-1 flex-col justify-center gap-8">
            {navLinks.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="border-b border-white/5 pb-4 font-anton text-[34px] uppercase leading-none tracking-tight text-white transition duration-300 hover:translate-x-2 hover:text-yellow-400 sm:text-[42px]"
                style={{
                  transitionDelay: isOpen ? `${index * 60}ms` : "0ms",
                }}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="mt-10 space-y-5">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-yellow-400 px-6 py-4 text-base font-bold text-black transition duration-300 hover:bg-yellow-300"
            >
              Join Now
            </a>

            <p className="text-center text-sm text-zinc-400">
              Push your limits. Build your strength.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}