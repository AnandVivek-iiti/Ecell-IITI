import { useState } from 'react'
import BlogHero from '../components/blog/BlogHero'
import BlogGrid from '../components/blog/BlogGrid'
import BlogFilters from '../components/blog/BlogFilters'

export default function Blog() {
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <>
            <BlogHero />

            <BlogFilters searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <BlogGrid searchTerm={searchTerm} />
        </>
    )
}