import React from "react";
import User from "../../page 1 design images/icons8-add-user-male-64.png";

const HowItWorks = () => {
  return (
    <div className="Works-container container-l me-4 ms-4 mt-5 mb-5 p-5 lightbackground">
      <h1 className="display-4 text-center">How It Works ? </h1>
      <div className="container text-center mt-5">
        <div className="row">
          <div className="col infotab d-flex flex-nowrap justify-content-around">
            <div className="Create-Account w-25 me-4 ms-4">
              <img src={User} alt="..." />
              <h3 className="mt-2">1. Create An Account</h3>
              <p>
                Signup For the New Account. If You Already Have then Convert it
                to Service Provider Account
              </p>
            </div>
            <div className="Create-Account w-25 me-4 ms-4">
              <img src={User} alt="..." />
              <h3 className="mt-2">1. Create An Account</h3>
              <p>
                Signup For the New Account. If You Already Have then Convert it
                to Service Provider Account
              </p>
            </div>
            <div className="Create-Account w-25 me-4 ms-4">
              <img src={User} alt="..." />
              <h3 className="mt-2">1. Create An Account</h3>
              <p>
                Signup For the New Account. If You Already Have then Convert it
                to Service Provider Account
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
