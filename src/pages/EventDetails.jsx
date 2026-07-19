import React from "react";
import { useParams, Link } from "react-router-dom";
import { events } from "../data/event";

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

      {/* HERO SECTION */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">

        <img
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

          <div
            className="
              inline-flex
              w-fit
              items-center
              px-4
              py-2
              rounded-full
              bg-blue-500/20
              backdrop-blur-md
              border
              border-white/20
              text-white
              mb-6
            "
          >
            E-Cell IIT Indore Event
          </div>

          <h1
            className="
              text-5xl
              md:text-7xl
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

          <p className="mt-6 text-white/90 text-lg md:text-xl max-w-3xl leading-relaxed">
            {event.shortDesc}
          </p>

        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* INFO CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">

          <div
            className="
              bg-white
              rounded-2xl
              p-6
              shadow-md
              border
              border-slate-100
              transition-all
              duration-300
              hover:-translate-y-2
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
              rounded-2xl
              p-6
              shadow-md
              border
              border-slate-100
              transition-all
              duration-300
              hover:-translate-y-2
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
              rounded-2xl
              p-6
              shadow-md
              border
              border-slate-100
              transition-all
              duration-300
              hover:-translate-y-2
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

        {/* ABOUT SECTION */}
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
              rounded-[32px]
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

            <div className="p-8 md:p-14">

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

      </div>
    </section>
  );
};

export default EventDetails;