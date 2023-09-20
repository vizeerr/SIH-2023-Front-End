import React from "react";
import "../../App.css";

import Sshot1 from "../../page 1 design images/Screenshot 2023-09-16 150112.png";
import Sshot2 from "../../page 1 design images/Screenshot 2023-09-16 151438.png";
import Sshot3 from "../../page 1 design images/Screenshot 2023-09-16 151501.png";
import Sshot4 from "../../page 1 design images/Screenshot 2023-09-16 151519.png";

function Serviceinfo() {
  return (
    <div className="container-l mt-5 mb-5">
      <div className="w-100 text-center">
        <h1 className="display-3 "> Create Documents Quickly and Easily!</h1>
        <button type="button" className="btn btn-brown float-end me-5">
          View More
        </button>
      </div>
      <div
        id="serviceinfo"
        className="carousel carousel-dark slide w-100 "
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
          <div className="carousel-item active mb-4" data-bs-interval="10000">
            <div className="d-flex m-auto">
              <div class="card m-4 border-none text-center">
                <img src={Sshot1} class="card-img-top doctempimg" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>  
                </div>
              </div>
              <div class="card m-4 border-none text-center">
                <img src={Sshot1} class="card-img-top doctempimg" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>  
                </div>
              </div>
              <div class="card m-4 border-none text-center">
                <img src={Sshot1} class="card-img-top doctempimg" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>  
                </div>
              </div>
              <div class="card m-4 border-none text-center">
                <img src={Sshot1} class="card-img-top doctempimg" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>  
                </div>
              </div>
              <div class="card m-4 border-none text-center">
                <img src={Sshot1} class="card-img-top doctempimg" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>  
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item " data-bs-interval="5000">
            <div className="d-flex">
              <div className="wrapper p-5">
                <div className="item ">
                  <div className="img-area">
                    <img src={Sshot1} alt="" />
                  </div>

                  <p>Affidavit for Year Gap</p>
                </div>

                <div className="item ">
                  <div className="img-area">
                    <img src={Sshot2} alt="" />
                  </div>
                  <p>Affidavit for Regular Bail</p>
                </div>

                <div className="item">
                  <div className="img-area">
                    <img src={Sshot2} alt="" />
                  </div>
                  <p>Affidavit for Change of Name</p>
                </div>
                <div className="item">
                  <div className="img-area">
                    <img src={Sshot1} alt="" />
                  </div>
                  <p>Divorce Petition</p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item " data-bs-interval="2000">
            <div className="d-flex">
              <div className="wrapper p-5">
                <div className="item ">
                  <div className="img-area">
                    <img src={Sshot1} alt="" />
                  </div>

                  <p>Affidavit for Year Gap</p>
                </div>

                <div className="item ">
                  <div className="img-area">
                    <img src={Sshot2} alt="" />
                  </div>
                  <p>Affidavit for Regular Bail</p>
                </div>

                <div className="item">
                  <div className="img-area">
                    <img src={Sshot2} alt="" />
                  </div>
                  <p>Affidavit for Change of Name</p>
                </div>
                <div className="item">
                  <div className="img-area">
                    <img src={Sshot1} alt="" />
                  </div>
                  <p>Divorce Petition</p>
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
}

export default Serviceinfo;
