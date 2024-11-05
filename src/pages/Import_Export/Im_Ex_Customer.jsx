import React, { useEffect, useState } from 'react';
import useImportCsvFile from '../../Custom_hooks/ImportCsvFile';
import { useImportCustomerCSVMutation } from '../../redux/QueryAPi/customer';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { getCookie } from '../../utils/Cookies';
// import { useLazyExportCustomerCsvQuery } from '../../redux/QueryAPi/customer'; 

const Im_Ex_Customer = () => {
    const navigate = useNavigate();
    const [exportLoading, setExportLoading] = useState(false)
    const [data, setData] = useState(false)
    const [to, setToken] = useState(null)
    const { csvFile, handleCsvFileUpload, error: csvError } = useImportCsvFile();
    const [importCustomerCSV, { isSuccess: csvSuceess, isLoading: csvLoading }] = useImportCustomerCSVMutation();


    const navigatetoCustomer = () => {
        navigate('/customer')
    }
    // Use the lazy query for exporting CSV
    //   const [exportCustomerCsv, { data, error, isLoading:exportLoading,isSuccess:exportSuccess }] = useLazyExportCustomerCsvQuery();
    useEffect(() => {
        setToken(getCookie('token'))
    }, [])
    console.log(to)
    const handleExport = async () => {
        try {
            // Start loading before the request
            setExportLoading(true);

            // Make the export API request
            const response = await axios.get('https://sst.psghub.me/sstapi/api/v1/customer-export', {
                headers: {
                    'Authorization': `Bearer ${to}`, // Add 'Bearer ' prefix before the token
                },
            });

            // Check if response is valid and contains data
            if (response?.data) {
                console.log('Export successful:', response);
                setData(response?.data); // Store the exported data
            } else {
                console.warn('No data received in export response');
                setData([]); // Reset or clear data if no valid response
            }
        } catch (error) {
            console.error('Export failed:', error);

            // Provide user feedback for the error
            alert('An error occurred while exporting the data. Please try again later.');

            // Optionally: Set an error state or show an error message on the UI
        } finally {
            // Stop loading indicator regardless of success or failure
            setExportLoading(false);
        }
    };


    useEffect(() => {
        const importCsv = async () => {
            try {
                if (csvFile) {
                    await importCustomerCSV(csvFile);
                }
            } catch (error) {
                console.log(error);
            }
        };
        importCsv();
    }, [csvFile, importCustomerCSV]);

    useEffect(() => {
        if (data?.download_link) {
            // Create a temporary anchor element to trigger download
            const link = document.createElement('a');
            link.href = data.download_link;  // Set the download link

            // Optional: Set a download attribute to specify the file name
            const fileName = data?.download_link.split('/').pop(); // Extract the file name from the URL (you can modify this based on your response)
            link.download = fileName || 'download';  // Default to 'download' if file name is not available

            // Programmatically trigger a click event on the link to start the download
            link.click();
        }
    }, [data?.download_link]);


    useEffect(() => {
        if (csvSuceess) {
            navigate('/customer');
        }
    }, [csvSuceess]);

    useEffect(() => {
        if (data?.result) {
            toast.success(data?.message);
        }
    }, [data?.result]);

    return (
        <div className="content-container">
            <div className="bg-white py-3">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5>Import Export</h5>
                        <div>
                            <button type="button" className="btn sub-btn" onClick={navigatetoCustomer}>
                                Go To Customer Page
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-3">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <div className="import-box text-center">
                            <div className="p-3">
                                <h6 className="m-0">Import Customer's CSV file</h6>
                            </div>
                            <div className="border-bottom"></div>
                            <div className="import-box-rounded">
                                <div className="import-dropzone-desc">
                                    <button type="button" className="btn sub-btn">
                                        {csvFile ? csvFile.name : 'Select CSV file'}
                                    </button>
                                    <p>{csvLoading ? 'Uploading...' : 'or Drag and Drop Here'}</p>
                                    <input type="file" name="csv_file" onChange={handleCsvFileUpload} />
                                    {csvError && <span style={{ color: 'red' }}>{csvError}</span>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-12 d-flex justify-content-center">
                        <div className="import-box text-center">
                            <div className="p-3">
                                <h6 className="m-0">Export Customer's CSV file</h6>
                            </div>
                            <div className="border-bottom"></div>
                            <div className="import-box-rounded">
                                <div className="import-dropzone-desc">
                                    <div>
                                        <i className="bi bi-file-earmark fs-1"></i>
                                    </div>
                                    <button type="button" className="btn sub-btn" onClick={handleExport}>
                                        {exportLoading ? 'Exporting...' : " Export Customer's CSV"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Im_Ex_Customer;
