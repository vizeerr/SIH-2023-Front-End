import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DocumentGenerator from './DocumentGenerator';
import bailImage from './images/YearGap.png'

const bailFormFields = [
  {
    name: 'FIRNo',
    label: 'FIR No.',
  },
  {
    name: 'Date',
    label: 'Date',
  },
  {
    name: 'IPCSection',
    label: 'Section of IPC',
  },
  {
    name: 'PoliceStation',
    label: 'Police Station Name',
  },
  {
    name: 'DateOfArrest',
    label: 'Date of Arrest',
  },
  {
    name: 'ComplainantDaughterName',
    label: "Complainant's Daughter's Name",
  },
  {
    name: 'ComplainantName',
    label: "Complainant's Name",
  },
  {
    name: 'MarriedPersonName',
    label: "Married Person's Name",
  },
  {
    name: 'MarriedPersonFatherName',
    label: "Married Person's Father's Name",
  },
  {
    name: 'Address',
    label: 'Address',
  },
  {
    name: 'MarriageDate',
    label: 'Marriage Date',
  },
  {
    name: 'YourName',
    label: 'Your Name',
  },
];

const AppliForBail = () => {
  return (
    <>
      <Navbar />
      <div className="pt-5 container">
        <div className="row">
          <div className="col">
            <DocumentGenerator
              templateUrl="https://example.com/documents/ApplicationForRegularBail.docx"
              formFields={bailFormFields}
            />
          </div>
          <div className="col d-flex justify-content-center align-items-center flex-column">
            <p className="fs-5 mb-4 lighttext">Application For Regular Bail</p>
            <img
              className="w-50 h-90 border border-secondary-subtle shadow"
              src={bailImage}
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AppliForBail;
