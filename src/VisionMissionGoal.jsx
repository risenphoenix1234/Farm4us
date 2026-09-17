import { FaEye, FaBullseye, FaChartLine } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export function VisionMissionGoal() {
  return (
    <div className="relative bg-white sm:py-28 py-10 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image Grid */}
        <motion.div 
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, staggerChildren: 0.3 }}
        >
          <motion.img 
            src="/annie-spratt-JMjNnQ2xFoY-unsplash.jpg" 
            alt="Farm workers" 
            className="w-full h-48 object-cover rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
          />
          <motion.img 
            src="/10.jpg" 
            alt="Farmer with corn" 
            className="w-full h-48 object-cover rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
          />
          <motion.img 
            src="/9.jpg" 
            alt="Green farm field" 
            className="col-span-2 w-full h-60 object-cover rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>

        {/* Right Side - Vision, Mission, Goal */}
        <motion.div 
          className="flex flex-col"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Decorative Line */}
          <div className="flex items-center mb-4">
            <div className="h-1 w-6 bg-[#AB420B]"></div> {/* Brown 10% */}
            <div className="h-1 w-14 bg-[#4CAF50]"></div> {/* Green 90% */}
          </div>

          {/* Vision Section */}
          <motion.div className="flex items-start gap-4 mb-6" whileHover={{ scale: 1.05 }}>
            <FaEye className="text-white bg-green-600 p-2 rounded-md w-20 h-10" />
            <div>
              <h3 className="text-2xl font-bold text-black">Vision</h3>
              <p className="text-gray-700">
                To lead the transformation of Nigeria’s agricultural landscape, ensuring food security, economic growth, and prosperity for future generations.
              </p>
            </div>
          </motion.div>

          {/* Mission Section */}
          <motion.div className="flex items-start gap-4 mb-6" whileHover={{ scale: 1.05 }}>
            <FaBullseye className="text-white bg-[#AB420B] p-2 rounded-md w-25 h-10" />
            <div>
              <h3 className="text-2xl font-bold text-black">Mission</h3>
              <p className="text-gray-700">
                To unlock Nigeria’s agricultural potential by revitalizing dormant lands, empowering communities, and fostering sustainable development through innovative agribusiness solutions.
              </p>
            </div>
          </motion.div>

          {/* Goal Section */}
          <motion.div className="flex items-start gap-4" whileHover={{ scale: 1.05 }}>
            <FaChartLine className="text-white bg-green-600 p-2 rounded-md w-30 h-10" />
            <div>
              <h3 className="text-2xl font-bold text-black">Goal</h3>
              <p className="text-gray-700">
                To cultivate and fully utilize at least 1 million hectares of dormant arable land by 2050, creating sustainable employment opportunities for 100,000 youths and contributing to a 30% increase in local food production within our operational regions.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default VisionMissionGoal;
