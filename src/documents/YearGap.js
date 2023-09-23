
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DocumentGenerator from "./DocumentGenerator"
import afv from './images/YearGap.png'

const yearGapFormFields = [
  {
    name: 'fullName',
    label: "Your Full Name",
  },
  {
    name: 'fatherName',
    label: "Father's Name",
  },
  {
    name: 'degree',
    label: "Degree",
  },
  {
    name: 'dept',
    label: "Dept",
  },
  {
    name: 'collegeName',
    label: "College Name",
  },
  {
    name: 'mainUniv',
    label: "Main University",
  },
  {
    name: 'passedYear',
    label: "Passed Year",
  },
  {
    name: 'gapYearDuration',
    label: "Gap Year Duration",
  },
  {
    name: 'gapYear',
    label: "Gap Year",
  },
  {
    name: 'dob',
    label: "DOB",
  },
  {
    name: 'newAdm',
    label: "New Admission",
  },
  {
    name: 'newDept',
    label: "New Department",
  },
];
  
  const YearGapDocument = () => {
    return (
      <>
      <Navbar></Navbar>
      <div className="pt-5  container">
      <div className="row">
        <div className="col">
        <DocumentGenerator
        templateUrl='https://aireply.000webhostapp.com/documents/YearGap.docx'
        formFields={yearGapFormFields}
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
  