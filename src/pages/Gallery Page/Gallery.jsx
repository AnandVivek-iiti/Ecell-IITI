import React, { useState } from 'react';
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
      {/* 1. Main section – new className */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-indigo-50 pt-10 pb-28 font-inter selection:bg-blue-100 selection:text-slate-900">
        
        {/* 2. Background orbs – replaced stars */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute left-[-180px] top-0 h-[420px] w-[420px] rounded-full bg-blue-400/20 blur-[120px]" />
          <div className="absolute right-[-180px] top-[420px] h-[420px] w-[420px] rounded-full bg-indigo-500/20 blur-[120px]" />
        </div>

        {/* 3. Main container – simplified px-6 */}
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          
          {/* 4. Hero – inline, replacing <GalleryHeader /> */}
          <div className="mx-auto flex max-w-4xl flex-col items-center pt-24 pb-16 text-center">
            <span className="px-4 py-1.5 rounded-full bg-white/80 border border-indigo-100/80 text-indigo-600 text-xs font-bold tracking-widest uppercase shadow-sm">
            E-Cell IIT Indore
          </span>
            <h1 className="mt-8 text-5xl flex gap-4 font-black leading-tight md:text-7xl">
              <span className="text-slate-900">Our</span>
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                Gallery
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-slate-600">
              Relive the most memorable moments from flagship events,
              startup competitions, workshops and entrepreneurial journeys.
            </p>
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

          {/* 6. Empty state – updated classes */}
          {filteredItems.length === 0 && (
            <div className="text-center text-slate-500 mt-24 max-w-md mx-auto bg-white/70 backdrop-blur-md border border-blue-100 py-16 px-8 rounded-[34px] shadow-sm font-inter">
              <p className="font-bold text-lg text-slate-900 mb-1">No Moments Found</p>
              <p className="text-xs text-slate-500/80">Try browsing another event timeline category!</p>
            </div>
          )}
        </div>
      </section>

      {/* Album Overlay Modal Viewport – updated classes */}
      {activeAlbum && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-40 flex items-center justify-center p-4 md:p-12 transition-all duration-300 animate-in fade-in font-inter">
          <div className="bg-gradient-to-b from-blue-50/90 via-white/95 to-indigo-50/90 w-full h-full md:max-w-6xl md:h-[80vh] md:rounded-[36px] border border-white/60 shadow-[0_30px_60px_-15px_rgba(30,27,75,0.4)] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center px-8 py-5 bg-white/50 border-b border-blue-100 backdrop-blur-sm">
              <div>
                <span className="text-[10px] uppercase font-extrabold tracking-widest text-blue-600">Exhibition Catalog</span>
                <h3 className="text-xl font-black text-slate-900 tracking-tight">EVENT MEDIA STACK</h3>
              </div>
              <button 
                onClick={() => setActiveAlbum(null)}
                className="group w-10 h-10 rounded-full bg-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 text-slate-900 hover:text-white border border-blue-100 shadow-sm transition-all duration-300 flex items-center justify-center font-bold"
              >
                <span className="transform group-hover:rotate-90 transition-transform duration-300">✕</span>
              </button>
            </div>

            {/* Album Images Grid – updated classes */}
            <div className="flex-1 overflow-y-auto p-8 content-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {activeAlbum.map((imgUrl, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setMaximizedImage(imgUrl)}
                  className="group/item relative overflow-hidden rounded-[24px] border border-blue-100 h-52 bg-white shadow-sm hover:shadow-xl transition-all duration-300 cursor-zoom-in"
                >
                  <img 
                    src={imgUrl} 
                    alt="Event capture" 
                    className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500 ease-out"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-[10px] text-white font-bold tracking-widest uppercase bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      Maximize View
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Modal Footer – updated classes */}
            <div className="px-8 py-4 bg-white/60 border-t border-blue-100 text-right text-[11px] font-bold text-slate-500/80 uppercase tracking-wider">
              Total Assets: {activeAlbum.length} Items Captured
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Viewer – updated rounded */}
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
              className="max-w-full max-h-[85vh] object-contain rounded-[32px] shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-white/10"
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