import React from "react";

import re1 from "../../page 1 design images/re1.jpeg";
import re2 from "../../page 1 design images/re2.jpeg";
import re3 from "../../page 1 design images/re3.jpeg";



const AboutUs = () => {
  return (
     <div className='lgbag h-auto container-l mt-5 mb- p-0'>
    <div className='w-100 text-center mt-5'>
        <h1 className="display-3 "> See What Others Say About Us</h1>
        <button type="button" className="btn btn-brown float-end me-5"> View More</button>
    </div>
    
    <div id="about" className=" carousel carousel-dark slide mt-5 w-100">
    
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#servicesslider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#servicesslider" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#servicesslider" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="container carousel-inner carol-serv">
      <div className="carousel-item active" data-bs-interval="10000">
        <div className="d-flex align-items-center justify-content-center">
                <div class="w-50 m-5">
                  <p className="text-start fs-3 ">
                    "WakilMart help me get so many clients. Being an advocate its
                    not easy to reach a larger audience"
                  </p>
                  <p className="text-start fs-5 lighttext">~ by Satya Singh</p>
                  <p className="text-start fs-5 lighttext">Advocate Delhi High Court</p>
                </div>
                <img src={re1} class="rounded-5 w-25" alt="..." />
          </div>
      </div>
      <div className="carousel-item" data-bs-interval="2000">
        <div className="d-flex align-items-center justify-content-center">
                  <div class="w-50 m-5">
                    <p className="text-start fs-3 ">
                      "Being part of an online legal platform has given me exposure to potential clients who are actively seeking legal services. "
                    </p>
                    <p className="text-start fs-5 lighttext">~ by Aryan Sharma</p>
                    <p className="text-start fs-5 lighttext">Advocate Allahabad High Court</p>
                  </div>
                  <img src={re2} class="rounded-5 w-25" alt="..." />
            </div>
      </div>
      <div className="carousel-item">
      <div className="d-flex align-items-center justify-content-center">
                <div class="w-50 m-5">
                  <p className="text-start fs-3 ">
                    "Wakilmart streamline administrative tasks, such as billing etc. This efficiency allows me to focus more on my work ."
                  </p>
                  <p className="text-start fs-5 lighttext">~ by Rohan Kumar</p>
                  <p className="text-start fs-5 lighttext">Advocate Uttarakhand High Court</p>
                </div>
                <img src={re3} class="rounded-5 w-25" alt="..." />
          </div>
      
      </div>
    
    <button className="carousel-control-prev" type="button" data-bs-target="#about" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#about" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  </div>
</div>
  );
};

export default AboutUs;
