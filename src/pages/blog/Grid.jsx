import blogs from "../../data/blog"
import BlogCard from './Card'

export default function BlogGrid({
  searchTerm,
  selectedTag,
}) {

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = blog.title.toLowerCase().includes((searchTerm || "").toLowerCase())
    const matchesTag = selectedTag === 'All' || blog.tag === selectedTag
    return matchesSearch && matchesTag
  });

  if (filteredBlogs.length === 0) {
    return (
      <div className="py-20 text-center">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent">
          No Articles Found
        </h3>
        <p className="mt-2 text-slate-500">
          Try a different search term or category.
        </p>
      </div>
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
          description={blog.description}
          id={blog.id}
        />
      ))}
    </section>
  )
}
