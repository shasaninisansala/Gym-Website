import { plans } from "../../data/siteData";
import PlanCard from "../ui/PlanCard";
import SectionTitle from "../ui/SectionTitle";

export default function Membership() {
  return (
    <section id="membership" className="bg-[#050505] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle title="Membership Plans" />
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard key={plan.title} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}