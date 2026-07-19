import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Send
} from "lucide-react";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Team", href: "/team" },
  { name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
];

const resources = [
  { name: "Outreach", href: "/outreach" },
  { name: "Sponsors", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const socials = [
  { icon: FaLinkedin, href: "https://linkedin.com" },
  { icon: FaInstagram, href: "https://instagram.com" },
  { icon: FaTwitter, href: "https://twitter.com" },
  { icon: FaYoutube, href: "https://youtube.com" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/20 bg-gradient-to-b from-slate-50 via-blue-50 to-indigo-100">
      {/* Background orbs */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-400/20 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-indigo-400/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-16">
        {/* Main footer grid - removed CTA, reduced top padding */}
        <div className="grid gap-12 py-8 lg:grid-cols-[2fr_1fr_1fr_1.2fr]">
          {/* Logo & Info */}
          <div>
            <img
              src="/assets/ecell.png"
              className="h-20"
              alt="logo"
            />
            <p className="mt-6 max-w-md leading-8 text-slate-600">
              Entrepreneurship Cell IIT Indore is dedicated to fostering
              innovation, empowering entrepreneurs and building the startup
              ecosystem through competitions, mentorship and flagship events.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span className="text-slate-600">
                  IIT Indore, Simrol, Madhya Pradesh
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <span className="text-slate-600">
                  ecell@iiti.ac.in
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-600" />
                <span className="text-slate-600">
                  +91 XXXXX XXXXX
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-slate-900">
              Quick Links
            </h3>
            <div className="flex flex-col gap-4">
              {quickLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="group inline-flex items-center text-slate-600 transition duration-300 hover:text-blue-600"
                >
                  <ArrowRight className="mr-2 h-4 w-4 -translate-x-2 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-slate-900">
              Resources
            </h3>
            <div className="flex flex-col gap-4">
              {resources.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="group inline-flex items-center text-slate-600 transition duration-300 hover:text-blue-600"
                >
                  <ArrowRight className="mr-2 h-4 w-4 -translate-x-2 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Stay Connected */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-slate-900">
              Stay Connected
            </h3>
            <p className="mb-6 leading-7 text-slate-600">
              Subscribe to receive updates about E-Summit, workshops,
              competitions and startup opportunities.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-14 w-full rounded-full border border-slate-200 bg-white/70 pl-6 pr-14 text-slate-700 outline-none backdrop-blur-xl transition focus:border-blue-500"
              />
              <button className="absolute right-2 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white transition hover:scale-105">
                <Send className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-8 flex gap-3">
              {socials.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -6, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/70 text-slate-700 shadow-lg backdrop-blur-xl transition hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white"
                >
                  <item.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-slate-200 py-8 text-center text-sm text-slate-500 lg:flex-row">
          <p>
            © {new Date().getFullYear()} Entrepreneurship Cell IIT Indore.
            All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <Link to="/contact" className="transition hover:text-blue-600">
              Contact
            </Link>
            <Link to="/about" className="transition hover:text-blue-600">
              About
            </Link>
            <Link to="/events" className="transition hover:text-blue-600">
              Events
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}