import React,{useState} from "react";
import loj from "../../Client Page Images/header.png";
import searchbtn from "../../page 1 design images/searchbtn.png"; 
import SearchSugg from "../SearchSugg";

const Herosection = () => {
  const [isSearchOpen, setisSearchOpen] = useState(false);
  const handleSearchClick = () => {
    setisSearchOpen(true);
  };

const handleSearchClose = () => {
  setisSearchOpen(false);
};
  return (
    <>
    <div className="herosection clienthero container-l mt-5 ">
    <div className="bg"></div>
      <div className="hero d-flex justify-content-between pt-5">
        <div className="leftarea  ms-5">
          <h1 className="display-1 head-land ">Find The Right Legal Service, Right Away  </h1>
          <p className="fs-3 mt-4">
          Fulfill Your Regular Legal Needs
          </p>
          <form
            className="w-70 align-items-center d-flex search rounded-pill mt-4 mb-4"
            role="search"
          >
            <input
              className="form-control me-2 border-none"
              type="search"
              placeholder="Search"
              aria-label="Search" 
              onClick={handleSearchClick}
              
            />
            <img className="searchlog" src={searchbtn} alt="" />
          </form>
          

          <div className="searchsuggest d-flex align-items-center">
            <p className="fs-5 m-0 lighttext"> Popular: </p>
            <div className="badges ms-3">
              <span className="badge rounded-pill custpopbadge ">
                Divorce Lawyer
              </span>
              <span className="badge rounded-pill custpopbadge">Notaries</span>
              <span className="badge rounded-pill custpopbadge">
                Consultant
              </span>
            </div>
          </div>
        </div>
        <div className="rightarea">
          <img className="rounded float-end" src={loj} alt="" />
        </div>
      </div>
    </div>
    <SearchSugg isOpen={isSearchOpen} onClose={handleSearchClose} topPos="7.5"></SearchSugg>
    </>
  );
};

export default Herosection;
