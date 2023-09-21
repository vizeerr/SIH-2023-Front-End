import React from 'react'
import commimage from "../../service page images/pexels-pavel-danilyuk-6340688.jpg"
function Community() {
  return (
    <div className='q'>
        <div className='comm-comp1'>
            <h1 className='comm-heading'>Get Community Access</h1>
            <p className='comm-subheading'>Talk,Engage and Create Friends</p>
        </div>
        <div className='comm-comp'>
            <img src={commimage} className="comm-image" width={1124} height={384} />
            <p className='comm-content'>Get access to our Community Member Group where you can engage with other members who are related to your fields.Connect with them ,Create friends and lot more</p>
        </div>
        <div className='leads-comp1'>
            <h1 className='comm-heading'>Lead For Your Service</h1>
            <p className='comm-subheading'>Generate Leads,Get Larger Audience and Earn More</p>
        </div>
        <div className='comm-comp2'>
            <p className='comm-content'>Generate leads for the services you provide at no cost and no limits .Showcase your work, skills and portfolio to larger audience.Get more clients,grow your business and build a better community</p>
            <img src={commimage} className="comm-image" width={1124} height={384} />
        </div>
        <div className='comm-comp1'>
            <h1 className='comm-heading'>Incetive</h1>
            <p className='comm-subheading'>Talk,Engage and Create Friends</p>
        </div>
        <div className='comm-comp'>
            <img src={commimage} className="comm-image" width={1124} height={384} />
            <p className='comm-content'>Get access to our Community Member Group where you can engage with other members who are related to your fields.Connect with them ,Create friends and lot more</p>
        </div>
         <div className='leads-comp1'>
            <h1 className='comm-heading'>Promote Yourself</h1>
            <p className='comm-subheading'>Promote Your Services,Reach more clients,Bring value</p>
        </div>
        <div className='comm-comp2'>
            <p className='comm-content'>Promote the services you offer on the platform variety of ads you can choose from. Reach a quality audience that are looking for the services you offer    </p>
            <img src={commimage} className="comm-image" width={1124} height={384} />
        </div>
    </div>
  )
}

export default Community