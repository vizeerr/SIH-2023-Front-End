import React from "react";
import expand from "../../page 1 design images/pexels-fauxels-3184465.jpg";
import op2 from "../../page 1 design images/op2.jpg";
import op3 from "../../page 1 design images/op3.jpg";
import op4 from "../../page 1 design images/op4.jpg";

const JoinUs = () => {
  return (
    <div className="container-l mt-5 mb-5 ">
      <h1 className="display-3 text-center"> Why Join Us ? </h1>
      <div className="container text-center mt-5">
        <div className="row align-items-center">
          <div className="col infotab d-flex flex-row gap-5">
            <div className="card p-2">
              <img
                src={expand}
                className="w-100 card-img-top rounded-4 p-1"
                alt="..."
              />
              <div className="Join-content card-body">
                <h5 className="mt-3 card-title">Access to Wider Client Base</h5>
                <p className="card-text ratio ratio-3x3">
                 We can connect you with clients from different geographical locations, expanding your potential client base.
                </p>
              </div>
            </div>
            <div className="card p-2">
              <img
                src={op2}
                className="w-100 card-img-top rounded-4 p-1"
                alt="..."
              />
              <div className="Join-content card-body">
                <h5 className="mt-3 card-title">Elevate Your Legal Practice</h5>
                <p className="card-text ratio ratio-3x3">
                 We can provide tools and software for efficient case management, helping you streamline your workload and improve productivity.
                </p>
              </div>
            </div>
            <div className="card p-2">
              <img
                src={op3}
                className="w-100 card-img-top rounded-4 p-1"
                alt="..."
              />
              <div className="Join-content card-body">
                <h5 className="mt-3 card-title">Performance-Based Badges</h5>
                <p className="card-text ratio ratio-3x3">
                  Showcase your expertise and commitment with performance-based badges. 
. Earning them will set you apart as a top-tier legal service provider.
                </p>
              </div>
            </div>
            <div className="card p-2">
              <img
                src={op4}
                className="w-100 card-img-top rounded-4 p-1"
                alt="..."
              />
              <div className="Join-content card-body">
                <h5 className="mt-3 card-title">Bilingual Support</h5>
                <p className="card-text ratio ratio-3x3">
                  We understand the importance of inclusivity. Our platform offers bilingual support which break down language barriers,making legal assistance more accessible.
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
