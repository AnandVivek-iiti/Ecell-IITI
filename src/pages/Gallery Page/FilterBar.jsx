import React from 'react';
import { CATEGORIES } from './data';

const FilterBar = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white/50 backdrop-blur-md p-1.5 rounded-2xl border border-[#E0E7FF] shadow-[0_8px_30px_rgb(0,0,0,0.01)] flex flex-wrap justify-center items-center gap-2 mb-14">
      {CATEGORIES.map((category) => {
        const isActive = activeCategory === category;
        
        return (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 outline-none relative overflow-hidden group
              ${isActive 
                ? 'bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#F59E0B] text-white shadow-[0_10px_25px_-4px_rgba(99,102,241,0.35)] scale-105 font-extrabold tracking-widest' 
                : 'text-[#4B5563] hover:text-[#1E1B4B] hover:bg-[#E0F2FE]/50'
              }`}
          >
            {/* Embedded High-Velocity Light Shimmer Overlay */}
            {isActive && (
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full animate-shimmer" />
            )}

            {/* Subtle multi-color underline dot for inactive links on hover */}
            {!isActive && (
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gradient-to-r from-[#3B82F6] to-[#F59E0B] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}

            <span className="relative z-10">{category}</span>
          </button>
        );
      })}
    </div>
  );
};

export default FilterBar;