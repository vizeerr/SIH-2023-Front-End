import React from "react";
import expand from "../../page 1 design images/pexels-fauxels-3184465.jpg";

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
                <h5 className="mt-3 card-title">Elevate Your Legal Practice</h5>
                <p className="card-text">
                  Joining our platform is your ticket to taking your legal practice to the next level. With our innovative 
approach to legal services, you'll gain access to a wealth of opportunities and tools designed to boost 
your visibility and reputation.
                </p>
              </div>
            </div>
            <div className="card p-2">
              <img
                src={expand}
                className="w-100 card-img-top rounded-4 p-1"
                alt="..."
              />
              <div className="Join-content card-body">
                <h5 className="mt-3 card-title">Gamified Excellence</h5>
                <p className="card-text">
                  We're not just a platform; we're a legal community that rewards excellence. Experience the thrill of 
competing on our leaderboard, where weekly performance rankings and client reviews are prominently 
featured. Your dedication and quality service will earn you the recognition you deserve.
                </p>
              </div>
            </div>
            <div className="card p-2">
              <img
                src={expand}
                className="w-100 card-img-top rounded-4 p-1"
                alt="..."
              />
              <div className="Join-content card-body">
                <h5 className="mt-3 card-title">Performance-Based Badges</h5>
                <p className="card-text">
                  Showcase your expertise and commitment with performance-based badges. These badges serve as 
tangible proof of your legal prowess and dedication to clients. Earning them will set you apart as a top-tier legal service provider.
                </p>
              </div>
            </div>
            <div className="card p-2">
              <img
                src={expand}
                className="w-100 card-img-top rounded-4 p-1"
                alt="..."
              />
              <div className="Join-content card-body">
                <h5 className="mt-3 card-title">Bilingual Support</h5>
                <p className="card-text">
                  We understand the importance of inclusivity. Our platform offers bilingual support to cater to a wider 
audience. Whether you speak English, Spanish, or another language, you can confidently engage with 
users and clients.
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
