import { navLinks } from "../../data/siteData";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Fitness Sports Center logo"
              className="h-12 w-12 rounded-full object-contain"
            />
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-white">
                Fitness
              </p>
              <p className="text-[10px] uppercase tracking-[0.35em] text-yellow-400">
                Sports Center
              </p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-7 text-zinc-400">
            Leading the fitness revolution since 2023. High-impact training, expert
            coaching, and a community that pushes you further.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
            Quick Links
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-zinc-400">
            {navLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="transition hover:text-yellow-400">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
            Services
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-zinc-400">
            <li>Weight Training</li>
            <li>Cardio Programs</li>
            <li>Personal Coaching</li>
            <li>Yoga & Flex</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
            Newsletter
          </h4>
          <p className="mt-5 text-sm leading-7 text-zinc-400">
            Get tips and exclusive member offers.
          </p>
          <div className="mt-4 flex rounded-full border border-white/10 bg-zinc-950 p-1">
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent px-4 py-2 text-sm text-white outline-none placeholder:text-zinc-500"
            />
            <button className="rounded-full bg-yellow-400 px-4 py-2 text-sm font-bold text-black transition hover:bg-yellow-300">
              Go
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-zinc-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Fitness Sports Center. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-yellow-400">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}