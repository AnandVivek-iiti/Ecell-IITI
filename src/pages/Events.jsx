import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { events } from "../data/event";
import GradientButton from "../components/ui/GradientButton";

const Events = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-indigo-50 pt-10 pb-28 px-6 md:px-10">
      {/* Standard background orbs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-[-180px] top-0 h-[420px] w-[420px] rounded-full bg-blue-400/20 blur-[120px]" />
        <div className="absolute right-[-180px] top-[420px] h-[420px] w-[420px] rounded-full bg-indigo-500/20 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ─── Hero (adjusted spacing and heading) ─── */}
        <div className="mx-auto flex max-w-4xl flex-col items-center pt-24 pb-16 text-center">
          <span className="px-4 py-1.5 rounded-full bg-white/80 border border-indigo-100/80 text-indigo-600 text-xs font-bold tracking-widest uppercase shadow-sm">
            E-Cell IIT Indore
          </span>

          <h1 className="mt-8 text-5xl flex gap-4 font-black leading-tight md:text-7xl">
            <span className="text-slate-900">Events & </span>
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
               Experiences
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-slate-600">
            Discover competitions, startup showcases, entrepreneurial
            workshops, founder talks and innovation-driven experiences
            organized by E-Cell IIT Indore.
          </p>

        </div>

        {/* ─── Event Cards ─── */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: event.id * 0.08 }}
              whileHover={{ y: -10 }}
              onClick={() => navigate(`/events/${event.id}`)}
              className="group cursor-pointer overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(59,130,246,.12)]"
            >
              {/* Image + overlay + badge */}
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-blue-600 backdrop-blur-xl">
                  Event
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-amber-500">
                    {event.date}
                  </span>
                </div>

                <h3 className="mb-4 text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                  {event.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {event.shortDesc}
                </p>

                {/* Arrow CTA */}
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-500">
                    Explore Event
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white transition duration-300 group-hover:translate-x-2">
                    →
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ─── Bottom CTA ─── */}
        <div className="mt-24 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Want to attend our next event?
          </h2>
          <p className="mt-4 text-slate-600">
            Stay connected with E-Cell IIT Indore.
          </p>
          <div className="mt-8">
            <GradientButton>Explore More Events</GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;