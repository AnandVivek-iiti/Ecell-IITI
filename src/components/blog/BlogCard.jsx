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
        <Link to={`/blog/${id}`}>
            <div
                className="
          group
          h-full
          flex
          flex-col
          overflow-hidden                    
          rounded-3xl
          bg-white
          shadow-lg
          transition-all
          duration-300
          hover:-translate-y-2
          hover:shadow-[0_0_30px_rgba(12,8,183,0.35)]
          border-[#7995CD]/20
          shadow-[0_0_15px_rgba(121,149,205,0.08)]                
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

                <div className="p-4">

                    <span
                        className="
                          rounded-full
                          bg-[#7995CD]/20
                          px-3
                          py-1
                          text-xs
                          font-medium
                          text-[#0C08B7]
                        "
                    >
                        #{tag}
                    </span>

                    <h3 className="mt-3 text-xl font-semibold">
                        {title}
                    </h3>

                    <p className="mt-2 text-slate-600">
                        {description}
                    </p>

                    <p className="mt-2 text-sm text-slate-500">
                        {date}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-[#0C08B7] font-medium">

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