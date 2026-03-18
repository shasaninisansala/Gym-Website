export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80"
          alt="Gym hero"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-black/80" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

      <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-yellow-400">
            Power. Discipline. Results.
          </p>

          <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-tight text-white md:text-7xl xl:text-8xl">
            Transform Your
            <span className="mt-2 block text-yellow-400">Body & Mind</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-zinc-300 md:text-lg">
            Experience world-class training with our certified professional trainers
            and state-of-the-art facilities designed for your evolution.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#membership"
              className="inline-flex items-center rounded-full bg-yellow-400 px-7 py-3.5 text-sm font-bold text-black transition hover:bg-yellow-300"
            >
              Join Now
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-bold text-white transition hover:border-yellow-400 hover:text-yellow-400"
            >
              View Plans
            </a>
          </div>
        </div>

        <div className="hidden lg:block" />
      </div>
    </section>
  );
}