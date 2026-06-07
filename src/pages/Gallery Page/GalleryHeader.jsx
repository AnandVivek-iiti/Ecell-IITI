import React from 'react';

const GalleryHeader = () => {
  return (
    <div className="text-center mb-10 px-4 font-inter relative">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#6366F1]/40 text-white text-xs font-semibold uppercase tracking-wider mb-5 shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
        Interactive Media Gallery
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold text-[#1E1B4B] mb-5 tracking-tight max-w-4xl mx-auto leading-none">
        Moments of <span className="bg-gradient-to-r from-[#3B82F6] to-[#4F46E5] bg-clip-text text-transparent">Entrepreneurship</span>
      </h1>
      <p className="text-base md:text-xl text-[#4B5563] font-normal max-w-2xl mx-auto leading-relaxed opacity-90">
        Explore the journey of our Entrepreneurs through E-Summit, 
        Pitch Sessions, workshops, and networking events.
      </p>
    </div>
  );
};

export default GalleryHeader;