import React from 'react'
import hplogin from '../../page 1 design images/haplog.jpeg'
// import lbag from '../../page 1 design images/login back.jpeg'
import gico from '../../page 1 design images/icons8-google-100.png'
const Loginonpage = () => {
  return (
    <div className='loginonpage container-l p-0 m-0  w-100 h-100 d-flex flex-nowrap'>
      <div className="row w-100 ">
        <div className="col loginbg" >
            <div className="container-fluid p-5 positon-relative w-75">
            
            <div>
              <h1 className="display-4 "> Signup Here !</h1>
              <form>
              <div className="mb-3">
                <label for="fullname" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="fullname"/>
              </div>
              <div className="mb-3">
                <label for="fullname" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="fullname"/>
              </div>
              <div className="mb-3">
                <label for="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label for="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password"/>
              </div>
              <div className="mb-3">
                <label for="cpassword" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="cpassword"/>
              </div>
              <p className='lighttext'>Already have an account? <a href="/">Login Here</a></p>
              <button type="submit" className="btn btn-brown w-25">Sign Up</button>
              </form>

              <div className=' w-75 mt-5'> 
              <div className='d-flex flex-nowrap align-items-center justify-content-center'>
                <hr className='w-50 me-2'/>
                <p className='m-0'>OR</p>
                <hr className='w-50 ms-2'/>
              </div>
                <div className='d-flex mt-4 flex-nowrap align-items-center justify-content-center'>
                <img style={{width:30+"px"}} src={gico} alt="" />
                <p className='m-0 p-0 ms-2'> Sign Up With Google</p>

                </div>
              </div>
            </div>
            </div>
        </div>
        <div className="col m-0 p-0 text-end w-75">
          <img className='w-100' src={hplogin} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Loginonpage
