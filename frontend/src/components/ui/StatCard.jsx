export default function StatCard({ icon: Icon, value, label }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-white/5 p-5 shadow-2xl backdrop-blur-sm transition hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-white/10">
      <Icon className="mb-3 h-5 w-5 text-yellow-400" />
      <div className="text-3xl font-black text-yellow-400 md:text-4xl">{value}</div>
      <div className="mt-1 text-sm text-zinc-300">{label}</div>
    </div>
  );
}