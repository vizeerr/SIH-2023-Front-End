import React from 'react'
import orgico from '../../page 1 design images/icons8-organization-100.png'
import famlawimg from '../../page 1 design images/family-law-q2rkt7sgpskp9dph2acgnex6yz1b27u49ti9vpu458.jpg'
import solo from '../../page 1 design images/icons8-person-100.png'
import qs from '../../page 1 design images/icons8-question-mark-100.png'
import md from '../../page 1 design images/icons8-mediator-100.png'
import ntr from '../../page 1 design images/icons8-notary-100.png'
import doc from '../../page 1 design images/icons8-document-writer-100.png'
import arbi from '../../page 1 design images/icons8-arbitrator-100.png'
import law from '../../page 1 design images/icons8-lawyer-100.png'
import atr from '../../page 1 design images/icons8-attorney-100.png'


const ServicesSlider = () => {
  return (
    <div className='lgbag container-l mt-5 mb- p-0 pt-5 pb-5'>
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
                    <h2 className="card-title">Law Firms</h2>
                    <p className="card-text lighttext fs-6 lh-lg ">One or more attorneys who work together to provide their legal services.They handle litigation,corporate etc.</p>
                </div>
            </div>
            <img src={famlawimg} className="card-img-bottom z-1 " alt="..."/>
        </div>
        <div className="contain-card text-center">
            <div className="card m-auto">
                <img src={solo} className="card-img-top w-25 ms-3 mt-3" alt="..."/>
                <div className="card-body mx-3 text-start">
                    <h2 className="card-title">Solo Practitioners</h2>
                    <p className="card-text lighttext fs-6 lh-lg">A sole practitioner is a licensed professional who operates a firm without any other partners.</p>
                </div>
            </div>
            <img src={famlawimg} className="card-img-bottom z-1 " alt="..."/>
        </div>
        <div className="contain-card text-center">
            <div className="card m-auto">
                <img src={qs} className="card-img-top w-25 ms-3 mt-3" alt="..."/>
                <div className="card-body mx-3 text-start">
                    <h2 className="card-title">Legal Consultants</h2>
                    <p className="card-text lighttext fs-6 lh-lg">Experts in specific area of law who provide advice and guidance to business and individuals.</p>
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
                <img src={md} className="card-img-top w-25 ms-3 mt-3" alt="..."/>
                <div className="card-body mx-3 text-start">
                    <h2 className="card-title">Mediators</h2>
                    <p className="card-text lighttext fs-6 lh-lg">A mediator is a trained professional who acts as a neutral facilitator during the mediation process and help them in negoitating.</p>
                </div>
            </div>
            <img src={famlawimg} className="card-img-bottom z-1 " alt="..."/>
        </div>
        <div className="contain-card text-center">
            <div className="card m-auto">
                <img src={ntr} className="card-img-top w-25 ms-3 mt-3" alt="..."/>
                <div className="card-body mx-3 text-start">
                    <h2 className="card-title">Notaries</h2>
                    <p className="card-text lighttext fs-6 lh-lg">A notary is a publicly commissioned official who serves as an impartial witness to the signing of a legal document.</p>
                </div>
            </div>
            <img src={famlawimg} className="card-img-bottom z-1 " alt="..."/>
        </div>
        <div className="contain-card text-center">
            <div className="card m-auto">
                <img src={doc} className="card-img-top w-25 ms-3 mt-3" alt="..."/>
                <div className="card-body mx-3 text-start">
                    <h2 className="card-title">Document Writers</h2>
                    <p className="card-text lighttext fs-6 lh-lg">A legal writer creates contracts, agreements  and other documents that need legal terminology.</p>
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
                <img src={arbi} className="card-img-top w-25 ms-3 mt-3" alt="..."/>
                <div className="card-body mx-3 text-start">
                    <h2 className="card-title">Arbitrators</h2>
                    <p className="card-text lighttext fs-6 lh-lg">Someone who has been officially chosen to make decision that ends legal disagreement without it having to be solved in court</p>
                </div>
            </div>
            <img src={famlawimg} className="card-img-bottom z-1 " alt="..."/>
        </div>
        <div className="contain-card text-center">
            <div className="card m-auto">
                <img src={law} className="card-img-top w-25 ms-3 mt-3" alt="..."/>
                <div className="card-body mx-3 text-start">
                    <h2 className="card-title">Lawyer</h2>
                    <p className="card-text lighttext fs-6 lh-lg"> A person who is trained and qualified to advise people about the law and to represent them in court, and to write legal documents.</p>
                </div>
            </div>
            <img src={famlawimg} className="card-img-bottom z-1 " alt="..."/>
        </div>
        <div className="contain-card text-center">
            <div className="card m-auto">
                <img src={atr} className="card-img-top w-25 ms-3 mt-3" alt="..."/>
                <div className="card-body mx-3 text-start">
                    <h2 className="card-title">Attorney</h2>
                    <p className="card-text lighttext fs-6 lh-lg">A person who is legally qualified and licensed to represent a person in a legal matter, such as a transaction lawsuit or other cases.</p>
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
