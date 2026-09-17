import React from "react";

const CoreValues = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 sm:py-16 py-10">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side - Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold text-black mb-10">OUR CORE VALUES</h2>

          {/* Grid Layout for Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Value 1 - Innovation */}
            <div className="flex items-start">
              <div className="bg-yellow-600 text-white font-bold px-3 py-2 rounded-md text-lg mr-4">01</div>
              <p className="text-gray-700">
                <strong>Innovation:</strong> We embrace cutting-edge agricultural technology, smart farming techniques, and data-driven solutions to enhance productivity.
              </p>
            </div>

            {/* Value 2 - Sustainability */}
            <div className="flex items-start">
              <div className="bg-green-700 text-white font-bold px-3 py-2 rounded-md text-lg mr-4">02</div>
              <p className="text-gray-700">
                <strong>Sustainability:</strong> Sustainable farming is at the heart of everything we do. We promote eco-friendly agricultural practices and regenerative farming.
              </p>
            </div>

            {/* Value 3 - Empowerment */}
            <div className="flex items-start">
              <div className="bg-green-900 text-white font-bold px-3 py-2 rounded-md text-lg mr-4">03</div>
              <p className="text-gray-700">
                <strong>Empowerment:</strong> Farm4Us is committed to uplifting farmers, rural communities, and agripreneurs by providing access to training and support.
              </p>
            </div>

            {/* Value 4 - Growth */}
            <div className="flex items-start">
              <div className="bg-yellow-500 text-white font-bold px-3 py-2 rounded-md text-lg mr-4">04</div>
              <p className="text-gray-700">
                <strong>Growth:</strong> We believe in growth—yields, incomes, and impact—by scaling agricultural production and revitalizing underutilized lands.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-[45%] mt-10 lg:mt-0">
          <img
            src="/gozha-net-xDrxJCdedcI-unsplash.jpg"
            alt="Agriculture field"
            className="w-full h-auto max-h-[400px] object-cover rounded-3xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
