import React from "react";
import { useParams, Link } from "react-router-dom";
import { events } from "../Data/event";

const EventDetails = () => {
  const { id } = useParams();

  const event = events.find(
    (item) => item.id === parseInt(id)
  );

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#01031F] text-white">
        <h1 className="text-3xl font-bold">Event Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#01031F] via-[#02042A] to-[#03053A] px-6 py-12">
      <div className="max-w-6xl mx-auto">

        {/* Back Button */}
        <Link
          to="/events"
          className="inline-flex items-center gap-2 text-blue-300 hover:text-white transition mb-10"
        >
          ← Back to Events
        </Link>

        {/* Event Title */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
  {event.title}
</h1>

        {/* Date */}
        <div className="inline-block bg-[#0C08B7]/20 border border-[#7995CD]/30 text-[#AFC2FF] px-4 py-2 rounded-full mb-10">
  {event.date}
</div>

        {/* Image */}
        <div className="overflow-hidden rounded-3xl shadow-2xl mb-10">
  <img
    src={event.image}
    alt={event.title}
    className="w-full h-[220px] md:h-[380px] object-cover"
  />

        </div>

        {/* Description */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">
            About This Event
          </h2>

          <p className="text-gray-300 text-lg leading-10 whitespace-pre-line">
            {event.fullDesc}
          </p>
        </div>

      </div>
    </div>
  );
};

export default EventDetails;