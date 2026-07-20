import blogs from "../../data/blog";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function FeaturedBlog() {
  const featured = blogs[0];

  return (
    <Link
      to={`/blog/${featured.id}`}
      className="group block"
    >
      <section className="overflow-hidden rounded-[40px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_30px_80px_rgba(59,130,246,.12)]">

        <div className="grid lg:grid-cols-[1.35fr_1fr]">

          {/* Image */}

          <div className="relative overflow-hidden">

            <img
              src={featured.image}
              alt={featured.title}
              className="h-full min-h-[520px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />

            <div className="absolute left-8 top-8 rounded-full bg-white/90 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-600 backdrop-blur-xl">
              Featured Story
            </div>

          </div>

          {/* Content */}

          <div className="flex flex-col justify-center p-12 lg:p-16">

            <span className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              {featured.tag}
            </span>

            <h2 className="text-4xl font-black leading-tight text-slate-900 md:text-5xl">
              {featured.title}
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-600">
              {featured.description}
            </p>

            <div className="mt-10 flex items-center justify-between border-t border-slate-200 pt-6">

              <div>

                <p className="text-sm font-semibold text-slate-900">
                  {featured.author}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  {featured.date}
                </p>

              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white transition-all duration-300 group-hover:translate-x-1 group-hover:scale-105">

                <ArrowUpRight size={22} />

              </div>

            </div>

          </div>

        </div>

      </section>
    </Link>
  );
}