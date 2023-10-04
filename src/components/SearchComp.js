import React,{useState} from 'react'
import pvads from '../page 1 design images/pvadscpy.jpeg'
import verifico from '../page 1 design images/icons8-verified-50.png'
import locoico from '../page 1 design images/icons8-location-50.png'
import blstar from '../page 1 design images/icons8-rating-100.png'
import flstar from '../page 1 design images/icons8-star-50.png'

import lawyer1 from '../page 1 design images/lawyer1.jpeg'
import lawyer2 from '../page 1 design images/lawyer2.jpeg'
import lawyer3 from '../page 1 design images/lawyer3.jpeg'

import searchbtn from "../page 1 design images/searchbtn.png";
import filterbtn from "../page 1 design images/icons8-filter-100.png"
import {Link} from "react-router-dom"

const Searchdata = ({sdata}) => {
  const [isSearchOpen, setisSearchOpen] = useState(false);
  const handleSearchClick = () => {
    setisSearchOpen(true);
  };

// const handleSearchClose = () => {
//   setisSearchOpen(false);
// };  
  return (
    <div className='container-l mt-5 pt-4'>
        

        <div className="container-fluid">
        
          <div class="row">
            <div class="col-2 m-3  border rounded-3 p-1">
            <h5 class="card-title mb-4 fs-4 m-3">Filters</h5>
            <hr />

            {/* style={{height:220+"px", overflowY:"scroll"}} */}
            <div class="card border-none"  >
              <div class="card-body">
                <h5 class="card-title mb-4">State</h5>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="1" id="delhiCheckbox"/>
                  <label class="form-check-label" for="delhiCheckbox">Delhi</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="2" id="mumbaiCheckbox"/>
                  <label class="form-check-label" for="mumbaiCheckbox">Mumbai</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="3" id="gujaratCheckbox"/>
                  <label class="form-check-label" for="gujaratCheckbox">Gujarat</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="4" id="kerlaCheckbox"/>
                  <label class="form-check-label" for="kerlaCheckbox">Kerla</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="5" id="himachalCheckbox"/>
                  <label class="form-check-label" for="himachalCheckbox">Himachal Pradesh</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="6" id="rajasthanCheckbox"/>
                  <label class="form-check-label" for="rajasthanCheckbox">Rajasthan</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="7" id="maharashtraCheckbox"/>
                  <label class="form-check-label" for="maharashtraCheckbox">Maharashtra</label>
                </div>

              </div>
              <hr />
            </div>
            
           
            <div class="card border-none" >
              <div class="card-body">
                <h5 class="card-title mb-4">Legal Services</h5>
                <div className="form-check">
        <input className="form-check-input" type="checkbox" id="lawFirms" value="Law Firms" />
        <label className="form-check-label" htmlFor="lawFirms">Law Firms</label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="soloPractitioners" value="Solo Practitioners" />
        <label className="form-check-label" htmlFor="soloPractitioners">Solo Practitioners</label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="legalConsultancy" value="Legal Consultancy" />
        <label className="form-check-label" htmlFor="legalConsultancy">Legal Consultancy</label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="mediators" value="Mediators" />
        <label className="form-check-label" htmlFor="mediators">Mediators</label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="arbitrators" value="Arbitrators" />
        <label className="form-check-label" htmlFor="arbitrators">Arbitrators</label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="notaries" value="Notaries" />
        <label className="form-check-label" htmlFor="notaries">Notaries</label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="documentPreparationServices" value="Document Preparation Services" />
        <label className="form-check-label" htmlFor="documentPreparationServices">Document Preparation Services</label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="expertWitnesses" value="Expert Witnesses" />
        <label className="form-check-label" htmlFor="expertWitnesses">Expert Witnesses</label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="legalProcessServers" value="Legal Process Servers" />
        <label className="form-check-label" htmlFor="legalProcessServers">Legal Process Servers</label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="legalFundingCompanies" value="Legal Funding Companies" />
        <label className="form-check-label" htmlFor="legalFundingCompanies">Legal Funding Companies</label>
      </div>
      
              </div>
              <hr />
            </div>
            
            

            <div class="card border-none">
  <div class="card-body">
    <h5 class="card-title mb-4">Lawyers</h5>
    
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="criminalDefenseAttorney" value="Criminal Defense Attorney" />
      <label class="form-check-label" for="criminalDefenseAttorney">Criminal Defense Attorney</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="civilLitigationAttorney" value="Civil Litigation Attorney" />
      <label class="form-check-label" for="civilLitigationAttorney">Civil Litigation Attorney</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="personalInjuryAttorney" value="Personal Injury Attorney" />
      <label class="form-check-label" for="personalInjuryAttorney">Personal Injury Attorney</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="familyLawAttorney" value="Family Law Attorney" />
      <label class="form-check-label" for="familyLawAttorney">Family Law Attorney</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="estatePlanningAttorney" value="Estate Planning Attorney" />
      <label class="form-check-label" for="estatePlanningAttorney">Estate Planning Attorney</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="realEstateAttorney" value="Real Estate Attorney" />
      <label class="form-check-label" for="realEstateAttorney">Real Estate Attorney</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="corporateAttorney" value="Corporate Attorney" />
      <label class="form-check-label" for="corporateAttorney">Corporate Attorney</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="intellectualPropertyAttorney" value="Intellectual Property Attorney" />
      <label class="form-check-label" for="intellectualPropertyAttorney">Intellectual Property Attorney</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="bankruptcyAttorney" value="Bankruptcy Attorney" />
      <label class="form-check-label" for="bankruptcyAttorney">Bankruptcy Attorney</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="immigrationAttorney" value="Immigration Attorney" />
      <label class="form-check-label" for="immigrationAttorney">Immigration Attorney</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="taxAttorney" value="Tax Attorney" />
      <label class="form-check-label" for="taxAttorney">Tax Attorney</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="environmentalAttorney" value="Environmental Attorney" />
      <label class="form-check-label" for="environmentalAttorney">Environmental Attorney</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="employmentAttorney" value="Employment Attorney" />
      <label class="form-check-label" for="employmentAttorney">Employment Attorney</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="healthcareAttorney" value="Healthcare Attorney" />
      <label class="form-check-label" for="healthcareAttorney">Healthcare Attorney</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="immigrationAttorney2" value="Immigration Attorney" />
      <label class="form-check-label" for="immigrationAttorney2">Entertainment Attorney</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="criminalProsecutor" value="Criminal Prosecutor" />
      <label class="form-check-label" for="criminalProsecutor">Criminal Prosecutor</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="publicInterestAttorney" value="Public Interest Attorney" />
      <label class="form-check-label" for="publicInterestAttorney">Public Interest Attorney</label>
    </div>
  </div>
  <hr />
              </div>

            
            <div class="card border-none" >
              <div class="card-body">
                <h5 class="card-title mb-4">Customer Rating</h5>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="5" id="star5"/>
                  <label class="form-check-label" for="star5">5 <img src={flstar} alt="" className='verifico'/></label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="4" id="star4"/>
                  <label class="form-check-label" for="star4">4 <img src={flstar} alt="" className='verifico'/></label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="3" id="star3"/>
                  <label class="form-check-label" for="star3">3 <img src={flstar} alt="" className='verifico'/></label>
                </div>

              </div>

            </div>
           
           {/* <div class="card border-none" >
              <div class="card-body">
                <h5 class="card-title mb-4">Field of Areas:</h5>
                <div className="form-check">
        <input className="form-check-input" type="checkbox" id="realEstateArea" value="Real Estate" />
        <label className="form-check-label" htmlFor="realEstateArea">Real Estate</label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="corporateLawArea" value="Corporate Law" />
        <label className="form-check-label" htmlFor="corporateLawArea">Corporate Law</label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="familyLawArea" value="Family Law" />
        <label className="form-check-label" htmlFor="familyLawArea">Family Law</label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="domesticViolenceArea" value="Domestic Violence" />
        <label className="form-check-label" htmlFor="domesticViolenceArea">Domestic Violence</label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="familyViolenceArea" value="Family Violence" />
        <label className="form-check-label" htmlFor="familyViolenceArea">Family Violence</label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="insuranceLawArea" value="Insurance Law" />
        <label className="form-check-label" htmlFor="insuranceLawArea">Insurance Law</label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="healthCareLawArea" value="Health Care Law" />
        <label className="form-check-label" htmlFor="healthCareLawArea">Health Care Law</label>
      </div>
      
              </div>
            <hr />
            </div> */}
            
            
            
            </div>
            <div class="col">
            <div className='w-100 text-center mt-5'>
            <h1 className="display-6"> Search Related to {sdata}</h1>
            <div className='d-flex justify-content-center align-items-center'>
              
            <form
            className="align-items-center mt-5 mb-5 d-flex search rounded-pill border justify-content-between"
            role="search"
            style={{width:30+"vw",padding:"2px 0"}}
          >
            <input
              className="form-control m-0 border-none"
              type="search"
              placeholder="Try Search  'Legal Consultant' "
              aria-label="Search"
              onClick={handleSearchClick}
            />
            <img className="searchlog" src={searchbtn} alt="" />
          </form>
          
          </div>

        </div>
            <div className="container mt-5">
              <div class="row align-items-start">
                <div class="col-3  mb-5"><Link to="/profile" style={{textDecoration:"none", color:"#000"}}>
                <div className="card border-none" >
                <img src={pvads} className="card-img-top" alt="..."/>
                <div className="card-body">
                <div className='d-flex m-0 mb-2 justify-content-between align-items-center'>
                  <div className='d-flex align-items-center'>
                      <p className='m-0 lighttext sm-13'>Adv Shami Khan </p>
                      <img className = 'verifico ms-2 m-0' src={verifico}  alt=""/>
                  </div>
                  <div>
                  <p className='m-0 lighttext sm-13'>Level 3+</p>
                  </div>
                </div>
                    <h4 className="card-title mb-4"> Criminal Lawyer</h4>
                    <div className='locprovider d-flex w-100 align-item-center '>
                      <img src={locoico} className = 'verifico' alt="" />
                      <p className='d-flex sm-13 lighttext  ms-2 '> High Court, Delhi </p>
                    </div>
                    <p className="card-text lighttext ">20+ Yr of Experience.Never Lost Any Case till know and Flexible Charge.</p>
                    {/* <Link to="/"> */}
                    <div className='d-flex justify-content-between w-100'>
                      <button type="button " className="btn btn-brown w-75 sm-13 ">Contact Me</button>
                      <div className='d-flex flex-wrap justify-content-end'>
                        <div className='d-flex flex-nowrap justify-content-end'>
                          <img src={flstar} alt="" className='verifico'/>
                          <img src={flstar} alt="" className='verifico'/>
                          <img src={flstar} alt="" className='verifico'/>
                          <img src={flstar} alt="" className='verifico'/>
                          <img src={blstar} alt="" className='verifico'/>
                        </div>
                        <p className=' sm-9 mt-2 lighttext '>4.0 | 30+ User Rating</p>
                      </div>
                    </div>
                    {/* </Link> */}
                </div>
            </div>
                </Link></div>
                <div class="col-3  mb-5">
                <div className="card border-none" >
                <img src={lawyer1} className="card-img-top" alt="..."/>
                <div className="card-body">
                <div className='d-flex m-0 mb-2 justify-content-between align-items-center'>
                  <div className='d-flex align-items-center'>
                      <p className='m-0 lighttext sm-13'>Adv Ravi Shastri</p>
                      <img className = 'verifico ms-2 m-0' src={verifico}  alt=""/>
                  </div>
                  <div>
                  <p className='m-0 lighttext sm-13'>Level 3+</p>
                  </div>
                </div>
                    <h4 className="card-title mb-4">Criminal Lawyer</h4>
                    <div className='locprovider d-flex w-100 align-item-center '>
                      <img src={locoico} className = 'verifico' alt="" />
                      <p className='d-flex sm-13 lighttext  ms-2 '> District Court, Delhi </p>
                    </div>
                    <p className="card-text lighttext ">15 Years Of Experience Never Last Any Case.</p>
                    {/* <Link to="/"> */}
                    <div className='d-flex justify-content-between w-100'>
                      <button type="button " className="btn btn-brown w-75 sm-13 ">Contact Me</button>
                      <div className='d-flex flex-wrap justify-content-end'>
                        <div className='d-flex flex-nowrap justify-content-end'>
                          <img src={flstar} alt="" className='verifico'/>
                          <img src={flstar} alt="" className='verifico'/>
                          <img src={flstar} alt="" className='verifico'/>
                          <img src={blstar} alt="" className='verifico'/>
                          <img src={blstar} alt="" className='verifico'/>
                        </div>
                        <p className=' sm-9 mt-2 lighttext '>3.0 | 18+ User Rating</p>
                      </div>
                    </div>
                    {/* </Link> */}
                </div>
            </div>
                </div>
                <div class="col-3  mb-5">
                <div className="card border-none" >
                <img src={lawyer3} className="card-img-top" alt="..."/>
                <div className="card-body">
                <div className='d-flex m-0 mb-2 justify-content-between align-items-center'>
                  <div className='d-flex align-items-center'>
                      <p className='m-0 lighttext sm-13'>Adv Rajan Yadav </p>
                      <img className = 'verifico ms-2 m-0' src={verifico}  alt=""/>
                  </div>
                  <div>
                  <p className='m-0 lighttext sm-13'>Level 2+</p>
                  </div>
                </div>
                    <h4 className="card-title mb-4">Criminal Lawyer</h4>
                    <div className='locprovider d-flex w-100 align-item-center '>
                      <img src={locoico} className = 'verifico' alt="" />
                      <p className='d-flex sm-13 lighttext  ms-2 '> Mumbai, Court </p>
                    </div>
                    <p className="card-text lighttext ">Flexible Charges No Extra Money Free Consultancy</p>
                    {/* <Link to="/"> */}
                    <div className='d-flex justify-content-between w-100'>
                      <button type="button " className="btn btn-brown w-75 sm-13 ">Contact Me</button>
                      <div className='d-flex flex-wrap justify-content-end'>
                        <div className='d-flex flex-nowrap justify-content-end'>
                          <img src={flstar} alt="" className='verifico'/>
                          <img src={flstar} alt="" className='verifico'/>
                          <img src={flstar} alt="" className='verifico'/>
                          <img src={blstar} alt="" className='verifico'/>
                          <img src={blstar} alt="" className='verifico'/>
                        </div>
                        <p className=' sm-9 mt-2 lighttext '>3.0 | 20+ User Rating</p>
                      </div>
                    </div>
                    {/* </Link> */}
                </div>
            </div>
                </div>
                <div class="col-3  mb-5">
                <div className="card border-none" >
                <img src={lawyer2} className="card-img-top" alt="..."/>
                <div className="card-body">
                <div className='d-flex m-0 mb-2 justify-content-between align-items-center'>
                  <div className='d-flex align-items-center'>
                      <p className='m-0 lighttext sm-13'>Adv Kumesh Jain </p>
                      <img className = 'verifico ms-2 m-0' src={verifico}  alt=""/>
                  </div>
                  <div>
                  <p className='m-0 lighttext sm-13'>Level 1+</p>
                  </div>
                </div>
                    <h4 className="card-title mb-4">Criminal Lawyer</h4>
                    <div className='locprovider d-flex w-100 align-item-center '>
                      <img src={locoico} className = 'verifico' alt="" />
                      <p className='d-flex sm-13 lighttext  ms-2 '> High Court, Gujrat </p>
                    </div>
                    <p className="card-text lighttext ">Working On Your Terms Free Consultancy</p>
                    {/* <Link to="/"> */}
                    <div className='d-flex justify-content-between w-100'>
                      <button type="button " className="btn btn-brown w-75 sm-13 ">Contact Me</button>
                      <div className='d-flex flex-wrap justify-content-end'>
                        <div className='d-flex flex-nowrap justify-content-end'>
                          <img src={flstar} alt="" className='verifico'/>
                          <img src={flstar} alt="" className='verifico'/>
                          <img src={blstar} alt="" className='verifico'/>
                          <img src={blstar} alt="" className='verifico'/>
                          <img src={blstar} alt="" className='verifico'/>
                        </div>
                        <p className=' sm-9 mt-2 lighttext '>2.0 | 10+ User Rating</p>
                      </div>
                    </div>
                    {/* </Link> */}
                </div>
            </div>
                </div>
                
              </div>
              <div className='w-100 text-center'>

              <button className='btn btn-brown '>More...</button>
              </div>
        </div>
            </div>
          </div>
        </div>
        
        

    </div>
  )
}

export default Searchdata
