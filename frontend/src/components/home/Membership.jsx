import { motion } from "framer-motion";
import { plans } from "../../data/siteData";
import PlanCard from "../ui/PlanCard";
import SectionTitle from "../ui/SectionTitle";

export default function Membership() {
  return (
    <section id="membership" className="bg-[#050505] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle title="Membership Plans" />
        </motion.div>

        <motion.div
          className="grid gap-6 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.title}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <PlanCard plan={plan} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}