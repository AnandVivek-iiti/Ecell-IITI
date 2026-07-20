import React from "react";
import { ArrowUpRight } from "lucide-react";

const GalleryCard = ({ item, onExplore }) => {
  return (
    <div
      onClick={onExplore}
      className="group relative cursor-pointer overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_30px_80px_rgba(59,130,246,.12)]"
    >
      {/* Image - edge to edge, no fixed height percentage */}
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=600&auto=format&fit=crop";
          }}
        />

        {/* Gradient overlay - lighter and more premium */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Floating glass badge - matches Events page */}
        <div className="absolute left-6 top-6 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white backdrop-blur-xl">
          {item.category || "Gallery"}
        </div>
      </div>

      {/* Content - flex column with auto height */}
      <div className="flex flex-col p-8">
        <h3 className="text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
          {item.title}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-7 text-slate-600">
          {item.subtitle}
        </p>

        {/* CTA with arrow - matches Events page style */}
        <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-5">
          <span className="text-sm font-semibold text-slate-500 transition-colors duration-300 group-hover:text-blue-600">
            Explore Album
          </span>

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-lg transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110">
            <ArrowUpRight size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;