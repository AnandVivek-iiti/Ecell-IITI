import React from 'react';

const GalleryHeader = () => {
  return (
    /* We add standard inline styles to force the Inter font stack safely */
    <div 
      className="text-center mb-14 px-4 relative"
      style={{ fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif' }}
    >
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#4F46E5] text-white text-[10px] font-bold uppercase tracking-widest mb-6 shadow-md relative overflow-hidden">
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer" />
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
        </span>
        <span className="relative z-10 text-white">Interactive Showcase</span>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#1E1B4B] mb-6 tracking-tight max-w-4xl mx-auto leading-[1.05]">
        Moments of{' '}
        <span className="bg-gradient-to-r from-[#3B82F6] to-[#4F46E5] bg-clip-text text-transparent">
          Entrepreneurship
        </span>
      </h1>

      <p className="text-sm sm:text-base md:text-lg text-[#4B5563] font-medium max-w-2xl mx-auto leading-relaxed">
        Explore the journey of our Entrepreneurs through E-Summit, Pitch Sessions, workshops, and networking events.
      </p>
    </div>
  );
};

export default GalleryHeader;