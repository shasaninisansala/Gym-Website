import { services } from "../../data/siteData";
import ServiceCard from "../ui/ServiceCard";
import SectionTitle from "../ui/SectionTitle";

export default function Services() {
  return (
    <section id="services" className="bg-[#050505] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle title="Our Services" />
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}