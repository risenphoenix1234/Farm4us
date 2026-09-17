import React from "react";

export default function WhoWeAre() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto py-10 px-6">
    {/* Left Side - Image */}
<div className="w-full lg:w-1/2 hidden lg:block">
  <img
    src="/4.jpg"
    alt="Agriculture field"
    className="w-full h-full min-h-[450px] object-cover rounded-3xl shadow-lg"
  />
</div>


      {/* Right Side - Content */}
      <div className="w-full lg:w-1/2 lg:pl-10 mt-6 lg:mt-0">
        {/* Decorative line with 10% brown and 90% green */}
        <div className="flex items-center mb-4">
          <div className="h-1 w-6 bg-[#AB420B]"></div> {/* 10% brown (6px) */}
          <div className="h-1 w-14 bg-[#4CAF50]"></div> {/* 90% green (14px) */}
        </div>

        {/* Intro Text */}
        <p className="text-gray-700 font-medium">
          Africa deserves an agricultural system that prioritizes food security and community empowerment. At <strong>Farm4Us</strong>, we’re committed to making that a reality.
        </p>

        {/* Main Heading */}
        <h2 className="text-3xl font-bold text-black mt-4">WHO WE ARE</h2>

        {/* Acronym Breakdown */}
        <div className="mt-4 space-y-2 text-gray-700">
          <p>
            <strong className="text-green-700">F</strong> - <span>Food security, representing the company’s goal to combat hunger.</span>
          </p>
          <p>
            <strong className="text-green-700">A</strong> - <span>Adaptability, showcasing resilience in a changing agricultural landscape.</span>
          </p>
          <p>
            <strong className="text-green-700">R</strong> - <span>Revitalize lands, transforming underutilized farmlands into productive agricultural hubs.</span>
          </p>
          <p>
            <strong className="text-green-700">M</strong> - <span>Modernization, promoting sustainable farming practices.</span>
          </p>
          <p>
            <strong className="text-green-700">4</strong> - <span>Four core values: Innovation, Sustainability, Empowerment, and Growth.</span>
          </p>
          <p>
            <strong className="text-green-700">U</strong> - <span>Unite and utilize, bringing farmers, stakeholders, and innovators together.</span>
          </p>
          <p>
            <strong className="text-green-700">S</strong> - <span>Sustainable solutions, promoting eco-friendly farming and financial aid.</span>
          </p>
        </div>

        {/* Join Button */}
        <button className="mt-6 bg-green-600 text-white font-bold py-3 px-6 rounded-md shadow-md hover:bg-green-700 transition">
          JOIN THE MOVEMENT
        </button>
      </div>
    </div>
  );
}
