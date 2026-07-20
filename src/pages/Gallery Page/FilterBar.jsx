import React from 'react';
import { CATEGORIES } from './data';

const FilterBar = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="mx-auto mb-20 flex max-w-4xl flex-wrap items-center justify-center gap-3 rounded-full border border-blue-100 bg-white/70 p-2 backdrop-blur-xl shadow-lg">
      {CATEGORIES.map((category) => {
        const isActive = activeCategory === category;

        return (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 outline-none relative overflow-hidden group
              ${
                isActive
                  ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-[0_10px_25px_-4px_rgba(99,102,241,0.35)] scale-105 font-extrabold tracking-widest'
                  : 'text-slate-600 hover:text-blue-700 hover:bg-blue-50'
              }`}
          >
            {/* Embedded High-Velocity Light Shimmer Overlay */}
            {isActive && (
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full animate-shimmer" />
            )}

            {/* Subtle multi-color underline dot for inactive links on hover */}
            {!isActive && (
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}

            <span className="relative z-10">{category}</span>
          </button>
        );
      })}
    </div>
  );
};

export default FilterBar;