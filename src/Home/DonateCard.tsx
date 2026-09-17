import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const JoinMovement = () => {
  const navigate = useNavigate();
  const [activeForm, setActiveForm] = useState<"invest" | "career" | "community" | null>(null);

  const closeModal = () => setActiveForm(null);

  return (
    <section id="movement" className="max-w-6xl mx-auto px-6 py-10 sm:py-24 text-center">
      <h2 className="text-3xl font-bold text-black">JOIN THE MOVEMENT</h2>
      <p className="text-gray-600 mt-2">
        At Farm4Us, we don’t just farm, we transform agriculture into a force for progress and prosperity.
      </p>

      {/* Cards */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div
          onClick={() => setActiveForm("invest")}
          className="bg-green-500 text-white font-bold flex items-center justify-center text-center rounded-md w-full h-[300px] cursor-pointer hover:scale-105 transition"
        >
          INVEST IN THE MOVEMENT
        </div>

        <div
          onClick={() => setActiveForm("career")}
          className="bg-red-800 text-white font-bold flex items-center justify-center text-center rounded-md w-full h-[300px] cursor-pointer hover:scale-105 transition"
        >
          ACCELERATE YOUR CAREER WITH THE MOVEMENT
        </div>

        <div
          onClick={() => setActiveForm("community")}
          className="bg-green-500 text-white font-bold flex items-center justify-center text-center rounded-md w-full h-[300px] cursor-pointer hover:scale-105 transition"
        >
          JOIN OUR COMMUNITY TO STAY UPDATED
        </div>

        <div
          onClick={() => navigate("/Home/DonateMovementPage")}
          className="bg-yellow-500 text-white font-bold flex items-center justify-center text-center rounded-md w-full h-[300px] cursor-pointer hover:scale-105 transition"
        >
          DONATE TO THE MOVEMENT
        </div>
      </div>

      {/* Modal */}
   
    </section>
  );
};

export default JoinMovement;
