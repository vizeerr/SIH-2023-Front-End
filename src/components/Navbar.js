import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SignInPop from "./SignInPop"
import SignUpPop from "./SignUpPop"



const Navbar = () => {
  
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
                to="services"
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
                to="profile"
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
                to="templates"
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
                to="loggedinuser"
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
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/loggedinprovider" ? "active" : ""
                }`}
                aria-current="page"
                to="loggedinprovider"
              >
                Service Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/badges" ? "active" : ""
                }`}
                aria-current="page"
                to="badges"
              >
                Badges
              </Link>
            </li>
          </ul>
          <button type="button " className="btn btn-yellight m-2 " onClick={handleSignInClick}>
            Sign In
          </button>
          <button type="button" className="btn btn-brown" onClick={handleSignUpClick}>
            Sign Up
          </button>

        </div>
      </div>
    </nav>
    <SignInPop isOpen={isSignInOpen} onClose={handleCloseSignIn} />
    <SignUpPop isOpen={isSignUpOpen} onClose={handleCloseSignUp} />
    
    </>
  );
};

export default Navbar;
