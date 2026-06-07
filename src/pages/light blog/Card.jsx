import { Link } from "react-router-dom"

export default function BlogCard({
    title,
    description,
    date,
    tag,
    image,
    id,
}) {
    return (
        <Link to={`/blog/${id}`} className="block">
            <div
                className="
                    group
                    h-full
                    flex
                    flex-col
                    overflow-hidden
                    rounded-3xl
                    bg-white/80
                    backdrop-blur-sm
                    border
                    border-blue-200/50
                    shadow-lg
                    shadow-blue-500/10
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-blue-300/60
                    hover:shadow-xl
                    hover:shadow-blue-500/20
                "
            >
                <div className="overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="
                            h-52
                            w-full
                            object-cover
                            transition
                            duration-500
                            group-hover:scale-110
                        "
                    />
                </div>

                <div className="p-4 flex flex-col flex-1 bg-gradient-to-br from-white to-blue-50/30">
                    <span
                        className="
                            w-fit
                            rounded-full
                            bg-gradient-to-r
                            from-blue-600/10
                            to-indigo-600/10
                            px-3
                            py-1
                            text-xs
                            font-semibold
                            text-blue-700
                            border
                            border-blue-200/50
                        "
                    >
                        #{tag}
                    </span>

                    <h3 className="mt-3 text-xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent">
                        {title}
                    </h3>

                    <p className="mt-2 text-blue-800/70 leading-relaxed">
                        {description}
                    </p>

                    <p className="mt-2 text-sm text-blue-600/70">
                        {date}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-blue-600 font-semibold">
                        Read Article
                        <span
                            className="
                                transition-transform
                                duration-300
                                group-hover:translate-x-1
                            "
                        >
                            →
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}