import React from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/Profile-page/HeroSection";
import Navbar from "../components/Navbar";
import FAQ from "../components/Profile-page/FAQ";
import Contact_form from "../components/Profile-page/Contact_form";
import Reviews from "../components/Profile-page/Reviews";
import Doubt from "../components/Profile-page/Doubt";
import Map from "../components/Profile-page/Mp"
const Profile = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Reviews/>
        <Contact_form/>
        <Map />
        <Doubt />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Profile;
