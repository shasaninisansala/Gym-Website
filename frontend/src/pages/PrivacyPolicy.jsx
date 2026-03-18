import { motion } from "framer-motion";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen bg-black px-5 py-20 text-white lg:px-8"
      >
        <div className="mx-auto max-w-4xl">

          {/* Header */}
          <div className="mb-10 flex items-center gap-4">
            <div className="rounded-2xl bg-yellow-400/10 p-3 text-yellow-400">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
                Legal
              </p>
              <h1 className="font-anton text-4xl uppercase md:text-6xl">
                Privacy Policy
              </h1>
            </div>
          </div>

          {/* Glass Card */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-[20px] p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">

            <p className="mb-8 text-sm text-zinc-400">
              Last updated: March 2026
            </p>

            <div className="space-y-8 text-zinc-300">
              <div>
                <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
                <p>
                  We respect your privacy and are committed to protecting your personal information.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
                <p>
                  We may collect your name, email, phone number, and messages submitted through forms.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-3">3. Usage</h2>
                <p>
                  Your data is used to improve services, respond to inquiries, and provide updates.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-3">4. Security</h2>
                <p>
                  We implement appropriate security measures to protect your information.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-3">5. Contact</h2>
                <p>
                  Email us at <span className="text-yellow-400">hello@fitnesscenter.com</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </motion.section>

      <Footer />
    </>
  );
}