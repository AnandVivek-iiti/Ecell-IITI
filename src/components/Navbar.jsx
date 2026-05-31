import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Team', href: '/team' },
  { name: 'Sponsors', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Blog', href: '/blog' },
  { name: 'Outreach', href: '/outreach' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  return (
    <header
      className="
    sticky
    top-0
    z-50
    border-b
    border-white/10
    bg-black/70
    backdrop-blur-xl
  "
    >
      <div className="mx-auto flex max-w-7xl items-center justify-start gap-16 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 rounded-2xl px-3 py-2 transition hover:bg-slate-200">
          <img src="/assets/ecell.png" alt="E-Cell IIT Indore" className="h-20 w-25 object-contain" />

        </Link>

        <nav className="hidden items-center gap-4 text-m font-medium text-slate-600 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `
      rounded-full
      px-4
      py-2
      transition-all
      duration-300
      ${isActive
                  ? 'bg-[#0C08B7] text-white'
                  : 'text-slate-300 hover:bg-white/10 hover:text-white'
                }
      `
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
