
import React from "react";
export function Farm4UsSolution() {
  return (
    <div className="relative bg-white py-10 sm:py-20 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Left Side - Text Content */}
        <div>
          {/* Decorative Line */}
          <div className="flex items-center mb-4">
            <div className="h-1 w-6 bg-[#AB420B]"></div> {/* Brown */}
            <div className="h-1 w-14 bg-[#4CAF50]"></div> {/* Green */}
          </div>

          {/* Section Title */}
          <h2 className="text-2xl  sm:text-4xl font-bold text-gray-900 mb-10">THE FARM4US SOLUTION</h2>

          {/* Solution Points */}
          <div className="grid grid-cols-1 gap-8">
            {/* 1st Box */}
            <div className="flex items-start gap-4">
              <div className="bg-green-600 text-white font-bold text-lg px-3 py-1 rounded-md">01</div>
              <div>
                <h3 className="text-xl font-bold text-black">Utilize Dormant Arable Lands</h3>
                <p className="text-gray-700">
                  We work with farmers to identify and utilize underutilized land for large-scale production of staple crops such as maize, wheat, and rice to increase food security and economic opportunities.
                </p>
              </div>
            </div>

            {/* 2nd Box */}
            <div className="flex items-start gap-4">
              <div className="bg-[#AB420B] text-white font-bold text-lg px-3 py-1 rounded-md">02</div>
              <div>
                <h3 className="text-xl font-bold text-black">Employment</h3>
                <p className="text-gray-700">
                  We create jobs through sustainable farming, agribusiness ventures, and training programs that equip youth and smallholder farmers with modern agricultural skills.
                </p>
              </div>
            </div>

            {/* 3rd Box */}
            <div className="flex items-start gap-4">
              <div className="bg-[#AB420B] text-white font-bold text-lg px-3 py-1 rounded-md">03</div>
              <div>
                <h3 className="text-xl font-bold text-black">Agronomic Training and Extension Services</h3>
                <p className="text-gray-700">
                  We offer farmers training and extension services on best agricultural practices, including soil management, crop rotation, and pest control, to help maximize yields and sustainability.
                </p>
              </div>
            </div>

            {/* 4th Box */}
            <div className="flex items-start gap-4">
              <div className="bg-green-600 text-white font-bold text-lg px-3 py-1 rounded-md">04</div>
              <div>
                <h3 className="text-xl font-bold text-black">Minimize Post Harvest Loss</h3>
                <p className="text-gray-700">
                  We aggregate crops and store them until demand peaks. This ensures a steady income stream for farmers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          <img 
            src="/gozha-net-xDrxJCdedcI-unsplash.jpg" 
            alt="Green farm field" 
            className="col-span-2 w-full h-40 object-cover rounded-lg shadow-md"
          />
          <img 
            src="/frances-gunn-QcBAZ7VREHQ-unsplash.jpg" 
            alt="Grain storage" 
            className="w-full h-40 object-cover rounded-lg shadow-md"
          />
          <img 
            src="/7.jpg" 
            alt="Sacks of grains" 
            className="w-full h-40 object-cover rounded-lg shadow-md"
          />
        </div>

      </div>
    </div>
  );
}

export default Farm4UsSolution;
