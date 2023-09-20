import React from 'react'
import commimage from "../servicepageimages/commimage.jpg"
import icon from "../servicepageimages/icon.png"
function Tools() {
  return (
    <div className='tool-box'>
       <h1 className='tool-heading'>Built-In Tools For Better Productivity</h1>
       <div className='tool-box1'>
        <ul className='tool-list'>
            <li className='f'>
            <img src={icon} width={50} height={35}/>
              <div>
              <h4 className='tools-features'>Analytics</h4>
              <p className='tools-content'>A dashboard for showcasing your analytics.Monitor your growth ,Reach and track your ads and promotion</p>
              <hr className='hr-tag'/>
              </div>
            </li>
            <li className='f'>
            <img src={icon} width={50} height={35}/>
            <div>
              <h4 className='tools-features'>Referral</h4>
              <p className='tools-content'>Referral Program where we let others and you refer to other people.Increase your reach and get quality clients</p>
              <hr className='hr-tag'/>
              </div>
            </li>
            <li className='f'>
            <img src={icon} width={50} height={35}/>
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