import { useState } from 'react'
import BlogHero from './blog/Hero'
import BlogGrid from './blog/Grid'
import BlogFilters from './blog/Filters'
import FeaturedBlog from './blog/Featured'

export default function Blog() {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedTag, setSelectedTag] = useState('All')

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100">
            <BlogHero />
            
            {/* Featured Blog with bottom margin for gap */}
            <div className="mt-16 mb-12 px-4">
                <FeaturedBlog />
            </div>

            {/* Filters with consistent side padding */}
            <div className="px-4">
                <BlogFilters 
                    searchTerm={searchTerm} 
                    setSearchTerm={setSearchTerm} 
                    selectedTag={selectedTag} 
                    setSelectedTag={setSelectedTag} 
                />
            </div>

            {/* Latest Articles section */}
            <section className="px-4 py-10">
                <h2 className="mb-8 text-3xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent">
                    Latest Articles
                </h2>
                <BlogGrid searchTerm={searchTerm} selectedTag={selectedTag} />
            </section>
        </div>
    )
}