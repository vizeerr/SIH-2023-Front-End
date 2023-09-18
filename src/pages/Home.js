import React from 'react'
import Navbar from '../components/Navbar'
import Herosection from '../components/landing-page/Herosection'
import Bestpart from '../components/landing-page/Bestpart'
import ServicesSlider from '../components/landing-page/ServicesSlider'
import Jumbo from '../components/landing-page/Jumbo'
import Questions from '../components/landing-page/Questions'
import Serviceinfo from '../components/landing-page/Serviceinfo'

// import ProviderSlider from '../components/landing-page/ProviderSlider'

const Home = () => {
  return (
    <div>
      <Navbar/>

      <Herosection/>
      <Jumbo />
      
      <Bestpart/>
      <Serviceinfo />
      
      <ServicesSlider/>
      <Questions />
      
     
    </div>
  )
}

export default Home
