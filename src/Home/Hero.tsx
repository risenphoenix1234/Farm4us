import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaSeedling, FaPeopleCarry, FaHandHoldingHeart } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="relative w-full h-[80vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-green-900/30 z-0"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center px-4 sm:px-8"
      >
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide leading-snug">
          <span className="inline-flex items-center gap-2 justify-center mb-2">
            <FaSeedling className="text-green-400 text-3xl sm:text-4xl" />
            <span>REVIVING LANDS,</span>
          </span>
          <br />
          <span className="inline-flex items-center gap-2 justify-center mt-2">
            <FaPeopleCarry className="text-yellow-400 text-3xl sm:text-4xl" />
            <span>EMPOWERING COMMUNITIES</span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-5 text-sm sm:text-base md:text-lg text-green-200 max-w-2xl mx-auto px-2"
        >
          Join the movement to put dormant arable lands into use and prevent food
          insecurity from threatening Africa’s future—
          <span className="text-white font-medium"> triggering hunger, poverty, and unemployment</span>.
        </motion.p>

        <a href="#movement">
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 1.5, duration: 0.6 }}
    className="mt-8 flex justify-center"
  >
    <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300 ease-in-out flex items-center gap-2 text-sm sm:text-base cursor-pointer">
      <FaHandHoldingHeart className="text-lg" />
      Get Involved
    </button>
  </motion.div>
</a>

      </motion.div>
    </div>
  );
}
