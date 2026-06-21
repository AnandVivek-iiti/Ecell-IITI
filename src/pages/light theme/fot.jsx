import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const socials = [
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/ecell-iiti/' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/ecelliitindore/' },
  { icon: FaTwitter, label: 'Twitter', href: 'https://www.twitter.com' },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-200 via-blue-50 to-indigo-200 border-t border-blue-300/60 py-16 shadow-md shadow-blue-500/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.6fr_0.4fr]">
          <div>
            <Link to="/" className="flex items-center gap-3 rounded-2xl px-3 py-2 transition hover:bg-blue-200/50">
              <img src="/assets/ecell.png" alt="E-Cell IIT Indore" className="h-20 w-25 object-contain" />
            </Link>
            <p className="mt-2 max-w-xl text-sm text-slate-700">
              Bringing students, mentors and founders together to build the next generation of startups and innovation on campus.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-800">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2">
              <Link
                to="/team"
                className="text-slate-700 transition hover:text-blue-700 hover:translate-x-1"
              >
                Team
              </Link>

              <Link
                to="/gallery"
                className="text-slate-700 transition hover:text-blue-700 hover:translate-x-1"
              >
                Gallery
              </Link>

              <Link
                to="/blog"
                className="text-slate-700 transition hover:text-blue-700 hover:translate-x-1"
              >
                Blog
              </Link>

              <Link
                to="/contact"
                className="text-slate-700 transition hover:text-blue-700 hover:translate-x-1"
              >
                Contact
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-800">
              Follow Us
            </h3>

            <div className="flex gap-3">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}          
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-blue-300/50
                    bg-white/40
                    text-slate-600
                    shadow-sm
                    transition-all
                    duration-300
                    hover:scale-110
                    hover:bg-blue-600
                    hover:text-white
                    hover:border-blue-600
                    hover:shadow-md
                    hover:shadow-blue-500/25
                  "
                >
                  <item.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-blue-300/40 pt-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} E-Cell IIT Indore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}