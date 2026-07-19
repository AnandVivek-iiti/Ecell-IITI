import blogs from "../../data/blog"
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
    <section className="mb-12">
      {/* Modern Search Bar - Neutral colors */}
      <div
        className="
          relative
          mb-10
          group
        "
      >
        <div
          className="
            absolute
            -inset-0.5
            bg-gradient-to-r
            from-blue-600
            to-indigo-600
            rounded-2xl
            opacity-0
            blur-md
            transition-all
            duration-500
            group-focus-within:opacity-60
          "
        />

        <div
          className="
            relative
            overflow-hidden
            rounded-2xl
            bg-white/80
            backdrop-blur-md
            border
            border-slate-200/80
            shadow-sm
            transition-all
            duration-300
            group-focus-within:shadow-md
            group-focus-within:border-slate-300
          "
        >
          <HiSearch
            className="
              absolute
              left-5
              top-1/2
              -translate-y-1/2
              text-xl
              text-slate-400
              transition-colors
              duration-300
              group-focus-within:text-slate-600
            "
          />

          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="
              w-full
              py-4
              pl-14
              pr-5
              text-slate-700
              bg-transparent
              outline-none
              placeholder:text-slate-400
              font-medium
            "
          />
        </div>
      </div>

      {/* Tag Buttons - Neutral text colors */}
      <div className="flex flex-wrap justify-center gap-3">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`
              rounded-full
              border
              px-5
              py-2.5
              text-sm
              font-semibold
              transition-all
              duration-300

              ${
                selectedTag === tag
                  ? `
                    border-transparent
                    bg-gradient-to-r
                    from-blue-600
                    to-indigo-600
                    text-white
                    shadow-lg
                    shadow-blue-500/30
                    scale-105
                  `
                  : `
                    border-slate-200
                    bg-white/60
                    backdrop-blur-sm
                    text-slate-700
                    hover:-translate-y-1
                    hover:border-slate-300
                    hover:bg-slate-50
                    hover:text-slate-800
                    hover:shadow-md
                    hover:shadow-slate-200/50
                  `
              }
            `}
          >
            {tag}
          </button>
        ))}
      </div>
    </section>
  );
}