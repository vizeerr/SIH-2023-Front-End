import React,{useState} from "react";
import { Link} from "react-router-dom";

import loj from "../../../page 1 design images/loj.png";
import legalico from "../../../page 1 design images/legalico.png";
import transpico from "../../../page 1 design images/transpico.png";
import convico from "../../../page 1 design images/convico.png";
import expertico from "../../../page 1 design images/expertico.png";
import SearchSugg from "../../SearchSugg";
import filterbtn from "../../../page 1 design images/icons8-filter-100.png"
import SearchFill from "../../SearchFillter"

import "./HeroSection.css"
import { CiSearch } from 'react-icons/ci';


const Herosection = () => {
  const [isSearchOpen, setisSearchOpen] = useState(false);
  const handleSearchClick = () => {
    setisSearchOpen(true);
  };

const handleSearchClose = () => {
  setisSearchOpen(false);
};
const [isFillOpen, setisFillOpen] = useState(false);
  const handleFilterClick = () => {
    setisFillOpen(true);
  };

const handleFilterClose = () => {
  setisFillOpen(false);
};
  return (
    <>
    <div className="herosection margin-top-5 container-fluid">
      <div className="row ">
        <div className="container-fluid col-7 ">
          <h1 className="display-1 text-color-brown font-family-head text-shadow-head">High Quality Legal Services </h1>
          <p className="fs-3 fw-light">
            Finding a right Legal Service Provider can be difficult but not
            anymore
          </p>
          <div className="d-flex align-items-center">

          <form
            className="w-75 align-items-center d-flex border border-1 border-color-brown  px-2 py-1 rounded-pill my-2"
            role="search"
          >
            <input
              className="form-control border-0 "
              type="search"
              placeholder="Search"
              aria-label="Search"
              onClick={handleSearchClick}
            />
            <CiSearch className="text-color-brown" size={30}></CiSearch>
          </form>
          <div onClick={handleFilterClick} className='border rounded-5 ms-3 mt-1 d-flex align-items-center' style={{height:6+"vh"}}>
          <p className='m-0  ms-3'>Filter</p>
          <img src={filterbtn} alt="" style={{width:22+"px",height:22+"px"}} className='m-2 me-3'/>
          </div>
          </div>
         
          <div className="searchsuggest d-flex align-items-center mt-4">
            <p className="m-0 text-secondary"> Popular : </p>
            <div className="">
            <Link to="/searches-divorce" className="text-decoration-none"> <span className=" ms-3 text-secondary  rounded-pill border border-1 border-secondary p-2">
                Divorce Lawyer
              </span></Link>
              <span className="ms-3  text-secondary  rounded-pill border border-1 border-secondary p-2">Notaries</span>
              <span className="ms-3 text-secondary  rounded-pill border border-1 border-secondary p-2">
                Consultant
              </span>
            </div>
          </div>
          <div className="item-grid d-flex justify-content-between flex-wrap mt-5 row-gap-4">
            <div className="card border-0 w-45">
              <div className="row d-flex justify-content-between align-middle ">
                <div className="col-md-2 p-0">
                  <img src={convico}  className="w-85" alt="..." />
                </div>
                <div className="col ">
                  <div className="card-body p-0">
                    <h5 className="card-title">Legal</h5>
                    <p className="card-text text-secondary">
                      Find the right Legal service for every price point. No
                      hourly rates,
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card border-0 w-45">
              <div className="row d-flex justify-content-between align-middle ">
                <div className="col-md-2 p-0">
                  <img src={expertico} className="w-85" alt="..." />
                </div>
                <div className="col ">
                  <div className="card-body p-0">
                    <h5 className="card-title">Expertise</h5>
                    <p className="card-text  text-secondary">
                      We partner with experienced legal service providers who
                      are experts in their fields.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card border-0  w-45">
              <div className="row d-flex justify-content-between align-middle ">
                <div className="col-md-2 p-0">
                  <img src={transpico} className="w-85" alt="..." />
                </div>
                <div className="col ">
                  <div className="card-body p-0">
                    <h5 className="card-title">Transparency</h5>
                    <p className="card-text  text-secondary">
                      Our platform ensures clear pricing, reviews, and ratings,
                      so you can make informed decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card border-0 w-45">
              <div className="row d-flex justify-content-between align-middle ">
                <div className="col-md-2 p-0">
                  <img src={legalico} className="w-85" alt="..." />
                </div>
                <div className="col ">
                  <div className="card-body p-0">
                    <h5 className="card-title">Convenience</h5>
                    <p className="card-text  text-secondary">
                      Finding the right expert and scheduling consultations is
                      now quick and straightforward.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <img className="w-100" src={loj} alt="" />
        </div>
      </div>
    </div>


    <SearchSugg isOpen={isSearchOpen} onClose={handleSearchClose} topPos = "4.2"></SearchSugg>
    <SearchFill isOpen={isFillOpen} onClose={handleFilterClose} topPos="4.4"></SearchFill>
</>
  );
};

export default Herosection;
