import React from 'react';
import DocumentGenerator from './DocumentGenerator';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const vehicleRegistrationFormFields = [
  {
    name: 'fullName',
    label: 'Your Full Name',
  },
  {
    name: 'fatherName',
    label: "Your Father's Name",
  },
  {
    name: 'address',
    label: 'Your Address',
  },
  {
    name: 'vehicleMakeModel',
    label: 'Vehicle Make and Model',
  },
  {
    name: 'registrationNo',
    label: 'Registration No.',
  },
  {
    name: 'chassisNo',
    label: 'Chassis No.',
  },
  {
    name: 'engineNo',
    label: 'Engine No.',
  },
  {
    name: 'vehicleModel',
    label: 'Vehicle Model',
  },
  {
    name: 'sellerName',
    label: "Seller's Name",
  },
  {
    name: 'sellerFatherName',
    label: "Seller's Father's Name",
  },
  {
    name: 'sellerAddress',
    label: "Seller's Address",
  },
  {
    name: 'date',
    label: 'Date',
  },
  {
    name: 'time',
    label: 'Time',
  },
  {
    name: 'verificationLocation',
    label: 'Verification Location',
  },
  {
    name: 'verificationDate',
    label: 'Verification Date',
  },
];

const VehicleRegistration = () => {
  return (
    <>
      <Navbar></Navbar>
    <div className="pt-5 container">
      <div className="row">
        <div className="col">
          <DocumentGenerator
            templateUrl='https://aireply.000webhostapp.com/documents/VehicleRegistration.docx'
            formFields={vehicleRegistrationFormFields}
          />
        </div>
        <div className="col d-flex justify-content-center align-items-center flex-column">
          <p className='fs-5 mb-4 lighttext'>Vehicle Registration Document</p>
          {/* Add your image here */}
        </div>
      </div>
    </div>
    <Footer></Footer>
</>
  );
};

export default VehicleRegistration;
