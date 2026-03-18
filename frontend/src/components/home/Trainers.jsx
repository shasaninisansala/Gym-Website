import { trainers } from "../../data/siteData";
import SectionTitle from "../ui/SectionTitle";
import TrainerCard from "../ui/TrainerCard";

export default function Trainers() {
  return (
    <section id="trainers" className="bg-black py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <div className="relative mb-10 flex items-center justify-center">
        <SectionTitle title="Meet Experts" align="center" />
        <a
          href="#contact"
          className="absolute right-0 text-[16px] font-semibold text-yellow-400 hover:text-yellow-300"
        >
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