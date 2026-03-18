export default function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-zinc-950 p-7 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:shadow-[0_0_40px_rgba(250,204,21,0.08)]">
      <div className="mb-5 inline-flex rounded-xl bg-yellow-400/10 p-3 text-yellow-400">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
      <p className="text-sm leading-7 text-zinc-400">{desc}</p>
    </div>
  );
}