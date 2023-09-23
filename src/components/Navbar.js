import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from 'axios';
import { logRoles } from "@testing-library/react";

const Navbar = () => {
  let location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const setUserLanguagePreference = (language) => {
    localStorage.setItem('userLanguage', language);
  };

  const getUserLanguagePreference = () => {
    return localStorage.getItem('userLanguage') || 'English'; // Default to English if not set
  };

  const initialUserLanguage = getUserLanguagePreference();
  const [selectedLanguage, setSelectedLanguage] = useState(initialUserLanguage);
  useEffect(() => {
    if (initialUserLanguage !== 'English') {
      const translations = JSON.parse(localStorage.getItem(`${initialUserLanguage}Translations`));
      if (translations) {
        handleExtractText();
      } else {
        handleExtractText();
      }
    }
  }, [initialUserLanguage]);

  const handleLanguageChange = (lang)=>{
    setUserLanguagePreference(lang);
    setSelectedLanguage(lang);
    if(lang==='English'){
      handleExtractText();
    }
  
  }

  const handleExtractText = async () => {
    const elementsWithText = document.body.querySelectorAll('p,h1,h2,h3,h4,h5,h6,button,a,li');
    const userLanguage = localStorage.getItem('userLanguage') || 'English';
    const translationMap = JSON.parse(localStorage.getItem('translationMap')) || {};
   
  
    elementsWithText.forEach(async (element) => {
      if (element.textContent && element.textContent.trim() !== '') {
        const text = element.textContent.trim();
        const translationKey = `${userLanguage}:${text}`;
        
        if (translationMap[translationKey]) {
          element.textContent = translationMap[translationKey];
          
        } else {
          try {
            const response = await axios.post('http://localhost:5000/', { text: text });
            const doubledText = response.data.translation;
            translationMap[translationKey] = doubledText;
            localStorage.setItem('translationMap', JSON.stringify(translationMap));
            element.textContent = doubledText;
            
          } catch (error) {
            console.log(error);}
          }

        }
      });
      
      console.log('done');
      
      document.documentElement.lang = userLanguage;
      document.documentElement.setAttribute('lang', userLanguage);
    };
    
  
  

  return (
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
              <Link className={`nav-link ${location.pathname === '/' ? "active" : ""}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/services' ? "active" : ""}`} aria-current="page" to="services">Service Provider</Link>
            </li>
            <li class="nav-item dropdown" onClick={toggleDropdown}>
              <Link class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Translate ({selectedLanguage})
              </Link>
              <ul class={`dropdown-menu ${isOpen ? 'show' : ''}`}>
                <li><Link class="dropdown-item" href="/" onClick={() => handleLanguageChange("English")}>English</Link></li>
                <li><Link class="dropdown-item" href="/" onClick={() => handleLanguageChange("Hindi")}>Hindi</Link></li>
              </ul>
            </li>
          </ul>
          <button type="button " className="btn btn-yellight m-2">
            Sign In
          </button>
          <button type="button" className="btn btn-brown">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
