import { useState } from "react";
import BlogHero from "./blog/Hero";
import BlogGrid from "./blog/Grid";
import BlogFilters from "./blog/Filters";
import FeaturedBlog from "./blog/Featured";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-indigo-50">

      {/* Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">

        <div className="absolute left-[-180px] top-0 h-[420px] w-[420px] rounded-full bg-blue-400/20 blur-[120px]" />

        <div className="absolute right-[-180px] top-[420px] h-[420px] w-[420px] rounded-full bg-indigo-500/20 blur-[120px]" />

      </div>

      <div className="mx-auto max-w-7xl px-6">

        {/* Hero */}
        <BlogHero />

        {/* Featured */}
        <section className="pb-24">
          <FeaturedBlog />
        </section>

        {/* Filters */}
        <section className="pb-20">
          <BlogFilters
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
          />
        </section>

        {/* Articles */}
        <section className="pb-28">

          <div className="mb-16 text-center">

            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-6 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-blue-700 backdrop-blur-xl">

              Latest Stories

            </span>

            <h2 className="mt-8 text-5xl font-black leading-tight md:text-6xl">

              <span className="text-slate-900">
                Startup
              </span>

              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                Insights
              </span>

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              Read founder journeys, startup lessons, entrepreneurial
              insights and stories from the E-Cell IIT Indore ecosystem.
            </p>

          </div>

          <BlogGrid
            searchTerm={searchTerm}
            selectedTag={selectedTag}
          />

        </section>

      </div>

    </main>
  );
}