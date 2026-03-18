export default function StatCard({ icon: Icon, value, label }) {
  return (
  <div className="w-[282px] h-[190px] rounded-2xl border border-white/5 bg-white/5 backdrop-blur-[30px] p-6 flex flex-col justify-center items-center text-center shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition hover:-translate-y-1
  hover:border-yellow-400/40 hover:bg-white/10">
      <Icon className="mb-3 h-10 w-10 text-yellow-400" />
      <div className="text-3xl font-black text-yellow-400 md:text-4xl">{value}</div>
      <div className="mt-1 text-sm text-zinc-300">{label}</div>
    </div>
  );
}