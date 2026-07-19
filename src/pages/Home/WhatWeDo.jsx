import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Rocket,
  Mic2,
  Trophy,
  Users,
  Lightbulb,
  Briefcase,
} from "lucide-react";

const activities = [
  {
    title: "E-Summit",
    description:
      "The flagship entrepreneurial festival featuring startup showcases, keynote speakers, investor sessions and competitions.",
    image: "/E-Cell _ IIT Indore_files/E_summit.png",
    icon: Trophy,
    span: "lg:col-span-2 lg:row-span-2",
    route: "/events",
  },
  {
    title: "Founder Talks",
    description:
      "Interactive sessions with successful founders, innovators and industry leaders.",
    image: "/E-Cell _ IIT Indore_files/entrepenuers_talk.jpeg",
    icon: Mic2,
    span: "",
    route: "/events",
  },
  {
    title: "Startup Workshops",
    description:
      "Hands-on workshops covering entrepreneurship, product development and pitching.",
    image: "/E-Cell _ IIT Indore_files/pitching.JPG",
    icon: Lightbulb,
    span: "",
    route: "/events",
  },
  {
    title: "Startup Support",
    description:
      "Mentorship, networking and guidance to help student startups grow.",
    image: "/E-Cell _ IIT Indore_files/stock.png",
    icon: Rocket,
    span: "lg:col-span-2",
    route: "/outreach",
  },
  {
    title: "Networking",
    description:
      "Connect with founders, investors, alumni and entrepreneurs.",
    image: "/E-Cell _ IIT Indore_files/entrepenuers_talk.jpeg",
    icon: Users,
    span: "",
    route: "/team",
  },
  {
    title: "Industry Connect",
    description:
      "Collaborations with incubators, companies and startup ecosystems.",
    image: "/E-Cell _ IIT Indore_files/pitching.JPG",
    icon: Briefcase,
    span: "",
    route: "/outreach",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 50,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WhatWeDo() {
  const navigate = useNavigate();

  return (
    <section className="relative pt-24 pb-28">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >

          <span className="inline-flex items-center rounded-full border border-blue-200 bg-white/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-700 backdrop-blur-xl">

            WHAT WE DO

          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight">

            Turning Ideas

            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">

              Into Startups

            </span>

          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-slate-600">

            Through flagship events, mentorship, competitions and an
            entrepreneurial ecosystem, E-Cell IIT Indore empowers students to
            transform innovative ideas into impactful ventures.

          </p>

        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid auto-rows-[280px] gap-8 lg:grid-cols-4"
        >

          {activities.map((activity) => {

            const Icon = activity.icon;

            return (

              <motion.div
                key={activity.title}
                variants={item}
                onClick={() => navigate(activity.route)}
                className={`group relative cursor-pointer overflow-hidden rounded-[32px] border border-white/30 bg-white/60 backdrop-blur-2xl shadow-[0_20px_60px_rgba(59,130,246,.12)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-300 hover:shadow-[0_35px_80px_rgba(59,130,246,.18)] ${activity.span}`}
              >

                <img
                  src={activity.image}
                  alt={activity.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/25 to-transparent" />

                <div className="relative flex h-full flex-col justify-end p-8">                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-xl">

                    <Icon className="h-8 w-8 text-white" />

                  </div>

                  <h3 className="text-3xl font-bold text-white">

                    {activity.title}

                  </h3>

                  <p className="mt-4 line-clamp-3 text-sm leading-7 text-white/85">

                    {activity.description}

                  </p>

                  <div className="mt-8 flex items-center font-semibold text-white">

                    Explore

                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />

                  </div>

                </div>

              </motion.div>

            );

          })}

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 flex justify-center"
        >

          <button
            onClick={() => navigate("/events")}
            className="group inline-flex h-14 items-center rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 px-8 font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/50"
          >

            Explore All Events

            <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />

          </button>

        </motion.div>

      </div>

    </section>

  );

}