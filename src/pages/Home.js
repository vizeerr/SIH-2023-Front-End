
import React from "react";
import Navbar from "../components/Navbar";

import Herosection from "../components/landing-page/HeroSection/HeroSection";

import Bestpart from "../components/landing-page/Bestpart";
import ServicesSlider from "../components/landing-page/ServicesSlider";
import ProviderSlider from "../components/landing-page/ProviderSlider";
import Loginonpage from '../components/landing-page/Loginonpage'
import StateService from '../components/landing-page/StateService'
import Userfeed from '../components/landing-page/Userfeed'
import Footer from '../components/Footer'

// vibhu
import Jumbo from '../components/landing-page/Jumbo'
import Questions from '../components/landing-page/Questions'
import Serviceinfo from '../components/landing-page/Serviceinfo'

import DownloadApp from '../components/landing-page/DownloadApp'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <Jumbo />
      <Bestpart/>
      <ServicesSlider headline = "A Passion For Justice, Our Service Areas"/>
      <ProviderSlider headline = "Our Top Service Providers"/>
      <StateService/>
      <Serviceinfo headline="Create Documents Quickly and Easily!"/> 
      <Userfeed/>
      <Loginonpage/>  
      <Questions />
      <DownloadApp/>
      <Footer/>
    </div>
  );
};

export default Home;
