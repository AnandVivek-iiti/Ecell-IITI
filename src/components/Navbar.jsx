import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="bg-slate-950 text-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-xl font-semibold tracking-tight">
          E-Cell IITI
        </Link>
        <nav className="flex flex-wrap items-center gap-3 text-sm">
          <Link to="/" className="transition hover:text-cyan-300">
            Home
          </Link>
          <Link to="/about" className="transition hover:text-cyan-300">
            About
          </Link>
          <Link to="/outreach" className="transition hover:text-cyan-300">
            Outreach
          </Link>
          <Link to="/team" className="transition hover:text-cyan-300">
            Team
          </Link>
          <Link to="/gallery" className="transition hover:text-cyan-300">
            Gallery
          </Link>
          <Link to="/events" className="transition hover:text-cyan-300">
            Events
          </Link>
          <Link to="/contact" className="transition hover:text-cyan-300">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
