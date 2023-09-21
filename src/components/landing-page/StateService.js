import React from 'react'

import uttar from '../../page 1 design images/uttar.jpeg'
import hima from '../../page 1 design images/hima.jpeg'
import raj from '../../page 1 design images/raj.jpeg'
import kerla from '../../page 1 design images/kerla.jpeg'
import delhi from '../../page 1 design images/delhi.jpeg'
import guja from '../../page 1 design images/guja.jpeg'



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
                        <p className='m-0 sm-13 darktextlight'>50+ Service Available </p>
                        <h3 className="card-title">Maharashtra</h3>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50 sm-13 ">View All</button>
                        {/* </Link> */}
                    </div>
                </div>
                <div className="card border-none bg-transparent text-light" >
                    <img src={hima} className="card-img-top rounded-4 stateimg " alt="..."/>
                    <div className="card-body">
                        <p className='m-0 sm-13 darktextlight'>50+ Service Available </p>
                        <h3 className="card-title">Himachal Pradesh</h3>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50 sm-13 ">View All</button>
                        {/* </Link> */}
                    </div>
                </div>
                <div className="card border-none bg-transparent text-light" >
                    <img src={uttar} className="card-img-top rounded-4 stateimg" alt="..."/>
                    <div className="card-body">
                        <p className='m-0 sm-13 darktextlight'>50+ Service Available </p>
                        <h3 className="card-title">Uttar Pradesh</h3>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50 sm-13 ">View All</button>
                        {/* </Link> */}
                    </div>
                </div>
                <div className="card border-none bg-transparent text-light" >
                    <img src={guja} className="card-img-top rounded-4 stateimg" alt="..."/>
                    <div className="card-body">
                        <p className='m-0 sm-13 darktextlight'>50+ Service Available </p>
                        <h3 className="card-title">Gujarat</h3>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50 sm-13 ">View All</button>
                        {/* </Link> */}
                    </div>
                </div>
                
            </div>
            <div className='d-flex flex-nowrap mt-3'>
                <div className="card border-none bg-transparent text-light" >
                    <img src={raj} className="card-img-top rounded-4 stateimg" alt="..."/>
                    <div className="card-body">
                        <p className='m-0 sm-13 darktextlight'>50+ Service Available </p>
                        <h3 className="card-title">Rajasthan</h3>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50 sm-13 ">View All</button>
                        {/* </Link> */}
                    </div>
                </div>
                <div className="card border-none bg-transparent text-light" >
                    <img src={kerla} className="card-img-top rounded-4 stateimg " alt="..."/>
                    <div className="card-body">
                        <p className='m-0 sm-13 darktextlight'>50+ Service Available </p>
                        <h3 className="card-title">Kerala</h3>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50 sm-13 ">View All</button>
                        {/* </Link> */}
                    </div>
                </div>
                <div className="card border-none bg-transparent text-light" >
                    <img src={delhi} className="card-img-top rounded-4 stateimg" alt="..."/>
                    <div className="card-body">
                        <p className='m-0 sm-13 darktextlight'>50+ Service Available </p>
                        <h3 className="card-title">Delhi</h3>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50 sm-13 ">View All</button>
                        {/* </Link> */}
                    </div>
                </div>
                <div className="card border-none bg-transparent text-light" >
                    <img src={delhi} className="card-img-top rounded-4 stateimg" alt="..."/>
                    <div className="card-body">
                        <p className='m-0 sm-13 darktextlight'>50+ Service Available </p>
                        <h3 className="card-title">Maharashtra</h3>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50 sm-13 ">View All</button>
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
                    <img src={delhi} className="card-img-top rounded-4 stateimg" alt="..."/>
                    <div className="card-body">
                        <p className='m-0 sm-13 darktextlight'>50+ Service Available </p>
                        <h3 className="card-title">Maharashtra</h3>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50 sm-13 ">View All</button>
                        {/* </Link> */}
                    </div>
                </div>
                <div className="card border-none bg-transparent text-light" >
                    <img src={hima} className="card-img-top rounded-4 stateimg " alt="..."/>
                    <div className="card-body">
                        <p className='m-0 sm-13 darktextlight'>50+ Service Available </p>
                        <h3 className="card-title">Himachal Pradesh</h3>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50 sm-13 ">View All</button>
                        {/* </Link> */}
                    </div>
                </div>
                <div className="card border-none bg-transparent text-light" >
                    <img src={uttar} className="card-img-top rounded-4 stateimg" alt="..."/>
                    <div className="card-body">
                        <p className='m-0 sm-13 darktextlight'>50+ Service Available </p>
                        <h3 className="card-title">Uttar Pradesh</h3>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50 sm-13 ">View All</button>
                        {/* </Link> */}
                    </div>
                </div>
                <div className="card border-none bg-transparent text-light" >
                    <img src={guja} className="card-img-top rounded-4 stateimg" alt="..."/>
                    <div className="card-body">
                        <p className='m-0 sm-13 darktextlight'>50+ Service Available </p>
                        <h3 className="card-title">Gujarat</h3>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50 sm-13 ">View All</button>
                        {/* </Link> */}
                    </div>
                </div>
                
            </div>
            <div className='d-flex flex-nowrap mt-3'>
                <div className="card border-none bg-transparent text-light" >
                    <img src={raj} className="card-img-top rounded-4 stateimg" alt="..."/>
                    <div className="card-body">
                        <p className='m-0 sm-13 darktextlight'>50+ Service Available </p>
                        <h3 className="card-title">Rajasthan</h3>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50 sm-13 ">View All</button>
                        {/* </Link> */}
                    </div>
                </div>
                <div className="card border-none bg-transparent text-light" >
                    <img src={kerla} className="card-img-top rounded-4 stateimg " alt="..."/>
                    <div className="card-body">
                        <p className='m-0 sm-13 darktextlight'>50+ Service Available </p>
                        <h3 className="card-title">Kerala</h3>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50 sm-13 ">View All</button>
                        {/* </Link> */}
                    </div>
                </div>
                <div className="card border-none bg-transparent text-light" >
                    <img src={delhi} className="card-img-top rounded-4 stateimg" alt="..."/>
                    <div className="card-body">
                        <p className='m-0 sm-13 darktextlight'>50+ Service Available </p>
                        <h3 className="card-title">Delhi</h3>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50 sm-13 ">View All</button>
                        {/* </Link> */}
                    </div>
                </div>
                <div className="card border-none bg-transparent text-light" >
                    <img src={delhi} className="card-img-top rounded-4 stateimg" alt="..."/>
                    <div className="card-body">
                        <p className='m-0 sm-13 darktextlight'>50+ Service Available </p>
                        <h3 className="card-title">Maharashtra</h3>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50 sm-13 ">View All</button>
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
                    <img src={delhi} className="card-img-top rounded-4 stateimg" alt="..."/>
                    <div className="card-body">
                        <p className='m-0 sm-13 darktextlight'>50+ Service Available </p>
                        <h3 className="card-title">Maharashtra</h3>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50 sm-13 ">View All</button>
                        {/* </Link> */}
                    </div>
                </div>
                <div className="card border-none bg-transparent text-light" >
                    <img src={hima} className="card-img-top rounded-4 stateimg " alt="..."/>
                    <div className="card-body">
                        <p className='m-0 sm-13 darktextlight'>50+ Service Available </p>
                        <h3 className="card-title">Himachal Pradesh</h3>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50 sm-13 ">View All</button>
                        {/* </Link> */}
                    </div>
                </div>
                <div className="card border-none bg-transparent text-light" >
                    <img src={uttar} className="card-img-top rounded-4 stateimg" alt="..."/>
                    <div className="card-body">
                        <p className='m-0 sm-13 darktextlight'>50+ Service Available </p>
                        <h3 className="card-title">Uttar Pradesh</h3>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50 sm-13 ">View All</button>
                        {/* </Link> */}
                    </div>
                </div>
                <div className="card border-none bg-transparent text-light" >
                    <img src={guja} className="card-img-top rounded-4 stateimg" alt="..."/>
                    <div className="card-body">
                        <p className='m-0 sm-13 darktextlight'>50+ Service Available </p>
                        <h3 className="card-title">Gujarat</h3>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50 sm-13 ">View All</button>
                        {/* </Link> */}
                    </div>
                </div>
                
            </div>
            <div className='d-flex flex-nowrap mt-3'>
                <div className="card border-none bg-transparent text-light" >
                    <img src={raj} className="card-img-top rounded-4 stateimg" alt="..."/>
                    <div className="card-body">
                        <p className='m-0 sm-13 darktextlight'>50+ Service Available </p>
                        <h3 className="card-title">Rajasthan</h3>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50 sm-13 ">View All</button>
                        {/* </Link> */}
                    </div>
                </div>
                <div className="card border-none bg-transparent text-light" >
                    <img src={kerla} className="card-img-top rounded-4 stateimg " alt="..."/>
                    <div className="card-body">
                        <p className='m-0 sm-13 darktextlight'>50+ Service Available </p>
                        <h3 className="card-title">Kerala</h3>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50 sm-13 ">View All</button>
                        {/* </Link> */}
                    </div>
                </div>
                <div className="card border-none bg-transparent text-light" >
                    <img src={delhi} className="card-img-top rounded-4 stateimg" alt="..."/>
                    <div className="card-body">
                        <p className='m-0 sm-13 darktextlight'>50+ Service Available </p>
                        <h3 className="card-title">Delhi</h3>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50 sm-13 ">View All</button>
                        {/* </Link> */}
                    </div>
                </div>
                <div className="card border-none bg-transparent text-light" >
                    <img src={delhi} className="card-img-top rounded-4 stateimg" alt="..."/>
                    <div className="card-body">
                        <p className='m-0 sm-13 darktextlight'>50+ Service Available </p>
                        <h3 className="card-title">Maharashtra</h3>
                        {/* <Link to="/"> */}
                        <button type="button " className="btn btn-lightbg w-50 sm-13 ">View All</button>
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
