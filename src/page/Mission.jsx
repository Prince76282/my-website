import React from "react";
import { motion } from "framer-motion";
import SplitText from "../../reactbits/SplitText/SplitText";

const Mission = () => {
  const handleAnimationComplete = () => {
    console.log("Mission heading animation complete!");
  };

  return (
    <section
      id="mission"
      className="relative z-10 p-6 sm:p-10 md:p-16 min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-50 via-yellow-50 to-white overflow-hidden"
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
          text="Her Mission"
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
          onLetterAnimationComplete={handleAnimationComplete}
        />

        <p className="text-gray-700 text-lg mt-5 sm:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
          A tireless crusader for women’s safety, dignity, and empowerment, her
          mission is to awaken hearts and build a compassionate society.
        </p>

        {/* Mission Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <motion.div
            className="bg-white group rounded-2xl p-6 border shadow-lg transition-all duration-300 hover:shadow-xl hover:border-orange-300 relative overflow-hidden"
            whileHover={{ scale: 1.03 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 blur-xl opacity-20 group-hover:opacity-40 rounded-2xl transition-all duration-500 z-0"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-orange-800 mb-2">
                Save Girl, Support Girl Movement
              </h3>
              <p className="text-gray-600 text-sm">
                Founder of this profound movement, she has committed her life to
                the protection, education, and empowerment of girls, believing
                every daughter is a divine manifestation of Shakti.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-white group rounded-2xl p-6 border shadow-lg transition-all duration-300 hover:shadow-xl hover:border-yellow-300 relative overflow-hidden"
            whileHover={{ scale: 1.03 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-200 to-yellow-400 blur-xl opacity-20 group-hover:opacity-40 rounded-2xl transition-all duration-500 z-0"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-yellow-700 mb-2">
                Empowering the Underprivileged
              </h3>
              <p className="text-gray-600 text-sm">
                She provides free education, ensures safe upbringing, and even
                supports the marriage of daughters in need, working to break the
                chains of ignorance and injustice.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-white group rounded-2xl p-6 border shadow-lg transition-all duration-300 hover:shadow-xl hover:border-amber-300 relative overflow-hidden"
            whileHover={{ scale: 1.03 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-400 blur-xl opacity-20 group-hover:opacity-40 rounded-2xl transition-all duration-500 z-0"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-amber-700 mb-2">
                Holistic Development
              </h3>
              <p className="text-gray-600 text-sm">
                Her teachings promote a balanced lifestyle, inspiring youth to
                focus on health, hygiene, and self-care, nurturing the mind,
                body, and soul for a brighter future.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Mission;
