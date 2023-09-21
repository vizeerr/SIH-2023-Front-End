import React from "react";
import "../../App.css";

import Screenshot from "../../page 1 design images/Screenshot.png";
import Screenshot1 from "../../page 1 design images/Screenshot1.png";
function Serviceinfo() {
  return (
    <div className="lg container-fluid  p-5 my-5  bg #f0f0f0          
">
      <div className=" w-100 text-center mt-5">
        <h1 className="display-5 "> Create Legal Documents Quickly and Easily!</h1>
        <button type="button" className="btn btn-brown float-end me-5">
          {" "}
          View More
        </button>
      </div>
      <div
        id="serviceinfo"
        className="carousel carousel-dark slide mt-5 w-100 "
      >
        <div className="carousel-indicators  ">
          <button
            type="button"
            data-bs-target="#serviceinfo"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#servicesinfo"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#serviceinfo"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="container carousel-inner carol-serv ">
          <div className="carousel-item active mb-5" data-bs-interval="10000">
            <div className="d-flex">
              <div className="wrapper p-5 ">
                <div className="item ">
                  <div className="img-area">
                    <img src={Screenshot1} alt="" />
                  </div>

                  <p>Affidavit for Year Gap</p>
                </div>

                <div className="item ">
                  <div className="img-area">
                    <img src={Screenshot} alt="" />
                  </div>
                  <p>Affidavit for Regular Bail</p>
                </div>

                <div className="item">
                  <div className="img-area">
                    <img src={Screenshot} alt="" />
                  </div>
                  <p>Affidavit for Change of Name</p>
                </div>
                <div className="item">
                  <div className="img-area">
                    <img src={Screenshot1} alt="" />
                  </div>
                  <p>Divorce Petition</p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item  " data-bs-interval="20000">
            <div className="d-flex">
              <div className="wrapper p-5">
                <div className="item ">
                  <div className="img-area">
                    <img src={Screenshot1} alt="" />
                  </div>

                  <p>Affidavit for Antiragging</p>
                </div>

                <div className="item ">
                  <div className="img-area">
                    <img src={Screenshot} alt="" />
                  </div>
                  <p>Affidavit for name correction</p>
                </div>

                <div className="item">
                  <div className="img-area">
                    <img src={Screenshot} alt="" />
                  </div>
                  <p>Affidavit for caste certificate</p>
                </div>
                <div className="item">
                  <div className="img-area">
                    <img src={Screenshot1} alt="" />
                  </div>
                  <p>Affidavit for study gap</p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item " data-bs-interval="20000">
            <div className="d-flex">
              <div className="wrapper p-5  ">
                <div className="item ">
                  <div className="img-area">
                    <img src={Screenshot1} alt="" />
                  </div>

                  <p>Affidavit for Writ Petition</p>
                </div>

                <div className="item ">
                  <div className="img-area">
                    <img src={Screenshot} alt="" />
                  </div>
                  <p>Affidavit for trade license </p>
                </div>

                <div className="item">
                  <div className="img-area">
                    <img src={Screenshot} alt="" />
                  </div>
                  <p>Affidavit for trademark</p>
                </div>
                <div className="item">
                  <div className="img-area">
                    <img src={Screenshot1} alt="" />
                  </div>
                  <p>Affidavit for death certificate</p>
                </div>
              </div>
            </div>
          </div>
          
          
          

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#serviceinfo"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              
              aria-hidden="true"
            ></span>

            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#serviceinfo"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              
              aria-hidden="true"
            ></span>

            <span className="visually-hidden">Next</span>
          </button>
          </div>
          </div>
        
      
    </div>
  );
};

export default Serviceinfo;
