import React from 'react';
import DocumentGenerator from './DocumentGenerator';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const deathCertificateFormFields = [
  {
    name: 'applicantName',
    label: "Applicant's Name",
  },
  {
    name: 'applicantFatherName',
    label: "Applicant's Father/Husband Name",
  },
  {
    name: 'applicantAddress',
    label: "Applicant's Address",
  },
  {
    name: 'deceasedName',
    label: 'Name of Deceased',
  },
  {
    name: 'dateOfDeath',
    label: 'Date of Death (dd/mm/yyyy)',
  },
  {
    name: 'relationWithDeceased',
    label: 'Relation of Deceased with Applicant',
  },
  {
    name: 'dateOfApplication',
    label: 'Date of Application',
  },
];

const DeathCertificate = () => {
  return (
    <>
      <Navbar></Navbar>
    <div className="pt-5 container">
      <div className="row">
        <div className="col">
          <DocumentGenerator
            templateUrl='https://aireply.000webhostapp.com/documents/DeathCertificate.docx'
            formFields={deathCertificateFormFields}
          />
        </div>
        <div className="col d-flex justify-content-center align-items-center flex-column">
          <p className='fs-5 mb-4 lighttext'>Death Certificate Document</p>
          {/* Add your image here */}
        </div>
      </div>
    </div>
    <Footer></Footer>
</>
  );
};

export default DeathCertificate;
