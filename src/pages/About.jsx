import React, { useRef, useState } from 'react';
import { sponsorData } from '../data/sponsors';

const SpotlightCard = ({ children }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className="relative flex flex-col h-full overflow-hidden rounded-[1.5rem] border border-slate-200/70 bg-white/70 backdrop-blur-xl p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 group cursor-default"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        style={{
          opacity,
          WebkitMaskImage: `radial-gradient(300px circle at ${position.x}px ${position.y}px, black 15%, transparent 100%)`,
          maskImage: `radial-gradient(300px circle at ${position.x}px ${position.y}px, black 15%, transparent 100%)`,
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
          background: `radial-gradient(250px circle at ${position.x}px ${position.y}px, rgba(99, 102, 241, 0.1), transparent 100%)`,
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        {children}
      </div>
    </div>
  );
};

export default function About() {
  if (!sponsorData || !sponsorData.sponsors) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
        <div className="animate-pulse text-indigo-600 font-semibold text-lg">Loading Sponsors...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4ff] via-[#f8faff] to-[#f0f5ff] font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* --- HERO SECTION --- */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-24 pb-16 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6">
           <span className="px-4 py-1.5 rounded-full bg-white/80 border border-indigo-100/80 text-indigo-600 text-xs font-bold tracking-widest uppercase shadow-sm">
             {sponsorData.hero.eyebrow}
           </span>
           
           <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
             {sponsorData.hero.title}{" "}
             <br className="hidden md:block" />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 drop-shadow-sm">
               {sponsorData.hero.titleAccent}
             </span>
           </h1>
           
           <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
             {sponsorData.hero.subtitle}
           </p>
        </div>
      </div>

      {/* --- SPONSORS GRID --- */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pb-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsorData.sponsors.map((sponsor) => (
            <SpotlightCard key={sponsor.id}>
              
              {/* Logo & Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-black shadow-sm border border-slate-100"
                  style={{ backgroundColor: sponsor.logoBg, color: sponsor.logoColor }}
                >
                  {sponsor.initials}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">
                    {sponsor.name}
                  </h3>
                  <p className="text-xs font-semibold text-indigo-500 mt-1 uppercase tracking-wide">
                    {sponsor.tagline}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 flex-grow mb-8 text-[0.95rem] leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
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
                  className="text-sm font-bold text-slate-400 group-hover:text-indigo-600 transition-all flex items-center gap-1.5"
                >
                  Website 
                  <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
                </a>
              </div>

            </SpotlightCard>
          ))}
        </div>
      </div>

      {/* --- CTA SECTION --- */}
      <div className="bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-5 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-5 tracking-tight">
            {sponsorData.cta.title}
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            {sponsorData.cta.subtitle}
          </p>
          <a 
            href={`mailto:${sponsorData.cta.email}`} 
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-white bg-slate-900 hover:bg-indigo-600 shadow-xl hover:shadow-indigo-500/30 transform hover:-translate-y-1 transition-all duration-300"
          >
            {sponsorData.cta.button}
          </a>
        </div>
      </div>
      
    </div>
  );
}