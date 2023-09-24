import React from 'react'
import cm from "../../page 1 design images/icons8-community-100.png"

function Doubt() {
  return (
    <div>
        <div className="container-1 ">
                <div className="container-l d-flex">
            <div className='d-flex flex-column '>
            <div className="display-3 ms-5 mt-3 mb-3 ">Any Questions Any Doubt?</div>
            <div className='w-75 lh-lg fs-3 lh-base ms-5 lighttext fw-light'>Ask Legal Experts about any questions related to legal problems in the Community.</div>
            <button type="button" className="submit-btn ms-5 mb-5 mt-3">
                Ask Out  
          </button>
        </div>
        <div className='  w-25 mt-5 pt-4 ps-2 mb-5 '>
            <img src={cm} alt=''></img>
        </div>
        </div>
        
        </div>
        </div>
  )
}


export default Doubt
