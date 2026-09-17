import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#4bae44] text-white pt-16 pb-10 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Logo & Description */}
          <div className="space-y-6 flex flex-col items-center md:items-start px-2">
            <img
              src="/logo2.png"
              alt="Farm4Us Logo"
              className="h-12 mx-auto md:mx-0"
            />
            <p className="font-medium text-sm sm:text-base leading-relaxed max-w-xs">
              Africa deserves an agricultural system that prioritizes food
              security and community empowerment
            </p>
            <div className="flex flex-col items-center md:items-start gap-2">
  <span className="font-semibold text-sm sm:text-base text-yellow-300">
    Follow us:
  </span>
  <div className="flex justify-center gap-4 text-xl">
    <a
      href="https://www.facebook.com/farm4usagric"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-yellow-300 transition-colors"
    >
      <FaFacebookF className="text-white hover:text-blue-400" />
    </a>
    <a
      href="https://instagram.com/farm4usagric"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-yellow-300 transition-colors"
    >
      <FaInstagram className="text-white hover:text-pink-400" />
    </a>
    <a
      href="https://x.com/farm4usagric"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-yellow-300 transition-colors"
    >
      <FaTwitter className="text-white hover:text-sky-400" />
    </a>
    <a
      href="https://www.linkedin.com/company/farm4usagric/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-yellow-300 transition-colors"
    >
      <FaLinkedinIn className="text-white hover:text-blue-500" />
    </a>
  </div>
</div>

          </div>

          {/* Navigation Links */}
          <div className="space-y-4 flex flex-col items-center md:items-start px-2">
            <h3 className="font-bold text-lg text-yellow-300">Quick Links</h3>
            <Link to="/about" className="font-medium text-sm sm:text-base hover:underline hover:text-yellow-200">
              About Us
            </Link>
            <Link to="/solutions" className="font-medium text-sm sm:text-base hover:underline hover:text-yellow-200">
              Solution
            </Link>
            <Link to="/contact" className="font-medium text-sm sm:text-base hover:underline hover:text-yellow-200">
              Contact
            </Link>
            <Link to="/privacy" className="font-medium text-sm sm:text-base hover:underline hover:text-yellow-200">
              Privacy Policy
            </Link>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 flex flex-col items-center md:items-start px-2 text-sm sm:text-base">
            <h3 className="font-bold text-lg text-yellow-300">Contact Us</h3>
            <div className="flex items-start gap-3">
              <FaPhoneAlt className="mt-1 text-yellow-200" />
              <span>+234 812 752 4736</span>
            </div>
            <div className="flex items-start gap-3">
              <FaEnvelope className="mt-1 text-yellow-200" />
              <span>inquiries@farm4us.com</span>
            </div>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-yellow-200" />
              <span className="text-center md:text-left">
                NO. 2, GRA Beside Local Government Secretariat, Garaku,
                Nasarawa State, Nigeria
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-10 border-white/30" />

        {/* Bottom Text */}
        <p className="text-center text-xs sm:text-sm md:text-base text-white">
          &copy; 2025 <span className="text-yellow-300">Farm4Us</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
