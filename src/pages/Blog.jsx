import { useState } from 'react'
import BlogHero from '../components/blog/BlogHero'
import BlogGrid from '../components/blog/BlogGrid'
import BlogFilters from '../components/blog/BlogFilters'
import FeaturedBlog from "../components/blog/FeaturedBlog";

export default function Blog() {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedTag, setSelectedTag] = useState('All')

    return (
        <>
            <BlogHero />
            <FeaturedBlog />
            <BlogFilters searchTerm={searchTerm} setSearchTerm={setSearchTerm} selectedTag = {selectedTag} setSelectedTag ={setSelectedTag} />
            <BlogGrid searchTerm={searchTerm} selectedTag = {selectedTag}/>
        </>
    )
}