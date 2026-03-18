export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <img
          src="src\assets\images\hero.png"
          alt="Gym hero"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-black/70" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

      <div className="mx-auto flex min-h-[820px] max-w-7xl items-center px-8 pb-16 pt-20">
        <div className="w-full max-w-[768px]">
          <h1 className="font-anton uppercase leading-[1] tracking-[0px]">
            <span className="block text-[96px] text-white">
              Transform Your
            </span>
            <span className="mt-2 block text-[96px] text-[#FFD400]">
              Body & Mind
            </span>
          </h1>

          <p className="mt-8 max-w-[620px] text-[20px] leading-[1.6] text-zinc-300">
            Experience world class training with our certified professional trainers
            and state of the art facilities designed for your evolution. Start your
            journey today.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <a
              href="#membership"
              className="inline-flex h-[56px] items-center justify-center rounded-[24px] bg-[#FFD400] px-10 text-[18px] font-semibold text-black transition hover:bg-yellow-300"
            >
              Join Now
            </a>

            <a
              href="#services"
              className="inline-flex h-[56px] items-center justify-center rounded-[24px] border border-white/20 bg-black/30 px-10 text-[18px] font-semibold text-white backdrop-blur-sm transition hover:border-yellow-400 hover:text-yellow-400"
            >
              View Plans
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}