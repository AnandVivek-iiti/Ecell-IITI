import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Instagram, Linkedin, Globe, Sparkles } from "lucide-react";
import Reveal from "../components/ui/Reveal";
import GlassCard from "../components/ui/GlassCard";
import GradientButton from "../components/ui/GradientButton";

const Contact = () => {
  const contactMethods = [
    {
      id: 1,
      icon: Mail,
      title: "Email",
      subtitle: "General Queries & Collaborations",
      detail: "ecell@iiti.ac.in",
      link: "mailto:ecell@iiti.ac.in",
    },
    {
      id: 2,
      icon: Phone,
      title: "Phone",
      subtitle: "Reach our team directly",
      detail: "+91 XXXXX XXXXX",
      link: "tel:+91XXXXXXXXX",
    },
    {
      id: 3,
      icon: MapPin,
      title: "Address",
      subtitle: "Visit our campus",
      detail: "IIT Indore, Simrol, Khandwa Road, Indore, MP",
      link: null,
    },
  ];

  const socialLinks = [
    {
      id: 1,
      icon: Instagram,
      name: "Instagram",
      description: "Event highlights, updates & announcements",
      link: "https://www.instagram.com/ecelliitindore/",
      color: "from-pink-500 to-orange-400",
    },
    {
      id: 2,
      icon: Linkedin,
      name: "LinkedIn",
      description: "Professional updates and collaborations",
      link: "https://www.linkedin.com/company/ecell-iiti/",
      color: "from-blue-600 to-indigo-600",
    },
    {
      id: 3,
      icon: Globe,
      name: "Official Website",
      description: "Explore initiatives, events and startup ecosystem",
      link: "/",
      color: "from-indigo-600 to-cyan-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-indigo-50">
      {/* Background orbs - same as other pages */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-[-180px] top-0 h-[420px] w-[420px] rounded-full bg-blue-400/20 blur-[120px]" />
        <div className="absolute right-[-180px] top-[420px] h-[420px] w-[420px] rounded-full bg-indigo-500/20 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* ─── Hero Section ─── */}
        <section className="mx-auto flex min-h-[75vh] max-w-4xl flex-col items-center justify-center pt-36 pb-24 text-center">
          <Reveal>
            <span className="px-4 py-1.5 rounded-full bg-white/80 border border-indigo-100/80 text-indigo-600 text-xs font-bold tracking-widest uppercase shadow-sm">
            E-Cell IIT Indore
          </span>

            <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
              <span className="text-slate-900">Contact</span>
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                Our Team
              </span>
            </h1>

            <p className="mx-auto mt-10 max-w-4xl text-lg leading-9 text-slate-600">
              Reach out to us for startup opportunities, collaborations,
              sponsorships, events, and entrepreneurial initiatives.
              We're always excited to connect with innovators,
              founders, and future entrepreneurs.
            </p>

          </Reveal>
        </section>

        {/* ─── Contact Cards ─── */}
        <Reveal>
          <section className="mb-24">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-8 md:grid-cols-3"
            >
              {contactMethods.map((method) => (
                <motion.div
                  key={method.id}
                  variants={itemVariants}
                  className="group cursor-pointer overflow-hidden rounded-[36px] border border-slate-200 bg-white p-10 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_30px_80px_rgba(59,130,246,.12)]"
                >
                  {/* Gradient icon container */}
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-lg transition-transform duration-300 group-hover:scale-105">
                    <method.icon size={30} />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {method.title}
                  </h3>

                  <p className="text-slate-500 mb-3 text-sm">
                    {method.subtitle}
                  </p>

                  {method.link ? (
                    <a
                      href={method.link}
                      className="text-blue-600 font-semibold hover:text-indigo-600 transition-colors"
                    >
                      {method.detail}
                    </a>
                  ) : (
                    <p className="text-slate-700 font-medium">
                      {method.detail}
                    </p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </section>
        </Reveal>

        {/* ─── Connect Section ─── */}
        <Reveal>
          <section className="mb-24">
            <GlassCard className="relative overflow-hidden rounded-[40px] border border-blue-100 bg-white/70 p-10 shadow-xl backdrop-blur-xl md:p-14">
              {/* Background blur effects */}
              <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
              <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />

              <div className="relative z-10 text-center">
                {/* Badge */}
                <div className="mb-6 inline-flex items-center rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 px-5 py-2">
                  <span className="text-sm font-semibold text-blue-700 tracking-wide">
                    CONNECT WITH US
                  </span>
                </div>

                <h2 className="mb-6 text-3xl font-bold md:text-5xl bg-gradient-to-r from-slate-900 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
                  Stay Connected With E-Cell
                </h2>

                <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-slate-600">
                  Follow our journey, explore startup opportunities,
                  discover flagship events, and connect with a growing
                  community of innovators, founders, and future entrepreneurs.
                </p>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid gap-6 md:grid-cols-3"
                >
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.id}
                      variants={itemVariants}
                      href={social.link}
                      target={social.link.startsWith("http") ? "_blank" : undefined}
                      rel={social.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group overflow-hidden rounded-[36px] border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_30px_80px_rgba(59,130,246,.12)]"
                    >
                      <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${social.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-105`}>
                        <social.icon size={30} />
                      </div>

                      <h3 className="mb-2 text-xl font-bold text-slate-900">
                        {social.name}
                      </h3>

                      <p className="text-sm text-slate-500">
                        {social.description}
                      </p>
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </GlassCard>
          </section>
        </Reveal>

        {/* ─── CTA Section ─── */}
        <section className="pb-32">
          <Reveal>
            <GlassCard className="overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 py-16 px-8 text-center shadow-[0_40px_120px_rgba(59,130,246,.25)]">
              <h2 className="text-4xl font-black text-white md:text-5xl">
                Ready to Build Something?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90">
                Have an idea? Want to collaborate? Looking to sponsor E-Summit?
                Let's connect and make something extraordinary together.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-5">
                <GradientButton variant="light" to="/contact">
                  Contact E-Cell
                </GradientButton>
                <GradientButton variant="outline-light" to="/about">
                  Learn More
                </GradientButton>
              </div>
            </GlassCard>
          </Reveal>
        </section>
      </div>
    </div>
  );
};

export default Contact;