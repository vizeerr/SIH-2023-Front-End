import React from "react";
import blstar from "../../page 1 design images/icons8-rating-100.png";
import flstar from "../../page 1 design images/icons8-star-50.png";
import per1 from "../../page 1 design images/per1.jpeg";
import per2 from "../../page 1 design images/per2.jpeg";
import per3 from "../../page 1 design images/per3.jpeg";
import per4 from "../../page 1 design images/per4.jpeg";

const Userfeed = () => {
  return (
    <div className="userfeed p-0 container-l mt-5 mb-5 w-100 h-100 overflow-hidden">
      <div className="w-100 text-center position-relative x-3">
        <h1 className="display-3"> What They Are Talking About WakilMart</h1>
        <button type="button" className="btn btn-brown float-end me-5">
          {" "}
          View More
        </button>
      </div>
      <div
        id="userfeedback"
        className=" carousel carousel-dark slide mt-5 w-100"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#userfeedback"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#userfeedback"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#userfeedback"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="container carousel-inner carol-provid">
          <div className="carousel-item mb-5 active" data-bs-interval="10000">
            <div className="d-flex flex-wrap">
              <div className="d-flex flex-nowrap mb-3 mt-5">
                <div class="card mb-3">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src={per1}
                        class="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">Arya</h5>
                        <p class="card-text">
                          Real estate law can be very confusing and, as a real estate client, the firm helped us draft up legal documents in no time at all.
                        </p>
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
                    </div>
                  </div>
                </div>
                <div class="card mb-3">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src={per2}
                        class="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">Rohan Sharma</h5>
                        <p class="card-text">
                          They got back to us quickly and made it a seamless operation, especially as we were facing time constraints. I highly recommend and will work with this law office again. Thanks, team!
                        </p>
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-nowrap mb-3 mt-5">
                <div class="card mb-3">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src={per3}
                        class="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">Pulkit Kapoor</h5>
                        <p class="card-text">
                          Such an amazing and competent team!
                        </p>
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
                    </div>
                  </div>
                </div>
                <div class="card mb-3">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src={per4}
                        class="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">Ruhi</h5>
                        <p class="card-text">
                          They were very efficient, friendly, and thorough. They were honest, realistic, and sincere. They made a terrible situation barrable.
                        </p>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>



            
          </div>
          
            <div className="carousel-item mb-5 " data-bs-interval="10000">
            <div className="d-flex flex-wrap">
              <div className="d-flex flex-nowrap mb-3 mt-5">
                <div class="card mb-3">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src={per1}
                        class="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">Amyra</h5>
                        <p class="card-text">
                          They were very efficient, friendly, and thorough. They were honest, realistic, and sincere. They made a terrible situation barrable.
                        </p>
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
                    </div>
                  </div>
                </div>
                <div class="card mb-3">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src={per2}
                        class="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">Sameer</h5>
                        <p class="card-text">
                          The most empathetic and professional law firm we've ever worked with. That's why we've come back to them for help.
                        </p>
                        <div className="d-flex flex-wrap justify-content-start ">
                          <div className="d-flex flex-wrap justify-content-start">
                            <img src={flstar} alt="" className="verifico" />
                            <img src={flstar} alt="" className="verifico" />
                            <img src={flstar} alt="" className="verifico" />
                            <img src={flstar} alt="" className="verifico" />
                            <img src={blstar} alt="" className="verifico" />
                          </div>
                          <p className=" lighttext w-100 ">3.0 </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-nowrap mb-3 mt-5">
                <div class="card mb-3">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src={per4}
                        class="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">Ishita</h5>
                        <p class="card-text">
                          I wouldn't hesitate to recommend them in the slightest.
                        </p>
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
                    </div>
                  </div>
                </div>
                <div class="card mb-3">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src={per3}
                        class="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">Aakash Kumar</h5>
                        <p class="card-text">
                          Absolutey wonderful!The perfect team to have on your side. They keep you informed every step of the way and make sure they are available anytime you need them.
                        </p>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
           



          </div>
          <div className="carousel-item mb-5 " data-bs-interval="10000">
            <div className="d-flex flex-wrap">
              <div className="d-flex flex-nowrap mb-3 mt-5">
                <div class="card mb-3">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src={per1}
                        class="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">Arpita</h5>
                        <p class="card-text">
                           Very knowledgeable, kind, and diligent team. Would definitely recommend to anyone.
                        </p>
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
                    </div>
                  </div>
                </div>
                <div class="card mb-3">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src={per4}
                        class="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">Ashu</h5>
                        <p class="card-text">
                          Fantastic law firm.
                        </p>
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-nowrap mb-3 mt-5">
                <div class="card mb-3">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src={per2}
                        class="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">Nitin</h5>
                        <p class="card-text">
                          Friendly and helpful attorneys and staff. 
                        </p>
                        <div className="d-flex flex-wrap justify-content-start ">
                          <div className="d-flex flex-wrap justify-content-start">
                            <img src={flstar} alt="" className="verifico" />
                            <img src={flstar} alt="" className="verifico" />
                            <img src={flstar} alt="" className="verifico" />
                            <img src={flstar} alt="" className="verifico" />
                            <img src={blstar} alt="" className="verifico" />
                          </div>
                          <p className=" lighttext w-100 ">3.5 </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card mb-3">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src={per3}
                        class="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">Nikhil</h5>
                        <p class="card-text">
                          From the moment I walked in as a client to the end when everything was complete, I was very pleased.
                        </p>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          
        
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#userfeedback"
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
          data-bs-target="#userfeedback"
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

export default Userfeed;
