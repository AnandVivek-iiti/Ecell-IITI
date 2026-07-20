import blogs from "../../data/blog";
import BlogCard from "./BlogCard";

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
      <section className="py-24">
        <div className="mx-auto max-w-2xl rounded-[36px] border border-slate-200 bg-white p-16 text-center shadow-sm">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-3xl text-white">
            🔍
          </div>

          <h3 className="mt-8 text-3xl font-bold text-slate-900">
            No Articles Found
          </h3>

          <p className="mx-auto mt-4 max-w-md text-lg leading-8 text-slate-600">
            We couldn't find any articles matching your search.
            Try another keyword or select a different category.
          </p>

        </div>
      </section>
    );
  }

  return (
    <section className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

      {filteredBlogs.map((blog) => (
        <BlogCard
          key={blog.id}
          id={blog.id}
          title={blog.title}
          description={blog.description}
          image={blog.image}
          tag={blog.tag}
          date={blog.date}
        />
      ))}

    </section>
  );
}