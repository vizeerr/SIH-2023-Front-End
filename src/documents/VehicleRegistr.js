
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import afv from './images/VehiclRegist.png'

import WordDocumentGenerator from './WordDocumentGenerator';


  
  const VehicleRegistr = () => {
    const formFields1 = [
      { name: 'full_name', label: 'Full Name' },
      { name: 'father_name', label: 'Father\'s Name' },
      { name: 'your_address', label: 'Your Address' },
      { name: 'vehicle_make_and_model', label: 'Vehicle Make and Model' },
      { name: 'registration_no', label: 'Registration No.' },
      { name: 'chassis_no', label: 'Chassis No.' },
      { name: 'engine_no', label: 'Engine No.' },
      { name: 'vehicle_model', label: 'Vehicle Model' },
      { name: 'seller_name', label: 'Seller Name' },
      { name: 'seller_father_name', label: 'Seller Father\'s Name' },
      { name: 'seller_address', label: 'Seller Address' },
      { name: 'date', label: 'Date' },
      { name: 'time', label: 'Time (AM/PM)' },
      { name: 'verification_location', label: 'Verification Location' },
      { name: 'verification_date', label: 'Verification Date' },
    ];  
    return (
      <>
      <Navbar></Navbar>
      <div className="pt-5  container">
      <div className="row">
        <div className="col">
          <WordDocumentGenerator
          formFields={formFields1}
          templateUrl="https://aireply.000webhostapp.com/documents/VehicleRegistration.docx"
          fileName="VehicleRegistration.docx"
        />
        </div>
        <div className="col d-flex justify-content-center align-items-center flex-column">
        <p className='fs-5 mb-4 lighttext'>Vehicle Registration</p>
          <img className='w-50 h-90 border border-secondary-subtle shadow' src={afv } alt="" srcset="" />
        </div>
      </div>

    </div>
      <Footer></Footer>
</>
     

    );
  };
  
  export default VehicleRegistr;
  