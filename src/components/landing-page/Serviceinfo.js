import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";


import Sshot1 from "../../page 1 design images/Screenshot 2023-09-16 150112.png";
import Sshot2 from "../../page 1 design images/Screenshot 2023-09-16 151438.png";
// import Sshot3 from "../../page 1 design images/Screenshot 2023-09-16 151501.png";
// import Sshot4 from "../../page 1 design images/Screenshot 2023-09-16 151519.png";

function Serviceinfo({headline}) {
  return (
    <div className="container-l lightbackground mt-0 pt-5 pb-5">
      <div className="w-100 text-center mt-5">
        <h1 className="display-3 "> {headline}</h1>
        <Link to="/templates"> <button type="button" className="btn btn-brown float-end me-5">
          View More
        </button></Link>
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
          <div className="carousel-item active mb-4 mb-5" data-bs-interval="10000">
            <div className="d-flex m-auto">
              <div class="card m-4 border-none text-center ">
              <Link to='/change-name'><img src={Sshot1} class="card-img-top doctempimg" alt="..."/></Link>
                <div class="card-body lightbackground">
                  <h5 class="card-title">Affidavit for name change</h5>  
                </div>
              </div>
              <div class="card m-4 border-none text-center">
              <Link to='/death-certificate'><img src={Sshot2} class="card-img-top doctempimg" alt="..."/></Link>
                <div class="card-body lightbackground">
                  <h5 class="card-title">Affidavit for death certificate</h5>  
                </div>
              </div>
              <div class="card m-4 border-none text-center">
              <Link to='/vehicle-registration'><img src={Sshot1} class="card-img-top doctempimg" alt="..."/></Link>
                <div class="card-body lightbackground">
                  <h5 class="card-title">Vehicle Registration</h5>  
                </div>
              </div>
              <div class="card m-4 border-none text-center">
              <Link to='/year-gap'><img src={Sshot1} class="card-img-top doctempimg" alt="..."/></Link>
                <div class="card-body lightbackground">
                  <h5 class="card-title">Affidavit for Year Gap</h5>  
                </div>
              </div>
              <div class="card m-4 border-none text-center">
              <Link to='/regular-bail'> <img src={Sshot1} class="card-img-top doctempimg" alt="..."/></Link>
                <div class="card-body lightbackground">
                  <h5 class="card-title">Application For Regular </h5>  
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item  mb-4 mb-5" data-bs-interval="10000">
            <div className="d-flex m-auto">
              <div class="card m-4 border-none text-center ">
                <img src={Sshot1} class="card-img-top doctempimg" alt="..."/>
                <div class="card-body lightbackground">
                  <h5 class="card-title">Affidavit for ration card</h5>  
                </div>
              </div>
              <div class="card m-4 border-none text-center">
                <img src={Sshot2} class="card-img-top doctempimg" alt="..."/>
                <div class="card-body lightbackground">
                  <h5 class="card-title">Affidavi for fire noc</h5>  
                </div>
              </div>
              <div class="card m-4 border-none text-center">
                <img src={Sshot1} class="card-img-top doctempimg" alt="..."/>
                <div class="card-body lightbackground">
                  <h5 class="card-title">Divorce Petition</h5>  
                </div>
              </div>
              <div class="card m-4 border-none text-center">
                <img src={Sshot1} class="card-img-top doctempimg" alt="..."/>
                <div class="card-body lightbackground">
                  <h5 class="card-title">Affidavit for year gap </h5>  
                </div>
              </div>
              <div class="card m-4 border-none text-center">
                <img src={Sshot1} class="card-img-top doctempimg" alt="..."/>
                <div class="card-body lightbackground">
                  <h5 class="card-title">Affidavit for rc transfer</h5>  
                </div>
              </div>
            </div>
          </div>


          <div className="carousel-item  mb-4 mb-5" data-bs-interval="10000">
            <div className="d-flex m-auto">
              <div class="card m-4 border-none text-center ">
                <img src={Sshot1} class="card-img-top doctempimg" alt="..."/>
                <div class="card-body lightbackground">
                  <h5 class="card-title">Affidavit for Bail</h5>  
                </div>
              </div>
              <div class="card m-4 border-none text-center">
                <img src={Sshot2} class="card-img-top doctempimg" alt="..."/>
                <div class="card-body lightbackground">
                  <h5 class="card-title">Affidavit for visa</h5>  
                </div>
              </div>
              <div class="card m-4 border-none text-center">
                <img src={Sshot1} class="card-img-top doctempimg" alt="..."/>
                <div class="card-body lightbackground">
                  <h5 class="card-title">Affidavit for license</h5>  
                </div>
              </div>
              <div class="card m-4 border-none text-center">
                <img src={Sshot1} class="card-img-top doctempimg" alt="..."/>
                <div class="card-body lightbackground">
                  <h5 class="card-title">Affidavit for undertaking</h5>  
                </div>
              </div>
              <div class="card m-4 border-none text-center">
                <img src={Sshot1} class="card-img-top doctempimg" alt="..."/>
                <div class="card-body lightbackground">
                  <h5 class="card-title">Affidavit for gap year</h5>  
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
