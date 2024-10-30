import { useFormik } from "formik";
import { customerValidation } from "../../Validation/customer";
import { useAddCustomerMutation } from "../../redux/QueryAPi/customer";
import { useEffect } from "react";

const AddCustomer = () => {
    const [addCustomer,{ isSuccess,isLoading }] = useAddCustomerMutation()
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
        update_definitions_on_save: false,
        sms_log: '',
        invalidron: false,
        sst_definitions: '',
        scheduled_dm: '',
        UID:'2'
    };

    const { values, errors, handleChange, handleSubmit, handleBlur, touched } = useFormik({
        initialValues,
        validationSchema: customerValidation,
        onSubmit: async (values) => {
            console.log(values)
            try {
                await addCustomer(values)
            } catch (error) {
                console.log(error)
            }

        }
    })
    useEffect(() => {
        if (isSuccess) {
    
          navigate('/customers')
        }
      }, [isSuccess])
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
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="status" className="form-control" placeholder=" " name="status" value={values.status} onChange={handleChange} onBlur={handleBlur} required />
                                                    <label htmlFor="status" className="floating-label">Status <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="OwnerFName" className="form-control" placeholder=" " name="OwnerFName" value={values.OwnerFName} onChange={handleChange} onBlur={handleBlur} required />
                                                    <label htmlFor="OwnerFName" className="floating-label">Owner First Name <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="OwnerLName" className="form-control" placeholder=" " name="OwnerLName" value={values.OwnerLName} onChange={handleChange} onBlur={handleBlur} required />
                                                    <label htmlFor="OwnerLName" className="floating-label">Owner Last Name <span>*</span></label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="OwnerCompanyName" className="form-control" placeholder=" " name="OwnerCompanyName" value={values.OwnerCompanyName} onChange={handleChange} onBlur={handleBlur} required />
                                                    <label htmlFor="OwnerCompanyName" className="floating-label">Owner Company Name <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="RONumber" className="form-control" placeholder=" " name="RONumber" value={values.RONumber} onChange={handleChange} onBlur={handleBlur} required />
                                                    <label htmlFor="RONumber" className="floating-label">RO Number <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="CSRName" className="form-control" placeholder=" " name="CSRName" value={values.CSRName} onChange={handleChange} onBlur={handleBlur} required />
                                                    <label htmlFor="CSRName" className="floating-label">CSR Name <span>*</span></label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="OwnerAddress1" className="form-control" placeholder=" " name="OwnerAddress1" value={values.OwnerAddress1} onChange={handleChange} onBlur={handleBlur} required />
                                                    <label htmlFor="OwnerAddress1" className="floating-label">Address 1 <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="OwnerAddress2" className="form-control" placeholder=" " name="OwnerAddress2" value={values.OwnerAddress2} onChange={handleChange} onBlur={handleBlur} />
                                                    <label htmlFor="OwnerAddress2" className="floating-label">Address 2</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="OwnerCity" className="form-control" placeholder=" " name="OwnerCity" value={values.OwnerCity} onChange={handleChange} onBlur={handleBlur} required />
                                                    <label htmlFor="OwnerCity" className="floating-label">City <span>*</span></label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="OwnerStateProvince" className="form-control" placeholder=" " name="OwnerStateProvince" value={values.OwnerStateProvince} onChange={handleChange} onBlur={handleBlur} required />
                                                    <label htmlFor="OwnerStateProvince" className="floating-label">State <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="OwnerPostalZip" className="form-control" placeholder=" " name="OwnerPostalZip" value={values.OwnerPostalZip} onChange={handleChange} onBlur={handleBlur} required />
                                                    <label htmlFor="OwnerPostalZip" className="floating-label">Zip Code <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="OwnerEmail" className="form-control" placeholder=" " name="OwnerEmail" value={values.OwnerEmail} onChange={handleChange} onBlur={handleBlur} required />
                                                    <label htmlFor="OwnerEmail" className="floating-label">Owner Email <span>*</span></label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="OwnerCellPhone" className="form-control" placeholder=" " name="OwnerCellPhone" value={values.OwnerCellPhone} onChange={handleChange} onBlur={handleBlur} required />
                                                    <label htmlFor="OwnerCellPhone" className="floating-label">Owner Cell Phone <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="VehicleArrivedDate" className="form-control" placeholder=" " name="VehicleArrivedDate" value={values.VehicleArrivedDate} onChange={handleChange} onBlur={handleBlur} required />
                                                    <label htmlFor="VehicleArrivedDate" className="floating-label">Vehicle Arrived Date <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="RepairStartedDate" className="form-control" placeholder=" " name="RepairStartedDate" value={values.RepairStartedDate} onChange={handleChange} onBlur={handleBlur} required />
                                                    <label htmlFor="RepairStartedDate" className="floating-label">Repair Started Date <span>*</span></label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="DeliveredDate" className="form-control" placeholder=" " name="DeliveredDate" value={values.DeliveredDate} onChange={handleChange} onBlur={handleBlur} required />
                                                    <label htmlFor="DeliveredDate" className="floating-label">Delivered Date <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="VehicleYear" className="form-control" placeholder=" " name="VehicleYear" value={values.VehicleYear} onChange={handleChange} onBlur={handleBlur} required />
                                                    <label htmlFor="VehicleYear" className="floating-label">Vehicle Year <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="VehicleMake" className="form-control" placeholder=" " name="VehicleMake" value={values.VehicleMake} onChange={handleChange} onBlur={handleBlur} required />
                                                    <label htmlFor="VehicleMake" className="floating-label">Vehicle Make <span>*</span></label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="VehicleModel" className="form-control" placeholder=" " name="VehicleModel" value={values.VehicleModel} onChange={handleChange} onBlur={handleBlur} required />
                                                    <label htmlFor="VehicleModel" className="floating-label">Vehicle Model <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="BusinessKeyPSG" className="form-control" placeholder=" " name="BusinessKeyPSG" value={values.BusinessKeyPSG} onChange={handleChange} onBlur={handleBlur} required />
                                                    <label htmlFor="BusinessKeyPSG" className="floating-label">Business Key PSG <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="BUName" className="form-control" placeholder=" " name="BUName" value={values.BUName} onChange={handleChange} onBlur={handleBlur} required />
                                                    <label htmlFor="BUName" className="floating-label">BU Name <span>*</span></label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="input_source" className="form-control" placeholder=" " name="input_source" value={values.input_source} onChange={handleChange} onBlur={handleBlur} />
                                                    <label htmlFor="input_source" className="floating-label">Input Source</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="merge_key" className="form-control" placeholder=" " name="merge_key" value={values.merge_key} onChange={handleChange} onBlur={handleBlur} />
                                                    <label htmlFor="merge_key" className="floating-label">Merge Key</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="input_date" className="form-control" placeholder=" " name="input_date" value={values.input_date} onChange={handleChange} onBlur={handleBlur} />
                                                    <label htmlFor="input_date" className="floating-label">Input Date</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="purl_id" className="form-control" placeholder=" " name="purl_id" value={values.purl_id} onChange={handleChange} onBlur={handleBlur} required />
                                                    <label htmlFor="purl_id" className="floating-label">PURL ID <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="name_prefix" className="form-control" placeholder=" " name="name_prefix" value={values.name_prefix} onChange={handleChange} onBlur={handleBlur} />
                                                    <label htmlFor="name_prefix" className="floating-label">Name Prefix</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="OwnerWorkPhone" className="form-control" placeholder=" " name="OwnerWorkPhone" value={values.OwnerWorkPhone} onChange={handleChange} onBlur={handleBlur} required />
                                                    <label htmlFor="OwnerWorkPhone" className="floating-label">Owner Work Phone <span>*</span></label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="OwnerHomePhone" className="form-control" placeholder=" " name="OwnerHomePhone" value={values.OwnerHomePhone} onChange={handleChange} onBlur={handleBlur} />
                                                    <label htmlFor="OwnerHomePhone" className="floating-label">Owner Home Phone</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="OwnerCountryCode" className="form-control" placeholder=" " name="OwnerCountryCode" value={values.OwnerCountryCode} onChange={handleChange} onBlur={handleBlur} required />
                                                    <label htmlFor="OwnerCountryCode" className="floating-label">Owner Country Code <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="OwnerNightPhone" className="form-control" placeholder=" " name="OwnerNightPhone" value={values.OwnerNightPhone} onChange={handleChange} onBlur={handleBlur} required />
                                                    <label htmlFor="OwnerNightPhone" className="floating-label">Owner Night Phone <span>*</span></label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="OwnerDayPhone" className="form-control" placeholder=" " name="OwnerDayPhone" value={values.OwnerDayPhone} onChange={handleChange} onBlur={handleBlur} required />
                                                    <label htmlFor="OwnerDayPhone" className="floating-label">Owner Day Phone <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="OwnerOtherPhone" className="form-control" placeholder=" " name="OwnerOtherPhone" value={values.OwnerOtherPhone} onChange={handleChange} onBlur={handleBlur} required />
                                                    <label htmlFor="OwnerOtherPhone" className="floating-label">Owner Other Phone <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="ReferralSourceName" className="form-control" placeholder=" " name="ReferralSourceName" value={values.ReferralSourceName} onChange={handleChange} onBlur={handleBlur} required />
                                                    <label htmlFor="ReferralSourceName" className="floating-label">Referral Source Name <span>*</span></label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="InsuranceCompany" className="form-control" placeholder=" " name="InsuranceCompany" value={values.InsuranceCompany} onChange={handleChange} onBlur={handleBlur} required />
                                                    <label htmlFor="InsuranceCompany" className="floating-label">Insurance Company <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="ClaimType" className="form-control" placeholder=" " name="ClaimType" value={values.ClaimType} onChange={handleChange} onBlur={handleBlur} required />
                                                    <label htmlFor="ClaimType" className="floating-label">Claim Type <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="number" id="TotalLaborHrs" className="form-control" placeholder=" " name="TotalLaborHrs" value={values.TotalLaborHrs} onChange={handleChange} onBlur={handleBlur} required />
                                                    <label htmlFor="TotalLaborHrs" className="floating-label">Total Labor Hours <span>*</span></label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="number" id="GrossAmount" className="form-control" placeholder=" " name="GrossAmount" value={values.GrossAmount} onChange={handleChange} onBlur={handleBlur} required />
                                                    <label htmlFor="GrossAmount" className="floating-label">Gross Amount <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="number" id="TotalLoss" className="form-control" placeholder=" " name="TotalLoss" value={values.TotalLoss} onChange={handleChange} onBlur={handleBlur} required />
                                                    <label htmlFor="TotalLoss" className="floating-label">Total Loss <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="InsuranceAgentName" className="form-control" placeholder=" " name="InsuranceAgentName" value={values.InsuranceAgentName} onChange={handleChange} onBlur={handleBlur} required />
                                                    <label htmlFor="InsuranceAgentName" className="floating-label">Insurance Agent Name <span>*</span></label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="EstimatorName" className="form-control" placeholder=" " name="EstimatorName" value={values.EstimatorName} onChange={handleChange} onBlur={handleBlur} required />
                                                    <label htmlFor="EstimatorName" className="floating-label">Estimator Name <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="BodyTechFullName" className="form-control" placeholder=" " name="BodyTechFullName" value={values.BodyTechFullName} onChange={handleChange} onBlur={handleBlur} />
                                                    <label htmlFor="BodyTechFullName" className="floating-label">Body Tech Full Name</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="PaintTechFullName" className="form-control" placeholder=" " name="PaintTechFullName" value={values.PaintTechFullName} onChange={handleChange} onBlur={handleBlur} />
                                                    <label htmlFor="PaintTechFullName" className="floating-label">Paint Tech Full Name</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="checkbox" id="update_definitions_on_save" name="update_definitions_on_save" checked={values.update_definitions_on_save} onChange={handleChange} />
                                                    <label htmlFor="update_definitions_on_save" className="floating-label">Update Definitions on Save</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="checkbox" id="sms_log" name="sms_log" checked={values.sms_log} onChange={handleChange} />
                                                    <label htmlFor="sms_log" className="floating-label">SMS Log</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="checkbox" id="invalidron" name="invalidron" checked={values.invalidron} onChange={handleChange} />
                                                    <label htmlFor="invalidron" className="floating-label">Invalid RO Number</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="checkbox" id="sst_definitions" name="sst_definitions" checked={values.sst_definitions} onChange={handleChange} />
                                                    <label htmlFor="sst_definitions" className="floating-label">SST Definitions</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="checkbox" id="scheduled_dm" name="scheduled_dm" checked={values.scheduled_dm} onChange={handleChange} />
                                                    <label htmlFor="scheduled_dm" className="floating-label">Scheduled DM</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-label-group in-border">
                                                    <textarea id="signatureText" className="form-control text-area-height" placeholder=" " name="signatureText" required></textarea>
                                                    <label htmlFor="signatureText" className="floating-label">Signature Text <span>*</span></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="container mt-3">
                                        <div className="row">
                                            <div className="text-center">
                                                <button type="submit" className="btn sub-btn" onClick={handleSubmit}>SAVE</button>
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
                                                        <h6 className="m-0">Import Shop's CSV file</h6>
                                                    </div>
                                                    <div className="border-bottom"></div>
                                                    <div className="import-box-rounded">
                                                        <div className="import-dropzone-desc">
                                                            <button type="button" className="btn sub-btn">Select CSV file</button>
                                                            <p>or Drag and Drop Here</p>
                                                            <input type="file" name="csv_file" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="container mt-3">
                                        <div className="row">
                                            <div className="text-center">
                                                <button type="submit" className="btn sub-btn">Save</button>
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
