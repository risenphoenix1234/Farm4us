import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const JoinMovement = () => {
  const [activeForm, setActiveForm] = useState<string | null>(null);
  const navigate = useNavigate();
  
  // Form data state for each modal type
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null,
    investmentInterest: "",
    donationAmount: ""
  });
  
  // Form validation state
  const [isFormValid, setIsFormValid] = useState(false);
  
  // Validate form based on active form type
  useEffect(() => {
    if (!activeForm) return;
    
    const { name, email, resume, investmentInterest } = formData;
    
    // Simple validation for required fields based on form type
    if (activeForm === "invest") {
      setIsFormValid(name.trim() !== "" && email.trim() !== "" && investmentInterest.trim() !== "");
    } else if (activeForm === "career") {
      setIsFormValid(name.trim() !== "" && email.trim() !== "" && resume !== null);
    } else {
      setIsFormValid(name.trim() !== "" && email.trim() !== "");
    }
  }, [formData, activeForm]);
  
  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    
    if (type === "file") {
      setFormData(prevData => ({
        ...prevData,
        [name]: e.target.files[0] || null
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  };
  
  const closeModal = () => {
    setActiveForm(null);
  };

  // Icons for each category
  const renderIcon = (type) => {
    switch(type) {
      case "invest":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case "career":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case "community":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case "donate":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="movement" className="max-w-6xl mx-auto px-6 py-16 sm:py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-black mb-4">JOIN THE MOVEMENT</h2>
        <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          At Farm4Us, we don't just farm, we transform agriculture into a force for progress and prosperity.
          Join us in revolutionizing the agricultural landscape.
        </p>
      </div>

      {/* Engagement Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Invest */}
        <div 
          onClick={() => setActiveForm("invest")}
          className="group bg-white border border-gray-200 hover:border-green-500 rounded-xl shadow-sm hover:shadow-md p-6 text-center transition-all duration-300 cursor-pointer relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          <div className="text-green-500 mx-auto">
            {renderIcon("invest")}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Invest in the Movement</h3>
          <p className="text-gray-600 mb-4">Support our vision by becoming an investor in sustainable agriculture.</p>
          <span className="inline-block text-green-600 font-medium group-hover:text-green-700 transition-colors">
            Learn More →
          </span>
        </div>

        {/* Career */}
        <div 
          onClick={() => setActiveForm("career")}
          className="group bg-white border border-gray-200 hover:border-red-800 rounded-xl shadow-sm hover:shadow-md p-6 text-center transition-all duration-300 cursor-pointer relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-red-800 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          <div className="text-red-800 mx-auto">
            {renderIcon("career")}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Accelerate Your Career</h3>
          <p className="text-gray-600 mb-4">Join our team of experts and innovators shaping the future of farming.</p>
          <span className="inline-block text-red-800 font-medium group-hover:text-red-900 transition-colors">
            Learn More →
          </span>
        </div>

        {/* Community */}
        <div 
          onClick={() => setActiveForm("community")}
          className="group bg-white border border-gray-200 hover:border-green-500 rounded-xl shadow-sm hover:shadow-md p-6 text-center transition-all duration-300 cursor-pointer relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          <div className="text-green-500 mx-auto">
            {renderIcon("community")}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Join Our Community</h3>
          <p className="text-gray-600 mb-4">Be part of our growing network and stay updated on our initiatives.</p>
          <span className="inline-block text-green-600 font-medium group-hover:text-green-700 transition-colors">
            Learn More →
          </span>
        </div>

        {/* Donate - Modified to navigate instead of showing modal */}
        <div 
          onClick={() => navigate("DonateMovementPage")}
          className="group bg-white border border-gray-200 hover:border-red-800 rounded-xl shadow-sm hover:shadow-md p-6 text-center transition-all duration-300 cursor-pointer relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-red-800 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          <div className="text-red-800 mx-auto">
            {renderIcon("donate")}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Donate to the Movement</h3>
          <p className="text-gray-600 mb-4">Support our mission with a donation and help us create lasting impact.</p>
          <span className="inline-block text-red-800 font-medium group-hover:text-red-900 transition-colors">
            Learn More →
          </span>
        </div>
      </div>

      {/* Modal - Removed donate-related form fields */}
      {activeForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white w-full max-w-lg p-8 rounded-xl shadow-xl relative text-left">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-red-600 transition-colors"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex items-center mb-6">
              <div className={`mr-4 ${activeForm === "invest" || activeForm === "community" ? "text-green-500" : "text-red-800"}`}>
                {renderIcon(activeForm)}
              </div>
              <h3 className="text-2xl font-bold capitalize text-gray-900">
                {activeForm === "invest" && "Invest in the Movement"}
                {activeForm === "career" && "Accelerate Your Career"}
                {activeForm === "community" && "Join Our Community"}
              </h3>
            </div>

            <form
              action="https://formsubmit.co/hr@farm4us.com"
              method="POST"
              className="space-y-5"
              encType={activeForm === "career" ? "multipart/form-data" : "application/x-www-form-urlencoded"}
            >
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value={`New ${activeForm} Form Submission`} />
              <input type="hidden" name="_redirect" value="http://localhost:5174/thank-you" />
              
              {/* Form Type */}
              <input type="hidden" name="formType" value={activeForm} />

              <div>
                <label className="block font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  name="name"
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  name="email"
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {activeForm === "career" && (
                <div>
                  <label className="block font-medium text-gray-700 mb-1">Upload Resume</label>
                  <div className="w-full border border-gray-300 border-dashed rounded-lg px-4 py-4 flex items-center justify-center bg-gray-50">
                    <input 
                      name="resume"
                      type="file" 
                      className="w-full" 
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              )}

              {activeForm === "invest" && (
                <div>
                  <label className="block font-medium text-gray-700 mb-1">Investment Interest</label>
                  <input
                    name="investmentInterest"
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                    placeholder="e.g. Land, Funding, Partnership"
                    value={formData.investmentInterest}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  className={`w-full py-3 px-4 ${
                    isFormValid 
                      ? activeForm === "invest" || activeForm === "community"
                        ? "bg-green-600 hover:bg-green-700" 
                        : "bg-red-800 hover:bg-red-900"
                      : "bg-gray-400 cursor-not-allowed"
                  } text-white text-lg font-medium rounded-lg transition-colors shadow-sm flex justify-center items-center`}
                  disabled={!isFormValid}
                >
                  Submit
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-2" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default JoinMovement;