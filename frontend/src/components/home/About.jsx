import { CircleCheck } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

export default function About() {
  return (
    <section id="about" className="bg-black py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:px-8">
        <div className="relative w-full max-w-[520px]">
          <div className="absolute -left-4 -top-4 h-24 w-24 border-l-4 border-t-4 border-yellow-400" />
          <div className="absolute -bottom-4 -right-3 h-24 w-24 border-b-4 border-r-4 border-yellow-400" />

          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1200&q=80"
              alt="Fitness center"
              className="relative z-10 h-[500px] w-[512px] rounded-[16px] object-cover grayscale transition duration-500 hover:grayscale-0"
            />
          </div>
        </div>

        <div className="max-w-[560px]">
          <SectionTitle
            eyebrow="Our Evolution"
            title="Elevate Your Fitness Game"
            align="left" 
          />

          <p className="text-base leading-8 text-zinc-300">
            We provide a premium fitness experience tailored to your personal goals.
            Our facility combines cutting-edge technology with expert human coaching
            to ensure every workout counts toward your ultimate transformation.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              "Modern equipment from top manufacturers",
              "Certified trainers with 5+ years experience",
              "Personalized programs for every body type",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-zinc-200">
                <CircleCheck className="mt-1 h-6 w-6 shrink-0 text-yellow-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-yellow-400 px-8 py-3 text-sm font-bold text-black transition hover:bg-yellow-300"
          >
            Learn More
            
          </a>
        </div>
      </div>
    </section>
  );
}