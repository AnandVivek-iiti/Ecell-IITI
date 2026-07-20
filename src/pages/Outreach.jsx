import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Sparkles, ArrowRight, Calendar, User, MapPin } from "lucide-react";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import GlassCard from "../components/ui/GlassCard";
import GradientButton from "../components/ui/GradientButton";

const ESummitOutreachPage = () => {
  const outreachPartners = [
    { id: 1, name: "IIT Bombay", logo: "/api/placeholder/120/120" },
    { id: 2, name: "BITS Pilani", logo: "/api/placeholder/120/120" },
    { id: 3, name: "NIT Trichy", logo: "/api/placeholder/120/120" },
    { id: 4, name: "IIM Ahmedabad", logo: "/api/placeholder/120/120" },
    { id: 5, name: "IIT Delhi", logo: "/api/placeholder/120/120" },
    { id: 6, name: "VIT Vellore", logo: "/api/placeholder/120/120" },
  ];

  const speakers = [
    {
      id: 1,
      name: "Peyush Bansal",
      designation: "Co-Founder, Lenskart",
      type: "Upcoming Speaker",
      image: "/api/placeholder/400/400",
    },
    {
      id: 2,
      name: "Aman Gupta",
      designation: "Co-Founder & CMO, boAt",
      type: "Past Speaker",
      image: "/api/placeholder/400/400",
    },
    {
      id: 3,
      name: "Vineeta Singh",
      designation: "CEO, SUGAR Cosmetics",
      type: "Upcoming Speaker",
      image: "/api/placeholder/400/400",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-indigo-50">
      {/* Background orbs - same as other pages */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-[-180px] top-0 h-[420px] w-[420px] rounded-full bg-blue-400/20 blur-[120px]" />
        <div className="absolute right-[-180px] top-[420px] h-[420px] w-[420px] rounded-full bg-indigo-500/20 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* ─── Hero Section ─── */}
        <section className="mx-auto flex min-h-[75vh] max-w-4xl flex-col items-center justify-center pt-36 pb-24 text-center">
          <Reveal>
            <span className="px-4 py-1.5 rounded-full bg-white/80 border border-indigo-100/80 text-indigo-600 text-xs font-bold tracking-widest uppercase shadow-sm">
            E-Cell IIT Indore
          </span>

            <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
              <span className="text-slate-900">Outreach &</span>
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                Strategic Connections
              </span>
            </h1>

            <p className="mx-auto mt-10 max-w-4xl text-lg leading-9 text-slate-600">
              Discover our extensive network of partner institutions and the
              visionary founders joining us for the E-Summit.
            </p>

          </Reveal>
        </section>

        {/* ─── Outreach Partners ─── */}
        <Reveal>
          <section className="mb-24">
            <SectionHeading tag="NETWORK" title="Outreach Partners" align="left" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4"
            >
              {outreachPartners.map((partner) => (
                <motion.div
                  key={partner.id}
                  variants={itemVariants}
                  className="group cursor-pointer overflow-hidden rounded-[34px] border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_30px_80px_rgba(59,130,246,.12)]"
                >
                  <div className="flex flex-col items-center gap-5">
                    <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl bg-white p-3 shadow-sm transition-transform duration-500 group-hover:scale-105">
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="h-full w-full object-contain transition-all duration-500 group-hover:brightness-110"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                      {partner.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>
        </Reveal>

        {/* ─── Speakers ─── */}
        <Reveal>
          <section className="mb-24">
            <SectionHeading tag="SPEAKERS" title="E-Summit Speakers" align="left" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {speakers.map((speaker) => (
                <motion.div
                  key={speaker.id}
                  variants={itemVariants}
                  className="group cursor-pointer overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_30px_80px_rgba(59,130,246,.12)]"
                >
                  {/* Image section - matches Events/Gallery cards */}
                  <div className="relative overflow-hidden">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
                    
                    {/* Glass badge */}
                    <div className="absolute left-6 top-6 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white backdrop-blur-xl">
                      {speaker.type}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col p-8">
                    <h3 className="text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                      {speaker.name}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-slate-600">
                      {speaker.designation}
                    </p>

                    {/* Arrow CTA - matches Events/Gallery */}
                    <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-5">
                      <span className="text-sm font-semibold text-slate-500 transition-colors duration-300 group-hover:text-blue-600">
                        View Profile
                      </span>
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-lg transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110">
                        <ArrowRight size={18} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>
        </Reveal>

        {/* ─── CTA Section ─── */}
        <section className="pb-32">
          <Reveal>
            <GlassCard className="overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 py-16 px-8 text-center shadow-[0_40px_120px_rgba(59,130,246,.25)]">
              <h2 className="text-4xl font-black text-white md:text-5xl">
                Ready to Connect?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90">
                Become an outreach partner and collaborate with India's
                brightest minds at E-Summit IIT Indore.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-5">
                <GradientButton variant="light" to="/contact">
                  Contact Us
                </GradientButton>
                <GradientButton variant="outline-light" to="/about">
                  Learn More
                </GradientButton>
              </div>
            </GlassCard>
          </Reveal>
        </section>
      </div>
    </div>
  );
};

export default ESummitOutreachPage;