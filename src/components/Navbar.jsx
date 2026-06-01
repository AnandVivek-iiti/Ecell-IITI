import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { HiX } from 'react-icons/hi'

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
  const [isOpen, setIsOpen] = useState(false)

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
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-6
          py-3
        "
      >
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
                ${isActive
                  ? 'bg-[#0C08B7] text-white'
                  : 'text-slate-300 hover:bg-[#0C08B7]/20 hover:text-white'
                }
                `
              }
            >
              {item.name}
        
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
            </NavLink>
          ))}
        </nav>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            text-white
            text-3xl
            md:hidden
          "
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

        <div
          className={`
            absolute
            top-full        
            left-0
            w-full
            bg-[#04052E]
            border-t
            border-white/10
            md:hidden
            overflow-hidden
            transition-all
            duration-300
            shadow-2xl

            ${isOpen
              ? 'max-h-96 opacity-100'
              : 'max-h-0 opacity-0'
            }
          `}
        >
          <nav className="flex flex-col p-4">

            {navItems.map((item) => (

              <NavLink
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="
                  rounded-xl
                  px-5
                  py-4
                  text-lg
                  font-medium
                  text-slate-300
                  transition
                  hover:bg-[#0C08B7]/20
                  hover:text-white
                "
              >
                {item.name}
              </NavLink>

            ))}

          </nav>
        </div>
      </div>
    </header>
  )
}
