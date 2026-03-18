import { Mail, MapPin, Phone } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#050505] py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionTitle title="Get In Touch" align="left" />
          <p className="max-w-md text-zinc-400">
            Ready to start your transformation? Contact us for a free tour and consultation.
          </p>

          <div className="mt-8 space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-5 w-5 text-yellow-400" />
              <div>
                <p className="font-semibold text-white">Location</p>
                <p className="text-sm text-zinc-400">123 Fitness Ave, Muscle City</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="mt-1 h-5 w-5 text-yellow-400" />
              <div>
                <p className="font-semibold text-white">Phone</p>
                <p className="text-sm text-zinc-400">+94 77 123 4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="mt-1 h-5 w-5 text-yellow-400" />
              <div>
                <p className="font-semibold text-white">Email</p>
                <p className="text-sm text-zinc-400">hello@fitnesscenter.com</p>
              </div>
            </div>
          </div>
        </div>

        <form className="rounded-3xl border border-white/5 bg-zinc-950 p-6 md:p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
                Your Name
              </label>
              <input
                type="text"
                placeholder="John Wick"
                className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-yellow-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-yellow-400"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
                Message
              </label>
              <textarea
                rows={6}
                placeholder="How can we help you?"
                className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-yellow-400"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-yellow-400 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.2em] text-black transition hover:bg-yellow-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}