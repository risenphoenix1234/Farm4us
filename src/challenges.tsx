
import React from "react";
export function Challenges() {
  return (
    <div className="bg-white py-20 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Africa Map Image */}
        <div>
          <img 
            src="/Map.png" 
            alt="Africa Map" 
            className="w-full max-w-lg mx-auto"
          />
        </div>

        {/* Right Side - Text Content */}
        <div>
          {/* Decorative Line */}
          <div className="flex items-center mb-4">
            <div className="h-1 w-6 bg-[#AB420B]"></div> {/* Brown */}
            <div className="h-1 w-14 bg-[#4CAF50]"></div> {/* Green */}
          </div>

          {/* Section Title */}
          <h2 className="text-4xl font-bold text-gray-900 mb-6">CHALLENGES</h2>

          {/* Description */}
          <p className="text-gray-700 mb-6">
            Underutilization of arable lands, combined with a rapidly growing population of over 1.5 billion 
            people in Africa, underscores the urgent need for innovative agricultural solutions to tackle 
            food insecurity and harness the potential of Africa’s agricultural lands. Africa has about 202 
            million hectares of unused arable land, which accounts for nearly 60% of the world's uncultivated 
            arable land, leading to the following:
          </p>

          {/* Challenge Points */}
          <div className="space-y-4">
            {/* Food Insecurity */}
            <div>
              <h3 className="text-xl font-bold text-black">Food Insecurity</h3>
              <p className="text-gray-700">
                Nearly 282 million people in Africa (about 20 percent of the population) are undernourished, 
                an increase of 57 million people since the COVID-19 pandemic began.
              </p>
            </div>

            {/* Dormant Lands */}
            <div>
              <h3 className="text-xl font-bold text-black">Dormant Lands</h3>
              <p className="text-gray-700">
                Africa has about 202 million hectares of dormant arable land that should be put into use.
              </p>
            </div>

            {/* Unemployment */}
            <div>
              <h3 className="text-xl font-bold text-black">Unemployment</h3>
              <p className="text-gray-700">
                As of 2024, an estimated 40 to 50 million people in Africa are unemployed, of which 
                youth unemployment remains a major challenge, with millions struggling to find stable employment.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Challenges;
