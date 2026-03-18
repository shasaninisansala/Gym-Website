import { trainers } from "../../data/siteData";
import SectionTitle from "../ui/SectionTitle";
import TrainerCard from "../ui/TrainerCard";

export default function Trainers() {
  return (
    <section id="trainers" className="bg-black py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <SectionTitle title="Meet Experts" align="left" />
          <a href="#contact" className="text-sm font-semibold text-yellow-400 hover:text-yellow-300">
            View All
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {trainers.map((trainer) => (
            <TrainerCard key={trainer.name} trainer={trainer} />
          ))}
        </div>
      </div>
    </section>
  );
}