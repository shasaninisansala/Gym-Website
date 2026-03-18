import { motion } from "framer-motion";
import camera from "../../assets/images/camera.png";
import facebook from "../../assets/images/communication.png";
import twitter from "../../assets/images/twitter.png";

export default function TrainerCard({ trainer }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5 }}
      className="group overflow-hidden rounded-3xl border border-white/5 bg-zinc-950 transition"
    >
      {/* Image */}
      <div className="aspect-[4/5] overflow-hidden bg-zinc-900">
        <motion.img
          src={trainer.image}
          alt={trainer.name}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-white">{trainer.name}</h3>
        <p className="mt-1 text-sm font-medium text-yellow-400">
          {trainer.role}
        </p>

        {/* Social icons */}
        <div className="mt-4 flex gap-4">
          
          <motion.a
            whileHover={{ scale: 1.2 }}
            href={trainer.social.instagram}
            target="_blank"
          >
            <img src={camera} className="h-5 w-5" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2 }}
            href={trainer.social.facebook}
            target="_blank"
          >
            <img src={facebook} className="h-5 w-5" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2 }}
            href={trainer.social.twitter}
            target="_blank"
          >
            <img src={twitter} className="h-5 w-5" />
          </motion.a>

        </div>
      </div>
    </motion.div>
  );
}