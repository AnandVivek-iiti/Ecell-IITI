
import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import useScrollReveal from './hooks/useScrollReveal'
import Home from './pages/Home'
import About from './pages/About'
import Outreach from './pages/Outreach'
import Team from './pages/Team'
import Gallery from './pages/Gallery'
import Events from './pages/Events'
import Contact from './pages/Contact'
import Blog from './pages/Blog'

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

      <main className={`flex-grow px-4 py-8 sm:px-6 lg:px-8 route-transition ${pageReady ? 'page-visible' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/outreach" element={<Outreach />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
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
