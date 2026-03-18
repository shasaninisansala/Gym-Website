import { testimonials } from "../../data/siteData";
import SectionTitle from "../ui/SectionTitle";

export default function Testimonials() {
  return (
    <section className="bg-black py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle title="Success Stories" />
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-3xl border border-white/5 bg-zinc-950 p-6">
              <p className="text-sm leading-7 text-zinc-300">“{item.text}”</p>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-400/10 text-sm font-bold text-yellow-400">
                  {item.initials}
                </div>
                <div>
                  <div className="font-semibold text-white">{item.name}</div>
                  <div className="text-xs text-zinc-400">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}