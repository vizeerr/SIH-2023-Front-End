import React from 'react'
import AffidavitForYearGap from '../documents/AffidavitForYearGap'
import Serviceinfo from '../components/landing-page/Serviceinfo'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Templates = () => {
  return (
    <>
    <Navbar/>
    <div className="container mt-5 pt-5 mb-5">
      <h2 className='display-3 text-center'> Templates</h2>
    </div>
    <Serviceinfo /> 
    <Footer/>
    </>
  )
}

export default Templates
