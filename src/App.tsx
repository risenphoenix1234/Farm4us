import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layout/header";
import Hero from "./Home/Hero";
import OurStory from "./Home/OurStory";
import WhoWeAre from "./Home/WhoWeAre";
import CoreValues from "./Home/CoreValues";
import JoinMovement from "./Home/JoinMovement";
import PartnerDistribution from "./Home/PartnerDistribution";
import Testimonials from "./Home/testimonials";
import About from "./About";
import ContactPage from "./ContactUs";
import Solutions from "./Solutions";
import Footer from "./layout/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import ThankYou from "./ThankYou";
import NewsletterSubscription from "./Home/Newsletter";
import DonateMovementPage from "./DonateMovementPage";
import VideoPopup from "./VideoPopup";

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <VideoPopup />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Hero />
              <OurStory />
              <WhoWeAre />
              <CoreValues />
              <JoinMovement />

              <PartnerDistribution />
              <Testimonials />
              <DonateMovementPage />
              <NewsletterSubscription />
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/DonateMovementPage" element={<DonateMovementPage />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;