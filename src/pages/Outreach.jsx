import React from 'react';

const ESummitOutreachPage = () => {
  const outreachPartners = [
    { id: 1, name: 'IIT Bombay', logo: '/api/placeholder/120/120' },
    { id: 2, name: 'BITS Pilani', logo: '/api/placeholder/120/120' },
    { id: 3, name: 'NIT Trichy', logo: '/api/placeholder/120/120' },
    { id: 4, name: 'IIM Ahmedabad', logo: '/api/placeholder/120/120' },
    { id: 5, name: 'IIT Delhi', logo: '/api/placeholder/120/120' },
    { id: 6, name: 'VIT Vellore', logo: '/api/placeholder/120/120' },
  ];

  const speakers = [
    { 
      id: 1, 
      name: 'Peyush Bansal', 
      designation: 'Co-Founder, Lenskart', 
      type: 'Upcoming Speaker', 
      image: '/api/placeholder/400/400' 
    },
    { 
      id: 2, 
      name: 'Aman Gupta', 
      designation: 'Co-Founder & CMO, boAt', 
      type: 'Past Speaker', 
      image: '/api/placeholder/400/400' 
    },
    { 
      id: 3, 
      name: 'Vineeta Singh', 
      designation: 'CEO, SUGAR Cosmetics', 
      type: 'Upcoming Speaker', 
      image: '/api/placeholder/400/400' 
    },
  ];

  return (
    <div className="relative min-h-screen font-sans bg-slate-50 text-gray-700 overflow-hidden z-0">
      
      {/* --- ANIMATED AMBIENT BACKGROUND --- */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#E0F2FE] blur-[120px] opacity-70 animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#E0E7FF] blur-[100px] opacity-70 animate-[pulse_6s_ease-in-out_infinite_reverse]"></div>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-28 pb-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="space-y-6 animate-[fadeInUp_1s_ease-out_forwards]">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#F59E0B] animate-pulse"></span>
            <p className="text-blue-600 tracking-widest text-xs font-bold uppercase">
              E-Cell IIT Indore
            </p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-800">
              Outreach & Speakers
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
            Discover our extensive network of partner institutions and the visionary founders joining us for the E-Summit.
          </p>
          
          <div className="flex items-center gap-3 pt-4">
            <div className="h-px w-12 bg-gradient-to-r from-[#F59E0B] to-transparent"></div>
            <span className="text-[#F59E0B] font-semibold tracking-wide">Building India's Startup Culture</span>
          </div>
        </div>
      </section>

      {/* --- OUTREACH PARTNERS SECTION --- */}
      <section className="relative py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-950">Our Outreach Partners</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-indigo-100 to-transparent"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {outreachPartners.map((partner, index) => (
            <div 
              key={partner.id} 
              // Staggered fade-in effect using inline style for delay
              style={{ animationDelay: `${index * 100}ms` }}
              className="group relative bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] rounded-2xl p-6 hover:shadow-indigo-500/10 hover:border-indigo-300 hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col items-center justify-center gap-5 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]"
            >
              {/* Inner glowing accent on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="relative w-24 h-24 bg-white rounded-2xl p-3 shadow-sm border border-slate-100 flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3 group-hover:shadow-md">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="font-bold text-indigo-950 text-center text-lg transition-colors group-hover:text-blue-600">
                {partner.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* --- E-SUMMIT SPEAKERS SECTION --- */}
      <section className="relative py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-950">E-Summit Speakers</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-indigo-100 to-transparent"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {speakers.map((speaker, index) => (
            <div 
              key={speaker.id} 
              style={{ animationDelay: `${index * 150}ms` }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 border border-slate-100 transition-all duration-500 ease-out hover:-translate-y-2 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]"
            >
              {/* Active Gradient Top Banner with animated shine */}
              <div className="h-36 bg-gradient-to-br from-blue-500 via-indigo-500 to-indigo-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[100%] group-hover:animate-[shimmer_1.5s_infinite]"></div>
                
                <div className="absolute -bottom-14 left-8">
                  <div className="relative w-28 h-28 rounded-2xl p-1 bg-white shadow-lg transform transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name} 
                      className="w-full h-full rounded-xl object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <div className="pt-20 pb-8 px-8">
                <span className={`text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4 inline-block shadow-sm transition-colors duration-300 ${
                  speaker.type.includes('Upcoming') 
                    ? 'bg-amber-50 text-amber-600 border border-amber-200/50 group-hover:bg-[#F59E0B] group-hover:text-white' 
                    : 'bg-indigo-50 text-indigo-600 border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white'
                }`}>
                  {speaker.type}
                </span>
                <h3 className="text-2xl font-bold text-slate-800 mb-1 group-hover:text-indigo-600 transition-colors duration-300">
                  {speaker.name}
                </h3>
                <p className="text-slate-500 font-medium">
                  {speaker.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global styles for custom keyframes (Can be added to index.css or tailwind.config) */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </div>
  );
};

export default ESummitOutreachPage;