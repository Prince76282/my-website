import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SplitText from "../../reactbits/SplitText/SplitText";

// Import images
import img1 from "../assets/SadhviSamahita1.png";
import img2 from "../assets/SadhviSamahita2.png";
import img3 from "../assets/SadhviSamahita3.png";
import img4 from "../assets/SadhviSamahita4.png";
import img5 from "../assets/SadhviSamahita5.png";
import img6 from "../assets/SadhviSamahita6.png";
import img7 from "../assets/SadhviSamahita7.png";
import img8 from "../assets/SadhviSamahita8.png";
import img9 from "../assets/SadhviSamahita9.png";
import img10 from "../assets/SadhviSamahita10.png";
import img11 from "../assets/SadhviSamahita11.png";
import img12 from "../assets/SadhviSamahita12.png";
import img13 from "../assets/SadhviSamahita13.png";
import img14 from "../assets/SadhviSamahita14.png";
import img15 from "../assets/SadhviSamahita15.png";
import img16 from "../assets/SadhviSamahita16.png";
import img17 from "../assets/SadhviSamahita17.png";
import img18 from "../assets/SadhviSamahita18.png";
import img19 from "../assets/SadhviSamahita19.png";
import img20 from "../assets/SadhviSamahita20.png";
import img21 from "../assets/SadhviSamahita21.png";

const galleryImages = [
  { src: img1, alt: "Event 1" },
  { src: img2, alt: "Event 2" },
  { src: img3, alt: "Event 3" },
  { src: img4, alt: "Event 4" },
  { src: img5, alt: "Event 5" },
  { src: img6, alt: "Event 6" },
  { src: img7, alt: "Event 7" },
  { src: img8, alt: "Event 8" },
  { src: img9, alt: "Event 9" },
  { src: img10, alt: "Event 10" },
  { src: img11, alt: "Event 11" },
  { src: img12, alt: "Event 12" },
  { src: img13, alt: "Event 13" },
  { src: img14, alt: "Event 14" },
  { src: img15, alt: "Event 15" },
  { src: img16, alt: "Event 16" },
  { src: img17, alt: "Event 17" },
  { src: img18, alt: "Event 18" },
  { src: img19, alt: "Event 19" },
  { src: img20, alt: "Event 20" },
  { src: img21, alt: "Event 21" },
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const visibleImages = showAll ? galleryImages : galleryImages.slice(0, 8);

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (showPreview && !isHovered) {
      const timer = setInterval(nextImage, 5000);
      return () => clearInterval(timer);
    }
  }, [showPreview, isHovered]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setShowPreview(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="relative p-4 sm:p-10 bg-gradient-to-b from-white via-yellow-50 to-orange-50 min-h-screen overflow-hidden">
      {/* Glows */}
      <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-orange-300 opacity-20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-80px] right-[-80px] w-80 h-80 bg-yellow-300 opacity-20 rounded-full blur-3xl animate-pulse" />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <SplitText
          text="📸 Gallery"
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-orange-600 drop-shadow-lg"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
        />

        {/* Preview Modal */}
        {showPreview && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center px-2 sm:px-6"
            onClick={() => setShowPreview(false)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Close button */}
            <button
              onClick={() => setShowPreview(false)}
              aria-label="Close preview"
              className="absolute top-4 right-4 bg-white text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 p-2 text-2xl rounded-full shadow-xl z-50"
            >
              &times;
            </button>

            {/* Image and Nav */}
            <div
              className="relative flex items-center gap-3 w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={prevImage}
                className="text-white hover:text-orange-400 bg-black bg-opacity-40 p-3 rounded-full"
              >
                <FaArrowLeft size={24} />
              </button>

              <motion.img
                key={galleryImages[selectedIndex].src}
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt}
                className="w-full max-h-[70vh] sm:rounded-xl object-contain"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              />

              <button
                onClick={nextImage}
                className="text-white hover:text-orange-400 bg-black bg-opacity-40 p-3 rounded-full"
              >
                <FaArrowRight size={24} />
              </button>
            </div>
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {visibleImages.map((img, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              onClick={() => {
                setSelectedIndex(index);
                setShowPreview(true);
              }}
            >
              <img
                loading="lazy"
                src={img.src}
                alt={img.alt}
                className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 group-hover:brightness-90 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-500">
                <span className="text-white text-sm sm:text-lg font-semibold tracking-wide">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See All Button */}
        <div className="mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-orange-600 hover:text-orange-800 font-semibold underline transition duration-300"
          >
            {showAll ? "Show Less" : "See All"}
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Gallery;
