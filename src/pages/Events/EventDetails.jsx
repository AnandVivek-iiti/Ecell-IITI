import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { events } from "../../data/event";

const EventDetails = () => {
  const { id } = useParams();

  const event = events.find(
    (item) => item.id === parseInt(id)
  );

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#EEF2FE]">
        <h1 className="text-3xl font-bold text-[#1E2A78]">
          Event Not Found
        </h1>
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-b from-[#EEF2FE] via-white to-[#F8FAFF] min-h-screen">

      {/* ─── HERO SECTION ─── */}
      {/* #10: h-[70vh] → h-[85vh] */}
      <div className="relative h-[85vh] min-h-[500px] overflow-hidden">

        {/* #11: Animate Hero Image */}
        <motion.img
          src={event.image}
          alt={event.title}
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            transition-transform
            duration-700
            hover:scale-105
          "
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 8,
            ease: "easeOut"
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex flex-col justify-end pb-16">

          <Link
            to="/events"
            className="
              absolute
              top-10
              left-6
              text-white
              font-medium
              hover:text-blue-300
              transition
            "
          >
            ← Back to Events
          </Link>

          {/* #7: Hero Badge – Glass Style */}
          <span className="
              inline-flex
              w-fit
              items-center
              rounded-full
              border
              border-blue-200
              bg-white/70
              px-5
              py-2
              text-xs
              font-bold
              uppercase
              tracking-[0.3em]
              text-blue-700
              backdrop-blur-xl
              mb-6
            ">
            E-CELL IIT INDORE
          </span>

          {/* #12: Hero Title – text-5xl md:text-7xl → text-6xl md:text-8xl */}
          <h1
            className="
              text-6xl
              md:text-8xl
              font-bold
              text-white
              leading-none
              tracking-tight
              max-w-4xl
            "
          >
            {event.title}
          </h1>

          <div className="flex items-center gap-3 mt-6">
            <span className="w-2 h-2 rounded-full bg-yellow-400" />
            <span className="text-yellow-300 font-semibold text-lg">
              {event.date}
            </span>
          </div>

          {/* #9: Hero Paragraph – max-w-3xl → max-w-4xl */}
          <p className="mt-6 text-white/90 text-lg md:text-xl max-w-4xl leading-relaxed">
            {event.shortDesc}
          </p>

        </div>
      </div>

      {/* ─── CONTENT SECTION ─── */}
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* ─── INFO CARDS ─── */}
        {/* #13: rounded-2xl → rounded-[28px], hover:-translate-y-2 → hover:-translate-y-3, shadow-md → shadow-lg */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">

          <div
            className="
              bg-white
              rounded-[28px]
              p-6
              shadow-lg
              border
              border-slate-100
              transition-all
              duration-300
              hover:-translate-y-3
              hover:shadow-xl
            "
          >
            <p className="text-sm text-slate-500 mb-2">
              Event Date
            </p>
            <h3 className="text-xl font-semibold text-[#1E2A78]">
              {event.date}
            </h3>
          </div>

          <div
            className="
              bg-white
              rounded-[28px]
              p-6
              shadow-lg
              border
              border-slate-100
              transition-all
              duration-300
              hover:-translate-y-3
              hover:shadow-xl
            "
          >
            <p className="text-sm text-slate-500 mb-2">
              Category
            </p>
            <h3 className="text-xl font-semibold text-[#1E2A78]">
              Entrepreneurship
            </h3>
          </div>

          <div
            className="
              bg-white
              rounded-[28px]
              p-6
              shadow-lg
              border
              border-slate-100
              transition-all
              duration-300
              hover:-translate-y-3
              hover:shadow-xl
            "
          >
            <p className="text-sm text-slate-500 mb-2">
              Venue
            </p>
            <h3 className="text-xl font-semibold text-[#1E2A78]">
              IIT Indore
            </h3>
          </div>

        </div>

        {/* ─── ABOUT SECTION ─── */}
        {/* #14: rounded-[32px] → rounded-[36px], p-8 md:p-14 → p-10 md:p-16 */}
        <div className="relative group">

          {/* Glow Effect */}
          <div
            className="
              absolute
              -inset-2
              rounded-[36px]
              bg-gradient-to-r
              from-blue-500/20
              via-indigo-500/20
              to-purple-500/20
              blur-xl
              opacity-0
              group-hover:opacity-100
              transition-all
              duration-500
            "
          />

          <div
            className="
              relative
              bg-white
              rounded-[36px]
              shadow-xl
              border
              border-slate-100
              overflow-hidden
              transition-all
              duration-500
              group-hover:-translate-y-2
              group-hover:shadow-2xl
            "
          >

            {/* Top Gradient Bar */}
            <div className="h-2 bg-gradient-to-r from-[#3461FF] via-[#5B4DFF] to-[#8B5CF6]" />

            <div className="p-10 md:p-16">

              <h2
                className="
                  text-4xl
                  font-bold
                  text-[#1E2A78]
                  mb-8
                  transition-all
                  duration-500
                  group-hover:text-[#3461FF]
                "
              >
                About This Event
              </h2>

              <p className="text-slate-600 text-lg leading-10 whitespace-pre-line">
                {event.fullDesc}
              </p>

            </div>

          </div>

        </div>

        {/* ─── #15: CTA ─── */}
        <div className="mt-24 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Want to attend our next event?
          </h2>
          <p className="mt-4 text-slate-600">
            Stay connected with E-Cell IIT Indore.
          </p>
          <div className="mt-8">
            <Link
              to="/events"
              className="
                inline-flex
                items-center
                rounded-full
                bg-gradient-to-r
                from-blue-600
                to-indigo-600
                px-10
                py-4
                font-semibold
                text-white
                shadow-lg
                shadow-blue-500/30
                transition-all
                duration-300
                hover:scale-[1.03]
                hover:shadow-blue-500/50
              "
            >
              Explore More Events
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EventDetails;