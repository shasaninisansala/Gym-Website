import { ArrowRight, Check } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

export default function About() {
  return (
    <section id="about" className="bg-black py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <div className="absolute -left-3 top-6 h-24 w-24 border-l-4 border-t-4 border-yellow-400" />
          <div className="absolute -bottom-3 right-4 h-24 w-24 border-b-4 border-r-4 border-yellow-400" />
          <img
            src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1200&q=80"
            alt="Fitness center"
            className="relative z-10 aspect-[4/3] w-full rounded-3xl object-cover grayscale"
          />
        </div>

        <div>
          <SectionTitle eyebrow="Our Evolution" title="Elevate Your Fitness Game" align="left" />
          <p className="text-base leading-8 text-zinc-300">
            We provide a premium fitness experience tailored to your personal goals.
            Our facility combines cutting-edge technology with expert human coaching.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              "Modern equipment from top manufacturers",
              "Certified trainers with 5+ years experience",
              "Personalized programs for every body type",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-zinc-200">
                <Check className="mt-1 h-4 w-4 shrink-0 text-yellow-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-3 text-sm font-bold text-black transition hover:bg-yellow-300"
          >
            Learn More <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}