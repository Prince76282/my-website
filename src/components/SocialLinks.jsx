// SocialLinks.jsx (example structure)
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const SocialLinks = () => (
  <div className="flex justify-center gap-6">
    <a
      href="https://wa.me/7667676282"
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-600 hover:text-green-700 text-2xl transition-transform hover:scale-110"
    >
      <FaWhatsapp />
    </a>
    <a
      href="https://www.instagram.com/sadhvisamahita_"
      target="_blank"
      rel="noopener noreferrer"
      className="text-pink-500 hover:text-pink-600 text-2xl transition-transform hover:scale-110"
    >
      <FaInstagram />
    </a>
    <a
      href="https://www.facebook.com/sadhvisamahita7/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:text-blue-700 text-2xl transition-transform hover:scale-110"
    >
      <FaFacebook />
    </a>
  </div>
);

export default SocialLinks;
