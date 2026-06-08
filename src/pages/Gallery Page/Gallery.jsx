import React, { useState } from 'react';
import GalleryHeader from './GalleryHeader';
import FilterBar from './FilterBar';
import GalleryCard from './GalleryCard';
import { GALLERY_ITEMS } from './data';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All Events");
  const [activeAlbum, setActiveAlbum] = useState(null);
  const [maximizedImage, setMaximizedImage] = useState(null);

  const filteredItems = GALLERY_ITEMS.filter(item => 
    activeCategory === "All Events" ? true : item.category === activeCategory
  );

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-b from-[#E0F2FE] via-white to-[#E0E7FF] py-24 font-inter overflow-hidden selection:bg-[#E0E7FF] selection:text-[#1E1B4B]">
        
        {/* Decorative Theme Elements */}
        <div className="absolute top-20 right-16 text-[#E0E7FF] pointer-events-none animate-float hidden lg:block">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z"/>
          </svg>
        </div>
        <div className="absolute bottom-32 left-16 text-[#E0F2FE] pointer-events-none animate-float-delayed hidden lg:block">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L15.5 8.5L24 12L15.5 15.5L12 24L8.5 15.5L0 12L8.5 8.5L12 0Z"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <GalleryHeader />
          
          <div className="flex items-center justify-center my-12 opacity-80">
            <div className="h-[1px] w-32 bg-gradient-to-r from-transparent to-[#E0E7FF]"></div>
            <div className="mx-6 text-[10px] tracking-[0.25em] text-[#4B5563]/60 font-bold uppercase font-inter">
              Curated Showcase
            </div>
            <div className="h-[1px] w-32 bg-gradient-to-l from-transparent to-[#E0E7FF]"></div>
          </div>

          <FilterBar 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory} 
          />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {filteredItems.map((item) => (
              <GalleryCard 
                key={item.id} 
                item={item} 
                onExplore={() => {
                  setActiveAlbum(item.albumImages || [item.image, item.image, item.image]);
                }} 
              />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center text-[#4B5563] mt-24 max-w-md mx-auto bg-white/60 backdrop-blur-md border border-[#E0E7FF] py-16 px-8 rounded-3xl shadow-sm font-inter">
              <p className="font-bold text-lg text-[#1E1B4B] mb-1">No Moments Found</p>
              <p className="text-xs text-[#4B5563]/80">Try browsing another event timeline category!</p>
            </div>
          )}
        </div>
      </section>

      {/* Album Overlay Modal Viewport */}
      {activeAlbum && (
        <div className="fixed inset-0 bg-[#1E1B4B]/80 backdrop-blur-md z-40 flex items-center justify-center p-4 md:p-12 transition-all duration-300 animate-in fade-in font-inter">
          <div className="bg-gradient-to-b from-[#E0F2FE]/90 to-white/95 w-full h-full md:max-w-6xl md:h-[80vh] md:rounded-[24px] border border-white/60 shadow-[0_30px_60px_-15px_rgba(30,27,75,0.4)] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
            
            <div className="flex justify-between items-center px-8 py-5 bg-white/50 border-b border-[#E0E7FF] backdrop-blur-sm">
              <div>
                <span className="text-[10px] uppercase font-extrabold tracking-widest text-[#6366F1]">Exhibition Catalog</span>
                <h3 className="text-xl font-black text-[#1E1B4B] tracking-tight">EVENT MEDIA STACK</h3>
              </div>
              <button 
                onClick={() => setActiveAlbum(null)}
                className="group w-10 h-10 rounded-full bg-white hover:bg-slate-900 text-[#1E1B4B] hover:text-white border border-[#E0E7FF] shadow-sm transition-all duration-300 flex items-center justify-center font-bold"
              >
                <span className="transform group-hover:rotate-90 transition-transform duration-300">✕</span>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 content-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {activeAlbum.map((imgUrl, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setMaximizedImage(imgUrl)}
                  className="group/item relative overflow-hidden rounded-xl border border-[#E0E7FF] h-52 bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-zoom-in"
                >
                  <img 
                    src={imgUrl} 
                    alt="Event capture" 
                    className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500 ease-out"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B4B]/50 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-[10px] text-white font-bold tracking-widest uppercase bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-md">
                      Maximize View
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="px-8 py-4 bg-white/40 border-t border-[#E0E7FF] text-right text-[11px] font-bold text-[#4B5563]/80 uppercase tracking-wider">
              Total Assets: {activeAlbum.length} Items Captured
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Viewer */}
      {maximizedImage && (
        <div 
          className="fixed inset-0 bg-slate-950/90 z-50 flex flex-col items-center justify-center p-4 animate-in fade-in duration-200 font-inter"
          onClick={() => setMaximizedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white font-bold text-sm bg-white/10 hover:bg-white/20 w-12 h-12 rounded-full backdrop-blur-md flex items-center justify-center transition-all shadow-lg z-50"
            onClick={() => setMaximizedImage(null)}
          >
            ✕
          </button>
          <div className="relative max-w-5xl max-h-[85vh] flex items-center justify-center select-none" onClick={(e) => e.stopPropagation()}>
            <img 
              src={maximizedImage} 
              alt="Maximized display capture" 
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-white/10"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop";
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;