import React, { useRef } from "react";
import { motion } from "framer-motion";
import { MdPerson, MdEmail, MdMessage } from "react-icons/md";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import emailjs from "emailjs-com";

const fadeVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.name.value;
    const email = form.current.email.value;
    const message = form.current.message.value;

    emailjs
      .sendForm(
        "your_service_id", // Replace with real ID
        "your_template_id",
        form.current,
        "your_public_key"
      )
      .then(
        () => {
          alert("✅ Email sent successfully!");
          const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
          const whatsappLink = `https://wa.me/9660000146?text=${whatsappMessage}`;
          window.open(whatsappLink, "_blank");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send email.");
          console.error(error.text);
        }
      );
  };

  return (
    <section className="relative px-4 py-28 sm:px-8 lg:px-10 bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 min-h-[120vh] overflow-hidden">
      {/* Glowing Blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange-300 opacity-20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-80px] right-[-80px] w-72 h-72 bg-yellow-300 opacity-20 rounded-full blur-3xl animate-pulse" />

      {/* Contact Form Card */}
      <motion.div
        className="relative z-10 max-w-xl mx-auto bg-white/80 p-8 sm:p-10 rounded-3xl shadow-2xl border border-orange-200 backdrop-blur-md"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.h2
          className="text-4xl font-extrabold text-orange-600 text-center mb-8"
          variants={fadeVariant}
        >
          📬 Let's Connect our mission to uplift, educate, and empower girls
        </motion.h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          {[
            {
              icon: <MdPerson className="text-red-900" />,
              name: "name",
              type: "text",
              placeholder: "Your Name",
              label: "Your Name",
            },
            {
              icon: <MdEmail />,
              name: "email",
              type: "email",
              placeholder: "Your Email",
              label: "Your Email",
            },
          ].map(({ icon, name, type, placeholder, label }, i) => (
            <motion.div
              className="relative"
              key={name}
              custom={i}
              variants={fadeVariant}
            >
              <span className="absolute left-4 top-3.5 text-orange-400 text-xl">
                {icon}
              </span>
              <input
                type={type}
                name={name}
                required
                placeholder={placeholder}
                className="peer pl-12 w-full px-4 py-3 border border-orange-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-transparent transition-all bg-white/80 backdrop-blur"
              />
              <label className="absolute left-12 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-orange-600 bg-white px-1">
                {label}
              </label>
            </motion.div>
          ))}

          {/* Message Box */}
          <motion.div className="relative" custom={2} variants={fadeVariant}>
            <MdMessage className="absolute left-4 top-4 text-orange-700 text-xl" />
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Your Message"
              className="peer pl-12 w-full px-4 py-3 border border-orange-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-transparent transition-all bg-white/80 backdrop-blur"
            ></textarea>
            <label className="absolute left-12 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-orange-600 bg-white px-1">
              Your Message
            </label>
          </motion.div>

          {/* Submit */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeVariant}
            className="w-full bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg tracking-wide transition-all"
          >
            🚀 Send Message
          </motion.button>
        </form>

        {/* Social Media */}
        <motion.div
          className="flex justify-center gap-4 mt-6"
          variants={fadeVariant}
          custom={4}
        >
          <a
            href="https://wa.me/9660000146"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition"
          >
            <FaWhatsapp className="text-lg" />
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/sadhvisamahita_?igsh=NTc5b3I1Yngyd25s/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-xl hover:bg-pink-600 transition"
          >
            <FaInstagram className="text-lg" />
            Instagram
          </a>
        </motion.div>

        {/* Donation Section */}
        <motion.div
          className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-yellow-100 via-orange-50 to-yellow-100 border border-orange-200 shadow-lg text-center"
          variants={fadeVariant}
          custom={5}
        >
          <h3 className="text-2xl font-bold text-orange-700 mb-3">
            🌸 Support Our Mission
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Your contribution helps us educate, empower, and uplift
            underprivileged girls through the{" "}
            <strong>"Save Girl, Support Girl"</strong> movement.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* UPI Donation Button */}
            <a
              href="upi://pay?pa=your-upi-id@upi&pn=SadhviSamahitaJi&cu=INR"
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl shadow-md transition"
            >
              💳 Donate via UPI
            </a>

            {/* Bank / PayPal Link */}
            <a
              href="https://your-donation-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-xl shadow-md transition"
            >
              🌍 Donate Online
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
