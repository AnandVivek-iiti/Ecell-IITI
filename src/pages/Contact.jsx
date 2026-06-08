import React from "react";
import {
  Mail,
  MapPin,
  Phone,
  Instagram,
  Linkedin,
  Globe,
} from "lucide-react";

const Contact = () => {
  return (
    <div className="relative min-h-screen py-16 px-6 bg-gradient-to-br from-[#EAF4FF] via-[#F8FAFF] to-[#EEF2FF] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-200/30 blur-[140px] rounded-full pointer-events-none" />

      {/* Hero Section */}
      <div className="relative max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-[#1E293B] via-[#2142C7] to-[#4F46E5] bg-clip-text text-transparent">
          Contact Us
        </h1>
        <div className="relative max-w-5xl mx-auto mt-16 text-center">
        <p className="text-2xl md:text-3xl font-semibold text-slate-700">
          Empowering Students Through Innovation,
          Entrepreneurship & Leadership.
        </p>

      </div>

        <p className="mt-8 text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
          Reach out to us for startup opportunities, collaborations,
          sponsorships, events, and entrepreneurial initiatives.
          We're always excited to connect with innovators,
          founders, and future entrepreneurs.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="relative max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-20">

        {/* Email */}
        <div
          className="
            bg-white/80
            backdrop-blur-md
            rounded-3xl
            p-8
            border border-[#D7E3FF]
            shadow-md
            hover:shadow-xl
            hover:-translate-y-1
            transition-all
            duration-300
          "
        >
          <Mail className="w-10 h-10 text-[#0C08B7] mb-5" />

          <h3 className="text-xl font-bold text-slate-800 mb-3">
            Email
          </h3>

          <p className="text-slate-500 mb-3">
            General Queries & Collaborations
          </p>

          <a
            href="mailto:ecell@iiti.ac.in"
            className="text-[#0C08B7] font-semibold hover:text-[#2142C7]"
          >
            ecell@iiti.ac.in
          </a>
        </div>

        {/* Phone */}
        <div
          className="
            bg-white/80
            backdrop-blur-md
            rounded-3xl
            p-8
            border border-[#D7E3FF]
            shadow-md
            hover:shadow-xl
            hover:-translate-y-1
            transition-all
            duration-300
          "
        >
          <Phone className="w-10 h-10 text-[#0C08B7] mb-5" />

          <h3 className="text-xl font-bold text-slate-800 mb-3">
            Phone
          </h3>

          <p className="text-slate-500 mb-3">
            Reach our team directly
          </p>

          <p className="text-[#0C08B7] font-semibold">
            +91 XXXXX XXXXX
          </p>
        </div>

        {/* Address */}
        <div
          className="
            bg-white/80
            backdrop-blur-md
            rounded-3xl
            p-8
            border border-[#D7E3FF]
            shadow-md
            hover:shadow-xl
            hover:-translate-y-1
            transition-all
            duration-300
          "
        >
          <MapPin className="w-10 h-10 text-[#0C08B7] mb-5" />

          <h3 className="text-xl font-bold text-slate-800 mb-3">
            Address
          </h3>

          <p className="text-slate-600 leading-7">
            Entrepreneurship Cell
            <br />
            IIT Indore
            <br />
            Simrol, Khandwa Road
            <br />
            Indore, Madhya Pradesh
          </p>
        </div>
      </div>

        
        {/* Connect Section */}
<div className="max-w-6xl mx-auto">
  <div className="relative overflow-hidden rounded-[36px] border border-[#D6E3FF] bg-white/70 backdrop-blur-xl shadow-xl p-10 md:p-14">

    {/* Background Blur Effects */}
    <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
    <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl"></div>

    <div className="relative z-10 text-center">
      <div className="inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 mb-6">
        <span className="text-sm font-semibold text-[#2142C7] tracking-wide">
          JOIN OUR COMMUNITY
        </span>
      </div>

      <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#1E293B] via-[#2142C7] to-[#4F46E5] bg-clip-text text-transparent mb-6">
        Stay Connected With E-Cell
      </h2>

      <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed mb-12">
        Follow our journey, explore startup opportunities,
        discover flagship events, and connect with a growing
        community of innovators, founders, and future entrepreneurs.
      </p>

      <div className="grid md:grid-cols-3 gap-6">

        <a
          href="https://www.instagram.com/ecelliitindore/"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white border border-slate-200 rounded-3xl p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
        >
          <Instagram
            size={38}
            className="mx-auto text-pink-500 mb-4 group-hover:scale-110 transition"
          />

          <h3 className="text-xl font-bold text-slate-800 mb-2">
            Instagram
          </h3>

          <p className="text-slate-500 text-sm">
            Event highlights, updates & announcements
          </p>
        </a>

        <a
          href="https://www.linkedin.com/company/ecell-iiti/"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white border border-slate-200 rounded-3xl p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
        >
          <Linkedin
            size={38}
            className="mx-auto text-blue-600 mb-4 group-hover:scale-110 transition"
          />

          <h3 className="text-xl font-bold text-slate-800 mb-2">
            LinkedIn
          </h3>

          <p className="text-slate-500 text-sm">
            Professional updates and collaborations
          </p>
        </a>

        <a
          href="/"
          className="group bg-white border border-slate-200 rounded-3xl p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
        >
          <Globe
            size={38}
            className="mx-auto text-indigo-600 mb-4 group-hover:scale-110 transition"
          />

          <h3 className="text-xl font-bold text-slate-800 mb-2">
            Official Website
          </h3>

          <p className="text-slate-500 text-sm">
            Explore initiatives, events and startup ecosystem
          </p>
        </a>

      </div>
    </div>
  </div>
</div>
      

    </div>
  );
};

export default Contact;