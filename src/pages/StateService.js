import React from 'react'
import Navbar from "../components/Navbar";
import Footer from '../components/Footer'
import DelhiService from '../components/DelhiService';

const StateService = () => {
  return (
    <div>
    <Navbar/>
    <DelhiService state="Delhi"></DelhiService>
    <Footer />

      
    </div>
  )
}

export default StateService
