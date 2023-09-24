import React,{useState} from "react";
import loj from "../../page 1 design images/loj.png";
import searchbtn from "../../page 1 design images/searchbtn.png";
import legalico from "../../page 1 design images/legalico.png";
import transpico from "../../page 1 design images/transpico.png";
import convico from "../../page 1 design images/convico.png";
import expertico from "../../page 1 design images/expertico.png";
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
    <div className="herosection container-fluid ">
      <div className="hero d-flex justify-content-between mt-5">
        <div className="leftarea  ms-5">
          <h1 className="display-1 head-land ">High Quality Legal Services </h1>
          <p className="fs-3 fw-light">
            Finding a right Legal Service Provider can be difficult but not
            anymore
          </p>
          <form
            className="w-75 align-items-center d-flex search rounded-pill mt-4 mb-3"
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
         
          <div className="searchsuggest d-flex align-items-center mt-4">
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
          <div className=" showtabs d-flex justify-content-between flex-wrap mt-3">
            <div className="card border-none mt-4">
              <div className="row d-flex justify-content-between align-middle ">
                <div className="col-md-2 p-0">
                  <img src={convico} alt="..." />
                </div>
                <div className="col ">
                  <div className="card-body p-0">
                    <h5 className="card-title">Legal</h5>
                    <p className="card-text lighttext">
                      Find the right Legal service for every price point. No
                      hourly rates,
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card border-none mt-4">
              <div className="row d-flex justify-content-between align-middle ">
                <div className="col-md-2 p-0">
                  <img src={expertico} alt="..." />
                </div>
                <div className="col ">
                  <div className="card-body p-0">
                    <h5 className="card-title">Expertise</h5>
                    <p className="card-text  lighttext">
                      We partner with experienced legal service providers who
                      are experts in their fields.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card border-none mt-4">
              <div className="row d-flex justify-content-between align-middle ">
                <div className="col-md-2 p-0">
                  <img src={transpico} alt="..." />
                </div>
                <div className="col ">
                  <div className="card-body p-0">
                    <h5 className="card-title">Transparency</h5>
                    <p className="card-text  lighttext">
                      Our platform ensures clear pricing, reviews, and ratings,
                      so you can make informed decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card border-none mt-4">
              <div className="row d-flex justify-content-between align-middle ">
                <div className="col-md-2 p-0">
                  <img src={legalico} alt="..." />
                </div>
                <div className="col ">
                  <div className="card-body p-0">
                    <h5 className="card-title">Convenience</h5>
                    <p className="card-text  lighttext">
                      Finding the right expert and scheduling consultations is
                      now quick and straightforward.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rightarea">
          <img className="rounded float-end" src={loj} alt="" />
        </div>
      </div>
    </div>
    <SearchSugg isOpen={isSearchOpen} onClose={handleSearchClose}></SearchSugg>
</>
  );
};

export default Herosection;
