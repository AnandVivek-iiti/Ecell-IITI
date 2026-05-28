import { Link } from 'react-router-dom'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Team', href: '/team' },
  { name: 'Sponsors', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Blog', href: '/events' },
  { name: 'Outreach', href: '/outreach' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 rounded-2xl px-3 py-2 transition hover:bg-slate-200">
          <img src="/assets/ecell.png" alt="E-Cell IIT Indore" className="h-20 w-25 object-contain" />

        </Link>

        <nav className="hidden items-center gap-4 text-m font-medium text-slate-600 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="rounded-full px-4 py-2 transition hover:bg-slate-200 hover:text-slate-900"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
