import React from 'react';
import { CATEGORIES } from './data';

const FilterBar = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white/40 backdrop-blur-md p-2 rounded-2xl border border-[#E0E7FF] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-wrap justify-center items-center gap-2 mb-12">
      {CATEGORIES.map((category) => {
        const isActive = activeCategory === category;
        
        return (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 outline-none relative overflow-hidden group
              ${isActive 
                ? 'bg-gradient-to-r from-[#F59E0B] to-[#4F46E5] text-white shadow-[0_4px_12px_rgba(79,70,229,0.25)] scale-102' 
                : 'text-[#4B5563] hover:text-[#1E1B4B] hover:bg-[#E0F2FE]/50'
              }`}
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            <span className="relative z-10">{category}</span>
          </button>
        );
      })}
    </div>
  );
};

export default FilterBar;