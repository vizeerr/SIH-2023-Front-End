import React from 'react'
import pvads from '../../page 1 design images/pvadscpy.jpeg'
import verifico from '../../page 1 design images/icons8-verified-50.png'
import locoico from '../../page 1 design images/icons8-location-50.png'
import blstar from '../../page 1 design images/icons8-rating-100.png'
import flstar from '../../page 1 design images/icons8-star-50.png'
import lawyer1 from '../../page 1 design images/lawyer1.jpeg'
import lawyer2 from '../../page 1 design images/lawyer2.jpeg'
import lawyer3 from '../../page 1 design images/lawyer3.jpeg'
 import {Link} from "react-router-dom"

const ProviderSlider = ({headline}) => {
  return (
    <div className='container-l  mb-5 p-0 pt-5 pb-5'>
    <div className='w-100 text-center mt-5'>
        <h1 className="display-3 "> {headline}</h1>
        <button type="button" className="btn btn-brown float-end me-5"> View More</button>
    </div>
    
    <div id="providerslider" className=" carousel carousel-dark slide mt-5 w-100">
    
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#providerslider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#providerslider" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#providerslider" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="container carousel-inner carol-provid">
      <div className="carousel-item mb-5 active" data-bs-interval="10000">
        <div className="d-flex">
            <div className="card border-none" ><Link to="/profile" style={{textDecoration:"none", color:"#000"}}>
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
                     
                </div></Link>
            </div>
            <div className="card border-none" >
                <img src={lawyer2} className="card-img-top" alt="..."/>
                <div className="card-body">
                <div className='d-flex m-0 mb-2 justify-content-between align-items-center'>
                  <div className='d-flex align-items-center'>
                      <p className='m-0 lighttext sm-13'>Adv Ravi Sharma </p>
                      <img className = 'verifico ms-2 m-0' src={verifico}  alt=""/>
                  </div>
                  <div>
                  <p className='m-0 lighttext sm-13'>Level 2</p>
                  </div>
                </div>
                    <h4 className="card-title">Legal Consultancy</h4>
                    <div className='locprovider d-flex w-100 align-item-center '>
                      <img src={locoico} className = 'verifico' alt="" />
                      <p className='d-flex sm-13 lighttext  ms-2 '> District Court, Nanital </p>
                    </div>
                    <p className="card-text lighttext ">I will Consult you regarding any legal problem. 10+yr of experience and consults more than 1000+ clients</p>
                     
               <Link to='/profile2'>   <div className='d-flex justify-content-between w-100'>
                      <button type="button " className="btn btn-brown w-75 sm-13 ">Contact Me</button>
                      <div className='d-flex flex-wrap justify-content-end'>
                        <div className='d-flex flex-nowrap justify-content-end'>
                          <img src={flstar} alt="" className='verifico'/>
                          <img src={flstar} alt="" className='verifico'/>
                          <img src={flstar} alt="" className='verifico'/>
                          <img src={flstar} alt="" className='verifico'/>
                          <img src={blstar} alt="" className='verifico'/>
                        </div>
                        <p className=' sm-9 mt-2 lighttext '>3.0 | 15+ User Rating</p>
                      </div>
                    </div>
                     </Link>
                </div>
            </div>
            <div className="card border-none" >
                <img src={lawyer1} className="card-img-top" alt="..."/>
                <div className="card-body">
                <div className='d-flex m-0 mb-2 justify-content-between align-items-center'>
                  <div className='d-flex align-items-center'>
                      <p className='m-0 lighttext sm-13'>Adv Suksham  </p>
                      <img className = 'verifico ms-2 m-0' src={verifico}  alt=""/>
                  </div>
                  <div>
                  <p className='m-0 lighttext sm-13'>Level 3</p>
                  </div>
                </div>
                    <h4 className="card-title">Family Lawyer</h4>
                    <div className='locprovider d-flex w-100 align-item-center '>
                      <img src={locoico} className = 'verifico' alt="" />
                      <p className='d-flex sm-13 lighttext  ms-2 '> High Court, Delhi </p>
                    </div>
                    <p className="card-text lighttext ">5+ Yr of Experience Never Lost Any Case till now. Free of cost consulting</p>
                     <Link to="/profile3"> 
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
                     </Link> 
                </div>
            </div>
            <div className="card border-none" >
                <img src={lawyer3} className="card-img-top" alt="..."/>
                <div className="card-body">
                <div className='d-flex m-0 mb-2 justify-content-between align-items-center'>
                  <div className='d-flex align-items-center'>
                      <p className='m-0 lighttext sm-13'>Adv Rajesh</p>
                      <img className = 'verifico ms-2 m-0' src={verifico}  alt=""/>
                  </div>
                  <div>
                  <p className='m-0 lighttext sm-13'>Level 3+</p>
                  </div>
                </div>
                    <h4 className="card-title">Civil Lawyer</h4>
                    <div className='locprovider d-flex w-100 align-item-center '>
                      <img src={locoico} className = 'verifico' alt="" />
                      <p className='d-flex sm-13 lighttext  ms-2 '> High Court, Delhi </p>
                    </div>
                    <p className="card-text lighttext ">I help clients in resolving varying types of civil disputes in state court, federal court etc.</p>
                     <Link to="/profile"> 
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
                     </Link> 
                </div>
            </div>
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="2000">
        <div className="d-flex">
            <div className="card border-none" >
                <img src={pvads} className="card-img-top" alt="..."/>
                <div className="card-body">
                <div className='d-flex m-0 mb-2 justify-content-between align-items-center'>
                  <div className='d-flex align-items-center'>
                      <p className='m-0 lighttext sm-13'>Adv Shami Khan</p>
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
                    <p className="card-text lighttext ">20+ Yr of Experience Never Lost Any Case till know. Flexible Charge free of cost consulting</p>
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
            <div className="card border-none" >
                <img src={lawyer2} className="card-img-top" alt="..."/>
                <div className="card-body">
                <div className='d-flex m-0 mb-2 justify-content-between align-items-center'>
                  <div className='d-flex align-items-center'>
                      <p className='m-0 lighttext sm-13'>Adv Ravi Sharma </p>
                      <img className = 'verifico ms-2 m-0' src={verifico}  alt=""/>
                  </div>
                  <div>
                  <p className='m-0 lighttext sm-13'>Level 2</p>
                  </div>
                </div>
                    <h4 className="card-title">LegalConsultancy</h4>
                    <div className='locprovider d-flex w-100 align-item-center '>
                      <img src={locoico} className = 'verifico' alt="" />
                      <p className='d-flex sm-13 lighttext  ms-2 '> District Court, Nanital </p>
                    </div>
                    <p className="card-text lighttext ">I will Consult you regarding any legal problem. 10+yr of experience and consults more than 1000+ clients</p>
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
                        <p className=' sm-9 mt-2 lighttext '>3.0 | 15+ User Rating</p>
                      </div>
                    </div>
                    {/* </Link> */}
                </div>
            </div>
            <div className="card border-none" >
                <img src={lawyer1} className="card-img-top" alt="..."/>
                <div className="card-body">
                <div className='d-flex m-0 mb-2 justify-content-between align-items-center'>
                  <div className='d-flex align-items-center'>
                      <p className='m-0 lighttext sm-13'>Adv Suksham  </p>
                      <img className = 'verifico ms-2 m-0' src={verifico}  alt=""/>
                  </div>
                  <div>
                  <p className='m-0 lighttext sm-13'>Level 3</p>
                  </div>
                </div>
                    <h4 className="card-title">Family Lawyer</h4>
                    <div className='locprovider d-flex w-100 align-item-center '>
                      <img src={locoico} className = 'verifico' alt="" />
                      <p className='d-flex sm-13 lighttext  ms-2 '> High Court, Delhi </p>
                    </div>
                    <p className="card-text lighttext ">20+ Yr of Experience Newer Lost Any Case till know. Flexible Charge free of cost consulting</p>
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
            <div className="card border-none" >
                <img src={lawyer3} className="card-img-top" alt="..."/>
                <div className="card-body">
                <div className='d-flex m-0 mb-2 justify-content-between align-items-center'>
                  <div className='d-flex align-items-center'>
                      <p className='m-0 lighttext sm-13'>Adv Rajesh </p>
                      <img className = 'verifico ms-2 m-0' src={verifico}  alt=""/>
                  </div>
                  <div>
                  <p className='m-0 lighttext sm-13'>Level 3+</p>
                  </div>
                </div>
                    <h4 className="card-title">Civil Lawyer</h4>
                    <div className='locprovider d-flex w-100 align-item-center '>
                      <img src={locoico} className = 'verifico' alt="" />
                      <p className='d-flex sm-13 lighttext  ms-2 '> High Court, Delhi </p>
                    </div>
                    <p className="card-text lighttext ">20+ Yr of Experience Newer Lost Any Case till know. Flexible Charge free of cost consulting</p>
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
      

      </div>
      <div className="carousel-item">
        <div className="d-flex">
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
                    <p className="card-text lighttext ">20+ Yr of Experience Newer Lost Any Case till know. Flexible Charge free of cost consulting</p>
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
            <div className="card border-none" >
                <img src={lawyer2} className="card-img-top" alt="..."/>
                <div className="card-body">
                <div className='d-flex m-0 mb-2 justify-content-between align-items-center'>
                  <div className='d-flex align-items-center'>
                      <p className='m-0 lighttext sm-13'>Adv Ravi Sharma </p>
                      <img className = 'verifico ms-2 m-0' src={verifico}  alt=""/>
                  </div>
                  <div>
                  <p className='m-0 lighttext sm-13'>Level 2</p>
                  </div>
                </div>
                    <h4 className="card-title">Legal Consultancy</h4>
                    <div className='locprovider d-flex w-100 align-item-center '>
                      <img src={locoico} className = 'verifico' alt="" />
                      <p className='d-flex sm-13 lighttext  ms-2 '> District Court, Nanital </p>
                    </div>
                    <p className="card-text lighttext ">I will Consult you regarding any legal problem. 10+yr of experience and consults more than 1000+ clients</p>
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
                        <p className=' sm-9 mt-2 lighttext '>3.0 | 15+ User Rating</p>
                      </div>
                    </div>
                    {/* </Link> */}
                </div>
            </div>
            <div className="card border-none" >
                <img src={lawyer1} className="card-img-top" alt="..."/>
                <div className="card-body">
                <div className='d-flex m-0 mb-2 justify-content-between align-items-center'>
                  <div className='d-flex align-items-center'>
                      <p className='m-0 lighttext sm-13'>Adv Suksham  </p>
                      <img className = 'verifico ms-2 m-0' src={verifico}  alt=""/>
                  </div>
                  <div>
                  <p className='m-0 lighttext sm-13'>Level 3</p>
                  </div>
                </div>
                    <h4 className="card-title">Family Lawyer</h4>
                    <div className='locprovider d-flex w-100 align-item-center '>
                      <img src={locoico} className = 'verifico' alt="" />
                      <p className='d-flex sm-13 lighttext  ms-2 '> High Court, Delhi </p>
                    </div>
                    <p className="card-text lighttext ">20+ Yr of Experience Newer Lost Any Case till know. Flexible Charge free of cost consulting</p>
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
            <div className="card border-none" >
                <img src={lawyer3} className="card-img-top" alt="..."/>
                <div className="card-body">
                <div className='d-flex m-0 mb-2 justify-content-between align-items-center'>
                  <div className='d-flex align-items-center'>
                      <p className='m-0 lighttext sm-13'>Adv Rajesh </p>
                      <img className = 'verifico ms-2 m-0' src={verifico}  alt=""/>
                  </div>
                  <div>
                  <p className='m-0 lighttext sm-13'>Level 3+</p>
                  </div>
                </div>
                    <h4 className="card-title">Civil Lawyer</h4>
                    <div className='locprovider d-flex w-100 align-item-center '>
                      <img src={locoico} className = 'verifico' alt="" />
                      <p className='d-flex sm-13 lighttext  ms-2 '> High Court, Delhi </p>
                    </div>
                    <p className="card-text lighttext ">20+ Yr of Experience Newer Lost Any Case till know. Flexible Charge free of cost consulting</p>
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
      

      </div>
    
    <button className="carousel-control-prev" type="button" data-bs-target="#providerslider" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#providerslider" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>
</div>


  )
}

export default ProviderSlider
