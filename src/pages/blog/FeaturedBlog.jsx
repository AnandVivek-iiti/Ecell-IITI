import blogs from "../../data/blog"
import { Link } from "react-router-dom";

export default function FeaturedBlog() {
    const featured = blogs[0];

    return (
        <Link
            to={`/blog/${featured.id}`}
            className="group block"
        >
            <section className="overflow-hidden rounded-3xl border border-white/10 bg-[#111827] shadow-xl">

                <div className="grid md:grid-cols-[1.3fr_1fr]">

                    <div className="overflow-hidden">
                        <div className="relative overflow-hidden">
                            <img
                                src={featured.image}
                                alt={featured.title}
                                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                            />

                            <div
                                 className="
                                   absolute
                                   inset-0
                                   bg-gradient-to-t
                                   from-black/60
                                   to-transparent
                                 "
                               />
                        </div>

                    </div>

                    <div className="flex flex-col justify-center p-8">

                        <span className="mb-4 w-fit rounded-full bg-[#0C08B7] px-4 py-2 text-sm text-white">
                            Featured Article
                        </span>

                        <h2 className="text-4xl font-bold text-white">
                            {featured.title}
                        </h2>

                        <p className="mt-4 text-slate-300">
                            {featured.description}
                        </p>

                        <div className="mt-6 text-slate-400">
                            {featured.author}
                        </div>

                    </div>

                </div>

            </section>
        </Link>
    );
}
