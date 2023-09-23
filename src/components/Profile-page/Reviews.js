import React from 'react'
import pavds from "../../page 1 design images/pvads.jpeg";

function Reviews() {
  return (
    <div className='lgbag h-auto container-l mt-5 mb- p-0'>
    <div className='w-100 text-center mt-5'>
        <h1 className="display-3 ">Testimonials</h1>
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
        <div className="d-flex flex-row-reverse align-items-center justify-content-center">
                <div class="w-50 m-5">
                  <p className="text-start fs-3 ">
                    "Best Advocate for criminal case"
                  </p>
                  <p className="text-start fs-5 lighttext">~ by Satya Singh</p>
                  <p className="text-start fs-5 lighttext">Advocate Delhi High Court</p>
                </div>
                <img src={pavds} class="rounded-5 w-25" alt="..." />
          </div>
      </div>
      <div className="carousel-item" data-bs-interval="2000">
        <div className="d-flex flex-row-reverse align-items-center justify-content-center">
                  <div class="w-50 m-5">
                    <p className="text-start fs-3 ">
                      "Best Services"
                    </p>
                    <p className="text-start fs-5 lighttext">~ by Aryan Sharma</p>
                    <p className="text-start fs-5 lighttext">Advocate Allahabad High Court</p>
                  </div>
                  <img src={pavds} class="rounded-5 w-25" alt="..." />
            </div>
      </div>
      <div className="carousel-item">
      <div className="d-flex  flex-row-reverse align-items-center justify-content-center">
                <div class="w-50 m-5">
                  <p className="text-start fs-3 ">
                   "Listens carefully and help you in all kind of divorced cases"
                  </p>
                  <p className="text-start fs-5 lighttext">~ by Rohan Kumar</p>
                  <p className="text-start fs-5 lighttext">Advocate Uttarakhand High Court</p>
                </div>
                <img src={pavds} class="rounded-5 w-25" alt="..." />
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
  )
}

export default Reviews