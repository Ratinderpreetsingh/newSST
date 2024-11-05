import { useState } from 'react'
import Papa from 'papaparse'

const useImportCsv = () => {
    // this is not in use but in working
  const [csvFile, setCsvFile] = useState(null) // Store parsed CSV data
  const [loading, setLoading] = useState(false) // Loading state
  const [error, setError] = useState(null) // Error state
  const [file, setFile] = useState(null) // Original file

  const handleCsvFileUpload = (e) => {
    const uploadedFile = e.target.files[0]
    
    if (uploadedFile) {
      // Basic file validation
      const fileExtension = uploadedFile.name.split('.').pop().toLowerCase()
      if (fileExtension !== 'csv') {
        setError('Please upload a CSV file.')
        return
      }

      setLoading(true)
      setError(null) // Reset any previous errors
      setFile(uploadedFile)

      Papa.parse(uploadedFile, {
        header: true,
        skipEmptyLines: true, // Skip empty lines in the CSV
        complete: (results) => {
          setCsvFile(results?.data)
          setLoading(false)
        },
        error: (err) => {
          setError(err.message || 'An error occurred during CSV parsing.')
          setLoading(false)
        }
      })
    }
  }

  return {
    csvFile,
    loading,
    error,
    file,
    handleCsvFileUpload
  }
}

export default useImportCsv
