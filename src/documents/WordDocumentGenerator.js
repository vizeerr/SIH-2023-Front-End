import React, { useState } from 'react';
import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import PizZipUtils from 'pizzip/utils/index.js';
import { saveAs } from 'file-saver';

function loadFile(url, callback) {
  PizZipUtils.getBinaryContent(url, callback);
}

const WordDocumentGenerator = ({ formFields, templateUrl, fileName }) => {
  const [formData, setFormData] = useState({});
  const [generating, setGenerating] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const generateAndDownloadDocument = () => {
    if (generating) {
      return; // Prevent multiple clicks while document is being generated
    }

    setGenerating(true);

    loadFile(templateUrl, function (error, content) {
      if (error) {
        throw error;
      }
      var zip = new PizZip(content);
      var doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
      });

      // Set document data
      doc.setData(formData);

      try {
        // render the document
        doc.render();
      } catch (error) {
        // Handle errors
        console.error('Document generation error:', error);
        setGenerating(false);
        return;
      }

      var out = doc.getZip().generate({
        type: 'blob',
        mimeType:
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      });

      // Download the generated document
      saveAs(out, fileName);
      setGenerating(false);
    });
  };

  return (
    <div className='container mt-5'>
      <h2>Generate and Download Document</h2>
      <form className='mt-5 d-flex flex-wrap justify-content-between'>
        {formFields.map((field) => (
          <div key={field.name} className="mb-3 me-3" style={{width:45+"%"}}>
            <label htmlFor={field.name} className="form-label">
              {field.label}
            </label>
            <input
              type="text"
              className="form-control "
              id={field.name}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleInputChange}
              
            />
          </div>
        ))}
      </form>
      <button type="button" className='btn btn-brown w-25 mt-3' onClick={generateAndDownloadDocument} disabled={generating}>
        {generating ? 'Generating...' : 'Download'}
      </button>
    </div>
  );
};

export default WordDocumentGenerator;