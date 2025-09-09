import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Clock } from "lucide-react"; // icons
import SplitText from "../../reactbits/SplitText/SplitText";

const events = [
  {
    title: "Shrimad Bhagwat Katha",
    date: "15th – 21st September 2025",
    time: "4:00 PM – 8:00 PM",
    location: "Varanasi, Uttar Pradesh",
    description:
      "A 7-day spiritual discourse on the timeless wisdom of Shrimad Bhagwat, guiding souls toward devotion and inner peace.",
  },
  {
    title: "Bhajan Sandhya",
    date: "2nd October 2025",
    time: "6:00 PM – 9:00 PM",
    location: "Jaipur, Rajasthan",
    description:
      "An evening of soulful bhajans that awaken devotion and fill hearts with divine love.",
  },
  {
    title: "Women Empowerment Seminar",
    date: "18th November 2025",
    time: "10:00 AM – 2:00 PM",
    location: "Delhi NCR",
    description:
      "A motivational event dedicated to empowering women through education, awareness, and spiritual guidance.",
  },
];

const Events = () => {
  return (
    <section
      id="events"
      className="relative z-10 p-6 sm:p-10 md:p-16 min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-yellow-50 to-orange-50 overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute w-96 h-96 bg-yellow-300 rounded-full blur-3xl opacity-20 animate-pulse -top-20 -left-20 z-0"></div>
      <div className="absolute w-96 h-96 bg-orange-300 rounded-full blur-3xl opacity-20 animate-pulse bottom-20 right-0 z-0"></div>

      <motion.div
        className="bg-white/80 backdrop-blur-xl shadow-xl rounded-3xl max-w-7xl w-full p-8 sm:p-12 text-center border border-yellow-200 relative z-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <SplitText
          text="Upcoming Events"
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-orange-600 drop-shadow-lg"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />

        <p className="text-gray-700 text-lg mt-5 sm:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
          Join us in these spiritual gatherings and social initiatives that
          spread wisdom, devotion, and compassion.
        </p>

        {/* Events Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="bg-white group rounded-2xl p-6 border shadow-lg transition-all duration-300 hover:shadow-xl hover:border-orange-300 relative overflow-hidden text-left"
              whileHover={{ scale: 1.03 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 blur-xl opacity-20 group-hover:opacity-40 rounded-2xl transition-all duration-500 z-0"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-orange-800 mb-2">
                  {event.title}
                </h3>
                <div className="flex items-center text-gray-600 text-sm mb-1">
                  <CalendarDays className="w-4 h-4 mr-2 text-orange-500" />
                  {event.date}
                </div>
                <div className="flex items-center text-gray-600 text-sm mb-1">
                  <Clock className="w-4 h-4 mr-2 text-yellow-500" />
                  {event.time}
                </div>
                <div className="flex items-center text-gray-600 text-sm mb-3">
                  <MapPin className="w-4 h-4 mr-2 text-amber-500" />
                  {event.location}
                </div>
                <p className="text-gray-600 text-sm">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Events;
