import React from "react";
import { events } from "../Data/event";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Events = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#01031F] via-[#02042A] to-[#03053A] py-16 px-6 md:px-10">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          E-Cell Events
        </h1>

        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>

        <p className="max-w-4xl mx-auto mt-8 text-lg md:text-xl text-blue-100 leading-relaxed">
          Discover and participate in inspiring events organized by E-Cell IIT
          Indore. From startup bootcamps and entrepreneurship workshops to
          networking sessions, founder talks, and innovation challenges, we
          empower students to transform ideas into impactful ventures.
        </p>
      </div>

      {/* Event Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {events.map((event) => (
          <div
            key={event.id}
            className="
              group
              overflow-hidden
              rounded-3xl
              bg-white/5
              backdrop-blur-lg
              border border-white/10
              shadow-xl
              hover:shadow-blue-500/20
              hover:-translate-y-3
              transition-all
              duration-500
              flex
              flex-col
            "
          >
            {/* Image */}
            <div className="overflow-hidden relative">
              <img
                src={event.image}
                alt={event.title}
                className="
                  w-full
                  h-60
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              <span className="absolute top-4 left-4 bg-[#0F172A]/90 text-white text-xs px-4 py-2 rounded-full font-medium backdrop-blur-md">
                Past Event
              </span>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <p className="text-blue-400 text-sm font-semibold mb-3">
                {event.date}
              </p>

              <h3 className="text-2xl font-bold text-white mb-1 min-h-[64px]">
                {event.title}
              </h3>

              <p className="text-slate-300 leading-7 flex-1">
                {event.shortDesc}
              </p>

              {/* Button */}
              <button
                onClick={() => navigate(`/events/${event.id}`)}
                className="
                  mt-8
                  w-full
                  py-3.5
                  rounded-xl
                  font-semibold
                  text-white
                  bg-gradient-to-r
                  from-blue-600
                  to-indigo-600
                  hover:from-blue-500
                  hover:to-purple-600
                  transition-all
                  duration-300
                  shadow-lg
                  hover:shadow-blue-500/40
                "
              >
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;