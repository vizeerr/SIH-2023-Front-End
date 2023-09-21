import React, { useState } from "react";
import { Link,useLocation } from "react-router-dom";

const Navbar = () => {
   let location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    const [selectedLanguage, setSelectedLanguage] = useState("English"); // Default language
    const handleLanguageChange = (language) => {
      setSelectedLanguage(language);
      getTextElement();
    };

    const getTextElement = () => {
      // Get all text nodes within the document
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
      
      const textNodesToTranslate = [];
      
      while (walker.nextNode()) {
        textNodesToTranslate.push(walker.currentNode);
      }
    
      // Translate each text node and update its content
      textNodesToTranslate.forEach(async (node) => {
        const translated = await query(node.textContent);
        // console.log(translated);
        // node.textContent = JSON.parse(translated).translation; // Update the text content
      });
    };
    const API_URL = "https://api-inference.huggingface.co/models/Helsinki-NLP/opus-mt-en-hi";

    async function query(data) {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          Authorization: "Bearer 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",
          "Content-Type": "application/json", // Specify content type
        },
        body: JSON.stringify({ inputs: data }), // Wrap data in an object
      });
  
      const result = await response.json();
      return JSON.stringify(result);
  
    }
  

   
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
                <Link className={`nav-link ${location.pathname === '/'? "active": "" }`}  aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/services'? "active": "" }`}  aria-current="page" to="services">Service Provider</Link>
              </li>
              <li class="nav-item dropdown" onClick={toggleDropdown} >
                <Link class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Translate ({selectedLanguage})
                </Link>
                <ul class={`dropdown-menu ${isOpen ? 'show' : ''}`}>
                  <li><Link class="dropdown-item" href="/" onClick={() => handleLanguageChange("English")} >English</Link></li>
                  <li><Link class="dropdown-item" href="/" onClick={() => handleLanguageChange("Hindi")} >Hindi</Link></li>
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
