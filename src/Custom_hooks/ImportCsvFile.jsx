import { useState } from 'react';

const useImportCsvFile = () => {
  const [csvFile, setCsvFile] = useState(null); // Type the state to File or null
  const [error, setError] = useState(null) // Error state

  const handleCsvFileUpload = (e) => {
    const uploadFile = e.target.files ? e.target.files[0] : null;

    if(uploadFile){

    
        const fileExtension = uploadFile.name.split('.').pop().toLowerCase()
    if (fileExtension !== 'csv') {
      setError('Please upload a CSV file.')
      return
    }
    if (uploadFile && uploadFile.type === 'text/csv') { // Optional: Validate that the file is a CSV
        setError(null)
      setCsvFile(uploadFile);  // Save the selected file
    } else {
      // Handle case where the file is not a CSV (e.g., show a warning)
      alert('Please upload a valid CSV file.');
    }
}
  };

  return { csvFile, handleCsvFileUpload,error }; // Return as an object
};

export default useImportCsvFile;
