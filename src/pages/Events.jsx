import React from "react";
import { events } from "../Data/event";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#EEF2FE] via-white to-[#F8FAFF] py-20 px-6 md:px-10 overflow-hidden">

      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div
          className="
            absolute
            top-[-150px]
            left-[-150px]
            w-[500px]
            h-[500px]
            rounded-full
            bg-blue-300/20
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-[-100px]
            right-[-100px]
            w-[450px]
            h-[450px]
            rounded-full
            bg-indigo-300/20
            blur-[120px]
          "
        />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Hero Section */}
        <div className="max-w-4xl mb-20">

          <p className="uppercase tracking-[0.35em] text-[#3461FF] text-sm font-medium mb-6">
            E-CELL IIT INDORE
          </p>

          <h1
            className="
              text-5xl
              md:text-6xl
              font-bold
              leading-tight
              bg-gradient-to-r
              from-[#1E2A78]
              via-[#3461FF]
              to-[#5B4DFF]
              bg-clip-text
              text-transparent
            "
          >
            Events & Experiences
          </h1>

          <p className="mt-8 text-lg text-slate-600 leading-9 max-w-3xl">
            Discover competitions, startup showcases, entrepreneurial
            workshops, founder talks and innovation-driven experiences
            organized by E-Cell IIT Indore.
          </p>

          <div className="mt-8 flex items-center gap-3 text-[#F59E0B] font-medium">
            <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
            Building India's Startup Culture
          </div>

        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {events.map((event) => (
            <div
              key={event.id}
              className="
                group
                bg-white
                rounded-[28px]
                overflow-hidden
                border
                border-[#E2E8F0]
                shadow-sm
                hover:-translate-y-2
                hover:shadow-xl
                transition-all
                duration-300
              "
            >

              {/* Image */}
              <div className="overflow-hidden">

                <img
                  src={event.image}
                  alt={event.title}
                  className="
                    w-full
                    h-60
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />

              </div>

              {/* Content */}
              <div className="p-7">

                <div className="flex items-center justify-between mb-4">

                  <span className="text-[#F59E0B] font-semibold text-sm">
                    {event.date}
                  </span>

                  <span
                    className="
                      text-xs
                      bg-[#EEF2FE]
                      text-[#3461FF]
                      px-3
                      py-1
                      rounded-full
                      font-medium
                    "
                  >
                    Event
                  </span>

                </div>

                <h3
                  className="
                    text-2xl
                    font-bold
                    text-[#1E2A78]
                    mb-4
                    transition-colors
                    duration-300
                    group-hover:text-[#3461FF]
                  "
                >
                  {event.title}
                </h3>

                <p className="text-slate-600 leading-7">
                  {event.shortDesc}
                </p>

                <button
                  onClick={() => navigate(`/events/${event.id}`)}
                  className="
                    mt-8
                    px-6
                    py-3
                    rounded-full
                    bg-gradient-to-r
                    from-[#3461FF]
                    to-[#5B4DFF]
                    text-white
                    font-medium
                    shadow-md
                    transition-all
                    duration-300
                    hover:scale-105
                  "
                >
                  Read More →
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Events;