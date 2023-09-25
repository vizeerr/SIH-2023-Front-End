import React, { useState } from 'react';
import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import PizZipUtils from 'pizzip/utils/index.js';
import { saveAs } from 'file-saver';

function loadFile(url, callback) {
  PizZipUtils.getBinaryContent(url, callback);
}

const DocumentGenerator = ({ templateUrl, formFields }) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const generateDocument = () => {
    loadFile(templateUrl, function (error, content) {
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
      saveAs(out, 'GeneratedDocument.docx');
    });
  };

  return (
    <div className="document-generator mb-5 mt-5">
      <h3 className='display-3 mb-4'>Fill out the form</h3>
      <form className='tempinpu mb-3'>
        {formFields.map((field) => (
          <div className="mb-3" key={field.name}>
            <label className="mb-2" htmlFor={field.name}>
              {field.label}:
            </label>
            <input
              type="text"
              className="form-control"
              id={field.name}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleInputChange}
            />
          </div>
        ))}
      </form>
      <button type="button" onClick={generateDocument} className="btn btn-brown  w-25" >
        Download
      </button>
    </div>
  );
};

export default DocumentGenerator;
