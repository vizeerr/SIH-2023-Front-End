import React from "react";
//import hplogin from "../../page 1 design images/haplog.jpeg";
// import lbag from '../../page 1 design images/login back.jpeg'
import gico from "../../page 1 design images/icons8-google-100.png";
const Loginonpage = () => {
  return (
    <div className="loginonpage loginservice container-l p-0 m-0  w-100  d-flex flex-nowrap">
      <div className="row w-100 ">
        <div className="col ">
          <div className="container-fluid ps-5 pe-5 positon-relative">
            <div>
              <h1 className="display-4 mt-5"> Signup and get clients today !</h1>
             
              <form style = {{width:50+"%",float:"left"}} className="mt-3 mb-3 pe-5 border-end">
                <div className="mb-3">
                  <label for="fullname" className="form-label">
                    Full Name
                  </label>
                  <input
                    placeholder='"Your Name"'
                    type="text"
                    className="form-control"
                    id="fullname"
                  />
                </div>
                <div className="mb-3">
                  <label for="fullname" className="form-label">
                    Email Address
                  </label>
                  <input
                    placeholder='"yourname@gmail.com"'
                    type="text"
                    className="form-control"
                    id="fullname"
                  />
                </div>
                <div className="mb-3">
                  <label for="email" className="form-label">
                    Phone Number
                  </label>
                  <input
                    placeholder="+91"
                    type="email"
                    className="form-control"
                    id="email"
                  />
                </div>
                <div className="mb-3">
                  <label for="password" className="form-label">
                    Password
                  </label>
                  <input
                    placeholder="•••••"
                    type="password"
                    className="form-control"
                    id="password"
                  />
                </div>
                <div className="mb-3">
                  <label for="cpassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    placeholder="•••••"
                    type="password"
                    className="form-control"
                    id="cpassword"
                  />
                </div>
                <button type="submit" className="btn btn-brown" style={{width:"35%"}}>
                  Sign Up
                </button>
                <p className="lighttext mt-3">
                  Already have an account? <a href="/">Login Here</a>
                </p>
              </form>

              <div className="mt-5">
                <div className="d-flex mt-4 h-100 flex-nowrap align-items-center justify-content-center">
                  <img style={{ width: 30 + "px" }} src={gico} alt="" />
                  <p className="m-0 p-0 ms-2"> Sign Up With Google</p>
                </div>
              </div>
              </div>
            
          </div>
        </div>
        <div className="col-5 m-0  text-start  h-100 d-flex align-items-start justify-content-end flex-column loginrbg text-light">
          {/* <h1 className="display-1 ms-5 mb-2 w-100<">
            Let's
            <br />
            Get Started
            <br />
            Today !
          </h1>
          <button type="submit" className="btn ms-5 mb-5 btn-brown w-25">
            Sign Up
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Loginonpage;
