import React, { useState } from 'react';
import { Link } from "react-router-dom";

const VerifComponent = () => {
  const [selectedService, setSelectedService] = useState('');
  const [nextbtn, setnextbtn] = useState(false);
  const handleNext = (event) =>{
    event.preventDefault()
    setnextbtn(true)
  }
  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  return (
    <>
    <div className={`container-l position-relative mt-5 pt-5 w-100 h-100 justify-content-center align-items-center  ${nextbtn ? "d-none" :"d-flex"} `}>
      <div className="loginonpage container p-0 m-0 w-75 overflow-hidden d-flex flex-nowrap ">
        <div className="row w-100 ">
          <div className="col ">
            <div className="container-l ps-3 position-relative">
              <div>
                <h1 className="display-4 mt-2"> Fill Details</h1>

                <form className="mt-3 mb-3 pe-5 w-50 ">
                  <div className="mb-3">
                    <label for="fullname" className="form-label">
                      Full Name
                    </label>
                    <input
                      placeholder='"Your Name"'
                      type="text"
                      className="form-control"
                      id="fullname"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="fullname" className="form-label">
                      Email Address
                    </label>
                    <input
                      placeholder='"yourname@gmail.com"'
                      type="text"
                      className="form-control"
                      id="fullname"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="email" className="form-label">
                      Phone Number
                    </label>
                    <input
                      placeholder="+91"
                      type="email"
                      className="form-control"
                      id="email"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="address" className="form-label">
                      Office Address
                    </label>
                    <input
                      placeholder='Office Address'
                      type="text"
                      className="form-control"
                      id="address"
                    />
                  </div>
                  <label for="areachoice" className="form-label mb-0">
                      Area Of Services
                    </label>
                  <select
                    class="form-select mt-3 mb-3 w-75 rounded-5"
                    aria-label="Select Service"
                    value={selectedService}
                    onChange={handleServiceChange}
                    id= "areachoice"
                  >
                    <option value="" disabled>Select Service</option>
                    <option value="Notaries">Notaries</option>
                    <option value="Law Firm">Law Firm</option>
                    <option value="Solo Practitioners">Solo Practitioners</option>
                    <option value="Legal Consults">Legal Consults</option>
                    <option value="Document Prepration Services">Document Prepration Services</option>
                    <option value="Expert Witness">Expert Witness</option>
                    <option value="Legal Process Servers">Legal Process Servers</option>
                    <option value="Legal Funding Companies">Legal Funding Companies</option>
                  </select>
                  {/* GST Number input */}
                  {selectedService === 'Law Firm'&&(
                    <>
                    <div className="mb-3">
                      <label for="gstin" className="form-label">
                        GST Number
                      </label>
                      <input
                        placeholder='Your GST Number'
                        type="text"
                        className="form-control"
                        id="gstin"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="certif" className="form-label">
                        Certificate
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="certif"
                      />
                    </div>
                    </>
                  )}
                  
                  {selectedService === 'Notaries' &&(
                    <>
                    <div className="mb-3">
                      <label for="certif" className="form-label">
                        Certificate
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="certif"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="gstin" className="form-label">
                        GST Number
                      </label>
                      <input
                        placeholder='Your GST Number'
                        type="text"
                        className="form-control"
                        id="gstin"
                      />
                    </div>
                    </>
                  )}
                  {selectedService === 'Solo Practitioners' &&(
                    <>
                    <div className="mb-3">
                      <label for="certif" className="form-label">
                        Certificate
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="certif"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="barno" className="form-label">
                        State / Bar Number
                      </label>
                      <input
                        type="text"
                        placeholder='Bar Counsil No '
                        className="form-control"
                        id="barno"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="chamno" className="form-label">
                        Chamber Number
                      </label>
                      <input
                        type="text"
                        placeholder='Chamber No '
                        className="form-control"
                        id="chano"
                      />
                    </div>
                    
                    <label for="areafields" className="form-label mb-0">
                      Area Of Fields
                    </label>

                    <select
                        class="form-select mt-3 mb-3 w-75 rounded-5"
                        aria-label="Select Service"
                        id = "areafields"
                    >
                        <option value="" Selected>Area Of Fields</option>
                        <option value="Notaries">Criminal Lawyer</option>
                        <option value="Law Firm">Real Estate</option>
                        <option value="Solo Practitioners">Corporate Law</option>
                        <option value="Legal Consults">Family Law</option>
                        <option value="Document Prepration Services">Domestic Violence</option>
                        <option value="Expert Witness">Family Violence</option>
                        <option value="Legal Process Servers">Insurance Law</option>
                        <option value="Legal Funding Companies">Health Care Law</option>
                    </select>

                    </>

                  )}
                  <button
                    type="submit"
                    className="btn btn-brown"
                    style={{ width: '35%' }}
                    onClick={handleNext}
                  >
                    Next
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className={`container ${nextbtn ? "d-block":"d-none" } mt-5 pt-5 pb-5 mb-5`}>
        <h2 className='display-4 text-center'> We Will Let You know Through Mail <br></br> When You Get Verified ✅</h2>
        <p className='text-center fs-5 mt-4 lighttext'> Check Your Mail-Box Regularly <Link to="/"> Go Back</Link></p>
        
    </div>
    </>
  );
};

export default VerifComponent;
