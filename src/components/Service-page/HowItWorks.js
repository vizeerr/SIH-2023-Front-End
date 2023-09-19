import React from "react";
import User from "../../page 1 design images/icons8-add-user-male-64.png";

const HowItWorks = () => {
  return (
    <div className="Works-container container-l mt-5 mb-5 p-5">
      <h1 className="display-3 text-center">How It Works ? </h1>
      <div className="container text-center mt-5">
        <div className="row align-items-center">
          <div className="col infotab d-flex flex-row gap-5">
            <div className="Create-Account">
              <img src={User} alt="..." />
              <h3 className="mt-2">1. Create An Account</h3>
              <p>
                Signup For the New Account. If You Already Have then Convert it
                to Service Provider Account
              </p>
            </div>
            <div className="Create-Account">
              <img src={User} alt="..." />
              <h3 className="mt-2">1. Create An Account</h3>
              <p>
                Signup For the New Account. If You Already Have then Convert it
                to Service Provider Account
              </p>
            </div>
            <div className="Create-Account">
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
