import React, { useState, useEffect } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const [isFormValid, setIsFormValid] = useState(false);
  
  // Check if all fields are filled
  useEffect(() => {
    const { name, email, phone, message } = formData;
    setIsFormValid(name.trim() !== "" && email.trim() !== "" && phone.trim() !== "" && message.trim() !== "");
  }, [formData]);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="bg-white py-20 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Image */}
        <div className="justify-center">
          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-900 text-center md:text-left mb-3 mx-auto max-w-lg">
            CONTACT – WE'RE HERE TO HELP
          </h2>

          {/* Subtitle */}
          <p className="text-gray-700 text-center md:text-left mb-6 max-w-lg mx-auto">
            Contact us for assistance or inquiries. Our team is dedicated to providing 
            support and guidance whenever you need it.
          </p>

          <img 
            src="/contact.png" 
            alt="Customer Support" 
            className="w-full max-w-lg mx-auto rounded-xl shadow-lg"
          />
        </div>

        {/* Right: Contact Form */}
        <div>
          {/* Form */}
          <form
            action="https://formsubmit.co/support@farm4us.com"
            method="POST"
            className="space-y-4"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_redirect" value="http://localhost:5174/thank-you" />

            <div>
              <label className="block text-gray-700">Full Name</label>
              <input 
                name="name"
                type="text" 
                className="w-full p-3 rounded-md bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Email</label>
              <input 
                name="email"
                type="email" 
                className="w-full p-3 rounded-md bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input 
                name="phone"
                type="tel" 
                className="w-full p-3 rounded-md bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Message</label>
              <textarea 
                name="message"
                className="w-full p-3 rounded-md bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                rows={4}
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            <button 
              type="submit"
              className={`w-full py-3 text-white text-lg font-semibold rounded-full transition-all ${
                isFormValid 
                  ? "bg-green-500 hover:bg-green-600" 
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!isFormValid}
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;