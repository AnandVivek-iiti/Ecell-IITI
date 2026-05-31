import { useState } from 'react'
import BlogHero from '../components/blog/BlogHero'
import BlogGrid from '../components/blog/BlogGrid'
import BlogFilters from '../components/blog/BlogFilters'
import FeaturedBlog from '../components/blog/FeaturedBlog'

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTag, setSelectedTag] = useState('All')

  return (
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

      <FeaturedBlog />

      <BlogFilters searchTerm={searchTerm} setSearchTerm={setSearchTerm} selectedTag={selectedTag} setSelectedTag={setSelectedTag} />

      <section className="px-4 py-10">
        <h2 className=" mb-8 text-3xl font-bold text-white ">
          Latest Articles
        </h2>

        <BlogGrid searchTerm={searchTerm} selectedTag={selectedTag} />
      </section>
    </div>
  )
}