import React from "react";
import Features from "./Features";
import VisionMissionGoal from "./VisionMissionGoal";
import Farm4UsSolution from "./solution";
import Challenges from "./challenges";

const About: React.FC = () => {
  return (
    <div className="py-10 sm:py-16 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center sm:mb-10">About Us</h1>
      <Features />
      <VisionMissionGoal />
 
    </div>
  );
};

export default About;
