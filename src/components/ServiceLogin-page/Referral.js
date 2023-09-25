import React from "react";
import wa from "../Service-Login-Images/whatsapp.png"
import gm from "../Service-Login-Images/gmail.png"
import tw from "../Service-Login-Images/twitter.png"
import li from "../Service-Login-Images/linkedin.png"
import fb from "../Service-Login-Images/facebook.png"

function Referral() {
  return (
    <div className="container referral-comp">
      <div className="referral-template ">
        <h4 className="referral-title">
          Invite your colleague friends to join:
        </h4>
        <p>Share the activation link and spread the word</p>
        <p className="m-0 mt-3 gray-100">Share via Email</p>
        <input
          type="text"
          placeholder="Enter email here..."
          className="email-input"
        ></input>
        <button className="email-btn">
          <img />
          E-mail invitation link
        </button>
        <hr className="w-100" />
        <div className="d-flex flex-col gap-5">
           <img className="social-icons" src ={wa}/>
           <img className="social-icons" src ={gm}/>
           <img className="social-icons" src ={tw}/>
           <img className="social-icons" src ={li}/>
           <img className="social-icons" src ={fb}/>
        </div>
        
      </div>
    </div>
  );
}

export default Referral;
