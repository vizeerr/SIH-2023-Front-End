import React from "react";
import Navbar from "../components/Navbar";
import Referral from "../components/ServiceLogin-page/Referral";
import Footer from "../components/Footer";
import Level from "../components/Badges/Level";

const ServiceLogin=()=>{
   return(
    <div>
        <Navbar/>
        <Referral/>
        <Footer/>
    </div>
   );
};
export default ServiceLogin;