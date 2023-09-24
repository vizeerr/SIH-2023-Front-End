import React from "react";
import playStore from "../../page 1 design images/playStore.png";
import appleStore from "../../page 1 design images/appleStore.png";

const DownloadApp = () => {
  return (
    <div className="container-l mt-3 mb-3 p-5 ">
      <div className="container mt-5 d-flex justify-content-around align-items-center">
        <div className="Download d-flex flex-column gap-4 align-items-center justify-content-center">
          <h3 className="d-flex justify-content-center display-6">
            Download The App Know
          </h3>
          <div className="App d-flex justify-content-center">
            <div className="d-flex align-items-center justify-content-center gap-2">
              <img src={appleStore} alt="app-store" />
              <p className="m-0 fs-5 textlight fw-light">App Store</p>
            </div>
            <div className="d-flex align-items-center justify-content-center gap-2">
              <img src={playStore} alt="app-store" />
              <p className="m-0 fs-5 textlight fw-light" >Play Store</p>
            </div>
          </div>
        </div>
        <div className="vertical-line"></div>
        <div className="Grow d-flex flex-column">
          <h3 className="text-center display-6">Grow your business with us</h3>
          <p className="text-center textlight fw-light fs-6">
            Getting client can be tricky but not know
          </p>
          <button type="button" className="btn btn-brown m-auto mt-1"> Join Now</button>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
