
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import afv from './images/changeinname.png'

import WordDocumentGenerator from './WordDocumentGenerator';


  
  const ChangeInName = () => {
    const formFields1 = [
      { name: 'university_name', label: 'University Name' },
      { name: 'your_current_name', label: 'Your Current Name' },
      { name: 'your_father_name', label: 'Your Father\'s Name' },
      { name: 'your_married_name', label: 'Your Married Name' },
      { name: 'husband_name', label: 'Husband\'s Name' },
      { name: 'your_age', label: 'Your Age' },
      { name: 'your_address', label: 'Your Address' },
      { name: 'bachelor_degree', label: 'Bachelor\'s Degree' },
      { name: 'college_name', label: 'College Name' },
      { name: 'starting_year', label: 'Starting Year of Degree' },
      { name: 'ending_year', label: 'Ending Year of Degree' },
      { name: 'college_roll_no', label: 'College Roll No.' },
      { name: 'marriage_date', label: 'Marriage Date' },
      { name: 'appointed_position', label: 'Appointed Position' },
      { name: 'name_of_corporation', label: 'Name of Corporation' },
      { name: 'verification_location', label: 'Verification Location' },
      { name: 'verification_date', label: 'Verification Date' },
      { name: 'verification_month_and_year', label: 'Verification Month and Year' },
    ];

    
    
    return (
      <>
      <Navbar></Navbar>
      <div className="pt-5  container">
      <div className="row">
        <div className="col">
          <WordDocumentGenerator
          formFields={formFields1}
          templateUrl="https://aireply.000webhostapp.com/documents/ChangeInName.docx"
          fileName="ChangeInName.docx"
        />
        </div>
        <div className="col d-flex justify-content-center align-items-center flex-column">
        <p className='fs-5 mb-4 lighttext'>Affidavit For Change In Name</p>
          <img className='w-50 h-90 border border-secondary-subtle shadow' src={afv } alt="" srcset="" />
        </div>
      </div>

    </div>
      <Footer></Footer>
</>
     

    );
  };
  
  export default ChangeInName;
  