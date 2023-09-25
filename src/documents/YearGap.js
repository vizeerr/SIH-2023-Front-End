
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import afv from './images/YearGap.png'

import WordDocumentGenerator from './WordDocumentGenerator';


  
  const YearGapDocument = () => {
    const formFields1 = [
      { name: 'full_name', label: 'Full Name' },
      { name: 'father_name', label: 'Father\'s Name' },
      { name: 'degree', label: 'Degree' },
      { name: 'dept', label: 'Department' },
      { name: 'college_name', label: 'College Name' },
      { name: 'main_univ', label: 'Main University' },
      { name: 'passed_year', label: 'Year of Passing' },
      { name: 'gap_year_duration', label: 'Gap Year Duration' },
      { name: 'year', label: 'Year' },
      { name: 'dob', label: 'Date of Birth' },
      { name: 'new_adm', label: 'New Admission' },
      { name: 'new_dept', label: 'New Department' },
    ];
    
    return (
      <>
      <Navbar></Navbar>
      <div className="pt-5  container">
      <div className="row">
        <div className="col">
          <WordDocumentGenerator
          formFields={formFields1}
          templateUrl="https://aireply.000webhostapp.com/documents/YearGap.docx"
          fileName="AffidavitForYearGap.docx"
        />
        </div>
        <div className="col d-flex justify-content-center align-items-center flex-column">
        <p className='fs-5 mb-4 lighttext'>Affidavit For Year Gap</p>
          <img className='w-50 h-90 border border-secondary-subtle shadow' src={afv } alt="" srcset="" />
        </div>
      </div>

    </div>
      <Footer></Footer>
</>
     

    );
  };
  
  export default YearGapDocument;
  