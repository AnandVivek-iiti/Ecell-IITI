import blogs from "../../data/blog"
import BlogCard from './BlogCard'

export default function BlogGrid({
  searchTerm,
}) {

  console.log("searchTerm:", searchTerm);
  const filteredBlogs = blogs.filter((blog) =>
  blog.title.toLowerCase().includes((searchTerm || "").toLowerCase())
);

  return (
    <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {filteredBlogs.map((blog) => (
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