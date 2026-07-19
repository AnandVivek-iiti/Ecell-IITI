import { useParams, Link } from 'react-router-dom'
import blogs from '../../data/blog'

export default function BlogDetails() {
  const { id } = useParams()
  const blog = blogs.find((blog) => blog.id === Number(id))

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent">
            Blog Not Found
          </h1>
          <Link to="/blog" className="mt-4 inline-block text-blue-600 hover:text-blue-800">
            ← Back to Blogs
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100">
      <div className="mx-auto max-w-5xl px-6 py-12">
        {/* Back Button */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition hover:text-blue-800 group"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span>
          Back to Blogs
        </Link>

        {/* Blog Header */}
        <div className="mt-8">
          <span className="inline-block rounded-full bg-gradient-to-r from-blue-600/10 to-indigo-600/10 px-4 py-2 text-sm font-semibold text-blue-700 border border-blue-200/50">
            #{blog.tag}
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
            {blog.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-slate-600">
            <span className="font-medium">{blog.author}</span>
            <span>•</span>
            <span>{blog.date}</span>
            <span>•</span>
            <span>{blog.readingTime}</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-blue-200/50 bg-white/40 shadow-lg shadow-blue-500/10">
          <img
            src={blog.image}
            alt={blog.title}
            className="h-[350px] w-full object-cover transition duration-500 hover:scale-105"
          />
        </div>

        {/* Blog Content */}
        <div className="mx-auto mt-12 max-w-3xl text-lg leading-8 text-slate-700 prose prose-slate">
          {blog.content}
        </div>
      </div>
    </div>
  )
}