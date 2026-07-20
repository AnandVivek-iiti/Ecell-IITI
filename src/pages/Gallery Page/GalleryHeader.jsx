import React from 'react';

const GalleryHeader = () => {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center pt-24 pb-16 text-center">

      <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-6 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-blue-700 backdrop-blur-xl">
        Interactive Showcase
      </span>

      <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
        <span className="text-slate-900">
          Our
        </span>

        <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
          Gallery
        </span>
      </h1>

      <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-slate-600">
        Explore unforgettable moments from E-Summit, startup competitions,
        workshops, networking sessions and the entrepreneurial journey at
        IIT Indore.
      </p>

    </div>
  );
};

export default GalleryHeader;