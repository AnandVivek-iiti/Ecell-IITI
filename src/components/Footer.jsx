import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const socials = [
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com' },
  { icon: FaTwitter, label: 'Twitter', href: 'https://www.twitter.com' },
]

export default function Footer() {
  return (
    <footer className=" border-t border-white/10 bg-[#04052E] py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.6fr_0.4fr]">
          <div>
            <Link to="/" className="flex items-center gap-3 rounded-2xl px-3 py-2 transition hover:bg-slate-200">
              <img src="/assets/ecell.png" alt="E-Cell IIT Indore" className="h-20 w-25 object-contain" />

            </Link>
            <p className="mt-2 max-w-xl text-sm text-slate-600">
              Bringing students, mentors and founders together to build the next generation of startups and innovation on campus.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2">
              <Link
                to="/team"
                className="text-slate-400 transition hover:text-white"
              >
                Team
              </Link>

              <Link
                to="/gallery"
                className="text-slate-400 transition hover:text-white"
              >
                Gallery
              </Link>

              <Link
                to="/blog"
                className="text-slate-400 transition hover:text-white"
              >
                Blog
              </Link>

              <Link
                to="/events"
                className="text-slate-400 transition hover:text-white"
              >
                Events
              </Link>

              <Link
                to="/contact"
                className="text-slate-400 transition hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
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
                    border-white/20
                    text-slate-400
                    transition
                    hover:bg-[#0C08B7]
                    hover:text-white
                  "
                >
                  <item.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} E-Cell IIT Indore. All rights reserved.</p>
        </div>

      </div>

    </footer>
  )
}
