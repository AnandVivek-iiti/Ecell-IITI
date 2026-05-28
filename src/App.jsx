
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Outreach from './pages/Outreach'
import Team from './pages/Team'
import Gallery from './pages/Gallery'
import Events from './pages/Events'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow px-4 py-8 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/outreach" element={<Outreach />} />
            <Route path="/team" element={<Team />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
