import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, User } from "lucide-react";
import blogs from "../data/blog";

export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === Number(id));

  if (!blog) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-blue-50 via-white to-indigo-50">
        <h1 className="text-2xl font-bold text-slate-900">Blog Not Found</h1>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-indigo-50 min-h-screen">
      {/* Background orbs - same as other pages */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-[-180px] top-0 h-[420px] w-[420px] rounded-full bg-blue-400/20 blur-[120px]" />
        <div className="absolute right-[-180px] top-[420px] h-[420px] w-[420px] rounded-full bg-indigo-500/20 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Back button */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition-colors hover:text-blue-800"
        >
          ← Back to Blogs
        </Link>

        {/* Hero Section with Image */}
        <section className="relative mt-8 overflow-hidden rounded-[40px]">
          <img
            src={blog.image}
            alt={blog.title}
            className="h-[75vh] w-full object-cover"
          />

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

          {/* Content overlay on image */}
          <div className="absolute bottom-0 left-0 right-0 p-10 md:p-16">
            {/* Tag - glass style */}
            <span className="inline-block rounded-full bg-white/90 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-600 backdrop-blur-xl">
              {blog.tag || "Featured"}
            </span>

            {/* Title */}
            <h1 className="mt-6 max-w-5xl text-5xl font-black leading-tight text-white md:text-7xl">
              {blog.title}
            </h1>

            {/* Metadata with icons */}
            <div className="mt-6 flex flex-wrap items-center gap-6 text-white/80">
              <span className="flex items-center gap-2">
                <User size={18} />
                {blog.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={18} />
                {blog.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={18} />
                {blog.readingTime}
              </span>
            </div>
          </div>
        </section>

        {/* Article Card - floats over hero */}
        <section className="mx-auto -mt-20 max-w-5xl relative z-10">
          <div className="rounded-[40px] border border-slate-200 bg-white p-10 shadow-xl md:p-16">
            <article className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-p:leading-9 prose-strong:text-slate-900 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline">
              {blog.content}
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}