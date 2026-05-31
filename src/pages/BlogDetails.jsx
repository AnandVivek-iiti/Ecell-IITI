import { useParams, Link } from 'react-router-dom'
import blogs from '../data/blog'

export default function BlogDetails() {

  const { id } = useParams()

  const blog = blogs.find((blog) =>
    blog.id == Number(id))

  if (!blog) {
    return (
      <h1>
        Blog Not Found
      </h1>
    )
  }

  return (
    <div className="mx-auto max-w-4xl">

      <Link
        to="/blog"
        className="inline-flex items-center gap-2 mb-8 text-sm font-medium text-slate-600 hover:text-slate-900"
      >
        ← Back to Blogs
      </Link>


      <img
        src={blog.image}
        alt={blog.title}
        className="w-full rounded-xl"
      />

      <h1 className="mt-6 text-4xl font-bold">
        {blog.title}
      </h1>

      <p className="mt-2 text-slate-500">
        {blog.author}
      </p>

      <p className="mt-2 text-slate-500">
        {blog.date}
      </p>

      <p className="mt-8">
        {blog.content}
      </p>

    </div>
  )
}