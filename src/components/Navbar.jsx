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
    bg-[#04052E]
    border-b
    border-white/10
    shadow-lg shadow-black/20
  "
    >
      <div className="mx-auto flex max-w-7xl items-center px-6 py-3">
        <Link to="/" className="flex items-center gap-3 rounded-2xl px-3 py-2 transition hover:bg-white/5">
          <img src="/assets/ecell.png" alt="E-Cell IIT Indore" className="h-14 object-contain" />

        </Link>

        <nav className="hidden flex-1 justify-center items-center gap-2 md:flex">
          {navItems.map((item) => (
            <NavLink
  key={item.name}
  to={item.href}
  className={({ isActive }) =>
    `
    group
    relative
    rounded-full
    px-4
    py-2
    text-sm
    font-semibold
    transition-all
    duration-300
    ${
      isActive
        ? 'bg-[#0C08B7] shadow-[0_0_20px_rgba(12,8,183,0.35)] text-white'
        : 'text-slate-300 hover:text-white'
    }
    `
  }
>
  {({ isActive }) => (
    <>
      {item.name}

      {!isActive && (
        <span
          className="
            absolute
            left-4
            right-4
            -bottom-0.5
            h-[2px]
            origin-center
            scale-x-0
            bg-[#7995CD]
            transition-transform
            duration-300
            group-hover:scale-x-100
          "
        />
      )}
    </>
  )}
</NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
