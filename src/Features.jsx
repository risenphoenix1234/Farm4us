export function About() {
  return (
    <div className="relative bg-white sm:py-28 py-10 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Image Section */}
        <div className="flex items-center justify-center">
          <img 
            src="/7.jpg" 
            alt="Agriculture field" 
            className="w-full h-full min-h-[250px]  sm:min-h-[450px] object-cover rounded-3xl shadow-lg"
          />
        </div>

        {/* Text Content Section */}
        <div className="flex flex-col justify-center min-h-[450px]">
          <h2 className="text-xl sm:text-4xl font-bold text-green-700 mb-4">
            Reviving Lands, Empowering Communities
          </h2>
          <p className="  text-gray-700 leading-relaxed mb-6">
            Africa deserves an agricultural system that prioritizes food security and community empowerment. 
            At Farm4Us, we’re committed to making that a reality. We offer innovative and sustainable farming 
            solutions to revolutionize lands and uplift communities in the fight against food insecurity.
          </p>

          {/* Decorative line with 10% brown and 90% green */}
          <div className="flex items-center mb-4">
            <div className="h-1 w-6 bg-[#AB420B]"></div> {/* 10% brown (6px) */}
            <div className="h-1 w-14 bg-[#4CAF50]"></div> {/* 90% green (14px) */}
          </div>

          <h3 className="text-3xl font-bold text-black mb-4">About Us</h3>
          <p className=" text-gray-700 leading-relaxed">
            At Farm4Us, we are more than just an agribusiness company – we are a movement committed to transforming Nigeria’s agricultural landscape. 
            With over 70.8 million hectares of agricultural land (FAO), Nigeria is a nation rich in potential, yet only 46% of arable land is cultivated. 
            This underutilization, combined with a rapidly growing population of over 240 million people, underscores the urgent need for innovative agricultural 
            solutions to tackle food insecurity and harness the potential of Nigeria’s agricultural lands.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
