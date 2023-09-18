import React from 'react'
import pvads from '../../page 1 design images/pvadscpy.jpeg'
// import famlawimg from '../../page 1 design images/family-law-q2rkt7sgpskp9dph2acgnex6yz1b27u49ti9vpu458.jpg'
import verifico from '../../page 1 design images/icons8-verified-50.png'
import locoico from '../../page 1 design images/icons8-location-50.png'
import blstar from '../../page 1 design images/icons8-rating-100.png'
import flstar from '../../page 1 design images/icons8-star-50.png'

// import {Link} from "react-router-dom"

const ProviderSlider = () => {
  return (
    <div className='container-fluid mt-5 mb-5'>
    <div className='w-100 text-center mt-5'>
        <h1 className="display-3 "> Our Top Service Providers</h1>
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
            <div className="card border-none" >
                <img src={pvads} className="card-img-top" alt="..."/>
                <div className="card-body">
                <div className='d-flex m-0 mb-2 justify-content-between align-items-center'>
                  <div className='d-flex align-items-center'>
                      <p className='m-0 sm-13'>Adv Shami Gautam </p>
                      <img className = 'verifico ms-2 m-0' src={verifico}  alt=""/>
                  </div>
                  <div>
                  <p className='m-0 sm-13'>Level 3+</p>
                  </div>
                </div>
                    <h4 className="card-title">Criminal Lawyer</h4>
                    <div className='locprovider d-flex w-100 align-item-center '>
                      <img src={locoico} className = 'verifico' alt="" />
                      <p className='d-flex sm-13 ms-2 '> High Court, Delhi </p>
                    </div>
                    <p className="card-text">20+ Yr of Experience Newer Lost Any Case till know. Flexible Charge free of cost consulting</p>
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
                        <p className='sm-9 mt-2'>4.0 | 30+ User Rating</p>
                      </div>
                    </div>
                    {/* </Link> */}
                </div>
            </div>
            <div className="card border-none" >
                <img src={pvads} className="card-img-top" alt="..."/>
                <div className="card-body">
                <div className='d-flex m-0 mb-2 justify-content-between align-items-center'>
                  <div className='d-flex align-items-center'>
                      <p className='m-0 sm-13'>Adv Shami Gautam </p>
                      <img className = 'verifico ms-2 m-0' src={verifico}  alt=""/>
                  </div>
                  <div>
                  <p className='m-0 sm-13'>Level 3+</p>
                  </div>
                </div>
                    <h4 className="card-title">Criminal Lawyer</h4>
                    <div className='locprovider d-flex w-100 align-item-center '>
                      <img src={locoico} className = 'verifico' alt="" />
                      <p className='d-flex sm-13 ms-2 '> High Court, Delhi </p>
                    </div>
                    <p className="card-text">20+ Yr of Experience Newer Lost Any Case till know. Flexible Charge free of cost consulting</p>
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
                        <p className='sm-9 mt-2'>4.0 | 30+ User Rating</p>
                      </div>
                    </div>
                    {/* </Link> */}
                </div>
            </div>
            <div className="card border-none" >
                <img src={pvads} className="card-img-top" alt="..."/>
                <div className="card-body">
                <div className='d-flex m-0 mb-2 justify-content-between align-items-center'>
                  <div className='d-flex align-items-center'>
                      <p className='m-0 sm-13'>Adv Shami Gautam </p>
                      <img className = 'verifico ms-2 m-0' src={verifico}  alt=""/>
                  </div>
                  <div>
                  <p className='m-0 sm-13'>Level 3+</p>
                  </div>
                </div>
                    <h4 className="card-title">Criminal Lawyer</h4>
                    <div className='locprovider d-flex w-100 align-item-center '>
                      <img src={locoico} className = 'verifico' alt="" />
                      <p className='d-flex sm-13 ms-2 '> High Court, Delhi </p>
                    </div>
                    <p className="card-text">20+ Yr of Experience Newer Lost Any Case till know. Flexible Charge free of cost consulting</p>
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
                        <p className='sm-9 mt-2'>4.0 | 30+ User Rating</p>
                      </div>
                    </div>
                    {/* </Link> */}
                </div>
            </div>
            <div className="card border-none" >
                <img src={pvads} className="card-img-top" alt="..."/>
                <div className="card-body">
                <div className='d-flex m-0 mb-2 justify-content-between align-items-center'>
                  <div className='d-flex align-items-center'>
                      <p className='m-0 sm-13'>Adv Shami Gautam </p>
                      <img className = 'verifico ms-2 m-0' src={verifico}  alt=""/>
                  </div>
                  <div>
                  <p className='m-0 sm-13'>Level 3+</p>
                  </div>
                </div>
                    <h4 className="card-title">Criminal Lawyer</h4>
                    <div className='locprovider d-flex w-100 align-item-center '>
                      <img src={locoico} className = 'verifico' alt="" />
                      <p className='d-flex sm-13 ms-2 '> High Court, Delhi </p>
                    </div>
                    <p className="card-text">20+ Yr of Experience Newer Lost Any Case till know. Flexible Charge free of cost consulting</p>
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
                        <p className='sm-9 mt-2'>4.0 | 30+ User Rating</p>
                      </div>
                    </div>
                    {/* </Link> */}
                </div>
            </div>
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="2000">

      </div>
      <div className="carousel-item">

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

  )
}

export default ProviderSlider
