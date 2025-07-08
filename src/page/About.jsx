import React from "react";
import { motion } from "framer-motion";
import { GiMusicalNotes, GiLotus } from "react-icons/gi";
import { MdOutlineRecordVoiceOver } from "react-icons/md";
import SplitText from "../../reactbits/SplitText/SplitText"; // Import SplitText component

const About = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <section
      id="about"
      className="relative z-10 p-6 sm:p-10 md:p-16 min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-yellow-50 to-orange-50 overflow-hidden"
    >
      {/* Floating decorative blobs */}
      <div className="absolute w-96 h-96 bg-orange-300 rounded-full blur-3xl opacity-20 animate-pulse -top-20 -left-20 z-0"></div>
      <div className="absolute w-96 h-96 bg-yellow-300 rounded-full blur-3xl opacity-20 animate-pulse top-40 right-0 z-0"></div>

      <motion.div
        className="bg-white/80 backdrop-blur-xl shadow-xl rounded-3xl max-w-6xl w-full p-8 sm:p-12 text-center border border-yellow-200 relative z-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <SplitText
          text="About Sadhvi Samahita Ji"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-orange-600 drop-shadow-lg"
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

        <p className="text-gray-700 text-lg mt-5 sm:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
          Sadhvi Samahita Ji is a revered spiritual teacher, orator, and
          devotional singer who has dedicated her life to sharing the timeless
          wisdom of Hindu scriptures and guiding individuals on a path of
          spiritual growth and devotion.
        </p>

        {/* Role Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Card 1 - Orator */}
          <motion.div
            className="bg-white group rounded-2xl p-6 border shadow-lg transition-all duration-300 hover:shadow-xl hover:border-orange-300 relative overflow-hidden"
            whileHover={{ scale: 1.03 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 blur-xl opacity-20 group-hover:opacity-40 rounded-2xl transition-all duration-500 z-0"></div>

            <div className="relative z-10">
              <motion.div whileHover={{ scale: 1.2 }}>
                <MdOutlineRecordVoiceOver className="text-5xl text-orange-600 mx-auto mb-3" />
              </motion.div>
              <h3 className="text-xl font-semibold text-orange-800 mb-1">
                Spiritual Orator
              </h3>
              <p className="text-gray-600 text-sm">
                Sharing profound truths from sacred scriptures to elevate the
                soul.
              </p>
            </div>
          </motion.div>

          {/* Card 2 - Bhajan Singer */}
          <motion.div
            className="bg-white group rounded-2xl p-6 border shadow-lg transition-all duration-300 hover:shadow-xl hover:border-yellow-300 relative overflow-hidden"
            whileHover={{ scale: 1.03 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-200 to-yellow-400 blur-xl opacity-20 group-hover:opacity-40 rounded-2xl transition-all duration-500 z-0"></div>

            <div className="relative z-10">
              <motion.div whileHover={{ scale: 1.2 }}>
                <GiMusicalNotes className="text-5xl text-yellow-500 mx-auto mb-3" />
              </motion.div>
              <h3 className="text-xl font-semibold text-yellow-700 mb-1">
                Bhajan Singer
              </h3>
              <p className="text-gray-600 text-sm">
                Singing divine melodies that awaken love and devotion within.
              </p>
            </div>
          </motion.div>

          {/* Card 3 - Motivational Speaker */}
          <motion.div
            className="bg-white group rounded-2xl p-6 border shadow-lg transition-all duration-300 hover:shadow-xl hover:border-amber-300 relative overflow-hidden"
            whileHover={{ scale: 1.03 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-400 blur-xl opacity-20 group-hover:opacity-40 rounded-2xl transition-all duration-500 z-0"></div>

            <div className="relative z-10">
              <motion.div whileHover={{ scale: 1.2 }}>
                <GiLotus className="text-5xl text-amber-500 mx-auto mb-3" />
              </motion.div>
              <h3 className="text-xl font-semibold text-amber-700 mb-1">
                Motivational Speaker
              </h3>
              <p className="text-gray-600 text-sm">
                Empowering souls to rise with courage, confidence, and clarity.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
