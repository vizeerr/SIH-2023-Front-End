import React from "react";
import pavds from "../../page 1 design images/pvads.jpeg";

const AboutUs = () => {
  return (
    <div className=" About-container container-l mt-5 mb-5 p-5">
      <h1 className="display-3 text-center">
        {" "}
        See What others Say About Us ?{" "}
      </h1>
      <div className="container text-center mt-5">
        <div id="carouselExampleCaptions" class="carousel slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item-content carousel-item active">
              <div class="d-none d-md-block">
                <h5 className="text-start fs-2">
                  "WakilMart help me get so many clients. Being an advocate its
                  not easy to reach a larger audience"
                </h5>
                <p className="text-start fs-5">~ by Satya Singh</p>
                <p className="text-start fs-5">Advocate Delhi High Court</p>
              </div>
              <img src={pavds} class="d-block w-50" alt="..." />
            </div>
            <div class="carousel-item-content carousel-item">
              <div class="d-none d-md-block">
                <h5 className="text-start fs-2">
                  "WakilMart help me get so many clients. Being an advocate its
                  not easy to reach a larger audience"
                </h5>
                <p className="text-start fs-5">~ by Satya Singh</p>
                <p className="text-start fs-5">Advocate Delhi High Court</p>
              </div>
              <img src={pavds} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item-content carousel-item">
              <div class="d-none d-md-block">
                <h5 className="text-start fs-2">
                  "WakilMart help me get so many clients. Being an advocate its
                  not easy to reach a larger audience"
                </h5>
                <p className="text-start fs-5">~ by Satya Singh</p>
                <p className="text-start fs-5">Advocate Delhi High Court</p>
              </div>
              <img src={pavds} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="previous carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="next carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
