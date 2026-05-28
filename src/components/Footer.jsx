import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const socials = [
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com' },
  { icon: FaTwitter, label: 'Twitter', href: 'https://www.twitter.com' },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-[1.4fr_0.6fr] md:items-center">
          <div>
            <Link to="/" className="flex items-center gap-3 rounded-2xl px-3 py-2 transition hover:bg-slate-200">
              <img src="/assets/ecell.png" alt="E-Cell IIT Indore" className="h-20 w-25 object-contain" />

            </Link>
              <p className="mt-2 max-w-xl text-sm text-slate-600">
              Bringing students, mentors and founders together to build the next generation of startups and innovation on campus.
            </p>
          </div>
          <div className="flex items-center gap-3">
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-cyan-400 hover:text-cyan-500"
                aria-label={item.label}
              >
                <item.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} E-Cell IIT Indore. All rights reserved.</p>
          <p>Built with React and Vite.</p>
        </div>
      </div>
    </footer>
  )
}
