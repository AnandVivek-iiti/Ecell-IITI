import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  HiMenuAlt3,
  HiX
} from "react-icons/hi";
import {
  ArrowRight
} from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Team", href: "/team" },
  { name: "Sponsors", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Events", href: "/events" },
  { name: "Blog", href: "/blog" },
  { name: "Outreach", href: "/outreach" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 20);

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  useEffect(() => {

    setIsOpen(false);

  }, [location.pathname]);

  return (

    <header className="fixed inset-x-0 top-0 z-[999]">

      <div className="mx-auto max-w-7xl px-4 pt-4">

        <motion.div

          animate={{
            y: scrolled ? 0 : 6,
            scale: scrolled ? 0.99 : 1
          }}

          transition={{
            duration: .35
          }}

          className={`
          relative
          flex
          items-center
          justify-between
          rounded-2xl
          border
          px-6
          py-3
          transition-all
          duration-500

          ${
            scrolled
              ? "border-white/30 bg-white/70 backdrop-blur-2xl shadow-[0_20px_60px_rgba(59,130,246,.15)]"
              : "border-transparent bg-transparent"
          }

          `}
        >

          {/* LOGO */}

          <Link
            to="/"
            className="flex items-center gap-3"
          >

            <img
              src="/assets/ecell.png"
              alt="E-Cell"
              className="h-14 object-contain transition duration-300 hover:scale-105"
            />

          </Link>

          {/* DESKTOP */}

          <nav className="hidden items-center gap-2 lg:flex">

            {navItems.map((item) => (

              <NavLink

                key={item.name}

                to={item.href}

                className={({ isActive }) =>

                  `
                  relative
                  rounded-full
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? "text-white"
                      : "text-slate-700 hover:text-blue-700"
                  }

                  `
                }

              >

                {({ isActive }) => (

                  <>

                    {isActive && (

                      <motion.div

                        layoutId="navbar-pill"

                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 35
                        }}

                        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500"

                      />

                    )}

                    <span className="relative z-10">

                      {item.name}

                    </span>

                  </>

                )}

              </NavLink>

            ))}

          </nav>

          {/* RIGHT SIDE */}

          <div className="hidden items-center gap-4 lg:flex">

            <button

              onClick={() => navigate("/contact")}

              className="group inline-flex h-12 items-center rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 px-7 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition duration-300 hover:-translate-y-1 hover:shadow-blue-500/50"

            >

              Contact Us

              <ArrowRight className="ml-2 h-4 w-4 transition duration-300 group-hover:translate-x-1" />

            </button>

          </div>

          {/* MOBILE */}

          <button

            onClick={() => setIsOpen(!isOpen)}

            className="rounded-xl p-2 text-3xl text-slate-700 transition hover:bg-white/60 lg:hidden"

          >

            {isOpen ? <HiX /> : <HiMenuAlt3 />}

          </button>

          <AnimatePresence>
                        {isOpen && (

              <motion.div

                initial={{
                  opacity: 0,
                  y: -20
                }}

                animate={{
                  opacity: 1,
                  y: 0
                }}

                exit={{
                  opacity: 0,
                  y: -20
                }}

                transition={{
                  duration: 0.25
                }}

                className="absolute left-0 right-0 top-[calc(100%+14px)] overflow-hidden rounded-3xl border border-white/30 bg-white/80 backdrop-blur-3xl shadow-[0_30px_80px_rgba(59,130,246,.18)] lg:hidden"

              >

                <div className="p-4">

                  {navItems.map((item) => (

                    <NavLink

                      key={item.name}

                      to={item.href}

                      className={({ isActive }) =>

                        `

                        mb-2
                        flex
                        items-center
                        justify-between
                        rounded-2xl
                        px-5
                        py-4
                        text-base
                        font-semibold
                        transition-all
                        duration-300

                        ${
                          isActive
                            ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 text-white shadow-lg shadow-blue-500/20"
                            : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                        }

                        `
                      }

                    >

                      {item.name}

                      <ArrowRight className="h-4 w-4" />

                    </NavLink>

                  ))}

                  <button

                    onClick={() => {
                      navigate("/contact");
                      setIsOpen(false);
                    }}

                    className="mt-4 inline-flex h-12 w-full items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 font-semibold text-white shadow-lg shadow-blue-500/30 transition duration-300 hover:shadow-blue-500/50"

                  >

                    Contact Us

                  </button>

                </div>

              </motion.div>

            )}

          </AnimatePresence>

        </motion.div>

      </div>

    </header>

  );

}