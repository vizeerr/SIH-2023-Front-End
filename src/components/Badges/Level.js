import React from 'react'
import iron from "../Service-Login-Images/iron-icon.svg"
import lock from "../Service-Login-Images/lock-icon.svg"

function Level() {
  return (
    <div className='container level-comp'>
      <div>
        <h4>Your League</h4>
        <p>To level up your league, stay on top of the leaderboard each week</p>
        <div className='d-flex badges'>
           <div className='d-flex flex-column gap-2  align-items-center me-3'>
           <img className="social-icons" src ={iron}/>
           <span>Iron</span>
           </div>
           <hr className="badge-line" />
           <div className='d-flex flex-column gap-2 align-items-center ms-3 me-3'>
           <img className="social-icons" src ={lock}/>
           <span>Silver</span>
           </div>
           <hr className="badge-line" />
           <div className='d-flex flex-column gap-2 align-items-center ms-3 me-3'>
           <img className="social-icons" src ={lock}/>
           <span>Gold</span>
           </div>
           <hr className="badge-line" />
           <div className='d-flex flex-column gap-2 align-items-center '>
           <img className="social-icons" src ={lock}/>
           <span>Diamond</span>
           </div>
           <hr className="badge-line" />
           <div className='d-flex flex-column gap-2 align-items-center'>
           <img className="social-icons" src ={lock}/>
           <span>Platinum</span>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Level