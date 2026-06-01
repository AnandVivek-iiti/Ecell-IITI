import React, { useState, useEffect } from "react";
import { events } from "../Data/Events/eventData";



const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#04112E] via-[#0A2463] to-[#0C08B7] py-16 px-6">
      {/* Hero Section */}
      <div className="text-center mb-16">
       <h1 className="text-4xl md:text-7xl font-bold text-white">
          E-Cell Events
        </h1>

        <p className="max-w-4xl mx-auto mt-8 text-lg md:text-xl text-blue-100 leading-relaxed">
          Discover and participate in inspiring events organized by E-Cell IIT
          Indore. From startup bootcamps and entrepreneurship workshops to
          networking sessions, founder talks, and innovation challenges, we
          empower students to transform ideas into impactful ventures.
        </p>
      </div>

      {/* Event Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-60 object-cover"
            />

            <div className="p-6">
              <div className="inline-block bg-slate-700 text-white text-sm px-4 py-2 rounded-full mb-4">
                Past Event
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3 h-10 flex items-start">
  {event.title}
</h3>

              <p className="text-gray-600 h-12 line-clamp-3 mb-5">
  {event.shortDesc}
</p>

              <p className="text-blue-600 font-medium mb-6">{event.date}</p>

             <button
  onClick={() => setSelectedEvent(event)}
  className="mt-auto w-full py-3 rounded-xl bg-[#e8e9ed] text-blue-900 font-semibold border border-[#7d87a3] hover:bg-[#6982c9] transition-all duration-300"
>
  Read More →
</button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
       {/* {selectedEvent && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[85vh] overflow-y-auto my-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-3xl font-bold">
                {selectedEvent.title}
              </h2>

              <button
                onClick={() => setSelectedEvent(null)}
                className="text-3xl font-bold"
              >
                ×
              </button>
            </div>

            <img
              src={selectedEvent.image}
              alt={selectedEvent.title}
              className="w-full h-96 object-cover"
            />

            <div className="p-8">
              <p className="text-blue-600 font-semibold mb-4">
                {selectedEvent.date}
              </p>

              <p className="text-gray-700 leading-8 text-lg">
                {selectedEvent.fullDesc}
              </p>
            </div>
          </div>
        </div>
      )}  */}



    </div>
  );
};

export default Events;




