import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import afv from './images/bail.png'

import WordDocumentGenerator from './WordDocumentGenerator';


  
  const ApplicationForBail = () => {
    const formFields1 = [
      { name: 'cause_title', label: 'Cause Title' },
      { name: 'fir_no', label: 'FIR No.' },
      { name: 'date', label: 'Date' },
      { name: 'section_of_ipc', label: 'Section of IPC' },
      { name: 'police_station_name', label: 'Police Station Name' },
      { name: 'date_of_arrest', label: 'Date of Arrest' },
      { name: 'complainant_daughter_name', label: 'Complainant Daughter\'s Name' },
      { name: 'complainant_name', label: 'Complainant Name' },
      { name: 'married_person_name', label: 'Married Person\'s Name' },
      { name: 'married_person_father_name', label: 'Married Person\'s Father\'s Name' },
      { name: 'address', label: 'Address' },
      { name: 'marriage_date', label: 'Marriage Date' },
      { name: 'full_name', label: 'Full Name' }
    ];
  
    return (
      <>
      <Navbar></Navbar>
      <div className="pt-5  container">
      <div className="row">
        <div className="col">
          <WordDocumentGenerator
          formFields={formFields1}
          templateUrl="https://aireply.000webhostapp.com/documents/ApplicationForBail.docx"
          fileName="ApplicationForRegularBail.docx"
        />
        </div>
        <div className="col d-flex justify-content-center align-items-center flex-column">
        <p className='fs-5 mb-4 lighttext'>Affidavit For Regular Bail</p>
          <img className='w-50 h-90 border border-secondary-subtle shadow' src={afv } alt="" srcset="" />
        </div>
      </div>

    </div>
      <Footer></Footer>
</>
     

    );
  };
  
  export default ApplicationForBail;
  