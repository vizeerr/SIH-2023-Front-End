import React from 'react';
import WordDocumentGenerator from './WordDocumentGenerator';

const App = () => {
  const formFields1 = [
    { name: 'first_name', label: 'First Name' },
    { name: 'last_name', label: 'Last Name' },
    { name: 'phone', label: 'Phone' },
    { name: 'description', label: 'Description' },
  ];
  return (
    <div>
      <WordDocumentGenerator
        formFields={formFields1}
        templateUrl="https://aireply.000webhostapp.com/documents/tag-example.docx"
        fileName="document1.docx"
      />
    </div>
  );
};

export default App;
