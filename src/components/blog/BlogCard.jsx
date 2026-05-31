export default function BlogCard({
    title,
    date,
    tag,
    image,
}) {
    return (
        <div className="overflow-hidden rounded-xl bg-white shadow-md">

            <img src={image} alt={title} className="h-52 w-full object-cover" />

            <div className="p-4">

                <span className="rounded-full bg-slate-200 px-3 py-1 text-xs">
                    #{tag}
                </span>

                <h3 className="mt-3 text-xl font-semibold">
                    {title}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                    {date}
                </p>

            </div>

        </div>
    )
}