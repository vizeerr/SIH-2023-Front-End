import React from 'react'
import Navbar from '../components/Navbar'
import Herosection from '../components/landing-page/Herosection'
import Bestpart from '../components/landing-page/Bestpart'
import ServicesSlider from '../components/landing-page/ServicesSlider'
import Loginonpage from '../components/landing-page/Loginonpage'
import ProviderSlider from '../components/landing-page/ProviderSlider'
import StateService from '../components/landing-page/StateService'
import Userfeed from '../components/landing-page/Userfeed'
import Footer from '../components/Footer'






import Jumbo from '../components/landing-page/Jumbo'
import Questions from '../components/landing-page/Questions'
// import Serviceinfo from '../components/landing-page/Serviceinfo'




const Home = () => {
  return (
    <div>
      <Navbar/>

      <Herosection/>
      <Jumbo />
      <Bestpart/>
      
      <ServicesSlider/>

      <Loginonpage/>   
      <Userfeed/>
      
     
      {/* <Serviceinfo /> */}

      <ProviderSlider/>
      <StateService/>
      <Questions />
      <Footer/>
    </div>
  )
}

export default Home
