import React from "react";
import per2 from "../../page 1 design images/per2.jpeg";
import StarFill from "../../page 1 design images/icons8-star-50.png";
import StarNoFill from "../../page 1 design images/icons8-rating-100.png";
import Location from "../../page 1 design images/icons8-location-48.png";
import Language from "../../page 1 design images/icons8-language-48.png";
import Experience from "../../page 1 design images/icons8-briefcase-48.png";
import Practice from "../../page 1 design images/icons8-law-48.png";

const HeroSection = () => {
  return (
    <div className="Advocate container-l mb-5 ">
      <h1 className="display-3 text-center"> Profile Page </h1>
      <div className="container text-center mt-5 d-flex gap-5">
        <div className="w-25 d-flex flex-column align-items-center justify-content-center gap-3">
          <div className="profile-img w-100 p-3 border rounded border-secondary shadow">
            <img src={per2} alt="Profile" />
          </div>
          <div className="Verify border border-secondary rounded w-100 pt-2 pb-1 px-3">
            ✅Verified
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center">
          <div className="d-flex justify-content-between align-items-center">
            <div className="Advocate-details d-flex flex-column align-items-start">
              <h3 className="mb-0">Advocate name</h3>
              <div className="d-flex">
                <img src={StarFill} alt="Star" />
                <img src={StarFill} alt="Star" />
                <img src={StarFill} alt="Star" />
                <img src={StarFill} alt="Star" />
                <img src={StarNoFill} alt="Star" />
                <p className="ms-2 mb-0">4.6 | 100+ user ratings</p>
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
                <img className="Profile-img" src={Location} alt="Location" />
                <h6 className="mb-0">Location :</h6>
                <p className="ms-1 mb-0">Kailash Hills, Delhi</p>
              </div>
              <div className="d-flex col ps-0 align-items-center">
                <img className="Profile-img" src={Language} alt="Language" />
                <h6 className="mb-0">Languages :</h6>
                <p className="ms-1 mb-0">English, Hindi</p>
              </div>
              <div className="d-flex col ps-0 align-items-center">
                <img
                  className="Profile-img"
                  src={Experience}
                  alt="Experience"
                />
                <h6 className="mb-0">Experience :</h6>
                <p className="ms-1 mb-0">16 years</p>
              </div>
              <div className="d-flex col ps-0 align-items-center">
                <img
                  className="Profile-img"
                  src={Practice}
                  alt="Practice areas"
                />
                <h6 className="mb-0">Practice areas :</h6>
                <p className="ms-1 mb-0">
                  Arbitration, Cheque Bounce, Child Custody, Court Marriage,
                </p>
              </div>
            </div>
          </div>
          <hr></hr>
        </div>
      </div>
      <div className="container d-flex flex-column justify-content-center mt-4">
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          sollicitudin, nisl quis vestibulum commodo, felis justo aliquam
          libero, vitae aliquet dolor orci non nisl. Sed vitae enim vitae ligula
          cursus ultricies. Quisque auctor, eros eget aliquet sollicitudin, leo
          ex efficitur massa, a aliquam felis leo et tortor. Donec et lectus
          quis nibh aliquet aliquam. Nullam consectetur, ex ut ultricies tempor,
          ante magna ultrices mi, a aliquam felis leo et tortor. Donec et lectus
          quis nibh aliquet aliquam. Nullam consectetur, ex ut ultricies tempor,
          ante magna ultrices mi, a aliquam felis leo et tortor. Donec et lectus
        </p>
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          sollicitudin, nisl quis vestibulum commodo, felis justo aliquam
          libero, vitae aliquet dolor orci non nisl. Sed vitae enim vitae ligula
          cursus ultricies. Quisque auctor, eros eget aliquet sollicitudin, leo
          ex efficitur massa, a aliquam felis leo et tortor. Donec et lectus
          quis nibh aliquet aliquam. Nullam, quis nibh aliquet aliquam. Nullam
          consectetur, ex ut ultricies tempor, ante magna ultrices mi, a aliquam
          felis leo et tortor. Donec et lectus quis nibh aliquet aliquam. Nullam
          consectetur, ex ut ultricies tempor, ante magna ultrices mi, a aliquam
          felis leo et tortor. Donec et lectus quis nibh aliquet aliquam. Nullam
          consectetur, ex ut ultricies tempor, ante magna ultrices mi, a
        </p>
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          sollicitudin, nisl quis vestibulum commodo, felis justo aliquam
          libero, vitae aliquet dolor orci non nisl. Sed vitae enim vitae ligula
          cursus ultricies. Quisque auctor, eros eget aliquet sollicitudin, leo
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
