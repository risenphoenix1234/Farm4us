import React from "react";
import Contact from "./contact";

const ContactPage: React.FC = () => {
  return (
    <div className="py-16 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10">Contact Us</h1>
      <Contact />
    </div>
  );
};

export default ContactPage;
