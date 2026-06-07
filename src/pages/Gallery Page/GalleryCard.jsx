import React from 'react';

const GalleryCard = ({ item }) => {
  return (
    <div className="group relative w-full h-80 cursor-pointer outline-none font-inter">
      
      <div className="absolute inset-0 bg-white/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-[#6366F1]/20 z-10 transition-all duration-500 shadow-[0_10px_35px_rgba(30,27,75,0.05)] group-hover:shadow-[0_20px_50px_rgba(79,70,229,0.18)] group-hover:-translate-y-2.5">
        <div className="w-full h-3/5 overflow-hidden relative bg-[#E0F2FE]/30 border-b border-[#E0E7FF]">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover opacity-95 group-hover:scale-108 transition-transform duration-700 ease-out"
          />
          <div className="absolute top-3 left-3 bg-gradient-to-r from-[#F59E0B] to-[#F59E0B]/90 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
            {item.category || "Featured"}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B4B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="p-2.5 rounded-full bg-white/80 backdrop-blur-sm text-[#4F46E5] transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-md">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </span>
          </div>
        </div>
        <div className="p-5 h-2/5 flex flex-col justify-between bg-gradient-to-b from-white/10 to-white/70">
          <div>
            <h3 className="text-[#1E1B4B] font-bold text-base md:text-lg mb-1 tracking-tight group-hover:text-[#4F46E5] transition-colors duration-300 truncate">
              {item.title}
            </h3>
            <p className="text-[#4B5563] text-xs font-medium line-clamp-2 leading-relaxed">
              {item.subtitle}
            </p>
          </div>
          <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#E0E7FF]/60 text-[11px] font-semibold text-[#6366F1] tracking-wide uppercase">
            <span>View Details</span>
            <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </div>
        </div>

      </div>
      <div className="absolute inset-2 bg-gradient-to-r from-[#3B82F6] to-[#4F46E5] opacity-0 group-hover:opacity-15 blur-2xl transition-all duration-500 rounded-2xl -z-0 scale-95 group-hover:scale-105"></div>

    </div>
  );
};

export default GalleryCard;