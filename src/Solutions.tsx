import React from "react";
import Farm4UsSolution from "./solution";
import Challenges from "./challenges";

const Solutions: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Our Solutions</h1>
      <Challenges />
      <Farm4UsSolution />
     
    </div>
  );
};

export default Solutions;
