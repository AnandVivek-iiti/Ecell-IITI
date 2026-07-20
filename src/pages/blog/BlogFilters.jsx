import blogs from "../../data/blog";
import { HiSearch } from "react-icons/hi";

export default function BlogFilters({
  searchTerm,
  setSearchTerm,
  selectedTag,
  setSelectedTag,
}) {
  const tags = [
    "All",
    ...new Set(blogs.map((blog) => blog.tag)),
  ];

  return (
    <section className="mb-20">

      {/* Search */}

      <div className="mx-auto mb-10 max-w-3xl">

        <div className="group relative">

          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-cyan-500/10 opacity-0 blur-xl transition duration-500 group-focus-within:opacity-100" />

          <div className="relative overflow-hidden rounded-full border border-slate-200 bg-white/80 backdrop-blur-xl shadow-sm transition-all duration-300 group-focus-within:border-blue-300 group-focus-within:shadow-xl">

            <HiSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-xl text-slate-400 transition-colors duration-300 group-focus-within:text-blue-600" />

            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-16 w-full bg-transparent pl-14 pr-6 text-base font-medium text-slate-700 outline-none placeholder:text-slate-400"
            />

          </div>

        </div>

      </div>

      {/* Tags */}

      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-3 rounded-full border border-slate-200 bg-white/70 p-2 backdrop-blur-xl shadow-sm">

        {tags.map((tag) => {
          const active = selectedTag === tag;

          return (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                active
                  ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25"
                  : "text-slate-600 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              {tag}
            </button>
          );
        })}

      </div>

    </section>
  );
}