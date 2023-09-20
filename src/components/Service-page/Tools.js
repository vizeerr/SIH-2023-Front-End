import React from 'react'
import commimage from "../../service page images/pexels-tima-miroshnichenko-7567529.jpg"
import icon from "../../service page images/icons8-graph-100.png"
function Tools() {
  return (
    <div className='tool-box container '>
       <h1 className='display-3 text-center'>Built-In Tools For Better Productivity</h1>
       <div className='tool-box1'>
        <ul className='tool-list'>
            <li className='f d-flex flex-wrap flex-column'>
            <div className='d-flex align-items-center'>
              <img src={icon} width={50} height={50}/>
              <h3 className='tools-features m-0'>Analytics</h3>
            </div>
              <div>
              <p className='tools-content ms-5 fs-4'>A dashboard for showcasing your analytics.Monitor your growth ,Reach and track your ads and promotion</p>
              </div>
              <hr className='hr-tag ms-5 w-75'/>
            </li>
            <li className='f'>
            <img src={icon} width={50} height={50}/>
            <div>
              <h4 className='tools-features'>Referral</h4>
              <p className='tools-content'>Referral Program where we let others and you refer to other people.Increase your reach and get quality clients</p>
              <hr className='hr-tag'/>
              </div>
            </li>
            <li className='f'>
            <img src={icon} width={50} height={50}/>
                <div>
              <h4 className='tools-features'>Gamified</h4>
              <p className='tools-content'>Weekly dashboards that rank's according to your popularity,reach,ratings,reviews and that lead you generate</p>
              <hr className='hr-tag'/>
              </div>
            </li>
            
        </ul>
        <img src={commimage} className='tool-image'/>
       </div>
    </div>
  )
}

export default Tools