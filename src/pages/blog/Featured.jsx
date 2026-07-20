import blogs from "../../data/blog";
import { Link } from "react-router-dom";

export default function FeaturedBlog() {
    const featured = blogs[0];

    return (
        <Link
            to={`/blog/${featured.id}`}
            className="group block"
        >
            <div className="grid overflow-hidden rounded-[36px] border border-slate-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_30px_80px_rgba(59,130,246,.12)] lg:grid-cols-[1.4fr_1fr]">
                
                {/* Image Section - larger with gradient overlay */}
                <div className="relative overflow-hidden min-h-[520px]">
                    <img
                        src={featured.image}
                        alt={featured.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/65 via-slate-900/10 to-transparent" />
                    
                    {/* Premium glass badge on image */}
                    <div className="absolute left-8 top-8 rounded-full bg-white/90 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-600 backdrop-blur-xl">
                        Featured Story
                    </div>
                </div>

                {/* Content Section - clean typography, no gradients */}
                <div className="flex flex-col justify-center p-12 lg:p-16">
                    
                    {/* Tag above title */}
                    <span className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                        {featured.tag || "Featured"}
                    </span>

                    {/* Clean title - no gradient */}
                    <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                        {featured.title}
                    </h2>

                    {/* Description with more breathing room */}
                    <p className="mt-8 text-lg leading-9 text-slate-600">
                        {featured.description}
                    </p>

                    {/* Bottom section with author, date, and arrow */}
                    <div className="mt-10 flex items-center justify-between border-t border-slate-200 pt-6">
                        <div>
                            <p className="font-semibold text-slate-900">
                                {featured.author}
                            </p>
                            <p className="mt-1 text-sm text-slate-500">
                                {featured.date}
                            </p>
                        </div>

                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-2xl text-white transition-all duration-300 group-hover:translate-x-1 group-hover:scale-105">
                            ↗
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}