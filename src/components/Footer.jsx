import React from "react";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

const footerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 12,
      delay: 0.2,
    },
  },
};

const Footer = () => (
  <motion.footer
    className="relative bg-gradient-to-r from-orange-100 to-yellow-100 text-center py-5 border-t border-orange-200 overflow-hidden"
    variants={footerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    {/* Glowing top border */}
    <motion.div
      className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 blur-sm opacity-30"
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      transition={{ delay: 0.3, duration: 1.2 }}
    />

    {/* Pulsing blob */}
    <motion.div
      className="absolute bottom-[-80px] left-1/2 transform -translate-x-1/2 w-96 h-96 bg-orange-300 opacity-20 blur-3xl rounded-full"
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ repeat: Infinity, duration: 8 }}
    />

    {/* Social Icons */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="relative z-10"
    >
      <SocialLinks />
    </motion.div>

    {/* Alternating marquee animation */}
    <div className="relative z-10 mt-6 overflow-hidden whitespace-nowrap w-full">
      <motion.div
        className="inline-block text-sm text-orange-700 font-medium"
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
          repeatType: "mirror",
        }}
      >
        Sadhvi Samahita 
      </motion.div>
    </div>
  </motion.footer>
);

export default Footer;
