import React from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/Profile-page/HeroSection";
import Navbar from "../components/Navbar";
import FAQ from "../components/Profile-page/FAQ";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Profile;
