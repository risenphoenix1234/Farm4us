import React from "react";

export default function OurStory() {
  const handlePlayClick = () => {
    window.open("https://youtu.be/J3xQJp8f8bg?si=q7-MhZfE3TmS6-zW", "_blank");
  };

  return (
    <div
      id="our-story"
      className="flex flex-col items-center sm:py-24 py-10 px-6 max-w-6xl mx-auto"
    >
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold text-[#9c4a00] mb-10">
        Our Story
      </h2>

      {/* Video Container */}
      <div className="relative w-full max-w-6xl">
        {/* Video Thumbnail */}
        <img
          src="/vaa.png"
          alt="Our Story Video"
          className="w-full h-auto rounded-lg shadow-lg"
        />

        {/* Play Button */}
        <button
          onClick={handlePlayClick}
          className="absolute inset-0 flex items-center justify-center"
          aria-label="Play Video"
        >
          <div className="bg-white p-4 sm:p-5 rounded-full shadow-lg hover:scale-105 transition-transform">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="w-12 h-12 text-black cursor-pointer"
            >
              <path d="M10.5 8L5 11.5V4.5L10.5 8z" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}
