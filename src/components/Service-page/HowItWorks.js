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
                1. Create Your Account: Click on the "Sign Up" button and provide your basic information.  It's quick, hassle-free, and takes only minutes to get started on your journey with us.</h6>
                <h6>2. Select Your Role: Choose whether you're a legal service provider or a user seeking legal assistance. We 
have options for both.</h6>
                <h6>3. Verify Your Email: To ensure security, we'll send you a verification link to your email. Click on it to 
activate your account.  </h6>                     
              
            </div>
            <div className="Create-Account w-25 me-4 ms-4">
              <img src={User} alt="..." />
              <h3 className="mt-2 ratio ratio-3x4">Complete Your Profile</h3>
              <h6>
                1. Profile Details: Fill in your profile with relevant information. Legal service providers can showcase their 
expertise, while users can tell us about their legal needs.</h6>
               <h6> 2. Upload Documentation: Depending on your role, you may need to upload necessary documents, such 
as legal qualifications or identification.</h6>
               <h6> 3. Personalize Your Settings: Customize your notification preferences, language preferences, and other 
settings to tailor your experience.</h6>
              
            </div>
            <div className="Create-Account w-25 me-4 ms-4">
              <img src={User} alt="..." />
              <h3 className="mt-2 ratio ratio-3x4">Start Exploring Services</h3>
              <h6>
                1. Browse Services: Once your profile is complete, you can start exploring our marketplace. Users can 
search for legal service providers, and providers can access potential clients.</h6>
                <h6>2. Engage and Connect : Reach out to legal service providers or potential clients through our secure 
messaging system. </h6>
                <h6>3. Get Started: When you're ready, begin your legal journey with confidence. </h6>                             
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
