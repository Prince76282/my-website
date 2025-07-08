import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import {
  FaHome,
  FaUserAlt,
  FaMusic,
  FaVideo,
  FaImages,
  FaCalendarAlt,
  FaEnvelope,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Navigation links with icons
const navLinks = [
  { name: "Home", to: "/", icon: <FaHome /> },
  { name: "About", to: "/about", icon: <FaUserAlt /> },
  { name: "Bhajans", to: "/bhajans", icon: <FaMusic /> },
  { name: "Videos", to: "/videos", icon: <FaVideo /> },
  { name: "Gallery", to: "/gallery", icon: <FaImages /> },
  { name: "Events", to: "/events", icon: <FaCalendarAlt /> },
  { name: "Contact", to: "/contact", icon: <FaEnvelope /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-lg shadow-md z-50 transition-all">
      <div className="max-w-7xl mx-auto px-6 py-6 md:py- 6 flex justify-between items-center">
        {/* Menu Icon (Left) */}
        <div
          className="md:hidden text-2xl text-orange-600 cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </div>

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl md:text-4xl font-extrabold text-orange-600 tracking-wide hover:text-orange-700 transition"
        >
          Sadhvi Samahita
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-[16px] font-medium text-orange-800">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`hover:text-orange-500 transition duration-300 ${
                location.pathname === link.to
                  ? "text-orange-500 font-semibold"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </ul>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed top-[5.5rem] left-0 w-72 bg-white/95 backdrop-blur-md shadow-xl border-r border-orange-100 z-50 h-[calc(100vh-5.5rem)] rounded-tr-xl rounded-br-xl"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col space-y-5 text-sm font-medium text-orange-800 p-6">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.to}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.07 }}
                >
                  <Link
                    to={link.to}
                    onClick={toggleMenu}
                    className={`flex items-center gap-3 text-lg transition-all duration-300 hover:text-orange-500 ${
                      location.pathname === link.to
                        ? "text-orange-500 font-semibold"
                        : ""
                    }`}
                  >
                    <span className="text-xl">{link.icon}</span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
