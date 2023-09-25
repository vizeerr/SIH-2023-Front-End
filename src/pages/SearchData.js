import React from 'react'
import Navbar from "../components/Navbar";
import Footer from '../components/Footer'
import Searchdata from '../components/SearchComp';

const CrimSearch = ({toSearch}) => {
  return (
    <div>
    <Navbar/>

    <Searchdata sdata={toSearch}></Searchdata>
    <Footer/>
      
    </div>
  )
}

export default CrimSearch
