import React from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/Profile-page/HeroSection";
import Navbar from "../components/Navbar";
import FAQ from "../components/Profile-page/FAQ";
import ContactForm from "../components/Profile-page/Contact_form";
import Reviews from "../components/Profile-page/Reviews";
import AdviceVideo from "../components/Profile-page/AdviceVideo";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Reviews />
      <AdviceVideo />
      <ContactForm />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Profile;
