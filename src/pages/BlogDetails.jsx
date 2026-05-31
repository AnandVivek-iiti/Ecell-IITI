import { useParams, Link } from 'react-router-dom'
import blogs from '../data/blog'

export default function BlogDetails() {

  const { id } = useParams()

  const blog = blogs.find((blog) =>
    blog.id === Number(id))

  if (!blog) {
    return (
      <h1>
        Blog Not Found
      </h1>
    )
  }

  return (
  <div
    className="
      min-h-screen
      bg-gradient-to-b
      from-black
      via-[#04052E]
      to-black
    "
  >
    <div className="mx-auto max-w-5xl px-6 py-12">

      <Link
        to="/blog"
        className="
          inline-flex
          items-center
          gap-2
          text-sm
          font-medium
          text-[#7995CD]
          transition
          hover:text-white
        "
      >
        ← Back to Blogs
      </Link>

      <div className="mt-8">

        <span
          className="
            inline-block
            rounded-full
            bg-[#0C08B7]/20
            px-4
            py-2
            text-sm
            font-medium
            text-[#7995CD]
          "
        >
          #{blog.tag}
        </span>

        <h1
          className="
            mt-6
            text-5xl
            font-bold
            leading-tight
            text-white
            md:text-6xl
          "
        >
          {blog.title}
        </h1>

        <div
          className="
            mt-6
            flex
            flex-wrap
            items-center
            gap-3
            text-slate-400
          "
        >
          <span>{blog.author}</span>
          <span>•</span>
          <span>{blog.date}</span>
          <span>•</span>
          <span>{blog.readingTime}</span>
        </div>

      </div>

      <div
        className="
          mt-10
          overflow-hidden
          rounded-3xl
          border
          border-white/10
        "
      >
        <img
          src={blog.image}
          alt={blog.title}
          className="
            h-[350px]
            w-full
            object-cover
          "
        />
      </div>

      <div
        className="
          mx-auto
          mt-12
          max-w-3xl
          text-lg
          leading-8
          text-slate-300
        "
      >
        {blog.content}
      </div>

    </div>
  </div>
)
}