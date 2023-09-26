import React from 'react'
import pvads from '../page 1 design images/pvadscpy.jpeg'
import verifico from '../page 1 design images/icons8-verified-50.png'
import locoico from '../page 1 design images/icons8-location-50.png'
import blstar from '../page 1 design images/icons8-rating-100.png'
import flstar from '../page 1 design images/icons8-star-50.png'

import lawyer1 from '../page 1 design images/lawyer1.jpeg'
import lawyer2 from '../page 1 design images/lawyer2.jpeg'
import lawyer3 from '../page 1 design images/lawyer3.jpeg'
import {Link} from "react-router-dom"


const Searchdata = ({sdata}) => {
  return (
    <div className='container-l mt-5 pt-4'>
        <div className='w-100 text-center mt-5'>
            <h1 className="display-3 "> Search Related to {sdata}</h1>
        </div>
        
        <div className="container mt-5">
              <div class="row align-items-start">
                <div class="col-3  mb-5"><Link to="/profile" style={{textDecoration:"none", color:"#000"}}>
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
                    <h4 className="card-title"> Lawyer</h4>
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
                </Link></div>
                <div class="col-3  mb-5">
                <div className="card border-none" >
                <img src={lawyer1} className="card-img-top" alt="..."/>
                <div className="card-body">
                <div className='d-flex m-0 mb-2 justify-content-between align-items-center'>
                  <div className='d-flex align-items-center'>
                      <p className='m-0 lighttext sm-13'>Adv Ravi Shastri</p>
                      <img className = 'verifico ms-2 m-0' src={verifico}  alt=""/>
                  </div>
                  <div>
                  <p className='m-0 lighttext sm-13'>Level 3+</p>
                  </div>
                </div>
                    <h4 className="card-title">Criminal Lawyer</h4>
                    <div className='locprovider d-flex w-100 align-item-center '>
                      <img src={locoico} className = 'verifico' alt="" />
                      <p className='d-flex sm-13 lighttext  ms-2 '> District Court, Delhi </p>
                    </div>
                    <p className="card-text lighttext ">15 Years Of Experience Never Last Any Case.</p>
                    {/* <Link to="/"> */}
                    <div className='d-flex justify-content-between w-100'>
                      <button type="button " className="btn btn-brown w-75 sm-13 ">Contact Me</button>
                      <div className='d-flex flex-wrap justify-content-end'>
                        <div className='d-flex flex-nowrap justify-content-end'>
                          <img src={flstar} alt="" className='verifico'/>
                          <img src={flstar} alt="" className='verifico'/>
                          <img src={flstar} alt="" className='verifico'/>
                          <img src={blstar} alt="" className='verifico'/>
                          <img src={blstar} alt="" className='verifico'/>
                        </div>
                        <p className=' sm-9 mt-2 lighttext '>3.0 | 18+ User Rating</p>
                      </div>
                    </div>
                    {/* </Link> */}
                </div>
            </div>
                </div>
                <div class="col-3  mb-5">
                <div className="card border-none" >
                <img src={lawyer3} className="card-img-top" alt="..."/>
                <div className="card-body">
                <div className='d-flex m-0 mb-2 justify-content-between align-items-center'>
                  <div className='d-flex align-items-center'>
                      <p className='m-0 lighttext sm-13'>Adv Rajan Yadav </p>
                      <img className = 'verifico ms-2 m-0' src={verifico}  alt=""/>
                  </div>
                  <div>
                  <p className='m-0 lighttext sm-13'>Level 2+</p>
                  </div>
                </div>
                    <h4 className="card-title">Criminal Lawyer</h4>
                    <div className='locprovider d-flex w-100 align-item-center '>
                      <img src={locoico} className = 'verifico' alt="" />
                      <p className='d-flex sm-13 lighttext  ms-2 '> Mumbai, Court </p>
                    </div>
                    <p className="card-text lighttext ">Flexible Charges No Extra Money Free Consultancy</p>
                    {/* <Link to="/"> */}
                    <div className='d-flex justify-content-between w-100'>
                      <button type="button " className="btn btn-brown w-75 sm-13 ">Contact Me</button>
                      <div className='d-flex flex-wrap justify-content-end'>
                        <div className='d-flex flex-nowrap justify-content-end'>
                          <img src={flstar} alt="" className='verifico'/>
                          <img src={flstar} alt="" className='verifico'/>
                          <img src={flstar} alt="" className='verifico'/>
                          <img src={blstar} alt="" className='verifico'/>
                          <img src={blstar} alt="" className='verifico'/>
                        </div>
                        <p className=' sm-9 mt-2 lighttext '>3.0 | 20+ User Rating</p>
                      </div>
                    </div>
                    {/* </Link> */}
                </div>
            </div>
                </div>
                <div class="col-3  mb-5">
                <div className="card border-none" >
                <img src={lawyer2} className="card-img-top" alt="..."/>
                <div className="card-body">
                <div className='d-flex m-0 mb-2 justify-content-between align-items-center'>
                  <div className='d-flex align-items-center'>
                      <p className='m-0 lighttext sm-13'>Adv Kumesh Jain </p>
                      <img className = 'verifico ms-2 m-0' src={verifico}  alt=""/>
                  </div>
                  <div>
                  <p className='m-0 lighttext sm-13'>Level 1+</p>
                  </div>
                </div>
                    <h4 className="card-title">Criminal Lawyer</h4>
                    <div className='locprovider d-flex w-100 align-item-center '>
                      <img src={locoico} className = 'verifico' alt="" />
                      <p className='d-flex sm-13 lighttext  ms-2 '> High Court, Gujrat </p>
                    </div>
                    <p className="card-text lighttext ">Working On Your Terms Free Consultancy</p>
                    {/* <Link to="/"> */}
                    <div className='d-flex justify-content-between w-100'>
                      <button type="button " className="btn btn-brown w-75 sm-13 ">Contact Me</button>
                      <div className='d-flex flex-wrap justify-content-end'>
                        <div className='d-flex flex-nowrap justify-content-end'>
                          <img src={flstar} alt="" className='verifico'/>
                          <img src={flstar} alt="" className='verifico'/>
                          <img src={blstar} alt="" className='verifico'/>
                          <img src={blstar} alt="" className='verifico'/>
                          <img src={blstar} alt="" className='verifico'/>
                        </div>
                        <p className=' sm-9 mt-2 lighttext '>2.0 | 10+ User Rating</p>
                      </div>
                    </div>
                    {/* </Link> */}
                </div>
            </div>
                </div>
                
              </div>
              <div className='w-100 text-center'>

              <button className='btn btn-brown'>Load More</button>
              </div>
        </div>

    </div>
  )
}

export default Searchdata
