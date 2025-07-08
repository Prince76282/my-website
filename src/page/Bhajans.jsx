import React from "react";
import { motion } from "framer-motion";
import { FaMusic } from "react-icons/fa";
import SplitText from "../../reactbits/SplitText/SplitText"; // Import SplitText component


const bhajansList = [
  { title: "Bhajan 1 - Anand Mangal", url: "#" },
  { title: "Bhajan 2 - Prabhu Ke Charan", url: "#" },
  { title: "Bhajan 3 - Bhakti Ras Dhara", url: "#" },
  { title: "Bhajan 4 - Ram Dhun", url: "#" },
  { title: "Bhajan 5 - Hare Krishna", url: "#" },
  { title: "Bhajan 6 - Shiv Tandav", url: "#" },
  { title: "Bhajan 3 - Bhakti Ras Dhara", url: "#" },
  { title: "Bhajan 4 - Ram Dhun", url: "#" },
  { title: "Bhajan 5 - Hare Krishna", url: "#" },
];

const Bhajans = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <section className="relative z-10 p-6 sm:p-10 bg-gradient-to-b from-yellow-50 to-white min-h-screen overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-80 h-80 bg-orange-300 opacity-30 rounded-full blur-3xl animate-pulse z-0"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-80 h-80 bg-yellow-300 opacity-30 rounded-full blur-3xl animate-pulse z-0"></div>

      <motion.div
        className="max-w-6xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <SplitText
          text=" 🎶 Featured Bhajans"
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-orange-600 drop-shadow-lg"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />

        

        {/* Grid container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 gap-6">
          {bhajansList.map((bhajan, index) => (
            <motion.div
              key={index}
              className="relative group bg-white/80 backdrop-blur-lg border border-yellow-100 shadow-lg rounded-2xl p-6 flex flex-col justify-between text-left overflow-hidden"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-orange-100 to-yellow-300 opacity-20 blur-2xl group-hover:opacity-30 transition-all duration-300"></div>

              {/* Content */}
              <div className="relative z-10 flex items-center space-x-4 mb-4">
                <FaMusic className="text-orange-500 text-3xl group-hover:animate-bounce transition" />
                <span className="text-lg sm:text-xl font-semibold text-gray-800">
                  {bhajan.title}
                </span>
              </div>

              <a
                href={bhajan.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 mt-auto px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm sm:text-base transition font-medium shadow-md hover:shadow-lg hover:scale-105 w-fit"
              >
                Listen Now
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Bhajans;
