import React, { useRef, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { sponsorData } from "../data/sponsors";

// ─── Spotlight Card ──────────────────────────────────────────────────────
const SpotlightCard = ({ children, index }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setOpacity(1)}
        onMouseLeave={() => setOpacity(0)}
        className="group relative flex h-full flex-col overflow-hidden rounded-[32px] border border-slate-200/70 bg-white/70 p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/15 cursor-default"
      >
        {/* Mouse spotlight */}
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
          style={{
            opacity,
            WebkitMaskImage: `radial-gradient(420px circle at ${position.x}px ${position.y}px, black 20%, transparent 100%)`,
            maskImage: `radial-gradient(420px circle at ${position.x}px ${position.y}px, black 20%, transparent 100%)`,
          }}
        >
          <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pixel-matrix" width="24" height="24" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" fill="#4f46e5" fillOpacity="0.15" />
                <rect x="8" y="4" width="4" height="4" fill="#7c3aed" fillOpacity="0.25" />
                <rect x="16" y="0" width="4" height="4" fill="#4f46e5" fillOpacity="0.1" />
                <rect x="20" y="8" width="4" height="4" fill="#6366f1" fillOpacity="0.2" />
                <rect x="4" y="12" width="4" height="4" fill="#7c3aed" fillOpacity="0.15" />
                <rect x="12" y="16" width="4" height="4" fill="#4f46e5" fillOpacity="0.25" />
                <rect x="20" y="20" width="4" height="4" fill="#6366f1" fillOpacity="0.1" />
                <rect x="0" y="20" width="4" height="4" fill="#7c3aed" fillOpacity="0.2" />
                <rect x="8" y="12" width="4" height="4" fill="#6366f1" fillOpacity="0.1" />
                <rect x="16" y="8" width="4" height="4" fill="#4f46e5" fillOpacity="0.15" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pixel-matrix)" />
          </svg>
        </div>

        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-500 z-0"
          style={{
            opacity: opacity * 0.5,
            background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(99, 102, 241, 0.12), transparent 100%)`,
          }}
        />

        {/* Floating shine */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div className="absolute -left-40 top-0 h-full w-28 -skew-x-12 bg-white/40 blur-xl group-hover:left-[130%] transition-all duration-1000" />
        </div>

        <div className="relative z-10 flex h-full flex-col">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

// ─── Main Component ──────────────────────────────────────────────────────
export default function SponsorsPage() {
  const totalSponsors = useMemo(() => sponsorData?.sponsors?.length || 0, []);

  if (!sponsorData || !sponsorData.sponsors) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
        <div className="animate-pulse text-indigo-600 font-semibold text-lg">Loading Sponsors...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4ff] via-[#f8faff] to-[#f0f5ff] font-sans selection:bg-indigo-100 selection:text-indigo-900 relative overflow-hidden">
      
      {/* ─── Hero Background Orbs ─── */}
      <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px] pointer-events-none" />
      <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-[120px] pointer-events-none" />

      {/* ─── Hero ─── */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-32 pb-16 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <span className="px-4 py-1.5 rounded-full bg-white/80 border border-indigo-100/80 text-indigo-600 text-xs font-bold tracking-widest uppercase shadow-sm">
            E-Cell IIT Indore
          </span>

          {/* Heading size reduced to match Team page: text-5xl md:text-7xl */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl">
            {sponsorData.hero.title}{" "}
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 drop-shadow-sm">
              {sponsorData.hero.titleAccent}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            {sponsorData.hero.subtitle}
          </p>
        </div>
      </div>

      {/* ─── Sponsor Count ─── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pb-6 relative z-10">
        <div className="flex items-center justify-start">
          <span className="text-sm font-semibold text-indigo-600 bg-indigo-50/80 px-4 py-1.5 rounded-full border border-indigo-100/50">
            {totalSponsors}+ Strategic Partners
          </span>
        </div>
      </div>

      {/* ─── Sponsors Grid ─── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pb-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
          {sponsorData.sponsors.map((sponsor, index) => (
            <SpotlightCard key={sponsor.id} index={index}>
              {/* Banner image */}
              {sponsor.banner && (
                <div className="mb-6 -mt-10 -mx-10 overflow-hidden rounded-t-[32px]">
                  <img
                    src={sponsor.banner}
                    alt={`${sponsor.name} banner`}
                    className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              {/* Logo & Header */}
              <div className="flex items-center space-x-4 mb-6">
                {sponsor.logo ? (
                  <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-2xl border border-slate-100 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <div
                    className="w-16 h-16 flex-shrink-0 rounded-2xl flex items-center justify-center text-xl font-black shadow-sm border border-slate-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                    style={{ backgroundColor: sponsor.logoBg, color: sponsor.logoColor }}
                  >
                    {sponsor.initials}
                  </div>
                )}
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                    {sponsor.name}
                  </h3>
                  <p className="text-xs font-semibold text-indigo-500 mt-1 uppercase tracking-wide">
                    {sponsor.tagline}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 flex-grow mb-10 text-[0.95rem] leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                {sponsor.description}
              </p>

              {/* Footer */}
              <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5 group-hover:border-indigo-100 transition-colors duration-300">
                <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-white text-slate-600 shadow-sm border border-slate-200/60">
                  {sponsor.focus}
                </span>
                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition-all duration-300 hover:border-indigo-500 hover:bg-indigo-500 hover:text-white hover:shadow-md hover:shadow-indigo-500/20"
                >
                  Website
                  <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>

      {/* ─── CTA – Gradient Glass Card ─── */}
      <div className="max-w-4xl mx-auto px-5 pb-24 relative z-10">
        <div className="rounded-[40px] bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 py-16 px-8 text-center shadow-[0_40px_120px_rgba(59,130,246,.25)] backdrop-blur-sm border border-white/20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {sponsorData.cta.title}
          </h2>
          <p className="text-lg text-white/90 mt-6 max-w-2xl mx-auto leading-relaxed">
            {sponsorData.cta.subtitle}
          </p>
          <a
            href={`mailto:${sponsorData.cta.email}`}
            className="inline-flex items-center justify-center mt-10 px-10 py-4 rounded-full bg-white font-bold text-indigo-700 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 hover:scale-105"
          >
            {sponsorData.cta.button}
          </a>
        </div>
      </div>
    </div>
  );
}