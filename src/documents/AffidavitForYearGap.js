/*import React, { useState } from 'react';
import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import PizZipUtils from 'pizzip/utils/index.js';
import { saveAs } from 'file-saver';
import afv from './images/YearGap.png'

function loadFile(url, callback) {
  PizZipUtils.getBinaryContent(url, callback);
}

const AffidavitForYearGap = () => {
  const [formData, setFormData] = useState({
    YourName: '',
    FatherName: '',
    Degree: '',
    Dept: '',
    CollegeName: '',
    MainUniv: '',
    PassedYear: '',
    GapYear: '',
    DOB: '',
    NewAdm: '',
    NewDept: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const generateDocument = () => {
    loadFile(
      'https://aireply.000webhostapp.com/documents/YearGap.docx',
      function (error, content) {
        if (error) {
          throw error;
        }
        var zip = new PizZip(content);
        var doc = new Docxtemplater(zip, {
          paragraphLoop: true,
          linebreaks: true,
        });
        doc.setData(formData);
        try {
          // render the document (replace all occurrences of form fields)
          doc.render();
        } catch (error) {
          // Handle rendering errors
          console.error('Error rendering document:', error);
          return;
        }
        var out = doc.getZip().generate({
          type: 'blob',
          mimeType:
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        });
        saveAs(out, 'AffidavitForYearGap.docx');
      }
    );
  };

  return (
    <div className="pt-5 ">
      <div className="row">
        <div className="col">
          <h3 className='display-3 mb-4'>Fill out the form</h3>
          <form className='tempinpu mb-3'>
            {Object.keys(formData).map((key) => (
              <div className="mb-3" key={key}>
                <label className="mb-2" htmlFor={key}>{key}:</label>
                <input
                  type="text"
                  className="form-control"
                  id={key}
                  name={key}
                  value={formData[key]}
                  onChange={handleInputChange}
                />
              </div>
            ))}
          </form>
        </div>
        <div className="col d-flex justify-content-center align-items-center flex-column">
        <p className='fs-5 mb-4 lighttext'>Affidavit For Year Gap</p>
          <img className='w-50 h-90 border border-secondary-subtle shadow' src={afv } alt="" srcset="" />
        </div>
        
      </div>
      <button type="button" onClick={generateDocument} className="btn btn-brown me-5"> Download</button>
    </div>
  );
};

export default AffidavitForYearGap;*/
