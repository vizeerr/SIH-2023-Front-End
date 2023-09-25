
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import afv from './images/deathcertif.png'

import WordDocumentGenerator from './WordDocumentGenerator';


  
  const DeathCertif = () => {
    const formFields1 = [
      { name: 'applicant_name', label: 'Applicant Name' },
      { name: 'applicant_father_husband_ame', label: 'Applicant Father/Husband Name' },
      { name: 'applicant_address', label: 'Applicant Address' },
      { name: 'name_of_deceased', label: 'Name of Deceased' },
      { name: 'date_of_death', label: 'Date of Death' },
      { name: 'relation_of_deceased_with_applicant', label: 'Relation of Deceased with Applicant' },
      { name: 'date_of_application', label: 'Date of Application' },
    ];
  
    
    return (
      <>
      <Navbar></Navbar>
      <div className="pt-5  container">
      <div className="row">
        <div className="col">
          <WordDocumentGenerator
          formFields={formFields1}
          templateUrl="https://aireply.000webhostapp.com/documents/DeathCertificate.docx"
          fileName="DeathCertificate.docx"
        />
        </div>
        <div className="col d-flex justify-content-center align-items-center flex-column">
        <p className='fs-5 mb-4 lighttext'>Death Certificate</p>
          <img className='w-50 h-90 border border-secondary-subtle shadow' src={afv } alt="" srcset="" />
        </div>
      </div>

    </div>
      <Footer></Footer>
</>
     

    );
  };
  
  export default DeathCertif;
  