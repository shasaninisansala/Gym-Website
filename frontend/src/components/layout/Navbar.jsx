import { Menu } from "lucide-react";
import { navLinks } from "../../data/siteData";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 lg:px-8">
        
        <a href="#home" className="flex items-center shrink-0">
          <img
            src="/logo.png"
            alt="Fitness Sports Center logo"
            className="h-28 w-auto object-contain"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[16px] font-medium text-zinc-300 transition hover:text-yellow-400"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-yellow-400 px-6 py-3 text-sm font-bold text-black transition hover:bg-yellow-300"
          >
            Join Now
          </a>
        </div>

        <button className="rounded-xl border border-white/10 p-2 text-zinc-200 lg:hidden">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}