import React from "react";
import Navbar from "../components/Navbar";
import JoinUs from "../components/Service-page/JoinUs";
import HowItWorks from "../components/Service-page/HowItWorks";
import HeroSection from "../components/Service-page/HeroSection";
import FAQ from "../components/Service-page/FAQ";
import AboutUs from "../components/Service-page/AboutUs";
import DownloadApp from "../components/Service-page/DownloadApp";
import ServicesSlider from "../components/landing-page/ServicesSlider";
import Footer from "../components/Footer";

import Community from "../components/Service-page/Community";
import Tools from "../components/Service-page/Tools";
import LoginForm from "../components/Service-page/LoginForm";

const Service = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <JoinUs />
      <HowItWorks />
      <ServicesSlider headline = "Area Of Service You Can Provide"/>
      <Community/>
      <Tools/>

      <AboutUs />
      <LoginForm/>   
      
      <FAQ />

      <DownloadApp />
      <Footer />
    </div>
  );
};

export default Service;
