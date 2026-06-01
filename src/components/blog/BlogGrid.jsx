import blogs from "../data/blog"
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
      <div className="py-20 text-center" >  

  <h3 className="text-2xl font-semibold text-white">
    No Articles Found
  </h3>

  <p className="mt-2 text-slate-400">
    Try a different search term or category.
  </p>

</div>
    </p>
  )
}

  return (
    <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {filteredBlogs.map((blog) => (
        <BlogCard
          key = {blog.id}
          title={blog.title}
          date={blog.date}
          tag={blog.tag}
          image={blog.image}
          description={blog.description}
          id = {blog.id}
        />
      ))}

    </section>
  )
}