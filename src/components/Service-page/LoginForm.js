import React from 'react'
import img from "../servicepageimages/commimage.jpg"
import search from "../servicepageimages/search.png"
function LoginForm() {
  return (
    <div className="container-l mt-5 mb-5 p-5 ">
      <div className="container mt-5">
      <div className='form-comp'>
      <div className='left-comp'>
        <h1 className='signup-heading'>Sign up and get clients today !</h1>
        <form className='form-elements'>
        <label for="fname" >Full Name</label>
        <input type="text" id="fname" name="fname" placeholder='Your Name'></input>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder='yourname@gmail.com'></input>
        <label for="phone">Phone number</label>
        <input type="tel" id="phone" placeholder='+917333399997' name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input>
        <label for="pwd">Password</label>
        <input type="password" id="pwd" name="pwd" placeholder='*******'></input>
        <label for="cpwd">Confirm Password</label>
        <input type="password" id="cpwd" name="cpwd" placeholder='*******'></input>
        </form>
        <div></div>
        <button className='signup-btn'>Sign Up</button>
        <button className='google-btn'><img src={search} width={20}/>Sign Up with google</button>
        <p className='mt-3'>Already have an account?<a href='#'>Login Here</a></p>
      </div>
      <img src={img} className='signup-image'/>

    </div>
      </div>
    </div>    
  )
}

export default LoginForm





