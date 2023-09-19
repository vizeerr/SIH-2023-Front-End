import React from "react";
import playStore from "../../page 1 design images/playStore.png";
import appleStore from "../../page 1 design images/appleStore.png";

const DownloadApp = () => {
  return (
    <div className="container-l mt-5 mb-5 p-5">
      <div className="container mt-5 d-flex justify-content-between">
        <div className="Download d-flex flex-column gap-4 align-items-center justify-content-center">
          <h3 className="d-flex justify-content-center display-6">
            Download The App Know
          </h3>
          <div className="App d-flex justify-content-center">
            <div className="d-flex align-items-center justify-content-center gap-2">
              <img src={appleStore} alt="app-store" />
              <h5>App Store</h5>
            </div>
            <div className="d-flex align-items-center justify-content-center gap-2">
              <img src={playStore} alt="app-store" />
              <h5>Play Store</h5>
            </div>
          </div>
        </div>
        <div className="vertical-line"></div>
        <div className="Grow">
          <h3 className="text-center display-6">Grow your business with us</h3>
          <p className="text-center">
            Getting client can be tricky but not know
          </p>
          <div className="text-center">
            <button type="button" className="btn-yellight">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
