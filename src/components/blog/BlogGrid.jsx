import blogs from "../../data/blog"
import BlogCard from './BlogCard'

export default function BlogGrid({
  searchTerm,
  selectedTag,
}) {

  const filteredBlogs = blogs.filter((blog) =>{

    const matchesSearch = blog.title.toLowerCase().includes((searchTerm || "").toLowerCase())

    const matchesTag = selectedTag === 'All' || blog.tag === selectedTag

    return matchesSearch && matchesTag
  }
);

if (filteredBlogs.length === 0) {
  return (
    <p className="text-center text-lg">
      No blogs found.
    </p>
  )
}

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