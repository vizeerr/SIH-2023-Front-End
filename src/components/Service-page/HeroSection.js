import React from "react";
import heroImg from "../../page 1 design images/pexels-fauxels-3184465.jpg";

const HeroSection = () => {
  return (
    <div className="hero-Service-container container-l">
      <div className="hero-Service">
        <img src={heroImg} alt="hero" className="hero-img" />
        <div className="hero-content">
          <h1>Join Our Network of Legal Experts</h1>
          <p>Reach Your Audience Fast and Generate Leads</p>
          <button type="button" className="btn-yellight">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
