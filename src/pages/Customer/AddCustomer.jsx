import { useFormik } from "formik";
import { customerValidation } from "../../Validation/customer";
import { useAddCustomerMutation, useImportCustomerCSVMutation } from "../../redux/QueryAPi/customer";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useGetAllShopsNameQuery } from "../../redux/QueryAPi/shopApi";
import { ModifyDate } from "../../utils/ModifyDate";
import useImportCsv from "../../utils/ImportCsv";
import useImportCsvFile from "../../Custom_hooks/ImportCsvFile";

const AddCustomer = () => {
    const navigate = useNavigate()
    const selectRef = useRef(null)
    // const { csvFile, loading: csvFileLoading, error: csvError, handleCsvFileUpload } = useImportCsv()
    const [addCustomer, { isSuccess, isLoading ,isError,data}] = useAddCustomerMutation()
    const { csvFile, handleCsvFileUpload, error: csvError } = useImportCsvFile()
    const [importCustomerCSV, { isSuccess: csvSuceess, isLoading: csvLoading }] = useImportCustomerCSVMutation()
    const initialValues = {
        status: '',
        OwnerFName: '',
        OwnerLName: '',
        OwnerCompanyName: '',
        RONumber: '',
        CSRName: '',
        OwnerAddress1: '',
        OwnerAddress2: '',
        OwnerCity: '',
        OwnerStateProvince: '',
        OwnerPostalZip: '',
        OwnerEmail: '',
        OwnerCellPhone: '',
        VehicleArrivedDate: '',
        RepairStartedDate: '',
        DeliveredDate: '',
        VehicleYear: '',
        VehicleMake: '',
        VehicleModel: '',
        BusinessKeyPSG: '',
        BUName: '',
        input_source: '',
        merge_key: '',
        input_date: '',
        purl_id: '',
        name_prefix: '',
        OwnerWorkPhone: '',
        OwnerHomePhone: '',
        OwnerCountryCode: '',
        OwnerNightPhone: '',
        OwnerDayPhone: '',
        OwnerOtherPhone: '',
        ReferralSourceName: '',
        InsuranceCompany: '',
        ClaimType: '',
        TotalLaborHrs: 0,
        GrossAmount: 0,
        TotalLoss: 0,
        InsuranceAgentName: '',
        EstimatorName: '',
        BodyTechFullName: '',
        PaintTechFullName: '',
        update_definitions_on_save: '0',
        sms_log: '0',
        invalidron: '0',
        sst_definitions: '0',
        scheduled_dm: '0',
        UID: Math.floor(Math.random() * 100) || '-',
    };
    const { data: shopList, error, } = useGetAllShopsNameQuery(name='');
    const { values, errors, handleChange, handleSubmit, handleBlur, touched, setFieldValue } = useFormik({
        initialValues,
        validationSchema: customerValidation,
        onSubmit: async (values) => {
            console.log(values)
            if (!values.signatureText) {
                errors.signatureText = "Signature text is required";
              }
            const modifiedValues = {
                ...values,
                VehicleArrivedDate: ModifyDate(values.VehicleArrivedDate),
                RepairStartedDate: ModifyDate(values.RepairStartedDate),
                DeliveredDate: ModifyDate(values.DeliveredDate),
                // Add other date fields here as needed
            };
            try {
                await addCustomer(modifiedValues)
            } catch (error) {
                console.log(error)
            }

        }
    })
    console.log(isError,data,"isError")
    const handleUploadCsvFile = async () => {
        try {
            await importCustomerCSV(csvFile); // Assuming this is an async mutation
            toast.success("Customer Import Succesfully")

        } catch (error) {
            console.error('Error importing CSV:', err);

        }
    }

    console.log(csvFile, "csvFile")
    const handleScroll = (event) => {
        console.log('Scroll event:', event);
        // You can log additional info, like the current scroll position
        console.log('ScrollTop:', event.target.scrollTop);
    };

    useEffect(() => {
        if (isSuccess || csvSuceess) {

            navigate('/customer')
        }
    }, [isSuccess, csvSuceess])
    return (
        <div className="content-container">
            <div className="bg-white py-3">
                <div className="container">
                    <div className="d-flex">
                        <i className="bi bi-info-circle site-color"></i> &nbsp;
                        <h5>Add Customer</h5>
                    </div>
                    <div className="row mt-1">
                        <div className="col-lg-12">
                            <nav>
                                <div className="nav nav-tabs border-bottom" id="nav-tab" role="tablist">
                                    <div className="tab-nav-link active px-2 py-2" id="nav-shop-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-shop" type="button" role="tab" aria-controls="nav-shop" aria-selected="true">
                                        Customer
                                    </div>
                                    <div className="tab-nav-link px-2 py-2" id="nav-media-tab" data-bs-toggle="tab" data-bs-target="#nav-media"
                                        type="button" role="tab" aria-controls="nav-media" aria-selected="false">
                                        Import CSV file
                                    </div>
                                </div>
                            </nav>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-shop" role="tabpanel" aria-labelledby="nav-shop-tab" tabindex="0">
                                    <div className="container mt-3">
                                        {/* Owner Details */}

                                        <div className="row">
                                            {/* Owner First Name */}
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input
                                                        type="text"
                                                        id="OwnerFName"
                                                        className={`form-control ${touched.OwnerFName && errors.OwnerFName ? 'is-invalid' : ''}`}
                                                        name="OwnerFName"
                                                        value={values.OwnerFName}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        placeholder=" "
                                                        aria-describedby="OwnerFName" // For accessibility
                                                    />
                                                    <label htmlFor="OwnerFName" className="floating-label">
                                                        Owner First Name <span className="text-danger">*</span>
                                                    </label>
                                                    {/* Validation Error */}
                                                    {touched.OwnerFName && errors.OwnerFName ? (
                                                        <div id="OwnerFName" className="invalid-feedback">
                                                            {errors.OwnerFName}
                                                        </div>
                                                    ) : null}
                                                </div>
                                            </div>

                                            {/* Owner Last Name */}
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input
                                                        type="text"
                                                        id="OwnerLName"
                                                        className={`form-control ${touched.OwnerLName && errors.OwnerLName ? 'is-invalid' : ''}`}
                                                        name="OwnerLName"
                                                        value={values.OwnerLName}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        placeholder=" "
                                                    />
                                                    <label htmlFor="OwnerLName" className="floating-label">
                                                        Owner Last Name <span>*</span>
                                                    </label>
                                                    {/* Validation Error */}
                                                    {touched.OwnerLName && errors.OwnerLName ? (
                                                        <div className="invalid-feedback">
                                                            {errors.OwnerLName}
                                                        </div>
                                                    ) : null}
                                                </div>
                                            </div>

                                            {/* Status */}
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <select
                                                        type="text"
                                                        id="status"
                                                        className={`form-control ${touched.status && errors.status ? 'is-invalid' : ''}`}
                                                        name="status"
                                                        value={values.status}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        placeholder=" "

                                                        required
                                                    >
    <option value="" disabled selected>Select</option>  {/* Default option */}
    <option value={'Clean'}>Clean</option>
                                                        <option value={'Error'}>Error</option>
                                                        <option value={'Unchecked'}>UnChecked</option>
                                                    </select>
                                                    <label htmlFor="status" className="floating-label">
                                                        Status <span>*</span>
                                                    </label>
                                                    {/* Validation Error */}
                                                    {touched.status && errors.status ? (
                                                        <div className="invalid-feedback">
                                                            {errors.status}
                                                        </div>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            {/* Owner Company Name */}
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input
                                                        type="text"
                                                        id="OwnerCompanyName"
                                                        className={`form-control ${touched.OwnerCompanyName && errors.OwnerCompanyName ? 'is-invalid' : ''}`}
                                                        name="OwnerCompanyName"
                                                        value={values.OwnerCompanyName}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        placeholder=" "

                                                        required
                                                    />
                                                    <label htmlFor="OwnerCompanyName" className="floating-label">
                                                        Owner Company Name <span>*</span>
                                                    </label>

                                                    {/* Validation Error */}
                                                    {touched.OwnerCompanyName && errors.OwnerCompanyName && (
                                                        <div className="invalid-feedback">
                                                            {errors.OwnerCompanyName}
                                                        </div>
                                                    )}
                                                </div>

                                            </div>

                                            {/* RO Number */}
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input
                                                        type="text"
                                                        id="RONumber"
                                                        className={`form-control ${touched.RONumber && errors.RONumber ? 'is-invalid' : ''}`}
                                                        name="RONumber"
                                                        value={values.RONumber}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        placeholder=" "

                                                        required
                                                    />
                                                    <label htmlFor="RONumber" className="floating-label">
                                                        RO Number <span>*</span>
                                                    </label>
                                                    {/* Validation Error */}
                                                    {touched.RONumber && errors.RONumber ? (
                                                        <div className="invalid-feedback">
                                                            {errors.RONumber}
                                                        </div>
                                                    ) : null}
                                                </div>
                                            </div>

                                            {/* CSR Name */}
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input
                                                        type="text"
                                                        id="CSRName"
                                                        className={`form-control ${touched.CSRName && errors.CSRName ? 'is-invalid' : ''}`}
                                                        name="CSRName"
                                                        value={values.CSRName}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        placeholder=" "

                                                        required
                                                    />
                                                    <label htmlFor="CSRName" className="floating-label">
                                                        CSR Name <span>*</span>
                                                    </label>
                                                    {/* Validation Error */}
                                                    {touched.CSRName && errors.CSRName ? (
                                                        <div className="invalid-feedback">
                                                            {errors.CSRName}
                                                        </div>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            {/* Owner Address 1 */}
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input
                                                        type="text"
                                                        id="OwnerAddress1"
                                                        className={`form-control ${touched.OwnerAddress1 && errors.OwnerAddress1 ? 'is-invalid' : ''}`}
                                                        name="OwnerAddress1"
                                                        value={values.OwnerAddress1}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        placeholder=" "

                                                        required
                                                    />
                                                    <label htmlFor="OwnerAddress1" className="floating-label">
                                                        Address 1 <span>*</span>
                                                    </label>
                                                    {/* Validation Error */}
                                                    {touched.OwnerAddress1 && errors.OwnerAddress1 ? (
                                                        <div className="invalid-feedback">
                                                            {errors.OwnerAddress1}
                                                        </div>
                                                    ) : null}
                                                </div>
                                            </div>

                                            {/* Owner Address 2 */}
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input
                                                        type="text"
                                                        id="OwnerAddress2"
                                                        className={`form-control `}
                                                        name="OwnerAddress2"
                                                        value={values.OwnerAddress2}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        placeholder=" "

                                                    />
                                                    <label htmlFor="OwnerAddress2" className="floating-label">
                                                        Address 2
                                                    </label>

                                                </div>
                                            </div>

                                            {/* Owner City */}
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input
                                                        type="text"
                                                        id="OwnerCity"
                                                        className={`form-control ${touched.OwnerCity && errors.OwnerCity ? 'is-invalid' : ''}`}
                                                        name="OwnerCity"
                                                        value={values.OwnerCity}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        placeholder=" "

                                                        required
                                                    />
                                                    <label htmlFor="OwnerCity" className="floating-label">
                                                        City <span>*</span>
                                                    </label>
                                                    {/* Validation Error */}
                                                    {touched.OwnerCity && errors.OwnerCity ? (
                                                        <div className="invalid-feedback">
                                                            {errors.OwnerCity}
                                                        </div>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            {/* Owner State */}
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input
                                                        type="text"
                                                        id="OwnerStateProvince"
                                                        className={`form-control ${touched.OwnerStateProvince && errors.OwnerStateProvince ? 'is-invalid' : ''}`}
                                                        name="OwnerStateProvince"
                                                        value={values.OwnerStateProvince}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        placeholder=" "
                                                        required
                                                    />
                                                    <label htmlFor="OwnerStateProvince" className="floating-label">
                                                        State <span className="text-danger">*</span>
                                                    </label>
                                                    {touched.OwnerStateProvince && errors.OwnerStateProvince && (
                                                        <div className="invalid-feedback">{errors.OwnerStateProvince}</div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Owner Postal Code */}
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input
                                                        type="text"
                                                        id="OwnerPostalZip"
                                                        className={`form-control ${touched.OwnerPostalZip && errors.OwnerPostalZip ? 'is-invalid' : ''}`}
                                                        name="OwnerPostalZip"
                                                        value={values.OwnerPostalZip}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        placeholder=" "
                                                        required
                                                    />
                                                    <label htmlFor="OwnerPostalZip" className="floating-label">
                                                        Zip Code <span className="text-danger">*</span>
                                                    </label>
                                                    {touched.OwnerPostalZip && errors.OwnerPostalZip && (
                                                        <div className="invalid-feedback">{errors.OwnerPostalZip}</div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Owner Email */}
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input
                                                        type="text"
                                                        id="OwnerEmail"
                                                        className={`form-control ${touched.OwnerEmail && errors.OwnerEmail ? 'is-invalid' : ''}`}
                                                        name="OwnerEmail"
                                                        value={values.OwnerEmail}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        placeholder=" "
                                                        required
                                                    />
                                                    <label htmlFor="OwnerEmail" className="floating-label">
                                                        Owner Email <span className="text-danger">*</span>
                                                    </label>
                                                    {touched.OwnerEmail && errors.OwnerEmail && (
                                                        <div className="invalid-feedback">{errors.OwnerEmail}</div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            {/* Owner Cell Phone */}
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input
                                                        type="text"
                                                        id="OwnerCellPhone"
                                                        className={`form-control ${touched.OwnerCellPhone && errors.OwnerCellPhone ? 'is-invalid' : ''}`}
                                                        name="OwnerCellPhone"
                                                        value={values.OwnerCellPhone}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        placeholder=" "
                                                        required
                                                    />
                                                    <label htmlFor="OwnerCellPhone" className="floating-label">
                                                        Owner Cell Phone <span className="text-danger">*</span>
                                                    </label>
                                                    {touched.OwnerCellPhone && errors.OwnerCellPhone && (
                                                        <div className="invalid-feedback">{errors.OwnerCellPhone}</div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Vehicle Arrived Date */}
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input
                                                        type="date"
                                                        id="VehicleArrivedDate"
                                                        className={`form-control ${touched.VehicleArrivedDate && errors.VehicleArrivedDate ? '' : ''}`}
                                                        name="VehicleArrivedDate"
                                                        value={values.VehicleArrivedDate}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        placeholder=" "
                                                        min={new Date().toISOString().split('T')[0]} // This sets the min to today's date

                                                        required
                                                    />
                                                    <label htmlFor="VehicleArrivedDate" className="floating-label">
                                                        Vehicle Arrived Date <span className="text-danger">*</span>
                                                    </label>
                                                    {touched.VehicleArrivedDate && errors.VehicleArrivedDate && (
                                                        <div style={{color:'#DC3545'}} className="">{errors.VehicleArrivedDate}</div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Repair Started Date */}
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input
                                                        type="date"
                                                        id="RepairStartedDate"
                                                        className={`form-control ${touched.RepairStartedDate && errors.RepairStartedDate ? '' : ''}`}
                                                        name="RepairStartedDate"
                                                        value={values.RepairStartedDate}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        placeholder=" "
                                                        min={new Date().toISOString().split('T')[0]} // This sets the min to today's date

                                                        required
                                                    />
                                                    <label htmlFor="RepairStartedDate" className="floating-label">
                                                        Repair Started Date <span className="text-danger">*</span>
                                                    </label>
                                                    {touched.RepairStartedDate && errors.RepairStartedDate && (
                                                        <div style={{color:'#DC3545'}}>{errors.RepairStartedDate}</div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            {/* Delivered Date */}
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input
                                                        type="date"
                                                        id="DeliveredDate"
                                                        className={`form-control ${touched.DeliveredDate && errors.DeliveredDate ? '' : ''}`}
                                                        name="DeliveredDate"
                                                        value={values.DeliveredDate}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        placeholder=" "
                                                        min={new Date().toISOString().split('T')[0]} // This sets the min to today's date

                                                        required
                                                    />
                                                    <label htmlFor="DeliveredDate" className="floating-label">
                                                        Delivered Date <span className="text-danger">*</span>
                                                    </label>
                                                    {touched.DeliveredDate && errors.DeliveredDate && (
                                                        <div style={{color:'#DC3545'}}>{errors.DeliveredDate}</div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Vehicle Year */}
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input
                                                        type="text"
                                                        id="VehicleYear"
                                                        className={`form-control ${touched.VehicleYear && errors.VehicleYear ? '' : ''}`}
                                                        name="VehicleYear"
                                                        value={values.VehicleYear}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        placeholder=" "
                                                        min={new Date().toISOString().split('T')[0]} // This sets the min to today's date

                                                        required
                                                    />
                                                    <label htmlFor="VehicleYear" className="floating-label">
                                                        Vehicle Year <span className="text-danger">*</span>
                                                    </label>
                                                    {touched.VehicleYear && errors.VehicleYear && (
                                                        <div style={{color:'#DC3545'}}>{errors.VehicleYear}</div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Vehicle Make */}
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input
                                                        type="text"
                                                        id="VehicleMake"
                                                        className={`form-control ${touched.VehicleMake && errors.VehicleMake ? '' : ''}`}
                                                        name="VehicleMake"
                                                        value={values.VehicleMake}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        placeholder=" "

                                                        required
                                                    />
                                                    <label htmlFor="VehicleMake" className="floating-label">
                                                        Vehicle Make <span className="text-danger">*</span>
                                                    </label>
                                                    {touched.VehicleMake && errors.VehicleMake && (
                                                        <div style={{color:'#DC3545'}}>{errors.VehicleMake}</div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            {/* Vehicle Model */}
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input
                                                        type="text"
                                                        id="VehicleModel"
                                                        className={`form-control ${touched.VehicleModel && errors.VehicleModel ? 'is-invalid' : ''}`}
                                                        name="VehicleModel"
                                                        value={values.VehicleModel}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        placeholder=" "

                                                        required
                                                    />
                                                    <label htmlFor="VehicleModel" className="floating-label">
                                                        Vehicle Model <span className="text-danger">*</span>
                                                    </label>
                                                    {touched.VehicleModel && errors.VehicleModel && (
                                                        <div className="invalid-feedback">{errors.VehicleModel}</div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Business Key PSG */}
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">

                                                    <select
                                                        id="BusinessKeyPSG"
                                                        className={`form-control   ${touched.BusinessKeyPSG && errors.BusinessKeyPSG ? 'is-invalid' : ''}`}
                                                        name="BusinessKeyPSG"
                                                        value={values.BusinessKeyPSG}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        placeholder=" "

                                                        required
                                                        aria-label="Select a business"


                                                    >
                                                             <option value="" disabled selected>Select</option>  {/* Default option */}


                                                        {shopList?.data?.map((shop, index) => (
                                                            <option key={shop.psg_id} value={shop.psg_id}>
                                                                {shop?.shop_name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <label htmlFor="BusinessKeyPSG" className="floating-label">
                                                        Business Key PSG <span className="text-danger">*</span>
                                                    </label>
                                                    {touched.BusinessKeyPSG && errors.BusinessKeyPSG && (
                                                        <div className="invalid-feedback">{errors.BusinessKeyPSG}</div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* BU Name */}
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input
                                                        type="text"
                                                        id="BUName"
                                                        className={`form-control ${touched.BUName && errors.BUName ? 'is-invalid' : ''}`}
                                                        name="BUName"
                                                        value={values.BUName}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        placeholder=" "

                                                        required
                                                    />
                                                    <label htmlFor="BUName" className="floating-label">
                                                        BU Name <span className="text-danger">*</span>
                                                    </label>
                                                    {touched.BUName && errors.BUName && (
                                                        <div className="invalid-feedback">{errors.BUName}</div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            {/* Input Source */}
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input
                                                        type="text"
                                                        id="input_source"
                                                        className="form-control"
                                                        placeholder=" "
                                                        name="input_source"
                                                        value={values.input_source}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}


                                                    />
                                                    <label htmlFor="input_source" className="floating-label">Input Source</label>
                                                </div>
                                            </div>

                                            {/* Merge Key */}
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input
                                                        type="text"
                                                        id="merge_key"
                                                        className="form-control"
                                                        placeholder=" "
                                                        name="merge_key"
                                                        value={values.merge_key}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    <label htmlFor="merge_key" className="floating-label">Merge Key</label>
                                                </div>
                                            </div>

                                            {/* Input Date */}
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input
                                                        type="date"
                                                        id="input_date"
                                                        className="form-control"
                                                        placeholder=" "
                                                        name="input_date"
                                                        value={values.input_date}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        min={new Date().toISOString().split('T')[0]} // This sets the min to today's date

                                                    />
                                                    <label htmlFor="input_date" className="floating-label">Input Date</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            {/* PURL ID */}
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input
                                                        type="text"
                                                        id="purl_id"
                                                        className={`form-control ${touched.purl_id && errors.purl_id ? 'is-invalid' : ''}`}
                                                        placeholder=" "
                                                        name="purl_id"
                                                        value={values.purl_id}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        required
                                                    />
                                                    <label htmlFor="purl_id" className="floating-label">
                                                        PURL ID <span className="text-danger">*</span>
                                                    </label>
                                                    {touched.purl_id && errors.purl_id && (
                                                        <div className="invalid-feedback">{errors.purl_id}</div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Name Prefix */}
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input
                                                        type="text"
                                                        id="name_prefix"
                                                        className="form-control"
                                                        placeholder=" "
                                                        name="name_prefix"
                                                        value={values.name_prefix}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    <label htmlFor="name_prefix" className="floating-label">Name Prefix</label>
                                                </div>
                                            </div>

                                            {/* Owner Work Phone */}
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input
                                                        type="text"
                                                        id="OwnerWorkPhone"
                                                        className={`form-control ${touched.OwnerWorkPhone && errors.OwnerWorkPhone ? 'is-invalid' : ''}`}
                                                        placeholder=" "
                                                        name="OwnerWorkPhone"
                                                        value={values.OwnerWorkPhone}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        required
                                                    />
                                                    <label htmlFor="OwnerWorkPhone" className="floating-label">
                                                        Owner Work Phone <span className="text-danger">*</span>
                                                    </label>
                                                    {touched.OwnerWorkPhone && errors.OwnerWorkPhone && (
                                                        <div className="invalid-feedback">{errors.OwnerWorkPhone}</div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            {/* Owner Home Phone */}
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input
                                                        type="text"
                                                        id="OwnerHomePhone"
                                                        className={`form-control ${touched.OwnerHomePhone && errors.OwnerHomePhone ? 'is-invalid' : ''}`}
                                                        placeholder=" "
                                                        name="OwnerHomePhone"
                                                        value={values.OwnerHomePhone}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        required
                                                    />
                                                    <label htmlFor="OwnerHomePhone" className="floating-label">Owner Home Phone<span className="text-danger">*</span></label>
                                                    {touched.OwnerHomePhone && errors.OwnerHomePhone && (
                                                        <div className="invalid-feedback">{errors.OwnerHomePhone}</div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Owner Country Code */}
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input
                                                        type="text"
                                                        id="OwnerCountryCode"
                                                        className={`form-control ${touched.OwnerCountryCode && errors.OwnerCountryCode ? 'is-invalid' : ''}`}
                                                        placeholder=" "
                                                        name="OwnerCountryCode"
                                                        value={values.OwnerCountryCode}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        required
                                                    />
                                                    <label htmlFor="OwnerCountryCode" className="floating-label">
                                                        Owner Country Code <span className="text-danger">*</span>
                                                    </label>
                                                    {touched.OwnerCountryCode && errors.OwnerCountryCode && (
                                                        <div className="invalid-feedback">{errors.OwnerCountryCode}</div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Owner Night Phone */}
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input
                                                        type="text"
                                                        id="OwnerNightPhone"
                                                        className={`form-control ${touched.OwnerNightPhone && errors.OwnerNightPhone ? 'is-invalid' : ''}`}
                                                        placeholder=" "
                                                        name="OwnerNightPhone"
                                                        value={values.OwnerNightPhone}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        required
                                                    />
                                                    <label htmlFor="OwnerNightPhone" className="floating-label">
                                                        Owner Night Phone <span className="text-danger">*</span>
                                                    </label>
                                                    {touched.OwnerNightPhone && errors.OwnerNightPhone && (
                                                        <div className="invalid-feedback">{errors.OwnerNightPhone}</div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input
                                                        type="text"
                                                        id="OwnerDayPhone"
                                                        className={`form-control ${touched.OwnerDayPhone && errors.OwnerDayPhone ? 'is-invalid' : ''}`}
                                                        placeholder=" "
                                                        name="OwnerDayPhone"
                                                        value={values.OwnerDayPhone}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        required
                                                    />
                                                    <label htmlFor="OwnerDayPhone" className="floating-label">
                                                        Owner Day Phone <span className="text-danger">*</span>
                                                    </label>
                                                    {touched.OwnerDayPhone && errors.OwnerDayPhone && (
                                                        <div className="invalid-feedback">{errors.OwnerDayPhone}</div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input
                                                        type="text"
                                                        id="OwnerOtherPhone"
                                                        className={`form-control ${touched.OwnerOtherPhone && errors.OwnerOtherPhone ? 'is-invalid' : ''}`}
                                                        placeholder=" "
                                                        name="OwnerOtherPhone"
                                                        value={values.OwnerOtherPhone}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        required
                                                    />
                                                    <label htmlFor="OwnerOtherPhone" className="floating-label">
                                                        Owner Other Phone <span className="text-danger">*</span>
                                                    </label>
                                                    {touched.OwnerOtherPhone && errors.OwnerOtherPhone && (
                                                        <div className="invalid-feedback">{errors.OwnerOtherPhone}</div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input
                                                        type="text"
                                                        id="ReferralSourceName"
                                                        className={`form-control ${touched.ReferralSourceName && errors.ReferralSourceName ? 'is-invalid' : ''}`}
                                                        placeholder=" "
                                                        name="ReferralSourceName"
                                                        value={values.ReferralSourceName}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        required
                                                    />
                                                    <label htmlFor="ReferralSourceName" className="floating-label">
                                                        Referral Source Name <span className="text-danger">*</span>
                                                    </label>
                                                    {touched.ReferralSourceName && errors.ReferralSourceName && (
                                                        <div className="invalid-feedback">{errors.ReferralSourceName}</div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input
                                                        type="text"
                                                        id="InsuranceCompany"
                                                        className={`form-control ${touched.InsuranceCompany && errors.InsuranceCompany ? 'is-invalid' : ''}`}
                                                        placeholder=" "
                                                        name="InsuranceCompany"
                                                        value={values.InsuranceCompany}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        required
                                                    />
                                                    <label htmlFor="InsuranceCompany" className="floating-label">
                                                        Insurance Company <span className="text-danger">*</span>
                                                    </label>
                                                    {touched.InsuranceCompany && errors.InsuranceCompany && (
                                                        <div className="invalid-feedback">{errors.InsuranceCompany}</div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input
                                                        type="text"
                                                        id="ClaimType"
                                                        className={`form-control ${touched.ClaimType && errors.ClaimType ? 'is-invalid' : ''}`}
                                                        placeholder=" "
                                                        name="ClaimType"
                                                        value={values.ClaimType}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        required
                                                    />
                                                    <label htmlFor="ClaimType" className="floating-label">
                                                        Claim Type <span className="text-danger">*</span>
                                                    </label>
                                                    {touched.ClaimType && errors.ClaimType && (
                                                        <div className="invalid-feedback">{errors.ClaimType}</div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input
                                                        type="number"
                                                        id="TotalLaborHrs"
                                                        className={`form-control ${touched.TotalLaborHrs && errors.TotalLaborHrs ? 'is-invalid' : ''}`}
                                                        placeholder=" "
                                                        name="TotalLaborHrs"
                                                        value={values.TotalLaborHrs}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        required
                                                    />
                                                    <label htmlFor="TotalLaborHrs" className="floating-label">
                                                        Total Labor Hours <span className="text-danger">*</span>
                                                    </label>
                                                    {touched.TotalLaborHrs && errors.TotalLaborHrs && (
                                                        <div className="invalid-feedback">{errors.TotalLaborHrs}</div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input
                                                        type="number"
                                                        id="GrossAmount"
                                                        className={`form-control ${touched.GrossAmount && errors.GrossAmount ? 'is-invalid' : ''}`}
                                                        placeholder=" "
                                                        name="GrossAmount"
                                                        value={values.GrossAmount}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        required
                                                    />
                                                    <label htmlFor="GrossAmount" className="floating-label">
                                                        Gross Amount <span className="text-danger">*</span>
                                                    </label>
                                                    {touched.GrossAmount && errors.GrossAmount && (
                                                        <div className="invalid-feedback">{errors.GrossAmount}</div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input
                                                        type="number"
                                                        id="TotalLoss"
                                                        className={`form-control ${touched.TotalLoss && errors.TotalLoss ? 'is-invalid' : ''}`}
                                                        placeholder=" "
                                                        name="TotalLoss"
                                                        value={values.TotalLoss}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        required
                                                    />
                                                    <label htmlFor="TotalLoss" className="floating-label">
                                                        Total Loss <span className="text-danger">*</span>
                                                    </label>
                                                    {touched.TotalLoss && errors.TotalLoss && (
                                                        <div className="invalid-feedback">{errors.TotalLoss}</div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input
                                                        type="text"
                                                        id="InsuranceAgentName"
                                                        className={`form-control ${touched.InsuranceAgentName && errors.InsuranceAgentName ? 'is-invalid' : ''}`}
                                                        placeholder=" "
                                                        name="InsuranceAgentName"
                                                        value={values.InsuranceAgentName}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        required
                                                    />
                                                    <label htmlFor="InsuranceAgentName" className="floating-label">
                                                        Insurance Agent Name <span className="text-danger">*</span>
                                                    </label>
                                                    {touched.InsuranceAgentName && errors.InsuranceAgentName && (
                                                        <div className="invalid-feedback">{errors.InsuranceAgentName}</div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input
                                                        type="text"
                                                        id="EstimatorName"
                                                        className={`form-control ${touched.EstimatorName && errors.EstimatorName ? 'is-invalid' : ''}`}
                                                        placeholder=" "
                                                        name="EstimatorName"
                                                        value={values.EstimatorName}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        required
                                                    />
                                                    <label htmlFor="EstimatorName" className="floating-label">
                                                        Estimator Name <span className="text-danger">*</span>
                                                    </label>
                                                    {touched.EstimatorName && errors.EstimatorName && (
                                                        <div className="invalid-feedback">{errors.EstimatorName}</div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input
                                                        type="text"
                                                        id="BodyTechFullName"
                                                        className={`form-control ${touched.BodyTechFullName && errors.BodyTechFullName ? 'is-invalid' : ''}`}
                                                        placeholder=" "
                                                        name="BodyTechFullName"
                                                        value={values.BodyTechFullName}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    <label htmlFor="BodyTechFullName" className="floating-label">
                                                        Body Tech Full Name
                                                    </label>
                                                    {touched.BodyTechFullName && errors.BodyTechFullName && (
                                                        <div className="invalid-feedback">{errors.BodyTechFullName}</div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input
                                                        type="text"
                                                        id="PaintTechFullName"
                                                        className={`form-control ${touched.PaintTechFullName && errors.PaintTechFullName ? 'is-invalid' : ''}`}
                                                        placeholder=" "
                                                        name="PaintTechFullName"
                                                        value={values.PaintTechFullName}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    <label htmlFor="PaintTechFullName" className="floating-label">
                                                        Paint Tech Full Name
                                                    </label>
                                                    {touched.PaintTechFullName && errors.PaintTechFullName && (
                                                        <div className="invalid-feedback">{errors.PaintTechFullName}</div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>


                                        <div className="row pb-2">
                                            <div className="col-lg-4 col-md-4">
                                                <div className=" in-border">
                                                    <input type="checkbox" id="update_definitions_on_save" name="update_definitions_on_save"
                                                        checked={values.update_definitions_on_save === '1'} // Check if value is 1
                                                        onChange={(e) => {
                                                            const value = e.target.checked ? '1' : '0'; // Convert to 1 or 0
                                                            setFieldValue("update_definitions_on_save", value); // Use setFieldValue
                                                        }}
                                                    />
                                                    <label for="update_definitions_on_save" className="floating-label" style={{ paddingLeft: '5px'}}>Update Definitions on Save</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className=" in-border">
                                                    <input type="checkbox" id="sms_log" name="sms_log"
                                                        checked={values.sms_log === '1'} // Check if value is 1
                                                        onChange={(e) => {
                                                            const value = e.target.checked ? '1' : '0'; // Convert to 1 or 0
                                                            setFieldValue("sms_log", value); // Use setFieldValue
                                                        }}
                                                    />
                                                    <label htmlFor="sms_log" className="floating-label" style={{ paddingLeft: '5px'}}>SMS Log</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className=" in-border">
                                                    <input type="checkbox" id="invalidron" name="invalidron"
                                                        checked={values.invalidron === '1'} // Check if value is 1
                                                        onChange={(e) => {
                                                            const value = e.target.checked ? '1' : '0'; // Convert to 1 or 0
                                                            setFieldValue("invalidron", value); // Use setFieldValue
                                                        }} />
                                                    <label htmlFor="invalidron" className="floating-label" style={{ paddingLeft: '5px'}}>Invalid RO Number</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className=" in-border">
                                                    <input type="checkbox" id="sst_definitions" name="sst_definitions"
                                                        checked={values.sst_definitions === '1'} // Check if value is 1
                                                        onChange={(e) => {
                                                            const value = e.target.checked ? '1' : '0'; // Convert to 1 or 0
                                                            setFieldValue("sst_definitions", value); // Use setFieldValue
                                                        }} />
                                                    <label htmlFor="sst_definitions" className="floating-label" style={{ paddingLeft: '5px'}}>SST Definitions</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className=" in-border">
                                                    <input type="checkbox" id="scheduled_dm" name="scheduled_dm"
                                                        checked={values.scheduled_dm === '1'} // Check if value is 1
                                                        onChange={(e) => {
                                                            const value = e.target.checked ? '1' : '0'; // Convert to 1 or 0
                                                            setFieldValue("scheduled_dm", value); // Use setFieldValue
                                                        }} />
                                                    <label htmlFor="scheduled_dm" className="floating-label" style={{ paddingLeft: '5px'}}>Scheduled DM</label>
                                                </div>
                                            </div>
                                        </div>

                                      

                                    </div>


                                    <div className="container mt-3">
                                        <div className="row">
                                            <div className="text-center">
                                                <button type="submit" className="btn sub-btn" onClick={handleSubmit}>{isLoading ? 'Saving...' : 'Save'}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="nav-media" role="tabpanel" aria-labelledby="nav-media-tab" tabindex="0">
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
                                                            <button type="button" className="btn sub-btn"> {csvFile ? csvFile.name : 'Select CSV file'}</button>
                                                            <p>or Drag and Drop Here</p>
                                                            <input type="file" name="csv_file" onChange={handleCsvFileUpload} />
                                                            {csvError && <span style={{ color: 'red' }}>{csvError}</span>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="container mt-3">
                                        <div className="row">
                                            <div className="text-center">
                                                <button type="submit" className="btn sub-btn" disabled={csvFile?.name ? false :true} onClick={handleUploadCsvFile}>{csvLoading ? 'Uploading...' : 'Save'}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddCustomer;
