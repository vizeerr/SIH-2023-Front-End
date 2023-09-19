import React from "react";
import Navbar from "../components/Navbar";
import Herosection from "../components/landing-page/Herosection";
import Bestpart from "../components/landing-page/Bestpart";
import ServicesSlider from "../components/landing-page/ServicesSlider";
import ProviderSlider from "../components/landing-page/ProviderSlider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Bestpart />
      <ServicesSlider />
      <ProviderSlider />
    </div>
  );
};

export default Home;
