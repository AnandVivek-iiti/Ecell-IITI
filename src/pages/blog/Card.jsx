import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function BlogCard({
  title,
  description,
  date,
  tag,
  image,
  id,
}) {
  return (
    <Link
      to={`/blog/${id}`}
      className="group block"
    >
      <article className="overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_30px_80px_rgba(59,130,246,.12)]">

        {/* Image */}

        <div className="relative h-72 overflow-hidden">

          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent transition-opacity duration-500 group-hover:opacity-100" />

          <div className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-blue-600 backdrop-blur-xl">

            {tag}

          </div>

        </div>

        {/* Content */}

        <div className="flex min-h-[260px] flex-col p-8">

          <p className="text-sm font-semibold text-amber-500">
            {date}
          </p>

          <h3 className="mt-4 text-[30px] font-bold leading-tight text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
            {title}
          </h3>

          <p className="mt-4 flex-1 text-base leading-8 text-slate-600">
            {description}
          </p>

          <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-6">

            <span className="text-sm font-semibold text-slate-500">
              Read Article
            </span>

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white transition-all duration-300 group-hover:translate-x-1 group-hover:scale-105">

              <ArrowUpRight size={18} />

            </div>

          </div>

        </div>

      </article>
    </Link>
  );
}