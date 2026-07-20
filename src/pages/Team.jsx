import { useMemo } from "react";
import { motion } from "framer-motion";
import TEAM_DATA from "../data/team";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { Users, Sparkles, ArrowRight } from "lucide-react";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import GlassCard from "../components/ui/GlassCard";
import GradientButton from "../components/ui/GradientButton";

// ─── Person Card ──────────────────────────────────────────────────────────
function PersonCard({ member, variant = "member" }) {
  const accent =
    variant === "board"
      ? "from-amber-500 to-orange-500"
      : "from-blue-600 to-indigo-600";

  const avatarSize = variant === "board" ? "h-36 w-36" : "h-28 w-28";

  return (
    <motion.div
      whileHover={{
        y: -12,
        rotateX: 5,
        rotateY: -5,
        scale: 1.02,
      }}
      transition={{ type: "spring", stiffness: 250 }}
      className="h-full"
    >
      <GlassCard className="group relative flex h-full flex-col items-center justify-center overflow-hidden rounded-[34px] px-8 py-10 text-center">
        {/* Top accent bar */}
        <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent}`} />

        {/* Glow behind avatar */}
        <div
          className={`absolute left-1/2 top-16 h-40 w-40 -translate-x-1/2 rounded-full bg-gradient-to-r ${accent} opacity-15 blur-3xl transition duration-500 group-hover:scale-125`}
        />

        {/* Subtle light sweep (Apple-style) */}
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute -left-24 top-0 h-full w-24 -skew-x-12 bg-white/30 blur-xl transition-all duration-700 group-hover:left-[120%]" />
        </div>

        {/* Avatar – centered horizontally via flex column + items-center */}
        <div className="relative flex items-center justify-center">
          {member.photo ? (
            <img
              src={member.photo}
              alt={member.name}
              className={`${avatarSize} rounded-full object-cover ring-4 ring-white shadow-2xl`}
            />
          ) : (
            <div
              className={`${avatarSize} flex items-center justify-center rounded-full bg-gradient-to-r ${accent} text-4xl font-bold text-white shadow-2xl`}
            >
              {member.initials}
            </div>
          )}
        </div>

        {/* Name */}
        <h3 className="mt-7 text-2xl font-bold leading-tight text-slate-900">
          {member.name}
        </h3>

        {/* Position badge */}
        <span
          className={`mt-3 rounded-full bg-gradient-to-r ${accent} px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white`}
        >
          {member.position}
        </span>

        {/* Social icons with enhanced hover animations */}
        <div className="mt-6 flex items-center justify-center gap-4">
          {member.linkedin && (
            <motion.a
              href={member.linkedin}
              target="_blank"
              rel="noreferrer"
              whileHover={{
                y: -6,
                scale: 1.18,
              }}
              whileTap={{ scale: 0.92 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 15,
              }}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-colors duration-300 hover:border-[#0077B5] hover:bg-[#0077B5] hover:text-white"
            >
              <FaLinkedin
                size={20}
                className="transition-transform duration-300 group-hover:scale-125"
              />
            </motion.a>
          )}

          {member.instagram && (
            <motion.a
              href={member.instagram}
              target="_blank"
              rel="noreferrer"
              whileHover={{
                y: -6,
                scale: 1.18,
              }}
              whileTap={{ scale: 0.92 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 15,
              }}
              // Fixed: removed `transition-all`, using `transition-colors` only
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-colors duration-300 hover:border-pink-500 hover:bg-gradient-to-r hover:from-pink-500 hover:via-fuchsia-500 hover:to-orange-400 hover:text-white"
            >
              <FaInstagram
                size={20}
                className="transition-transform duration-300 group-hover:scale-125"
              />
            </motion.a>
          )}
        </div>
      </GlassCard>
    </motion.div>
  );
}

// ─── Team Section ────────────────────────────────────────────────────────
function TeamSection({ title, members, variant = "member" }) {
  return (
    <Reveal>
      <section className="mb-24">
        <SectionHeading tag="TEAM" title={title} align="left" />
        <div
          className={`mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 ${
            variant === "board" ? "xl:grid-cols-3" : "xl:grid-cols-4"
          } 2xl:gap-10`}
        >
          {members.map((member, index) => (
            <PersonCard key={member.name} member={member} variant={variant} index={index} />
          ))}
        </div>
      </section>
    </Reveal>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────
export default function Team() {
  const departments = useMemo(() => Object.entries(TEAM_DATA.teams), []);

  return (
    <div className="relative overflow-hidden">
      {/* Side padding wrapper */}
      <div className="mx-auto max-w-[1500px] px-5 lg:px-8">
        {/* Background orbs */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-indigo-50" />
        <div className="absolute left-[-180px] top-0 -z-10 h-[420px] w-[420px] rounded-full bg-blue-400/20 blur-[120px]" />
        <div className="absolute right-[-180px] top-[420px] -z-10 h-[420px] w-[420px] rounded-full bg-indigo-500/20 blur-[120px]" />

        {/* ─── Hero ─── */}
        <section className="mx-auto flex min-h-[65vh] max-w-7xl flex-col items-center justify-center px-6 pt-28 pb-24 text-center">
          <Reveal>
            <span className="px-4 py-1.5 rounded-full bg-white/80 border border-indigo-100/80 text-indigo-600 text-xs font-bold tracking-widest uppercase shadow-sm">
            E-Cell IIT Indore
          </span>

            <h1 className="mt-8 text-5xl font-black leading-tight text-slate-900 md:text-7xl">
              Meet The
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                People Behind Innovation
              </span>
            </h1>

            <p className="mx-auto mt-10 max-w-4xl text-lg leading-9 text-slate-600">
              A passionate community of innovators, designers, developers,
              marketers and leaders building the entrepreneurial ecosystem at
              IIT Indore.
            </p>
          </Reveal>
        </section>

        {/* ─── Board ─── */}
        <TeamSection title="Board of Directors" members={TEAM_DATA.board} variant="board" />

        {/* ─── Secretaries ─── */}
        <TeamSection title="Secretaries" members={TEAM_DATA.secretaries} variant="board" />

        {/* ─── Team Leaders ─── */}
        <TeamSection title="Team Leaders" members={TEAM_DATA.leaders} />

        {/* ─── Departments ─── */}
        {departments.map(([department, members], index) => (
          <Reveal key={department} delay={0.1 * index}>
            <section className="mb-24">
              <SectionHeading tag="DEPARTMENT" title={`${department} Team`} align="left" />
              <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:gap-10">
                {members.map((member, i) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <PersonCard member={member} variant="member" />
                  </motion.div>
                ))}
              </div>
            </section>
          </Reveal>
        ))}

        {/* ─── CTA ─── */}
        <section className="pb-32">
          <Reveal>
            <GlassCard className="overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 py-12 px-8 text-center shadow-[0_40px_120px_rgba(59,130,246,.25)]">
              <h2 className="text-4xl font-black text-white md:text-5xl">
                Interested in Joining E-Cell?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90">
                Work with an ambitious team, organize flagship events, connect
                with founders, and help build the entrepreneurial ecosystem of
                IIT Indore.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-5">
                <GradientButton variant="light" to="/contact">
                  Apply Now
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
}