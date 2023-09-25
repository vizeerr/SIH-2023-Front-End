import React from "react";

import gico from "./../page 1 design images/icons8-google-100.png";
import lthumb from "./../page 1 design images/login back.jpeg"
import clbtn from "./../page 1 design images/icons8-close-100.png"
import {Link} from "react-router-dom";

const Loginonpage = ({ isOpen, onClose }) => {
  const handleClose = ()=>{
    onClose()
  }
  return (
    <div className={`position-fixed mt-2 w-100 justify-content-center align-items-center ${isOpen ? "d-flex" : "d-none"}`} style={{zIndex:"5"}} onClick={handleClose}>

    <div className="loginonpage loginservice container p-0 m-0 w-75 overflow-hidden d-flex flex-nowrap shadow-lg rounded-4" style={{height:85+"vh"}}>
      <div className="row w-100 ">
        <div className="col-5 overflow-hidden">
          <img src={lthumb} alt="" srcset="" className="w-100 rounded-4 h-100"/>
        </div>
        <div className="col ">
          <div className="container-l ps-3 positon-relative">
            <div className="close position-relative w-100 mb-0 p-0 mt-3 text-end">
              <button onClick={handleClose} className="border-none" ><img src={clbtn} alt="" srcset="" className="" style={{ width: 20 + "px" }} /></button>
            </div>
            <div>
              <h1 className="display-4 mt-2"> Sign In Here !</h1>
             
              <form style = {{width:60+"%",float:"left"}} className="mt-3 mb-3 pe-5 border-end">

                <div className="mb-3">
                  <label for="email" className="form-label">
                    Email
                  </label>
                  <input
                    placeholder="vivek1212@mail.com"
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
                    placeholder="**********"
                    type="password"
                    className="form-control"
                    id="password"
                  />
                </div>
                <Link to="/loggedinuser"><button type="submit" className="btn btn-brown" style={{width:"35%"}}>
                  Sign In
                </button></Link>
                <p className="lighttext mt-3">
                  Don't have an account yet? <a href="/">Sign Up Here</a>
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
       
      </div>
    </div>
    </div>
  );
};

export default Loginonpage;
