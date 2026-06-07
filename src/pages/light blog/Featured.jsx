import blogs from "../Data/blog"
import { Link } from "react-router-dom";

export default function FeaturedBlog() {
    const featured = blogs[0];

    return (
        <Link
            to={`/blog/${featured.id}`}
            className="group block"
        >
            <div className="grid overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm border border-blue-200/50 shadow-lg shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 hover:border-blue-300/60 hover:shadow-xl hover:shadow-blue-500/20 md:grid-cols-2">
                
                {/* Image Section */}
                <div className="aspect-[4/3] overflow-hidden bg-blue-100">
                    <img
                        src={featured.image}
                        alt={featured.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                {/* Content Section - No grays, only blues and whites */}
                <div className="flex flex-col justify-center p-6 md:p-8 bg-gradient-to-br from-white to-blue-50/50">
                    <span className="mb-3 w-fit rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-1.5 text-xs font-semibold text-white shadow-md shadow-blue-500/25">
                        Featured Article
                    </span>
                    
                    <h2 className="text-2xl font-bold md:text-3xl bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                        {featured.title}
                    </h2>
                    
                    <p className="mt-3 text-blue-800/80 leading-relaxed">
                        {featured.description}
                    </p>
                    
                    <div className="mt-5 flex items-center gap-3 text-sm font-medium text-blue-700">
                        <span className="flex items-center gap-1.5">
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                            </svg>
                            {featured.author}
                        </span>
                        <span className="text-blue-400">|</span>
                        <span className="flex items-center gap-1.5 group-hover:gap-2 transition-all duration-300">
                            Read full blog
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
