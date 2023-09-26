import React, { useRef } from "react";
import Advice from "../../page 1 design images/hover_Video.mp4";

const AdviceVideo = () => {
  const videoRef = useRef(null);

  const handlePlay = () => {
    const video = videoRef.current;
    if (video && video.paused) {
      video.play();
    }
  };
  return (
    <div className="Advice container-l mb-5 w-100" onCanPlay={handlePlay}>
    <div className="w-75 m-auto">

      <h1 className="display-3 text-center mb-5">Our Services At A Glance 😄</h1>
      <div className="w-100 overflow-hidden ">
        <video ref={videoRef} className="w-100 shadow border" autoplay loop muted playsinline>
          <source src={Advice} type="video/mp4" />
        </video>
      </div>
    </div>
    </div>
  );
};

export default AdviceVideo;
