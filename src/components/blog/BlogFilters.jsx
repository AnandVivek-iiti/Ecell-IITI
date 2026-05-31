import blogs from "../../data/blog";

export default function BlogFilters({
    searchTerm,
    setSearchTerm,
    selectedTag,
    setSelectedTag,
}) {
    const tags = [
    "All",
    ...new Set(blogs.map(blog => blog.tag))
];

    return (
        <div
  className="
    relative
    overflow-hidden
    rounded-2xl
    border
    border-white/10
    bg-white/5
    backdrop-blur-lg
  "
>

            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) =>
                    setSearchTerm(e.target.value)
                }
                className="w-full rounded-lg border p-3"
            />
            <div className="flex flex-wrap justify-center gap-3">

                {tags.map((tag) => (
                    <button
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        className={`rounded-full px-4 py-2 border
                                ${selectedTag === tag ? 'bg-blue-600 text-white': 'bg-white'}`}
                    >
                        #{tag}
                    </button>

                ))}

            </div>

        </div>
    )
}