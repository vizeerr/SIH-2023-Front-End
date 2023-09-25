import React from 'react'

import uttar from '../../page 1 design images/uttar.jpeg'
import hima from '../../page 1 design images/hima.jpeg'
import raj from '../../page 1 design images/raj.jpeg'
import kerla from '../../page 1 design images/kerla.jpeg'
import delhi from '../../page 1 design images/delhi.jpeg'
import guja from '../../page 1 design images/guja.jpeg'
import orrisa from '../../page 1 design images/orrisa.jpeg'
import cal from '../../page 1 design images/calct.jpeg'
import sri from '../../page 1 design images/sri.jpeg'
import tel from '../../page 1 design images/tln.jpeg'
import mani from '../../page 1 design images/mani.jpeg'
import karna from '../../page 1 design images/karna.jpeg'
import chattis from '../../page 1 design images/chattis.jpeg'
import uttara from '../../page 1 design images/uttara.jpeg'
import tri from '../../page 1 design images/trip.jpeg'
import gwt from '../../page 1 design images/gwt.jpeg'
import patna from '../../page 1 design images/patna.jpeg'
import mp from '../../page 1 design images/mp.jpeg'
import { Link } from "react-router-dom";



const StateService = () => {
  return (
    <div className='container-l mt-5 w-100 h-100 p-0 overflow-hidden'>
      <div className="imgcontainer">
        <div className='w-100 text-center position-relative x-3'>
            <h1 className="display-3 text-light"> Find Services In Your State</h1>
            <button type="button" className="btn btn-lightbg float-end me-5"> View More</button>
        </div>
        <div id="stateservice" className=" carousel carousel slide mt-5 w-100">
    
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#stateservice" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#stateservice" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#stateservice" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="container carousel-inner carol-provid">
      <div className="carousel-item mb-5 active" data-bs-interval="10000">
        <div className="d-flex flex-wrap">
            <div className='d-flex flex-nowrap mb-3 mt-5'>
                <div className="card border-none bg-transparent text-light" >
                    <img src={delhi} className="card-img-top rounded-4 stateimg" alt="..."/>
                    <div className="card-body">
                        <p className='m-0  darktextlight'>50+ Service Available </p>
                        <h4 className="card-title">Maharashtra</h4>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50  p-0">View All</button>
                        {/* </Link> */}
                    </div>
                </div>
                <div className="card border-none bg-transparent text-light" >
                    <img src={hima} className="card-img-top rounded-4 stateimg " alt="..."/>
                    <div className="card-body">
                        <p className='m-0  darktextlight'>50+ Service Available </p>
                        <h4 className="card-title">Himachal Pradesh</h4>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50  ">View All</button>
                        {/* </Link> */}
                    </div>
                </div>
                <div className="card border-none bg-transparent text-light" >
                    <img src={uttar} className="card-img-top rounded-4 stateimg" alt="..."/>
                    <div className="card-body">
                        <p className='m-0  darktextlight'>50+ Service Available </p>
                        <h4 className="card-title">Uttar Pradesh</h4>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50  ">View All</button>
                        {/* </Link> */}
                    </div>
                </div>
                <div className="card border-none bg-transparent text-light" >
                    <img src={guja} className="card-img-top rounded-4 stateimg" alt="..."/>
                    <div className="card-body">
                        <p className='m-0  darktextlight'>50+ Service Available </p>
                        <h4 className="card-title">Gujarat</h4>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50  ">View All</button>
                        {/* </Link> */}
                    </div>
                </div>
                
            </div>
            <div className='d-flex flex-nowrap mt-3'>
                <div className="card border-none bg-transparent text-light" >
                    <img src={raj} className="card-img-top rounded-4 stateimg" alt="..."/>
                    <div className="card-body">
                        <p className='m-0  darktextlight'>50+ Service Available </p>
                        <h4 className="card-title">Rajasthan</h4>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50  ">View All</button>
                        {/* </Link> */}
                    </div>
                </div>
                <div className="card border-none bg-transparent text-light" >
                    <img src={kerla} className="card-img-top rounded-4 stateimg " alt="..."/>
                    <div className="card-body">
                        <p className='m-0  darktextlight'>50+ Service Available </p>
                        <h4 className="card-title">Kerala</h4>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50  ">View All</button>
                        {/* </Link> */}
                    </div>
                </div>
                <div className="card border-none bg-transparent text-light" ><Link to="/delhiserives" style={{textDecoration:"none", color:"#FFF"}}>
                    <img src={delhi} className="card-img-top rounded-4 stateimg" alt="..."/>
                    <div className="card-body">
                        <p className='m-0  darktextlight'>50+ Service Available </p>
                        <h4 className="card-title">Delhi</h4>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50  ">View All</button>
                        {/* </Link> */}
                    </div>
                </Link></div>
                <div className="card border-none bg-transparent text-light" >
                    <img src={orrisa} className="card-img-top rounded-4 stateimg" alt="..."/>
                    <div className="card-body">
                        <p className='m-0 sm-13 darktextlight'>50+ Service Available </p>
                        <h3 className="card-title">Orrisa</h3>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50  ">View All</button>
                        {/* </Link> */}
                    </div>
                </div>
                
            </div>
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="2000">
        <div className="d-flex flex-wrap">
            <div className='d-flex flex-nowrap mb-3 mt-5'>
                <div className="card border-none bg-transparent text-light" >
                    <img src={orrisa} className="card-img-top rounded-4 stateimg" alt="..."/>
                    <div className="card-body">
                        <p className='m-0 sm-13 darktextlight'>50+ Service Available </p>
                        <h3 className="card-title">Orrisa</h3>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50  ">View All</button>
                        {/* </Link> */}
                    </div>
                </div>
                <div className="card border-none bg-transparent text-light" >
                    <img src={cal} className="card-img-top rounded-4 stateimg " alt="..."/>
                    <div className="card-body">
                        <p className='m-0 sm-13 darktextlight'>50+ Service Available </p>
                        <h3 className="card-title">Calcutta</h3>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50  ">View All</button>
                        {/* </Link> */}
                    </div>
                </div>
                <div className="card border-none bg-transparent text-light" >
                    <img src={sri} className="card-img-top rounded-4 stateimg" alt="..."/>
                    <div className="card-body">
                        <p className='m-0 sm-13 darktextlight'>50+ Service Available </p>
                        <h3 className="card-title">Srinagar</h3>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50  ">View All</button>
                        {/* </Link> */}
                    </div>
                </div>
                <div className="card border-none bg-transparent text-light" >
                    <img src={tel} className="card-img-top rounded-4 stateimg" alt="..."/>
                    <div className="card-body">
                        <p className='m-0 sm-13 darktextlight'>50+ Service Available </p>
                        <h3 className="card-title">Jharkhand</h3>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50  ">View All</button>
                        {/* </Link> */}
                    </div>
                </div>
                
            </div>
            <div className='d-flex flex-nowrap mt-3'>
                <div className="card border-none bg-transparent text-light" >
                    <img src={mani} className="card-img-top rounded-4 stateimg" alt="..."/>
                    <div className="card-body">
                        <p className='m-0 sm-13 darktextlight'>50+ Service Available </p>
                        <h3 className="card-title">Telangana</h3>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50  ">View All</button>
                        {/* </Link> */}
                    </div>
                </div>
                <div className="card border-none bg-transparent text-light" >
                    <img src={karna} className="card-img-top rounded-4 stateimg " alt="..."/>
                    <div className="card-body">
                        <p className='m-0 sm-13 darktextlight'>50+ Service Available </p>
                        <h3 className="card-title">Manipur</h3>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50  ">View All</button>
                        {/* </Link> */}
                    </div>
                </div>
                <div className="card border-none bg-transparent text-light" >
                    <img src={delhi} className="card-img-top rounded-4 stateimg" alt="..."/>
                    <div className="card-body">
                        <p className='m-0 sm-13 darktextlight'>50+ Service Available </p>
                        <h3 className="card-title">Karnatka</h3>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50  ">View All</button>
                        {/* </Link> */}
                    </div>
                </div>
                <div className="card border-none bg-transparent text-light" >
                    <img src={gwt} className="card-img-top rounded-4 stateimg" alt="..."/>
                    <div className="card-body">
                        <p className='m-0 sm-13 darktextlight'>50+ Service Available </p>
                        <h3 className="card-title">Punjab</h3>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50  ">View All</button>
                        {/* </Link> */}
                    </div>
                </div>
                
            </div>
        </div>

      </div>
      <div className="carousel-item">
        <div className="d-flex flex-wrap">
            <div className='d-flex flex-nowrap mb-3 mt-5'>
                <div className="card border-none bg-transparent text-light" >
                    <img src={chattis} className="card-img-top rounded-4 stateimg" alt="..."/>
                    <div className="card-body">
                        <p className='m-0 sm-13 darktextlight'>50+ Service Available </p>
                        <h3 className="card-title">Chattisgarh</h3>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50  ">View All</button>
                        {/* </Link> */}
                    </div>
                </div>
                <div className="card border-none bg-transparent text-light" >
                    <img src={uttara} className="card-img-top rounded-4 stateimg " alt="..."/>
                    <div className="card-body">
                        <p className='m-0 sm-13 darktextlight'>50+ Service Available </p>
                        <h3 className="card-title">Utarakhand</h3>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50  ">View All</button>
                        {/* </Link> */}
                    </div>
                </div>
                <div className="card border-none bg-transparent text-light" >
                    <img src={tri} className="card-img-top rounded-4 stateimg" alt="..."/>
                    <div className="card-body">
                        <p className='m-0 sm-13 darktextlight'>50+ Service Available </p>
                        <h3 className="card-title">Tripura</h3>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50  ">View All</button>
                        {/* </Link> */}
                    </div>
                </div>
                <div className="card border-none bg-transparent text-light" >
                    <img src={guja} className="card-img-top rounded-4 stateimg" alt="..."/>
                    <div className="card-body">
                        <p className='m-0 sm-13 darktextlight'>50+ Service Available </p>
                        <h3 className="card-title">Sikkim</h3>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50  ">View All</button>
                        {/* </Link> */}
                    </div>
                </div>
                
            </div>
            <div className='d-flex flex-nowrap mt-3'>
                <div className="card border-none bg-transparent text-light" >
                    <img src={gwt} className="card-img-top rounded-4 stateimg" alt="..."/>
                    <div className="card-body">
                        <p className='m-0 sm-13 darktextlight'>50+ Service Available </p>
                        <h3 className="card-title">Guwahati</h3>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50  ">View All</button>
                        {/* </Link> */}
                    </div>
                </div>
                <div className="card border-none bg-transparent text-light" >
                    <img src={patna} className="card-img-top rounded-4 stateimg " alt="..."/>
                    <div className="card-body">
                        <p className='m-0 sm-13 darktextlight'>50+ Service Available </p>
                        <h3 className="card-title">Patna</h3>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50  ">View All</button>
                        {/* </Link> */}
                    </div>
                </div>
                <div className="card border-none bg-transparent text-light" >
                    <img src={mp} className="card-img-top rounded-4 stateimg" alt="..."/>
                    <div className="card-body">
                        <p className='m-0 sm-13 darktextlight'>50+ Service Available </p>
                        <h3 className="card-title">Madhya Pradesh</h3>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50  ">View All</button>
                        {/* </Link> */}
                    </div>
                </div>
                <div className="card border-none bg-transparent text-light" >
                    <img src={delhi} className="card-img-top rounded-4 stateimg" alt="..."/>
                    <div className="card-body">
                        <p className='m-0 sm-13 darktextlight'>50+ Service Available </p>
                        <h3 className="card-title">Kolkata</h3>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50  ">View All</button>
                        {/* </Link> */}
                    </div>
                </div>
                
            </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#stateservice" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#stateservice" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
      </div>
      
    </div>
  )
}

export default StateService
