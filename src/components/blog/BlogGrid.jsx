import blogs from "../../data/blog"
import BlogCard from './BlogCard'

export default function BlogGrid() {
  return (
    <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          title={blog.title}
          date={blog.date}
          tag={blog.tag}
          image={blog.image}
        />
      ))}

    </section>
  )
}