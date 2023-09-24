import React from "react";
import Sc from "../../page 1 design images/Screenshot (115).png";
import flstar from "../../page 1 design images/icons8-star-50.png"
import blstar from "../../page 1 design images/icons8-verified-100.png"
import Sc1 from "../../page 1 design images/Screenshot(117).jpeg";

function map() {
  return (
    <div>
      <div className="container-1">
        <div className="container-l d-flex  ">
          <div className="d-flex flex-column  ">
            <div className="display-5 ms-5 pb-2   ">
              Locate Services In the Map
            </div>

            <form
              className="w-75 align-items-center d-flex search mt-4 mb-4 ms-5 border 1px solid #707070"
              role="search"
            >
              <input
                className="form-control me-2 border-none "
                type="search"
                placeholder="Choose A Service"
                aria-label="Search"
              />
            </form>
            <p className=" fs-4 ms-5 mb-0 lighttext fw-light w-75 lh-lg h-25">
              Select A Service And We Will Locate All Of Them In The Map.
            </p>
              <div
        id="mp"
        className=" carousel carousel-dark slide mt-0 w-50 d-flex ms-5"
      >
      
        <div className="container carousel-inner carol-provid">
          <div className="carousel-item mb-5 active" data-bs-interval="10000">
            <div className="d-flex flex-wrap">
              <div className="d-flex flex-nowrap mb-3  ">
                <div class="card  mb-3 mt-0">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src={Sc1}
                        class="img-fluid rounded-start w-100  "
                        alt="..."
                      />
                       <div className="d-flex flex-wrap justify-content-start ">
                          <div className="d-flex flex-wrap justify-content-start">
                            <img src={flstar} alt="" className="verifico" />
                            <img src={flstar} alt="" className="verifico" />
                            <img src={flstar} alt="" className="verifico" />
                            <img src={flstar} alt="" className="verifico" />
                            <img src={blstar} alt="" className="verifico" />
                          </div>
                          <p className=" lighttext w-100 ">4.0 </p>
                        </div>
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title ">E Shop</h5>
                        <p class="card-text w-100"> Near Kali Temple Kolkata.
                          
                        </p>
                       
                      </div>
                    </div>
                  </div>
                </div>
                
                  
              </div>
            </div>



            
          </div>
          
            <div className="carousel-item mb-5 " data-bs-interval="10000">
            <div className="d-flex flex-wrap">
              <div className="d-flex flex-nowrap mb-3">
                <div class="card mb-3">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src={Sc1}
                        class="img-fluid rounded-start"
                        alt="..."
                      />
                      <div className="d-flex flex-wrap justify-content-start ">
                          <div className="d-flex flex-wrap justify-content-start">
                            <img src={flstar} alt="" className="verifico" />
                            <img src={flstar} alt="" className="verifico" />
                            <img src={flstar} alt="" className="verifico" />
                            <img src={flstar} alt="" className="verifico" />
                            <img src={blstar} alt="" className="verifico" />
                          </div>
                          <p className=" lighttext w-100 ">4.5 </p>
                        </div>
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title ">E Shop</h5>
                        <p class="card-text w-100"> Near Kali Temple Kolkata.
                          
                        </p>
                       
                      </div>
                    </div>
                    
                  </div>
                </div>
                
              </div>
            </div>
           



          </div>
          <div className="carousel-item mb-5 " data-bs-interval="10000">
            <div className="d-flex flex-wrap">
              <div className="d-flex flex-nowrap mb-3">
                <div class="card mb-3">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src={Sc1}
                        class="img-fluid rounded-start"
                        alt="..."
                      />
                      <div className="d-flex flex-wrap justify-content-start ">
                          <div className="d-flex flex-wrap justify-content-start">
                            <img src={flstar} alt="" className="verifico" />
                            <img src={flstar} alt="" className="verifico" />
                            <img src={flstar} alt="" className="verifico" />
                            <img src={flstar} alt="" className="verifico" />
                            <img src={blstar} alt="" className="verifico" />
                          </div>
                          <p className=" lighttext w-100 ">5.0 </p>
                        </div>
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title ">E Shop</h5>
                        <p class="card-text w-100"> Near Kali Temple Kolkata.
                          
                        </p>
                       
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            </div>
          
        
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#mp"
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
          data-bs-target="#mp"
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

          <div className="  w-50 mt-5 pt-4 ps-2 mb-5 ">
            <img src={Sc} alt=""></img>
          </div>

          
        </div>
        </div>
      </div>
    
  );
}

export default map;
