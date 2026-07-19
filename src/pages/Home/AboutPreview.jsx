import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Lightbulb, Rocket, Users, Sparkles } from "lucide-react";

const aboutImages = [
  "/E-Cell _ IIT Indore_files/E_summit.png",
  "/E-Cell _ IIT Indore_files/entrepenuers_talk.jpeg",
  "/E-Cell _ IIT Indore_files/pitching.JPG",
];

const aboutFeatures = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    desc: "Helping students transform ideas into impactful ventures.",
  },
  {
    icon: Rocket,
    title: "Startup Ecosystem",
    desc: "Connecting founders with mentors, investors and industry.",
  },
  {
    icon: Users,
    title: "Community Driven",
    desc: "Building a collaborative culture of entrepreneurship.",
  },
];

// Stats data
const stats = [
  { label: "Events", value: "120+" },
  { label: "Startups", value: "40+" },
  { label: "Mentors", value: "20+" },
];

const fadeLeft = {
  hidden: { opacity: 0, x: -80, filter: "blur(10px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 80, filter: "blur(10px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  const navigate = useNavigate();

  return (
    <section className="relative pt-20 pb-28 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent -z-10" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-20">
        {/* LEFT – Image Collage */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main large image */}
          <div className="overflow-hidden rounded-[32px] border border-white/30 bg-white/40 p-3 backdrop-blur-2xl shadow-[0_35px_80px_rgba(59,130,246,0.18)]">
            <img
              src={aboutImages[0]}
              alt="E-Cell IIT Indore"
              className="h-[480px] w-full rounded-[24px] object-cover transition duration-700 hover:scale-105"
            />
          </div>

          {/* Small image bottom-left – rotated and with hover */}
          <div className="absolute -bottom-4 -left-4 overflow-hidden rounded-2xl border border-white/30 bg-white/80 p-2 backdrop-blur-2xl shadow-xl rotate-[-6deg] transition duration-300 hover:rotate-0 hover:scale-105">
            <img src={aboutImages[1]} alt="" className="h-24 w-24 rounded-xl object-cover" />
          </div>

          {/* Small image bottom-right – rotated and with hover */}
          <div className="absolute -bottom-4 -right-4 overflow-hidden rounded-2xl border border-white/30 bg-white/80 p-2 backdrop-blur-2xl shadow-xl rotate-[7deg] transition duration-300 hover:rotate-0 hover:scale-105">
            <img src={aboutImages[2]} alt="" className="h-24 w-24 rounded-xl object-cover" />
          </div>
        </motion.div>

        {/* RIGHT – Content */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Glass badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-5 py-2 backdrop-blur-xl shadow-sm">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">
              ABOUT E-CELL
            </span>
          </div>

          {/* Heading – stronger, more memorable */}
          <h2 className="mt-6 text-5xl font-black leading-[1.1] tracking-tight">
            Empowering
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
              Future Founders
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-600">
            Entrepreneurship Cell IIT Indore empowers students through innovation,
            mentorship, startup competitions and a vibrant entrepreneurial community.
          </p>

          {/* Stats row */}
          <div className="mt-8 flex flex-wrap gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-blue-600">{stat.value}</span>
                <span className="text-sm font-medium text-slate-500">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Feature cards – with stagger animations */}
          <div className="mt-10 space-y-5">
            {aboutFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="group flex items-start gap-5 rounded-3xl border border-slate-200/50 bg-white/30 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/70 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 transition duration-300 group-hover:shadow-blue-500/50">
                  <feature.icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800">{feature.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Button */}
          <button
            onClick={() => navigate("/about")}
            className="mt-10 inline-flex h-14 items-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-blue-500/50"
          >
            Learn More
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}