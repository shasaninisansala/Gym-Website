import { Check } from "lucide-react";

export default function PlanCard({ plan }) {
  return (
    <div
      className={`relative rounded-3xl border p-8 transition duration-300 hover:-translate-y-1 ${
        plan.popular
          ? "border-yellow-400 bg-zinc-950 shadow-[0_0_45px_rgba(250,204,21,0.16)]"
          : "border-white/5 bg-zinc-950"
      }`}
    >
      {plan.popular ? (
        <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-black">
          Most Popular
        </span>
      ) : null}

      <h3 className="text-center text-xl font-bold text-white">{plan.title}</h3>

      <div className="mt-4 text-center">
        <span className="text-5xl font-black text-yellow-400">{plan.price}</span>
        <span className="text-sm text-zinc-400"> /mo</span>
      </div>

      <ul className="mt-8 space-y-4">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-zinc-300">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-yellow-400" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`mt-8 w-full rounded-full px-5 py-3 text-sm font-bold transition ${
          plan.popular
            ? "bg-yellow-400 text-black hover:bg-yellow-300"
            : "border border-yellow-400/40 text-yellow-400 hover:bg-yellow-400 hover:text-black"
        }`}
      >
        Get Started
      </button>
    </div>
  );
}