import React from 'react'
import Navbar from "../components/Navbar";
import HeroSection from '../components/Client-page/Herosection'
import ServicesSlider from "../components/landing-page/ServicesSlider";
import ProviderSlider from "../components/landing-page/ProviderSlider";
import StateService from '../components/landing-page/StateService'
import Serviceinfo from '../components/landing-page/Serviceinfo'
import Doubt from '../components/Client-page/Doubt'
import Map from '../components/Client-page/Mp'
import Footer from '../components/Footer'

const ClientLogin = () => {
  return (
    <div > 
    <Navbar isLogin="true"/>
      <HeroSection></HeroSection>
      <ServicesSlider headline = "Popular Services"/>
      <ProviderSlider headline ="Top Service Providers"/>
      <StateService/>
      <Serviceinfo headline ="Draft Templates" /> 
      <Map />
      <Doubt />
      <Footer />

    </div>
  )
}

export default ClientLogin
