"use client";

import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "Farm4Us is playing a key role in revitalizing unused farmlands and tackling food insecurity across Africa. I am a testament to this as this started in my community at Mayo. Their commitment to empowering rural communities is truly inspiring as some of our youths have been employed by them",
    name: "Angwan Mayo Community Head",
    location: "Nasarawa, Nigeria",
  },
  {
    quote:
      "A company like Farm4Us is exactly what Africa needs—innovation, sustainability, and real impact!",
    name: "Lerato Mokoena",
    location: "Cape Town, South Africa",
  },
  {
    quote:
      "Investing in Farm4Us means investing in a food-secure and prosperous Africa. I support Farm4Us",
    name: "James Carter",
    location: "United States",
  },
  {
    quote:
      "Farm4Us is redefining agribusiness by combining technology with community-driven solutions",
    name: "Ava Thompson",
    location: "Canada",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-12 text-center relative">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-10">What People Say</h2>

      {/* Carousel container */}
      <div className="relative flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 text-gray-600 hover:text-gray-900 text-3xl px-4 z-10"
          aria-label="Previous testimonial"
        >
          <FaChevronLeft />
        </button>

        {/* Testimonial Card */}
        <div className="bg-white p-6 shadow-lg rounded-lg text-gray-700 text-lg max-w-xl mx-auto min-h-[250px] flex flex-col justify-center transition-all duration-300 ease-in-out">
          <p className="mb-4">"{currentTestimonial.quote}"</p>
          <p className="font-bold">{currentTestimonial.name}</p>
          <p className="font-bold">{currentTestimonial.location}</p>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 text-gray-600 hover:text-gray-900 text-3xl px-4 z-10"
          aria-label="Next testimonial"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
