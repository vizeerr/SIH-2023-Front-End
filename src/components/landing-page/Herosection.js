import React from 'react'
import loj from '../../page 1 design images/loj.png'
import searchbtn from '../../page 1 design images/searchbtn.png'
import legalico from '../../page 1 design images/legalico.png'
import transpico from '../../page 1 design images/transpico.png'
import convico from '../../page 1 design images/convico.png'
import expertico from '../../page 1 design images/expertico.png'


const Herosection = () => {
  return (
    <div className="container-fluid mb-5">
      <div className="hero d-flex justify-content-between">
        <div className="leftarea mt-4">
            <h1 className="display-1 head-land ">High Quality Legal Services </h1>
            <p className='fs-1 fw-light'>Finding a right Legal Service Provider can be difficult but not anymore</p>
            <form className="w-75 align-middle d-flex search rounded-pill mt-4 mb-4" role="search">
                <input className="form-control me-2 border-none" type="search" placeholder="Search" aria-label="Search"/>
                <img className='searchlog' src={searchbtn} alt="" />
            </form>

            <div className="searchsuggest d-flex align-middle">
                <p className= "fs-5 m-0"> Popular: </p>
                <div className="badges ">
                    <span className="badge rounded-pill custpopbadge ">Primary</span>
                    <span className="badge rounded-pill custpopbadge">Primary</span>
                    <span className="badge rounded-pill custpopbadge">Primary</span>
                    <span className="badge rounded-pill custpopbadge">Primary</span>

                </div>
            </div>
            <div className=" showtabs d-flex justify-content-between flex-wrap">
                <div className="card border-none mt-5">
                    <div className="row d-flex justify-content-between align-middle ">
                        <div className="col-md-2 p-0">
                            <img src={convico}  alt="..."/>
                        </div>
                        <div className="col ">
                        <div className="card-body p-0">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to.</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="card border-none mt-5">
                    <div className="row d-flex justify-content-between align-middle ">
                        <div className="col-md-2 p-0">
                            <img src={expertico} alt="..."/>
                        </div>
                        <div className="col ">
                        <div className="card-body p-0">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to.</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="card border-none mt-5">
                    <div className="row d-flex justify-content-between align-middle ">
                        <div className="col-md-2 p-0">
                            <img src={transpico} alt="..."/>
                        </div>
                        <div className="col ">
                        <div className="card-body p-0">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to.</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="card border-none mt-5">
                    <div className="row d-flex justify-content-between align-middle ">
                        <div className="col-md-2 p-0">
                            <img src={legalico} alt="..."/>
                        </div>
                        <div className="col ">
                        <div className="card-body p-0">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to.</p>
                        </div>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
        <div className="rightarea">
        <img className="rounded float-end" src={loj} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Herosection
