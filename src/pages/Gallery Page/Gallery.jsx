import React, { useState } from 'react';
import GalleryHeader from './GalleryHeader';
import FilterBar from './FilterBar';
import GalleryCard from './GalleryCard';
import { GALLERY_ITEMS } from './data';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All Events");

  const filteredItems = GALLERY_ITEMS.filter(item => 
    activeCategory === "All Events" ? true : item.category === activeCategory
  );

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#E0F2FE] via-white to-[#E0E7FF] py-20 font-inter overflow-hidden">
      
      
      <div className="absolute top-12 right-12 text-[#6366F1]/20 pointer-events-none animate-pulse hidden md:block">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.6L12 0Z"/>
        </svg>
      </div>

      <div className="absolute bottom-16 left-12 text-[#3B82F6]/15 pointer-events-none hidden md:block">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.6L12 0Z"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <GalleryHeader />
        <div className="flex items-center justify-center my-10 px-6">
          <div className="h-[1px] w-1/4 bg-gradient-to-r from-transparent to-[#E0E7FF]"></div>
          <div className="mx-4 text-xs tracking-widest text-[#4B5563]/40 font-semibold uppercase">Curated Showcase</div>
          <div className="h-[1px] w-1/4 bg-gradient-to-l from-transparent to-[#E0E7FF]"></div>
        </div>
        <FilterBar 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14 px-6 lg:px-8">
          {filteredItems.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
        {filteredItems.length === 0 && (
          <div className="text-center text-[#4B5563] mt-20 bg-white/30 backdrop-blur-sm border border-[#E0E7FF] py-12 mx-6 rounded-2xl shadow-sm">
            <svg className="mx-auto h-12 w-12 text-[#4B5563]/40 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 12h-15m0 0l6.75-6.75M4.5 12l6.75 6.75" />
            </svg>
            <p className="font-medium">No events found for this category.</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default Gallery;