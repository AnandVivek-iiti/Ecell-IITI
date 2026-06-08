import React from 'react';

const GalleryCard = ({ item, onExplore }) => {
  return (
    <div className="group relative w-full h-[380px] font-inter">
      <div className="absolute inset-0 bg-white/70 backdrop-blur-md rounded-[24px] overflow-hidden border border-[#E0E7FF] z-10 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-[0_12px_40px_-15px_rgba(30,27,75,0.04)] group-hover:shadow-[0_25px_50px_-12px_rgba(99,102,241,0.15)] group-hover:-translate-y-3">
        <div className="w-full h-[58%] overflow-hidden relative bg-[#E0F2FE]/30 border-b border-[#E0E7FF]">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-108"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=600&auto=format&fit=crop";
            }}
          />
          <div className="absolute top-4 left-4 bg-[#F59E0B] text-white text-[9px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-md shadow-sm">
            {item.category || "Featured"}
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-[#E0E7FF]/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400" />
        </div>
        <div className="p-6 h-[42%] flex flex-col justify-between bg-white/50">
          <div>
            <h3 className="text-[#1E1B4B] font-extrabold text-lg mb-1.5 tracking-tight group-hover:text-[#6366F1] transition-colors duration-300 truncate">
              {item.title}
            </h3>
            <p className="text-[#4B5563] text-xs font-medium line-clamp-2 leading-relaxed">
              {item.subtitle}
            </p>
          </div>
          <div 
            onClick={onExplore}
            className="flex items-center justify-between mt-2 pt-3 border-t border-[#E0E7FF] text-[10px] font-bold text-[#6366F1] tracking-widest uppercase cursor-pointer group/btn"
          >
            <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#6366F1] after:transition-all after:duration-300 group-hover/btn:after:w-full">
              Explore Album
            </span>
            <div className="w-6 h-6 rounded-md bg-[#E0F2FE] flex items-center justify-center border border-[#E0E7FF] shadow-sm transition-all duration-300 group-hover/btn:bg-[#6366F1] group-hover/btn:text-white group-hover/btn:border-[#6366F1]">
              <span className="transform translate-x-0 group-hover/btn:translate-x-0.5 transition-transform duration-300 text-xs">→</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-4 bg-gradient-to-r from-[#E0F2FE] to-[#E0E7FF] opacity-0 group-hover:opacity-60 blur-2xl transition-all duration-500 ease-out rounded-3xl -z-0 scale-95 group-hover:scale-105" />
    </div>
  );
};

export default GalleryCard;