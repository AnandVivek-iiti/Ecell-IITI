import blogs from "../data/blog"
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

      <div
        className="
          relative
          mb-8
          overflow-hidden
          rounded-2xl
          border
          border-[#7995CD]/20
          bg-white
          shadow-[0_0_20px_rgba(121,149,205,0.08)]
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
            text-slate-800
            outline-none
            transition-all
            duration-300
            placeholder:text-slate-400
            focus:shadow-[0_0_25px_rgba(12,8,183,0.15)]
          "
        />
      </div>

   
      <div className="flex flex-wrap justify-center gap-3">

        {tags.map((tag) => {

        //   const count =
        //     tag === "All"
        //       ? blogs.length
        //       : blogs.filter((blog) => blog.tag === tag).length;

          return (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`
                rounded-full
                border
                px-5
                py-2.5
                text-sm
                font-medium
                transition-all
                duration-300

                ${
                  selectedTag === tag
                    ? `
                      border-[#0C08B7]
                      bg-[#0C08B7]
                      text-white
                      shadow-[0_0_20px_rgba(12,8,183,0.35)]
                    `
                    : `
                      border-[#7995CD]/20
                      bg-white
                      text-slate-700
                      hover:-translate-y-1
                      hover:border-[#7995CD]
                      hover:text-[#0C08B7]
                    `
                }
              `}
            >
              {tag} 
            </button>
          );
        })}
      </div>

    </section>
  );
}