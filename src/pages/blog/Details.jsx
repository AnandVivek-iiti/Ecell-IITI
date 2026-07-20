import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import blogs from "../../data/blog";

export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === Number(id));

  if (!blog) {
    return (
      <div className="flex mt-20 min-h-screen items-center justify-center bg-gradient-to-b from-blue-50 via-white to-indigo-50">
        <div className="text-center">
          <h1 className="text-5xl font-black text-slate-900">
            Blog Not Found
          </h1>

          <Link
            to="/blog"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 px-6 py-3 font-semibold text-white"
          >
            <ArrowLeft size={18} />
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="relative mt-10 overflow-hidden bg-gradient-to-b from-blue-50 via-white to-indigo-50">

      {/* Background */}

      <div className="absolute inset-0 -z-10 pointer-events-none">

        <div className="absolute left-[-180px] top-0 h-[420px] w-[420px] rounded-full bg-blue-400/20 blur-[120px]" />

        <div className="absolute right-[-180px] top-[420px] h-[420px] w-[420px] rounded-full bg-indigo-500/20 blur-[120px]" />

      </div>

      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* Back */}

        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
        >
          <ArrowLeft size={18} />
          Back to Blogs
        </Link>

        {/* Hero */}

        <section className="relative mt-8 overflow-hidden rounded-[40px]">

          <img
            src={blog.image}
            alt={blog.title}
            className="h-[75vh] w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-10 md:p-16">

            <span className="inline-flex rounded-full bg-white/90 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-600 backdrop-blur-xl">

              {blog.tag}

            </span>

            <h1 className="mt-6 max-w-5xl text-5xl font-black leading-tight text-white md:text-7xl">

              {blog.title}

            </h1>

            <div className="mt-8 flex flex-wrap gap-6 text-white/90">

              <div className="flex items-center gap-2">
                <User size={18} />
                {blog.author}
              </div>

              <div className="flex items-center gap-2">
                <Calendar size={18} />
                {blog.date}
              </div>

              <div className="flex items-center gap-2">
                <Clock size={18} />
                {blog.readingTime}
              </div>

            </div>

          </div>

        </section>

        {/* Article */}

        <section className="mx-auto -mt-20 max-w-5xl">

          <div className="relative rounded-[40px] border border-slate-200 bg-white p-10 shadow-xl md:p-16">

            <article className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-p:leading-9">

              {blog.content}

            </article>

          </div>

        </section>

      </div>

    </main>
  );
}