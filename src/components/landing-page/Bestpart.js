import React from 'react'
import bestimg from '../../page 1 design images/bestimg.jpeg'
import bribe from '../../page 1 design images/icons8-bribery-100.png'
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
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            </div>
                            <div className="card pt-3 pb-3 mb-4 ms-4">
                            <img src={bribe} className="card-img-top m-auto" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            </div>
                            <div className="card pt-3 pb-3 mt-4 me-5 ">
                            <img src={bribe} className="card-img-top m-auto" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            </div>
                            <div className="card pt-3 pb-3 mt-4 ms-4 ">
                            <img src={bribe} className="card-img-top m-auto" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            </div>

                    </div>
                    

            </div>
        </div>
    </div>
  )
}

export default Bestpart
