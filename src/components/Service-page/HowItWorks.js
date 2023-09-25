import React from "react";
import User from "../../page 1 design images/icons8-add-user-male-64.png";

const HowItWorks = () => {
  return (
    <div className="Works-container container-l me-4 ms-4 mt-5 mb-5 p-5 lightbackground">
      <h1 className="display-4 text-center">How It Works ? </h1>
      <div className="container text-center mt-5">
        <div className="row">
          <div className="col infotab d-flex flex-nowrap justify-content-around">
            <div className="Create-Account w-25 me-4 ms-4 ">
              <img src={User} alt="..." />
              <h3 className="mt-2 ratio ratio-3x4"> Sign up in a Few Steps </h3>
              <h6>
                Create Your Account: Click on the "Sign Up" button and provide your basic information.  It's quick, hassle-free</h6>
                                  
              
            </div>
            <div className="Create-Account w-25 me-4 ms-4">
              <img src={User} alt="..." />
              <h3 className="mt-2 ratio ratio-3x4">Complete Your Profile</h3>
              <h6>
                Profile Details: Fill in your profile with relevant information. Legal service providers can showcase their 
expertise</h6>
              
              
            </div>
            <div className="Create-Account w-25 me-4 ms-4">
              <img src={User} alt="..." />
              <h3 className="mt-2 ratio ratio-3x4">Start Providing Services</h3>
              <h6>
                 Browse Services: Once your profile is complete, you can start exploring our marketplace. Users can search for legal service providers</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
