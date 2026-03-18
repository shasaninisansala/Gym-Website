import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "../../data/siteData";
import SectionTitle from "../ui/SectionTitle";

export default function Testimonials() {
  return (
    <section className="bg-black py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle title="Success Stories" />
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
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
          {testimonials.map((item) => (
            <motion.div
              key={item.name}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4 }}
              className="relative min-h-[260px] overflow-hidden rounded-3xl border border-white/5 bg-zinc-950 p-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute left-5 top-4"
              >
                <Quote className="h-10 w-10 text-yellow-400/10" strokeWidth={1.5} />
              </motion.div>

              <div className="relative z-10 flex h-full flex-col justify-between">
                <p className="text-sm leading-7 text-zinc-300">
                  {item.text}
                </p>

                <div className="mt-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400/20 text-xl font-bold text-yellow-400">
                    {item.initials}
                  </div>

                  <div>
                    <div className="text-xl font-semibold text-white">{item.name}</div>
                    <div className="text-sm text-zinc-400">{item.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}