import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import About from "./About";
import Bhajans from "./Bhajans";
import Videos from "./Videos";
import Gallery from "./Gallery";
import Events from "./Events";
import Contact from "./Contact";
import img from "../assets/image.png"; 
import bgVideo from "../assets/video.mp4"; 
import SplitText from "../../reactbits/SplitText/SplitText"; 

const Home = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <>
     
      <motion.div className="fixed top-[-100px] left-[-100px] w-96 h-96 bg-orange-300 opacity-20 rounded-full blur-3xl animate-pulse z-0" />
      <motion.div className="fixed bottom-[-100px] right-[-100px] w-96 h-96 bg-yellow-300 opacity-20 rounded-full blur-3xl animate-pulse z-0" />

     
      <motion.section
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 lg:px-16 py-16 text-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* ✅ Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* ✅ Overlay for readability */}
        <div className="absolute inset-0 bg-white bg-opacity-20 z-10" />

        {/* ✅ Main Hero Content */}
        <motion.div
          className="max-w-4xl relative z-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src={img}
            alt="Sadhvi Samahita"
            className="w-32 h-32 lg:w-48 lg:h-48 rounded-full mx-auto mb-6 shadow-xl border-4 border-orange-300 object-cover"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200 }}
          />

          <SplitText
            text="Welcome to"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-orange-800 drop-shadow-lg"
            delay={100}
            duration={0.3}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <motion.h2
            className=""
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <br />
            <span className="text-yellow-600"></span>
          </motion.h2>
          <SplitText
            text="Sadhvi Samahita's World"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-orange-600 drop-shadow-lg"
            delay={100}
            duration={0.2}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.01}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />

          <motion.p
            className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-red-900 font-medium leading-relaxed"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Spiritual Orator 🎤 | Bhajan Singer 🎶 | Motivational Speaker 💫
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <a
              href="https://www.youtube.com/@SadhviSamahita"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full shadow-lg transition-all duration-300 text-lg lg:text-xl"
            >
              <FaYoutube size={24} />
              YouTube
            </a>
            <a
              href="https://www.instagram.com/sadhvisamahita_?igsh=NTc5b3I1Yngyd25s"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#E30C74] hover:bg-pink-800 text-white px-8 py-3 rounded-full shadow-lg transition-all duration-300 text-lg lg:text-xl"
            >
              <FaInstagram size={24} />
              Instagram
            </a>
            <a
              href="https://www.facebook.com/sadhvisamahita7/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#0866FF] hover:bg-blue-800 text-white px-8 py-3 rounded-full shadow-lg transition-all duration-300 text-lg lg:text-xl"
            >
              <FaFacebook size={24} />
              Facebook
            </a>
          </motion.div>

          <motion.a
            href="#about"
            className="mt-10 inline-block text-orange-600 hover:text-orange-800 transition text-lg font-medium animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            ↓ Learn more about me
          </motion.a>
        </motion.div>
      </motion.section>

      {/* Sections */}
      {[
        { id: "about", bg: "bg-white", Component: About },
        { id: "bhajans", bg: "bg-yellow-50", Component: Bhajans },
        { id: "videos", bg: "bg-orange-50", Component: Videos },
        { id: "gallery", bg: "bg-yellow-50", Component: Gallery },
        { id: "events", bg: "bg-orange-50", Component: Events },
        { id: "contact", bg: "bg-white", Component: Contact },
      ].map(({ id, bg, Component }) => (
        <motion.section
          id={id}
          key={id}
          className={`${bg} relative z-10`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Component />
        </motion.section>
      ))}

      {/* Scroll to Top */}
      {showTopBtn && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 bg-orange-500 hover:bg-orange-600 text-white rounded-full p-3 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          ⬆
        </motion.button>
      )}
    </>
  );
};

export default Home;
