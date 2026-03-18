import { stats } from "../../data/siteData";
import StatCard from "../ui/StatCard";

export default function Stats() {
  return (
    <div className="mx-auto -mt-10 max-w-7xl px-5 pb-10 lg:px-8">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </div>
  );
}