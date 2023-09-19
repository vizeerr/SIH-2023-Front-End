import React from "react";
import expand from "../../page 1 design images/pexels-fauxels-3184465.jpg";

const JoinUs = () => {
  return (
    <div className="container-l mt-5 mb-5">
      <h1 className="display-3 text-center"> Why Join Us ? </h1>
      <div className="container text-center mt-5">
        <div className="row align-items-center">
          <div className="col infotab d-flex flex-row gap-5">
            <div className="card p-3">
              <img
                src={expand}
                className="card-img-top m-auto rounded"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Expand Your Reach</h5>
                <p className="card-text">
                  Access a broader client base and increase your visibility in
                  the legal community.
                </p>
              </div>
            </div>
            <div className="card p-3">
              <img
                src={expand}
                className="card-img-top m-auto rounded"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Expand Your Reach</h5>
                <p className="card-text">
                  Access a broader client base and increase your visibility in
                  the legal community.
                </p>
              </div>
            </div>
            <div className="card p-3">
              <img
                src={expand}
                className="card-img-top m-auto rounded"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Expand Your Reach</h5>
                <p className="card-text">
                  Access a broader client base and increase your visibility in
                  the legal community.
                </p>
              </div>
            </div>
            <div className="card p-3">
              <img
                src={expand}
                className="card-img-top m-auto rounded"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Expand Your Reach</h5>
                <p className="card-text">
                  Access a broader client base and increase your visibility in
                  the legal community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
