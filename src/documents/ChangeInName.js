import React from 'react';
import DocumentGenerator from './DocumentGenerator';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const changeInNameFormFields = [
  {
    name: 'universityName',
    label: 'University Name',
  },
  {
    name: 'currentName',
    label: 'Your Current Name',
  },
  {
    name: 'fatherName',
    label: "Your Father's Name",
  },
  {
    name: 'marriedName',
    label: "Your Married Name",
  },
  {
    name: 'husbandName',
    label: "Husband's Name",
  },
  {
    name: 'yourAge',
    label: 'Your Age',
  },
  {
    name: 'yourAddress',
    label: 'Your Address',
  },
  {
    name: 'bachelorsDegree',
    label: "Bachelor's Degree",
  },
  {
    name: 'collegeName',
    label: 'College Name',
  },
  {
    name: 'collegeStartingYear',
    label: 'College Starting Year',
  },
  {
    name: 'collegeEndingYear',
    label: 'College Ending Year',
  },
  {
    name: 'collegeRollNo',
    label: 'College Roll No.',
  },
  {
    name: 'marriageDate',
    label: 'Marriage Date',
  },
  {
    name: 'appointedPosition',
    label: 'Appointed Position',
  },
  {
    name: 'corporationName',
    label: 'Name of Corporation',
  },
  {
    name: 'verificationLocation',
    label: 'Verification Location',
  },
  {
    name: 'verificationDate',
    label: 'Verification Date',
  },
  {
    name: 'verificationMonthYear',
    label: 'Verification Month and Year',
  },
];

const ChangeInName = () => {
  return (
    <>
      <Navbar></Navbar>
    <div className="pt-5 container">
      <div className="row">
        <div className="col">
          <DocumentGenerator
            templateUrl='https://aireply.000webhostapp.com/documents/ChangeInName.docx'
            formFields={changeInNameFormFields}
          />
        </div>
        <div className="col d-flex justify-content-center align-items-center flex-column">
          <p className='fs-5 mb-4 lighttext'>Affidavit For Change In Name </p>
          {/* Add your image here */}
        </div>
      </div>
    </div>
    <Footer></Footer>
</>
  );
};

export default ChangeInName;
