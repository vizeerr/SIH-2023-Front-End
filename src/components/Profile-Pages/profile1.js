import React from "react";
import pvads from "../../page 1 design images/pvads.jpeg";
import StarFill from "../../page 1 design images/icons8-star-50.png";
import StarNoFill from "../../page 1 design images/icons8-rating-100.png";

const HeroSection = () => {
  return (
    <div className="Advocate container-l mb-5 ">
      <h1 className="display-3 text-center"> Profile Page </h1>
      <div className="container text-center mt-5 d-flex gap-5">
        <div className="w-25 d-flex flex-column align-items-center justify-content-center gap-3">
          <div className="profile-img w-100 p-3 border rounded border-secondary shadow">
            <img src={pvads} alt="Profile" />
          </div>
          <div className="Verify border border-secondary rounded w-100 pt-2 pb-1 px-3">
            ✅Verified
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center">
          <div className="d-flex justify-content-between align-items-center">
            <div className="Advocate-details d-flex flex-column align-items-start">
              <h3 className="mb-0">Adv Shami Khan</h3>
              <div className="d-flex">
                <img src={StarFill} alt="Star" />
                <img src={StarFill} alt="Star" />
                <img src={StarFill} alt="Star" />
                <img src={StarFill} alt="Star" />
                <img src={StarNoFill} alt="Star" />
                <p className="ms-2 mb-0">4.0 | 30+ user ratings</p>
              </div>
            </div>
            <div className="Advocate-button w-25">
              <button type="button" className="btn btn-outline-primary">
                Contact Now
              </button>
            </div>
          </div>
          <hr></hr>
          <div className="container text-center">
            <div className="row row-cols-1 gap-3">
              <div className="d-flex col ps-0 align-items-center">
                <img />
                <h6 className="mb-0">Location :</h6>
                <p className="ms-1 mb-0">Rohini, Delhi</p>
              </div>
              <div className="d-flex col ps-0 align-items-center">
                <img />
                <h6 className="mb-0">Languages :</h6>
                <p className="ms-1 mb-0">English, Hindi</p>
              </div>
              <div className="d-flex col ps-0 align-items-center">
                <img />
                <h6 className="mb-0">Experience :</h6>
                <p className="ms-1 mb-0">20+ years</p>
              </div>
              <div className="d-flex col ps-0 align-items-center">
                <img />
                <h6 className="mb-0">Practice areas :</h6>
                <p className="ms-1 mb-0">
                  Murder Cases,Divorce Cases and all kind of Criminal Cases.
                </p>
              </div>
            </div>
          </div>
          <hr></hr>
        </div>
      </div>
      <div className="container d-flex flex-column justify-content-center mt-4">
        <p>
          Mr. Shami Khan, Advocate, completed his law in the year 1995 from
          Jawaharlal Nehru University and has been providing services in all
          kind of criminal cases .He is a members of the Delhi State Bar Council
          and Bar Council of India. With 20+ years of legal practice, he has
          successfully represented individuals and businesses in a wide range of
          cases.He negotiated favorable plea bargains and settlements on behalf of his clients, when appropriate.
        </p>
        <p>
          He maintain client confidentiality, uphold the rule of law, and
          protect the interests of their clients while ensuring a fair legal
          process.He conduct legal research to understand applicable laws,
          statutes, and precedents relevant to client cases. He take the time to
          understand the unique circumstances and goals of each client, ensuring
          that he can develop tailored strategies to address their legal needs.
          
        </p>
        <p>
            Maintained a high client satisfaction rate and a track record of achieving positive case outcomes.
           His commitment to open communication and transparency is the
          foundation of his practice.
        </p>
      </div>
      <div className="container d-flex justify-content-between mt-5">
        <div>
          <h4>Court</h4>
        </div>
        <div className="w-75">
          <p>
            Central Administrative Tribunal (CAT) Delhi, Delhi High Court,
            District Court, Dwarka, District Court, Faridabad, District Court,
            Gautambuddha Nagar, District Court, Ghaziabad, District Court,
            Gurgaon, District Court, Karkardooma , District Court, Patiala
            House, District Court, Rohini, District Court, Saket, District
            Court, Tis Hazari, Supreme Court Of India
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
