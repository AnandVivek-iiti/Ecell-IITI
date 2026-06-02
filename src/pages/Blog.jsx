import { useState } from 'react'
import BlogHero from './blog/BlogHero'
import BlogGrid from './blog/BlogGrid'
import BlogFilters from './blog/BlogFilters'
import FeaturedBlog from './blog/FeaturedBlog'

export default function Blog() {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedTag, setSelectedTag] = useState('All')

    return (
        // <div className="-mx-4 sm:-mx-6 lg:-mx-8">
        <div
            className="
        min-h-screen
        bg-gradient-to-b
        from-black
        via-[#04052E]
        to-black
      "
        >
            <BlogHero />
            <div className="mt-16">
                <FeaturedBlog />
            </div>

            <BlogFilters searchTerm={searchTerm} setSearchTerm={setSearchTerm} selectedTag={selectedTag} setSelectedTag={setSelectedTag} />

            <section className="px-4 py-10">
                <h2 className=" mb-8 text-3xl font-bold text-white ">
                    Latest Articles
                </h2>

                <BlogGrid searchTerm={searchTerm} selectedTag={selectedTag} />
            </section>
        </div>
        // </div>
    )
}