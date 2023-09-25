import React from "react";
import lawyer3 from "../../page 1 design images/lawyer3.jpeg";
import StarFill from "../../page 1 design images/icons8-star-50.png";
import StarNoFill from "../../page 1 design images/icons8-rating-100.png";
import pvads from '../../page 1 design images/pvadscpy.jpeg'
import verifico from '../../page 1 design images/icons8-verified-50.png'
import locoico from '../../page 1 design images/icons8-location-50.png'
import blstar from '../../page 1 design images/icons8-rating-100.png'
import flstar from '../../page 1 design images/icons8-star-50.png'
// import lawyer1 from '../../page 1 design images/lawyer1.jpeg'
// import lawyer2 from '../../page 1 design images/lawyer2.jpeg'
// import lawyer3 from '../../page 1 design images/lawyer3.jpeg'

const HeroSection = () => {
  return (
    <>
    <div className="Advocate container-l mb-5 ">
      <h1 className="display-3 text-center"> Profile Page </h1>
      <div className="container text-center mt-5 d-flex gap-5">
        <div className="w-25 d-flex flex-column align-items-center justify-content-center gap-3">
          <div className="profile-img w-100 p-3 border rounded border-secondary shadow">
            <img src={lawyer3} alt="Profile" />
          </div>
          <div className="Verify border border-secondary rounded w-100 pt-2 pb-1 px-3">
            ✅Verified
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center">
          <div className="d-flex justify-content-between align-items-center">
            <div className="Advocate-details d-flex flex-column align-items-start">
              <h3 className="mb-0">Mr. Rajesh</h3>
              <div className="d-flex">
                <img src={StarFill} alt="Star" />
                <img src={StarFill} alt="Star" />
                <img src={StarFill} alt="Star" />
                <img src={StarFill} alt="Star" />
                <img src={StarNoFill} alt="Star" />
                <p className="ms-2 mb-0">4.6 | 100+ user ratings</p>
              </div>
            </div>
            <div className="Advocate-button w-25">
              <button type="button" className="btn btn-outline-primary">
                Contact Now
              </button>
            </div>
          </div>
          <hr></hr>
          <div className="container text-center">
            <div className="row row-cols-1 gap-3">
              <div className="d-flex col ps-0 align-items-center">
                <img />
                <h6 className="mb-0">Location :</h6>
                <p className="ms-1 mb-0">Kailash Hills, Delhi</p>
              </div>
              <div className="d-flex col ps-0 align-items-center">
                <img />
                <h6 className="mb-0">Languages :</h6>
                <p className="ms-1 mb-0">English, Hindi</p>
              </div>
              <div className="d-flex col ps-0 align-items-center">
                <img />
                <h6 className="mb-0">Experience :</h6>
                <p className="ms-1 mb-0">16 years</p>
              </div>
              <div className="d-flex col ps-0 align-items-center">
                <img />
                <h6 className="mb-0">Practice areas :</h6>
                <p className="ms-1 mb-0">
                  Arbitration, Cheque Bounce, Child Custody, Court Marriage,
                </p>
              </div>
            </div>
          </div>
          <hr></hr>
        </div>
      </div>
      <div className="container d-flex flex-column justify-content-center mt-4">
        <p>
          Mr. Rajesh, Advocate, completed his law in the year 2001 and has been
          providing services in various fields of law like Arbitration, Cheque
          Bounce, Child Custody, Court Marriage,Civil Cases etc. He is a
          dedicated and experienced attorney with a passion for advocating on
          behalf of his clients. With 12 years of legal practice, he has
          successfully represented individuals and businesses in a wide range of
          legal matters. He has completed his BA.LLB(Hons) from Jamia Millia
          Islamia and has been practicing and handling cases independently and
          provides legal consultancy and advisory services.
        </p>
        <p>
          He believe in providing his clients with the highest level of legal
          representation by combining his knowledge and experience with a
          personalized approach. He take the time to understand the unique
          circumstances and goals of each client, ensuring that he can develop
          tailored strategies to address their legal needs. His commitment to
          open communication and transparency is the foundation of his practice.
        </p>
        <p>
          He is available to assist you with your legal needs and can schedule
          consultations at your convenience. Don't hesitate to reach out to
          discuss your case or legal concerns.His commitment to providing
          personalized, client-focused legal solutions sets him apart in the
          field.
        </p>
      </div>
      <div className="container d-flex justify-content-between mt-5">
        <div>
          <h4>Court</h4>
        </div>
        <div className="w-75">
          <p>
            Central Administrative Tribunal (CAT) Delhi, Delhi High Court,
            District Court, Dwarka, District Court, Faridabad, District Court,
            Gautambuddha Nagar, District Court, Ghaziabad, District Court,
            Gurgaon, District Court, Karkardooma , District Court, Patiala
            House, District Court, Rohini, District Court, Saket, District
            Court, Tis Hazari, Supreme Court Of India
          </p>
        </div>
      </div>
    </div>

    <div className="container mt-5">
    <div class="container ">
    <div class="row align-items-start">
      <div class="col-3">
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
                    <h4 className="card-title">Criminal Lawyer</h4>
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
      </div>
      <div class="col-5">
        One of three columns
      </div>
      
    </div>
  </div>
    </div>

    </>
  );
};

export default HeroSection;
