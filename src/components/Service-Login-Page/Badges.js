import React from "react";
import Badges1 from "../../page 1 design images/icons8-samurai-helmet-48.png";
import Badges2 from "../../page 1 design images/icons8-samurai-64.png";

const Badges = () => {
  return (
    <div className="Badges container-l mb-5 ">
      <h1 className="display-3 text-center"> Badges </h1>
      <div className="container mt-5 ">
        <div className="d-flex flex-column gap-3  border shadow rounded-4 p-4">
          <h4>Your Badges : </h4>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <img src={Badges1} alt="Badges" />
              <p className="mb-0">Gold</p>
            </div>
            <div className="d-flex align-items-center gap-2">
              <img src={Badges1} alt="Badges" />
              <p className="mb-0">Bronze</p>
            </div>
            <div className="d-flex align-items-center gap-2">
              <img src={Badges2} alt="Badges" />
              <p className="mb-0">Diamond</p>
            </div>
            <div className="d-flex align-items-center gap-2">
              <img src={Badges2} alt="Badges" />
              <p className="mb-0">Platinum</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Badges;
