import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SignInPop from "./SignInPop"
import SignUpPop from "./SignUpPop"
import commun from "../Client Page Images/icons8-discussion-50.png"
import notif from "../Client Page Images/icons8-notification-50.png"
import mess from "../Client Page Images/icons8-message-50.png"
import acc from "../Client Page Images/icons8-account-50.png"



const Navbar = ({isLogin}) => {
  
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const handleSignInClick = () => {
    setIsSignInOpen(true);
  };

const handleCloseSignIn = () => {
  setIsSignInOpen(false);
};

const [isSignUpOpen, setIsSignUpOpen] = useState(false);
const handleSignUpClick = () => {
  setIsSignUpOpen(true);
};

const handleCloseSignUp = () => {
setIsSignUpOpen(false);
};
  let location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const setUserLanguagePreference = (language) => {
    localStorage.setItem("userLanguage", language);
  };

  const getUserLanguagePreference = () => {
    return localStorage.getItem("userLanguage") || "en"; // Default to English if not set
  };

  const initialUserLanguage = getUserLanguagePreference();
  const [selectedLanguage, setSelectedLanguage] = useState(initialUserLanguage);
  const handleLanguageChange = (languageCode) => {
    setSelectedLanguage(languageCode);
    setUserLanguagePreference(languageCode);
    googleTranslateElementChangeLanguage(languageCode);
  };

  const googleTranslateElementChangeLanguage = (languageCode) => {
    const translateElement = document.querySelector(".goog-te-combo");
    if (translateElement) {
      translateElement.value = languageCode;
      translateElement.dispatchEvent(new Event("change"));
    }
  };

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top ">
      <div className="container-fluid text-center">
        <Link className="navbar-brand" href="/">
          WakilMart
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/services" ? "active" : ""
                }`}
                aria-current="page"
                to="/services"
              >
                Service Provider
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/profile" ? "active" : ""
                }`}
                aria-current="page"
                to="/profile"
              >
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/templates" ? "active" : ""
                }`}
                aria-current="page"
                to="/templates"
              >
                Templates
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/loggedinuser" ? "active" : ""
                }`}
                aria-current="page"
                to="/loggedinuser"
              >
                Client Page
              </Link>
            </li>
            <li>
              <div id="google_translate_element"> </div>
            </li>
            <li class="nav-item dropdown" onClick={toggleDropdown}>
              <Link
                class="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Translate ({selectedLanguage})
              </Link>
              <ul class={`dropdown-menu ${isOpen ? "show" : ""}`}>
                <li>
                  <Link
                    class="dropdown-item"
                    href="/"
                    onClick={() => handleLanguageChange("en")}
                  >
                    English
                  </Link>
                </li>
                <li>
                  <Link
                    class="dropdown-item"
                    href="/"
                    onClick={() => handleLanguageChange("hi")}
                  >
                    Hindi
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <button type="button " className={`${isLogin ? "d-none" :  "d-block"} btn btn-yellight m-2 `}   onClick={handleSignInClick}>
            Sign In
          </button>
          <button type="button" className= {`${isLogin ? "d-none" :  "d-block"} btn btn-brown m-2 `} onClick={handleSignUpClick}>
            Sign Up
          </button>

          <div className={`${isLogin ? "d-flex" : "d-none"} logtabs d-flex flex-row flex-nowrap align-items-center justify-content-end`}>
            <img src={commun} alt="" className="me-3" style={{width:5+"%"}} />
            <img src={notif} alt="" className="me-3" style={{width:5+"%"}}/>
            <img src={mess} alt="" className="me-3" style={{width:5.5+"%"}}/>
            <p className="m-0 p-0 me-2 ">Vivek Sagar</p>
            <img src={acc} alt="" className="" style={{width:5.5+"%"}} />
          </div>
        </div>
      </div>
    </nav>
    <SignInPop isOpen={isSignInOpen} onClose={handleCloseSignIn} />
    <SignUpPop isOpen={isSignUpOpen} onClose={handleCloseSignUp} />
    
    </>
  );
};

export default Navbar;
