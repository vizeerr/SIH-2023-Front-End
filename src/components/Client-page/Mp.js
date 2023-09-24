import React from "react";
import Sc from "../../page 1 design images/Screenshot (115).png";
import flstar from "../../page 1 design images/icons8-star-50.png"
import blstar from "../../page 1 design images/icons8-verified-100.png"
import Sc1 from "../../page 1 design images/Screenshot(117).jpeg";

function map() {
  return (
      <div className="container-fluid pt-5 pb-5 pe-5 mt-5 d-flex ">
          <div className="col-6 d-flex flex-column ">
            <div className="display-4  ps-5">
              Locate Services In the Map
            </div>

          
            <p className=" fs-5 lighttext fw-light lh-lg mt-2 ps-5">
              Select A Service And We Will Locate All Of Them In The Map.
            </p>
            <form className="w-50 align-items-center d-flex border mt-2 ms-5" role="search ">
              <input
                className="form-control border-none "
                type="search"
                placeholder="Choose A Service"
                aria-label="Search"
              />
            </form>
              <div id="carolmap" class="carousel carousel-dark carol-map slide mt-3">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carolmap" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carolmap" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carolmap" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                  <div class="card mb-3 rounded-5 " >
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src={Sc1} class="img-fluid rounded-5 shadow" alt="..."/>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div class="carousel-item">
                  <div class="card mb-3 rounded-5 " >
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src={Sc1} class="img-fluid rounded-5 shadow" alt="..."/>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div class="carousel-item">
                  <div class="card mb-3 rounded-5 " >
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src={Sc1} class="img-fluid rounded-5 shadow" alt="..."/>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carolmap" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carolmap" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
          </div>

          <div className="col  d-flex justify-content-end align-items-center">
            <img src={Sc} alt="" className="border w-100"></img>
          </div>

          
        </div> 
    
  );
}

export default map;
