import blogs from "../../data/blog";
import BlogCard from "./Card";

export default function BlogGrid({
  searchTerm,
  selectedTag,
}) {
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = blog.title
      .toLowerCase()
      .includes((searchTerm || "").toLowerCase());

    const matchesTag =
      selectedTag === "All" || blog.tag === selectedTag;

    return matchesSearch && matchesTag;
  });

  if (filteredBlogs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-[36px] border border-blue-100 bg-white/70 px-10 py-24 text-center backdrop-blur-xl">

        <h3 className="text-4xl font-black text-slate-900">
          No Articles Found
        </h3>

        <p className="mt-4 max-w-md text-lg leading-8 text-slate-600">
          We couldn't find any articles matching your search.
          Try another keyword or category.
        </p>

      </div>
    );
  }

  return (
    <section className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
      {filteredBlogs.map((blog) => (
        <BlogCard
          key={blog.id}
          id={blog.id}
          title={blog.title}
          date={blog.date}
          tag={blog.tag}
          image={blog.image}
          description={blog.description}
        />
      ))}
    </section>
  );
}