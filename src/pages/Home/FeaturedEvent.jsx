import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";

const events = [
  {
    title: "E-Summit",
    image: "/E-Cell _ IIT Indore_files/E_summit.png",
    category: "Flagship Event",
    location: "IIT Indore",
    description:
      "The biggest entrepreneurship festival bringing together founders, investors and innovators.",
  },
  {
    title: "Entrepreneur Talk",
    image: "/E-Cell _ IIT Indore_files/entrepenuers_talk.jpeg",
    category: "Speaker Session",
    location: "Lecture Hall Complex",
    description:
      "Interactive sessions with successful entrepreneurs sharing their journey.",
  },
  {
    title: "Pitching Competition",
    image: "/E-Cell _ IIT Indore_files/pitching.JPG",
    category: "Competition",
    location: "IIT Indore",
    description:
      "Present your startup idea before mentors and investors.",
  },
];

export default function FeaturedEvents() {
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

          <span className="inline-flex rounded-full border border-blue-200 bg-white/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-700 backdrop-blur-xl">

            FEATURED EVENTS

          </span>

          <h2 className="mt-6 text-5xl font-black">

            Experience

            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">

              Entrepreneurship

            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-slate-600">

            Participate in flagship events designed to inspire innovation,
            develop entrepreneurial skills and connect with industry leaders.

          </p>

        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">

          {events.map((event, index) => (

            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              onClick={() => navigate("/events")}
              className="group cursor-pointer overflow-hidden rounded-[32px] border border-white/30 bg-white/60 backdrop-blur-xl shadow-[0_20px_60px_rgba(59,130,246,.12)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-300 hover:shadow-[0_35px_80px_rgba(59,130,246,.18)]"
            >

              <div className="overflow-hidden">

                <img
                  src={event.image}
                  alt={event.title}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              <div className="p-7">

                <span className="rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">

                  {event.category}

                </span>

                <h3 className="mt-5 text-2xl font-bold text-slate-900">

                  {event.title}

                </h3>

                <p className="mt-4 leading-8 text-slate-600">

                  {event.description}

                </p>

                <div className="mt-6 flex items-center justify-between text-sm text-slate-500">

                  <div className="flex items-center gap-2">

                    <CalendarDays className="h-4 w-4" />

                    Annual

                  </div>

                  <div className="flex items-center gap-2">

                    <MapPin className="h-4 w-4" />

                    {event.location}

                  </div>

                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/events");
                  }}
                  className="mt-8 inline-flex items-center font-semibold text-blue-600"
                >

                  Learn More

                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />

                </button>

              </div>

            </motion.div>

          ))}

        </div>

        <div className="mt-16 flex justify-center">

          <button
            onClick={() => navigate("/events")}
            className="group inline-flex h-14 items-center rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 px-8 font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/50"
          >

            View All Events

            <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />

          </button>

        </div>

      </div>

    </section>
  );
}