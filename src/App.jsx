
import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './pages/light theme/nav'
import Footer from './pages/light theme/fot'
import ScrollToTop from './components/ScrollToTop'
import useScrollReveal from './hooks/useScrollReveal'
import Home from './pages/light theme/homee'
import About from './pages/About'
import Outreach from './pages/Outreach'
import Team from './pages/Team'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Events from './pages/Events'
import Blog from './pages/Blog'
import BlogDetails from './pages/light blog/Details'

function AppContent() {
  const location = useLocation()
  const [pageReady, setPageReady] = useState(false)

  useScrollReveal([location.pathname])

  useEffect(() => {
    setPageReady(false)
    const timeout = window.setTimeout(() => setPageReady(true), 20)
    return () => window.clearTimeout(timeout)
  }, [location.pathname])

  return (
    <div className="app-shell min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />

<main className={`flex-grow px-0 py-0 sm:px-6 lg:px-0 route-transition ${pageReady ? 'page-visible' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/outreach" element={<Outreach />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
