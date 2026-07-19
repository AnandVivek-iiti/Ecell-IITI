import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";

export default function CTA() {
  const navigate = useNavigate();

  return (
    <section className="relative pt-20 pb-32">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-[40px] bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 p-12 text-center shadow-[0_35px_100px_rgba(59,130,246,.25)] lg:p-20"
        >

          <span className="rounded-full bg-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white backdrop-blur-xl">

            JOIN THE COMMUNITY

          </span>

          <h2 className="mt-8 text-4xl font-black leading-tight text-white lg:text-6xl">

            Ready To Build

            <span className="block">

              Your Startup Journey?

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/90">

            Whether you're an aspiring entrepreneur, innovator or startup
            enthusiast, Entrepreneurship Cell IIT Indore provides the
            platform, mentorship and opportunities to transform ideas into
            impactful ventures.

          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <button
              onClick={() => navigate("/contact")}
              className="group inline-flex h-14 items-center rounded-full bg-white px-8 font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-1"
            >

              Contact Us

              <Mail className="ml-3 h-5 w-5" />

            </button>

            <button
              onClick={() => navigate("/events")}
              className="group inline-flex h-14 items-center rounded-full border border-white/40 bg-white/10 px-8 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
            >

              Explore Events

              <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />

            </button>

          </div>

        </motion.div>

      </div>

    </section>
  );
}