import React from 'react'
import haplog from '../../page 1 design images/haplog.jpeg'
import blstar from '../../page 1 design images/icons8-rating-100.png'
import flstar from '../../page 1 design images/icons8-star-50.png'

const Userfeed = () => {
  return (
    <div>
      <div className='container-l mt-5 mb-5 w-100 h-100 overflow-hidden'>
        <div className='w-100 text-center position-relative x-3'>
            <h1 className="display-3"> What They Are Talking About WakilMart</h1>
            <button type="button" className="btn btn-brown float-end me-5"> View More</button>
        </div>
        <div id="userfeedback" className=" carousel carousel-dark slide mt-5 w-100">
    
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#userfeedback" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#userfeedback" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#userfeedback" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="container carousel-inner carol-provid">
      <div className="carousel-item mb-5 active" data-bs-interval="10000">
        <div className="d-flex flex-wrap">
            <div className='d-flex flex-nowrap mb-3 mt-5'>
                <div class="card mb-3" >
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src={haplog} class="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div className='d-flex flex-wrap justify-content-start '>
                                    <div className='d-flex flex-wrap justify-content-start'>
                                        <img src={flstar} alt="" className='verifico'/>
                                        <img src={flstar} alt="" className='verifico'/>
                                        <img src={flstar} alt="" className='verifico'/>
                                        <img src={flstar} alt="" className='verifico'/>
                                        <img src={blstar} alt="" className='verifico'/>
                                    </div>
                                    <p className=' lighttext w-100 '>4.0 </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-3" >
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src={haplog} class="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div className='d-flex flex-wrap justify-content-start '>
                                    <div className='d-flex flex-wrap justify-content-start'>
                                        <img src={flstar} alt="" className='verifico'/>
                                        <img src={flstar} alt="" className='verifico'/>
                                        <img src={flstar} alt="" className='verifico'/>
                                        <img src={flstar} alt="" className='verifico'/>
                                        <img src={blstar} alt="" className='verifico'/>
                                    </div>
                                    <p className=' lighttext w-100 '>4.0 </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex flex-nowrap mb-3 mt-5'>
                <div class="card mb-3" >
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src={haplog} class="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div className='d-flex flex-wrap justify-content-start '>
                                    <div className='d-flex flex-wrap justify-content-start'>
                                        <img src={flstar} alt="" className='verifico'/>
                                        <img src={flstar} alt="" className='verifico'/>
                                        <img src={flstar} alt="" className='verifico'/>
                                        <img src={flstar} alt="" className='verifico'/>
                                        <img src={blstar} alt="" className='verifico'/>
                                    </div>
                                    <p className=' lighttext w-100 '>4.0 </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-3" >
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src={haplog} class="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div className='d-flex flex-wrap justify-content-start '>
                                    <div className='d-flex flex-wrap justify-content-start'>
                                        <img src={flstar} alt="" className='verifico'/>
                                        <img src={flstar} alt="" className='verifico'/>
                                        <img src={flstar} alt="" className='verifico'/>
                                        <img src={flstar} alt="" className='verifico'/>
                                        <img src={blstar} alt="" className='verifico'/>
                                    </div>
                                    <p className=' lighttext w-100 '>4.0 </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="2000">
      </div>
      <div className="carousel-item">
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#userfeedback" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#userfeedback" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
      </div>
    
    </div>
  )
}

export default Userfeed
