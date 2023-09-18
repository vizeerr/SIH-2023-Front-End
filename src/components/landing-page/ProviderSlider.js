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
    <div className='w-100 text-center'>
        <h1 className="display-3 "> Our Top Service Providers</h1>
        <button type="button" className="btn btn-brown float-end me-5"> View More</button>
    </div>
    
    <div id="providerslider" className=" carousel carousel-dark slide mt-5 w-100">
    
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#providerslider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#providerslider" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#providerslider" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="container carousel-inner carol-serv carol-provid">
      <div className="carousel-item active" data-bs-interval="10000">
        <div className="d-flex">
            <div className="card border-none" >
                <img src={pvads} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p>Adv Shami Gautam <img className = 'verifico' src={verifico}  alt=""/></p>
                    <h3 className="card-title">card border-nonetitle</h3>
                    <p><img src={locoico} className = 'verifico' alt="" /> High Court, Delhi </p>
                    <p className="card-text">Some quick example text to build on the card border-nonetitle and make up the bulk of the card's content.</p>
                    {/* <Link to="/"> */}
                    <div className='d-flex justify-content-between w-100'>
                      <button type="button " className="btn btn-brown w-50">Contact Me</button>
                      <div className='d-flex flex-wrap'>
                        <div className='w-75'>
                          <img src={flstar} alt="" className='verifico'/>
                          <img src={flstar} alt="" className='verifico'/>
                          <img src={flstar} alt="" className='verifico'/>
                          <img src={flstar} alt="" className='verifico'/>
                          <img src={flstar} alt="" className='verifico'/>
                        </div>
                        <span>4.0 | 30+ User Rating</span>
                      </div>
                    </div>
                    {/* </Link> */}
                </div>
            </div>
            <div className="card border-none" >
                <img src={pvads} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p>Adv Shami Gautam <img className = 'verifico' src={verifico}  alt=""/></p>
                    <h3 className="card-title">card border-nonetitle</h3>
                    <p><img src={locoico} className = 'verifico' alt="" /> High Court, Delhi </p>
                    <p className="card-text">Some quick example text to build on the card border-nonetitle and make up the bulk of the card's content.</p>
                    {/* <Link to="/"> */}
                    <div className='d-flex justify-content-between w-100'>
                      <button type="button " className="btn btn-brown w-50">Contact Me</button>
                      <div className='d-flex flex-wrap'>
                        <div className='w-75'>
                          <img src={flstar} alt="" className='verifico'/>
                          <img src={flstar} alt="" className='verifico'/>
                          <img src={flstar} alt="" className='verifico'/>
                          <img src={flstar} alt="" className='verifico'/>
                          <img src={flstar} alt="" className='verifico'/>
                        </div>
                        <span>4.0 | 30+ User Rating</span>
                      </div>
                    </div>
                    {/* </Link> */}
                </div>
            </div>
            <div className="card border-none" >
                <img src={pvads} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p>Adv Shami Gautam <img className = 'verifico' src={verifico}  alt=""/></p>
                    <h3 className="card-title">card border-nonetitle</h3>
                    <p><img src={locoico} className = 'verifico' alt="" /> High Court, Delhi </p>
                    <p className="card-text">Some quick example text to build on the card border-nonetitle and make up the bulk of the card's content.</p>
                    {/* <Link to="/"> */}
                    <div className='d-flex justify-content-between w-100'>
                      <button type="button " className="btn btn-brown w-50">Contact Me</button>
                      <div className='d-flex flex-wrap'>
                        <div className='w-75'>
                          <img src={flstar} alt="" className='verifico'/>
                          <img src={flstar} alt="" className='verifico'/>
                          <img src={flstar} alt="" className='verifico'/>
                          <img src={flstar} alt="" className='verifico'/>
                          <img src={flstar} alt="" className='verifico'/>
                        </div>
                        <span>4.0 | 30+ User Rating</span>
                      </div>
                    </div>
                    {/* </Link> */}
                </div>
            </div>
            <div className="card border-none" >
                <img src={pvads} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p>Adv Shami Gautam <img className = 'verifico' src={verifico}  alt=""/></p>
                    <h3 className="card-title">card border-nonetitle</h3>
                    <p><img src={locoico} className = 'verifico' alt="" /> High Court, Delhi </p>
                    <p className="card-text">Some quick example text to build on the card border-nonetitle and make up the bulk of the card's content.</p>
                    {/* <Link to="/"> */}
                    <div className='d-flex justify-content-between w-100'>
                      <button type="button " className="btn btn-brown w-50">Contact Me</button>
                      <div className='d-flex flex-wrap'>
                        <div className='w-75 text-right'>
                          <img src={flstar} alt="" className='verifico'/>
                          <img src={flstar} alt="" className='verifico'/>
                          <img src={flstar} alt="" className='verifico'/>
                          <img src={flstar} alt="" className='verifico'/>
                          <img src={blstar} alt="" className='verifico'/>
                        </div>
                        <p>4.0 | 30+ User Rating</p>
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
