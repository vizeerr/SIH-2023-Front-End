import React from 'react'
import orgico from '../../page 1 design images/icons8-organization-100.png'
import famlawimg from '../../page 1 design images/family-law-q2rkt7sgpskp9dph2acgnex6yz1b27u49ti9vpu458.jpg'

const ServicesSlider = () => {
  return (
    <div className='lgbag container-fluid mt-5 mb-5'>
    <div className='w-100 text-center mt-5'>
        <h1 className="display-3 "> A Passion For Justice, Our Service Areas</h1>
        <button type="button" className="btn btn-brown float-end me-5"> View More</button>
    </div>
    
    <div id="servicesslider" className=" carousel carousel-dark slide mt-5 w-100">
    
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#servicesslider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#servicesslider" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#servicesslider" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="container carousel-inner carol-serv">
      <div className="carousel-item active" data-bs-interval="10000">
        <div className="d-flex">
        
        <div className="contain-card text-center">
            <div className="card m-auto">
                <img src={orgico} className="card-img-top w-25 ms-3 mt-3" alt="..."/>
                <div className="card-body mx-3 text-start">
                    <h2 className="card-title">Card title</h2>
                    <p className="card-text lighttext fs-6 lh-lg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <img src={famlawimg} className="card-img-bottom z-1 " alt="..."/>
        </div>
        <div className="contain-card text-center">
            <div className="card m-auto">
                <img src={orgico} className="card-img-top w-25 ms-3 mt-3" alt="..."/>
                <div className="card-body mx-3 text-start">
                    <h2 className="card-title">Card title</h2>
                    <p className="card-text lighttext fs-6 lh-lg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <img src={famlawimg} className="card-img-bottom z-1 " alt="..."/>
        </div>
        <div className="contain-card text-center">
            <div className="card m-auto">
                <img src={orgico} className="card-img-top w-25 ms-3 mt-3" alt="..."/>
                <div className="card-body mx-3 text-start">
                    <h2 className="card-title">Card title</h2>
                    <p className="card-text lighttext fs-6 lh-lg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <img src={famlawimg} className="card-img-bottom z-1 " alt="..."/>
        </div>
        
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="2000">
      <div className="d-flex">
        
        <div className="contain-card text-center">
            <div className="card m-auto">
                <img src={orgico} className="card-img-top w-25 ms-3 mt-3" alt="..."/>
                <div className="card-body mx-3 text-start">
                    <h2 className="card-title">Card title</h2>
                    <p className="card-text lighttext fs-6 lh-lg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <img src={famlawimg} className="card-img-bottom z-1 " alt="..."/>
        </div>
        <div className="contain-card text-center">
            <div className="card m-auto">
                <img src={orgico} className="card-img-top w-25 ms-3 mt-3" alt="..."/>
                <div className="card-body mx-3 text-start">
                    <h2 className="card-title">Card title</h2>
                    <p className="card-text lighttext fs-6 lh-lg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <img src={famlawimg} className="card-img-bottom z-1 " alt="..."/>
        </div>
        <div className="contain-card text-center">
            <div className="card m-auto">
                <img src={orgico} className="card-img-top w-25 ms-3 mt-3" alt="..."/>
                <div className="card-body mx-3 text-start">
                    <h2 className="card-title">Card title</h2>
                    <p className="card-text lighttext fs-6 lh-lg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <img src={famlawimg} className="card-img-bottom z-1 " alt="..."/>
        </div>
        
        </div>
      </div>
      <div className="carousel-item">
      <div className="d-flex">
        
        <div className="contain-card text-center">
            <div className="card m-auto">
                <img src={orgico} className="card-img-top w-25 ms-3 mt-3" alt="..."/>
                <div className="card-body mx-3 text-start">
                    <h2 className="card-title">Card title</h2>
                    <p className="card-text lighttext fs-6 lh-lg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <img src={famlawimg} className="card-img-bottom z-1 " alt="..."/>
        </div>
        <div className="contain-card text-center">
            <div className="card m-auto">
                <img src={orgico} className="card-img-top w-25 ms-3 mt-3" alt="..."/>
                <div className="card-body mx-3 text-start">
                    <h2 className="card-title">Card title</h2>
                    <p className="card-text lighttext fs-6 lh-lg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <img src={famlawimg} className="card-img-bottom z-1 " alt="..."/>
        </div>
        <div className="contain-card text-center">
            <div className="card m-auto">
                <img src={orgico} className="card-img-top w-25 ms-3 mt-3" alt="..."/>
                <div className="card-body mx-3 text-start">
                    <h2 className="card-title">Card title</h2>
                    <p className="card-text lighttext fs-6 lh-lg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <img src={famlawimg} className="card-img-bottom z-1 " alt="..."/>
        </div>
        
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#servicesslider" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#servicesslider" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>
  )
}

export default ServicesSlider
