"use client";

import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full shadow-md">
      {/* Large Screen Header (md & up) */}
   {/* Large Screen Header (md & up) */}
<div className="hidden md:flex w-full">
  {/* Left Section (White Background - Logo) */}
  <div className="bg-white px-4 py-4 flex items-center w-full max-w-[250px] md:max-w-[300px] lg:max-w-[350px]">
    <Link to="/">
      <img
        src="/logo.png"
        alt="Farm4Us Logo"
        className="h-10 pl-4 md:pl-8 lg:pl-16 cursor-pointer"
      />
    </Link>
  </div>

  {/* Middle Spacer (White Background) */}
  <div className="flex-1 bg-white" />

  {/* Right Wrapper: Green Nav + Brown Box */}
  <div className="flex">
    {/* Green Background - Navigation */}
    <div className="bg-[#4bae44] flex items-center justify-end px-4 md:px-6 lg:px-10">
      <nav className="flex space-x-4 md:space-x-6 lg:space-x-8">
        <Link
          to="/"
          className="text-white hover:text-gray-200 transition-colors duration-300"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-white hover:text-gray-200 transition-colors duration-300"
        >
          About Us
        </Link>
        <Link
          to="/solutions"
          className="text-white hover:text-gray-200 transition-colors duration-300"
        >
          Solutions
        </Link>
        <Link
          to="/contact"
          className="text-white hover:text-gray-200 transition-colors duration-300"
        >
          Contact
        </Link>
      </nav>
    </div>

    {/* Brown Section (Far Right) */}
    <div className="w-16 md:w-24 lg:w-32 bg-[#a14418]"></div>
  </div>
</div>


      {/* Mobile Header (sm & below) */}
      <div className="md:hidden flex items-center justify-between bg-white px-4 py-3 shadow-md">
        <img src="/logo.png" alt="Farm4Us Logo" className="h-8" />

        {/* Hamburger Menu Button */}
        <button
          className="text-[#4bae44] p-2 rounded"
          onClick={() => setIsOpen(true)}
        >
          <FiMenu size={24} />
        </button>
      </div>

      {/* Full-Screen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#4bae44] flex flex-col items-center justify-center text-white z-50">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={() => setIsOpen(false)}
          >
            <FiX />
          </button>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-6 text-2xl">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <img
                src="/logo.png"
                alt="Farm4Us Logo"
                className="h-8 cursor-pointer"
              />
            </Link>

            <Link
              to="/"
              className="hover:text-gray-300 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-gray-300 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-300 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/solutions"
              className="hover:text-gray-300 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Solutions
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
