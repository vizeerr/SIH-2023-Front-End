import React,{useRef} from "react";
import heroImg from "../../page 1 design images/pexels-fauxels-3184465.jpg";
import herobg from "../../service page images/herobg.mp4"

const HeroSection = () => {
  const videoRef = useRef(null);

  const handlePlay = () => {
    const video = videoRef.current;
    if (video && video.paused) {
      video.play();
    }
  }
  return (
    <div className="hero-Service-container container-l p-0 w-100  overflow-hidden" onCanPlay={handlePlay}>
      <div className="hero-Service w-100">
      <div className="w-100  overflow-hidden">

        {/* <img src={heroImg} alt="hero" className="hero-img" /> */}
        <video ref={videoRef} autoplay loop muted playsinline>
          <source src={herobg} type="video/mp4" />
        </video>
      </div>
        <div className="hero-content text-light">
          <h1 className="display-1 m-0">Join Our Network of<br/> Legal Experts</h1>
          <p className="fs-3 mt-2">Reach Your Audience Fast and Generate Leads</p>
          <button type="button" className="btn btn-lightbg mt-3"> Join Now</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
