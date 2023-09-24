import React from 'react'
import Navbar from "../components/Navbar";
import HeroSection from '../components/Client-page/Herosection'
import ServicesSlider from "../components/landing-page/ServicesSlider";
import ProviderSlider from "../components/landing-page/ProviderSlider";
import StateService from '../components/landing-page/StateService'
import Serviceinfo from '../components/landing-page/Serviceinfo'
const ClientLogin = () => {
  return (
    <div>
    <Navbar/>
      <HeroSection></HeroSection>
      <ServicesSlider/>
      <ProviderSlider/>
      <StateService/>
      <Serviceinfo /> 

    </div>
  )
}

export default ClientLogin
