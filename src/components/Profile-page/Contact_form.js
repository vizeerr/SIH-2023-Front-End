import React from 'react'

function Contact_form() {
  return (
    <div className="form-comp container-l mt-5 mb-5 p-5 ">
      <div className="container mt-5">
        <div >
        <h1 className='signup-heading'>Fill the form to get contact number </h1>
        <form className='form-elements d-flex gap-2'>
        <label className='fs-4' for="fname" >Your Name</label>
        <input className='input-tag' type="text" id="fname" name="fname" placeholder='Your Name'></input>
        <label className='fs-4' for="email">Your Email</label>
        <input className='input-tag' type="email" id="email" name="email" placeholder='yourname@gmail.com'></input>
        <label className='fs-4' for="phone">Your Phone number</label>
      <input className='input-tag' type="tel" id="phone" placeholder='+917333399997' name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input>
      <label className='fs-4' for="state">Select State</label>
         <select class="select-tag p-3 rounded  jp-form-input py-lg-2" required>
            <option value="AN">Andaman and Nicobar Islands</option>
            <option value="AP">Andhra Pradesh</option>
            <option value="AR">Arunachal Pradesh</option>
            <option value="AS">Assam</option>
            <option value="BR">Bihar</option>
            <option value="CH">Chandigarh</option>
            <option value="CT">Chhattisgarh</option>
            <option value="DN">Dadra and Nagar Haveli</option>
            <option value="DD">Daman and Diu</option>
            <option value="DL">Delhi</option>
            <option value="GA">Goa</option>
            <option value="GJ">Gujarat</option>
            <option value="HR">Haryana</option>
            <option value="HP">Himachal Pradesh</option>
            <option value="JK">Jammu and Kashmir</option>
            <option value="JH">Jharkhand</option>
            <option value="KA">Karnataka</option>
            <option value="KL">Kerala</option>
            <option value="LA">Ladakh</option>
            <option value="LD">Lakshadweep</option>
            <option value="MP">Madhya Pradesh</option>
            <option value="MH">Maharashtra</option>
            <option value="MN">Manipur</option>
            <option value="ML">Meghalaya</option>
            <option value="MZ">Mizoram</option>
            <option value="NL">Nagaland</option>
            <option value="OR">Odisha</option>
            <option value="PY">Puducherry</option>
            <option value="PB">Punjab</option>
            <option value="RJ">Rajasthan</option>
            <option value="SK">Sikkim</option>
            <option value="TN">Tamil Nadu</option>
            <option value="TG">Telangana</option>
            <option value="TR">Tripura</option>
            <option value="UP">Uttar Pradesh</option>
            <option value="UT">Uttarakhand</option>
            <option value="WB">West Bengal</option></select>

         </form>
        <button className='submit-btn'>Submit</button>
  
     </div>
       </div>
         </div>    
    
  )
}

export default Contact_form