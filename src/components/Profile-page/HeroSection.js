import React from "react";
import lawyer3 from "../../page 1 design images/lawyer3.jpeg";
import StarFill from "../../page 1 design images/icons8-star-50.png";
import StarNoFill from "../../page 1 design images/icons8-rating-100.png";

import Location from "../../page 1 design images/icons8-location-48.png";
import Language from "../../page 1 design images/icons8-language-48.png";
import Experience from "../../page 1 design images/icons8-briefcase-48.png";
import Practice from "../../page 1 design images/icons8-law-48.png";

import pvads from '../../page 1 design images/pvadscpy.jpeg'
import verifico from '../../page 1 design images/icons8-verified-50.png'
import locoico from '../../page 1 design images/icons8-location-50.png'
import blstar from '../../page 1 design images/icons8-rating-100.png'
import flstar from '../../page 1 design images/icons8-star-50.png'
// import lawyer1 from '../../page 1 design images/lawyer1.jpeg'
// import lawyer2 from '../../page 1 design images/lawyer2.jpeg'
// import lawyer3 from '../../page 1 design images/lawyer3.jpeg'

import Badges1 from "../../page 1 design images/icons8-samurai-helmet-48.png";
import Badges2 from "../../page 1 design images/icons8-samurai-64.png";



const HeroSection = () => {
  return (
    <>
    {/* <div className="Advocate container-l mb-5 ">
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
                <img className="Profile-img" src={Location} alt="Location" />
                <h6 className="mb-0">Location :</h6>
                <p className="ms-1 mb-0">Kailash Hills, Delhi</p>
              </div>
              <div className="d-flex col ps-0 align-items-center">
                <img className="Profile-img" src={Language} alt="Language" />
                <h6 className="mb-0">Languages :</h6>
                <p className="ms-1 mb-0">English, Hindi</p>
              </div>
              <div className="d-flex col ps-0 align-items-center">
                <img
                  className="Profile-img"
                  src={Experience}
                  alt="Experience"
                />
                <h6 className="mb-0">Experience :</h6>
                <p className="ms-1 mb-0">16 years</p>
              </div>
              <div className="d-flex col ps-0 align-items-center">
                <img
                  className="Profile-img"
                  src={Practice}
                  alt="Practice areas"
                />
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
    </div> */}

    <div className="container-l mt-5 mb-5 pb-5 pt-5 lightbackground">
          <div class="container">
        <div class="row g-3">
          <div class="col-3 ">
          <div className="card border-none p-2 rounded-4" >
                <img src={pvads} className="card-img-top rounded-4 shadow border" alt="..."/>
                <div className="card-body">
                <div className='d-flex m-0 mb-2 justify-content-between align-items-center'>
                  <div className='d-flex align-items-center'>
                      <h4 className='m-0'>Adv Shami Khan</h4>
                      <img className = 'verifico ms-2 m-0 ' src={verifico}  alt=""/>
                  </div>
                  <div>
                  {/* <p className='m-0 lighttext sm-13'>Level 3+</p> */}
                  </div>
                </div>
                    {/* <h4 className="card-title">Criminal Lawyer</h4> */}
                    <div className='locprovider d-flex w-100 align-item-center '>
                      <img src={locoico} className = 'verifico ' alt="" />
                      <p className='d-flex sm-13 lighttext  ms-2 '> High Court, Delhi </p>
                    </div>
                    <p className="card-text lighttext ">20+ Yr of Experience Never Lost Any Case till know. Flexible Charge free of cost consulting</p>
                    {/* <Link to="/"> */}
                    <div className='d-flex justify-content-between w-100'>
                      <button type="button " className="btn btn-brown w-50 sm-13 ">Contact Me</button>
                      {/* <div className='d-flex flex-wrap justify-content-end'>
                        <div className='d-flex flex-nowrap justify-content-end'>
                          <img src={flstar} alt="" className='verifico'/>
                          <img src={flstar} alt="" className='verifico'/>
                          <img src={flstar} alt="" className='verifico'/>
                          <img src={flstar} alt="" className='verifico'/>
                          <img src={blstar} alt="" className='verifico'/>
                        </div>
                        <p className=' sm-9 mt-2 lighttext '>4.0 | 30+ User Rating</p>
                      </div> */}
                    </div>
                    {/* </Link> */}
                </div>
            </div>
          </div>
          <div class="col-9 rounded-4">
          <div class="card  mb-3 border-none" >
            <div class="card-header">About</div>
            <div class="card-body">
              <h2 class="card-title">Criminal Lawyer</h2>
              <p class="card-text fs-5 Lighttext">I believe in providing my clients with the highest level of legal
          representation by combining my knowledge and experience with a
          personalized approach. I take the time to understand the unique
          circumstances and goals of each client, ensuring that I can develop
          tailored strategies to address their legal needs. My commitment to
          open communication and transparency is the foundation of my  practice.</p>
              <ul class="list-group">
                <li class="list-group-item lighttext fs-5">Level <b style={{color:"#000"}}>3+ 🔥</b></li>
                <li class="list-group-item lighttext fs-5">EXP <b style={{color:"#000"}}>5243 🥇</b></li>
                <li class="list-group-item lighttext fs-5">Ratings <b style={{color:"#000"}}>4.5+ ⭐</b></li>
              </ul>
            </div>
            
          </div>
          <div class="card  mb-3 border-none" >
            <div class="card-header">Achievements</div>
            <div class="card-body">
            <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <img src={Badges1} alt="Badges" />
              <p className="mb-0">Beginner</p>
            </div>
            
            <div className="d-flex align-items-center gap-2">
              <img src={Badges1} alt="Badges" />
              <p className="mb-0">Intermediate</p>
            </div>
            <div className="d-flex align-items-center gap-2">
              <img src={Badges2} alt="Badges" />
              <p className="mb-0">Expert</p>
            </div>
            <div className="d-flex align-items-center gap-2">
              <img src={Badges2} alt="Badges" />
              <p className="mb-0">Professional</p>
            </div>
          </div>
            </div>
            
          </div>
          </div>
          <div class="col-6 ">
          <div class="card  mb-3  p-2 border" style={{background:"#fff"}} >
            <div class="card-header">Education</div>
            <table class="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">Sno.</th>
                  <th scope="col">Institute/ Univ</th>
                  <th scope="col">Degree</th>
                  <th scope="col">Year</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Sachdeva College Delhi</td>
                  <td>Bcom</td>
                  <td>2011</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Delhi University</td>
                  <td>LLB</td>
                  <td>2014</td>
                </tr>
              </tbody>
            </table>
            
          </div>
          </div>
          <div class="col-6 ">
          <div class="card  mb-3  p-2 border" style={{background:"#fff"}} >
            <div class="card-header">Work Experience</div>
            <table class="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">Sno.</th>
                  <th scope="col">Work Field</th>
                  <th scope="col">Year</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>District Court Rohini</td>
                  <td>2013</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>High Court Delhi</td>
                  <td>2018</td>
                </tr>
              </tbody>
            </table>
            
          </div>
          </div>

          
          <div class="col-4 ">
          <div class="card  mb-3  p-2 border" style={{background:"#fff"}} >
          <div class="card-body">
              <h3 class="card-title">Official Address</h3>
              <p class="card-text Lighttext ">Office Timing : 9:00 Am to 6:00 Pm | Mon to Fri</p>
              <p className="fs-5">
                E Block-5 Pitampura Aggarwal Apartment, Near NSP, Delhi 
              </p>
            </div>
            
            
          </div>
          </div>
          
          <div class="col-4 ">
          <div class="card  mb-3  p-2 border" style={{background:"#fff"}} >
          <div class="card-body">
              <h3 class="card-title">Area of Expertiese</h3>
              <span class="badge rounded-pill text-bg-primary p-2 ps-3 pe-3 me-3 mt-2">Criminal Lawyer</span>
              <span class="badge rounded-pill text-bg-primary p-2 ps-3 pe-3 me-3 mt-2">Legal Consult</span>
              
            </div>
            
            
          </div>
          </div>
          <div class="col-2">
          <div class="card  mb-3  p-2 border" style={{background:"#fff"}} >
          <div class="card-body">
              <h3 class="card-title">Socials</h3>
              <p className="fs-6"><a href="">Linkedin</a></p>
              <p className="fs-6 m-0"><a href="">Facebook</a></p>
            </div>
            
            
          </div>
          </div>
         

        </div>
      </div>
    </div>

   

    </>
  );
};

export default HeroSection;
