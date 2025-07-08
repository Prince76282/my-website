
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SplitText from "../../reactbits/SplitText/SplitText"; // Import SplitText component

const videoLinks = [
  {
    id: "4CmvRywqR5M",
    title:
      "Savadhan India (सावधान इंडिया) साध्वी समाहिता  !! Sadhvi Samahita Ji !! ",
    start: 3,
  },
  {
    id: "p9RxII6DoAU",
    title:
      "Live - देवी भागवत कथा !! Day 09 !! ,बभनान (उत्तर प्रदेश) !! Sadhvi Samahita Ji !!",
    start: 3,
  },
  {
    id: "PUApmncTuNw",
    title:
      " Live - देवी भागवत कथा !! Day 08 !! ,बभनान (उत्तर प्रदेश) !! Sadhvi Samahita Ji !!",
  },
  {
    id: "-8ZUou6jBP0",
    title:
      " Live - देवी भागवत कथा !! Day 07 !! ,बभनान (उत्तर प्रदेश) !! Sadhvi Samahita Ji !!",
  },
  {
    id: "BygRIjaUC7Q",
    title:
      "Live - देवी भागवत कथा !! Day 06 !! ,बभनान (उत्तर प्रदेश) !! Sadhvi Samahita Ji !!",
  },
  {
    id: "CB3jufNHSEc",
    title:
      " Live - देवी भागवत कथा !! Day 05 !! ,बभनान (उत्तर प्रदेश) !! Sadhvi Samahita Ji !!",
  },
  {
    id: "fxLm-xwFgP8",
    title:
      "Live - देवी भागवत कथा !! Day 04 !! ,बभनान (उत्तर प्रदेश) !! Sadhvi Samahita Ji !!",
  },
  {
    id: "zSrP-esuIBk",
    title:
      "Live - देवी भागवत कथा !! Day 03 !! ,बभनान (उत्तर प्रदेश) !! Sadhvi Samahita Ji !!",
  },
];

const Videos = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const displayedVideos = videoLinks.slice(0, visibleCount);
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <section className="relative p-6 sm:p-10 bg-gradient-to-b from-white to-yellow-50 min-h-screen overflow-hidden">
      {/* Background Glow Blobs */}
      <div className="absolute top-[-100px] left-[-80px] w-80 h-80 bg-orange-300 opacity-20 rounded-full blur-3xl animate-pulse z-0"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-yellow-300 opacity-20 rounded-full blur-3xl animate-pulse z-0"></div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <SplitText
          text=" 📺 YouTube Videos"
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

        {/* Video Grid */}
        <div className="grid grid-cols-1  mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {displayedVideos.map((video, index) => (
              <motion.div
                key={video.id}
                className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition border border-orange-100 bg-white"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <iframe
                  className="w-full h-[220px] sm:h-[240px] md:h-[200px] lg:h-[180px] xl:h-[200px]"
                  src={`https://www.youtube.com/embed/${video.id}${
                    video.start ? `?start=${video.start}` : ""
                  }`}
                  title={video.title}
                  loading="lazy"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="bg-yellow-100 text-orange-700 py-3 px-4 text-sm font-semibold tracking-wide">
                  {video.title}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {visibleCount < videoLinks.length && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLoadMore}
            className="mt-10 px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-full text-sm font-semibold shadow-md transition"
          >
            Show More Videos
          </motion.button>
        )}
      </motion.div>
    </section>
  );
};

export default Videos;
