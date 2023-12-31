import React from 'react'
import bestimg from '../../page 1 design images/bestimg.jpeg'
import bribe from '../../page 1 design images/icons8-bribery-100.png'
import ver from '../../page 1 design images/icons8-verified-100.png'
import ql from '../../page 1 design images/icons8-quality-100.png'
import spr from '../../page 1 design images/icons8-support-100.png'
const Bestpart = () => {
  return (
    <div className='container-l mt-5 mb-5 pt-5 pb-5 h-100'>
        <h1 className="display-3 text-center"> The best part? Eveything</h1>
        <div className="container text-center mt-5">
            <div className="row align-items-center">
                <div className="col">
                <img className='infotab-img' src={bestimg} alt="" />
                </div>
                    <div className="col infotab d-flex flex-wrap">                            
                            <div className="card pt-3 pb-3 mb-4 me-5">
                            <img src={bribe} className="card-img-top m-auto" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Stick to your budget</h5>
                                <p className="card-text">Find the right Legal service for every price point. No hourly rates, just project-based pricing.</p>
                            </div>
                            </div>
                            <div className="card pt-3 pb-3 mb-4 ms-4">
                            <img src={ver} className="card-img-top m-auto" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Verified Service Provider</h5>
                                <p className="card-text">Find the right Legal service for every price point. No hourly rates, just project-based pricing.</p>
                            </div>
                            </div>
                            <div className="card pt-3 pb-3 mt-4 me-5 ">
                            <img src={ql} className="card-img-top m-auto" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Get Quality Services</h5>
                                <p className="card-text">Find the right Legal service for every price point. No hourly rates, just project-based pricing.</p>
                            </div>
                            </div>
                            <div className="card pt-3 pb-3 mt-4 ms-4 ">
                            <img src={spr} className="card-img-top m-auto" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Support & Feedback</h5>
                                <p className="card-text">Find the right Legal service for every price point. No hourly rates, just project-based pricing.</p>
                            </div>
                            </div>

                    </div>
                    

            </div>
        </div>
    </div>
  )
}

export default Bestpart
