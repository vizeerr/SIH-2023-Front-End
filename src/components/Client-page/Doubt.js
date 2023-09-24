import React from 'react'
import cm from "../../page 1 design images/icons8-community-100.png"

function Doubt() {
  return (
        <div className="container border-top pt-5 pb-4">
                <div className=" d-flex mt-3">
            <div className='col d-flex flex-column '>
            <div className="display-3 ">Any Questions Any Doubt?</div>
            <div className='w-75 lh-lg fs-3 lh-base lighttext fw-light mt-3'>Ask Legal Experts about any questions related to legal problems in the Community.</div>
            <button type="button" className="btn btn-brown mt-4" style={{width: 15 + "%"}}> Ask Out</button>
        </div>
        <div className='col-2 d-flex align-items-center'>
            <img src={cm} alt='' className='w-75'></img>
        </div>
        </div>
        
        </div>
  )
}


export default Doubt
