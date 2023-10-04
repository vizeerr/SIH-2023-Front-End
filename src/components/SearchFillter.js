import React from 'react'
import { Link} from "react-router-dom";
import flstar from '../page 1 design images/icons8-star-50.png'

const SearchFillter = ({ isOpen, onClose,topPos }) => {
    const handleClose = ()=>{
        onClose()
      }
      
  return (
    <div className={`position-absolute z-3 container w-100 bg-transparent ${isOpen ? "d-flex" : "d-none"}`} onClick={handleClose} style={{top: topPos+"%",
        left: 4+"%",height:30+"vh"}}>
    <div >
        <div class="container bg-white rounded-3 shadow border" style={{width:70+"vw",height:52+"VH"}}>
        <div class="row">
        <p className='fs-5 mt-3'>Filter </p>
        <hr />
          <div class="col" style={{height:37+"vh"}}>
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
          </div>
          <div class="col" style={{height:37+"vh",overflowY:"scroll"}}>
          <div class="card border-none"  >
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
          </div>
          <div class="col" style={{height:37+"vh",overflowY:"scroll"}}>
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
          </div>
          
          <div class="col" style={{height:37+"vh" }}>
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
          </div>
          
        </div>
        </div>
    </div>
    </div>
  )
}

export default SearchFillter
