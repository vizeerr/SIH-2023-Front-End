import React from "react";
import Navbar from "../components/Navbar";
import JoinUs from "../components/Service-page/JoinUs";
import HowItWorks from "../components/Service-page/HowItWorks";
import HeroSection from "../components/Service-page/HeroSection";
import FAQ from "../components/Service-page/FAQ";
import AboutUs from "../components/Service-page/AboutUs";
import DownloadApp from "../components/Service-page/DownloadApp";
import ServicesSlider from "../components/landing-page/ServicesSlider";

const Service = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <JoinUs />
      <HowItWorks />
      <ServicesSlider />
      <AboutUs />
      <FAQ />
      <DownloadApp />
    </div>
  );
};

export default Service;
