

import { useFormik } from "formik";
import { customerValidation } from "../../Validation/customer";
import {  useGetCustomerByIdQuery, useUpdateCustomerMutation } from "../../redux/QueryAPi/customer";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ModifyDate } from "../../utils/ModifyDate";
import { useGetAllShopsNameQuery } from "../../redux/QueryAPi/shopApi";

const View_Edit = () => {
    const [updateCustomer,{isSuccess}] = useUpdateCustomerMutation()
    const  {id} =   useParams()
    const selectRef = useRef(null)
    const {data}= useGetCustomerByIdQuery(id)
    const [isEdit,setEdit]=useState(true)
    const navigate = useNavigate()
    const initialValues = {
        customer_id:id,
        status: data?.data?.status || '',
        OwnerFName: data?.data?.OwnerFName || '',
        OwnerLName: data?.data?.OwnerLName || '',
        OwnerCompanyName: data?.data?.OwnerCompanyName || '',
        RONumber: data?.data?.RONumber || '',
        CSRName: data?.data?.CSRName || '',
        OwnerAddress1: data?.data?.OwnerAddress1 || '',
        OwnerAddress2: data?.data?.OwnerAddress2 || '',
        OwnerCity: data?.data?.OwnerCity || '',
        OwnerStateProvince: data?.data?.OwnerStateProvince || '',
        OwnerPostalZip: data?.data?.OwnerPostalZip || '',
        OwnerEmail: data?.data?.OwnerEmail || '',
        OwnerCellPhone: data?.data?.OwnerCellPhone || '',
        VehicleArrivedDate: data?.data?.VehicleArrivedDate || '',
        RepairStartedDate: data?.data?.RepairStartedDate || '',
        DeliveredDate: data?.data?.DeliveredDate || '',
        VehicleYear: data?.data?.VehicleYear || '',
        VehicleMake: data?.data?.VehicleMake || '',
        VehicleModel: data?.data?.VehicleModel || '',
        BusinessKeyPSG: data?.data?.BusinessKeyPSG || '',
        BUName: data?.data?.BUName || '',
        input_source: data?.data?.input_source || '',
        merge_key: data?.data?.merge_key || '',
        input_date: data?.data?.input_date || '',
        purl_id: data?.data?.purl_id || '',
        name_prefix: data?.data?.name_prefix || '',
        OwnerWorkPhone: data?.data?.OwnerWorkPhone || '',
        OwnerHomePhone: data?.data?.OwnerHomePhone || '',
        OwnerCountryCode: data?.data?.OwnerCountryCode || '',
        OwnerNightPhone: data?.data?.OwnerNightPhone || '',
        OwnerDayPhone: data?.data?.OwnerDayPhone || '',
        OwnerOtherPhone: data?.data?.OwnerOtherPhone || '',
        ReferralSourceName: data?.data?.ReferralSourceName || '',
        InsuranceCompany: data?.data?.InsuranceCompany || '',
        ClaimType: data?.data?.ClaimType || '',
        TotalLaborHrs: data?.data?.TotalLaborHrs || 0,
        GrossAmount: data?.data?.GrossAmount || 0,
        TotalLoss: data?.data?.TotalLoss || 0,
        InsuranceAgentName: data?.data?.InsuranceAgentName || '',
        EstimatorName: data?.data?.EstimatorName || '',
        BodyTechFullName: data?.data?.BodyTechFullName || '',
        PaintTechFullName: data?.data?.PaintTechFullName || '',
        update_definitions_on_save: data?.data?.update_definitions_on_save || false,
        sms_log: data?.data?.sms_log || '',
        invalidron: data?.data?.invalidron || false,
        sst_definitions: data?.data?.sst_definitions || '',
        scheduled_dm: data?.data?.scheduled_dm || '',
        UID: data?.data?.UID || '2' // Default value if not provided
    };
    const { data: shopList, error, } = useGetAllShopsNameQuery();
    const { values, errors, handleChange, handleSubmit, handleBlur, touched, setFieldValue } = useFormik({
        initialValues,
        validationSchema: customerValidation,
        enableReinitialize:true,
     
        onSubmit: async (values) => {
            console.log(values)
            const modifiedValues = {
                ...values,
                VehicleArrivedDate: ModifyDate(values.VehicleArrivedDate),
                RepairStartedDate: ModifyDate(values.RepairStartedDate),
                DeliveredDate: ModifyDate(values.DeliveredDate),
                // Add other date fields here as needed
            };
            try {
                await updateCustomer(modifiedValues)
            } catch (error) {
                console.log(error)
            }

        }
    })
    const handleScroll = (event) => {
        console.log('Scroll event:', event);
        // You can log additional info, like the current scroll position
        console.log('ScrollTop:', event.target.scrollTop);
      };
    useEffect(() => {
        if (isSuccess) {

            navigate('/customer')
        }
    }, [isSuccess])
    return (
        <div className="content-container">
            <div className="bg-white py-3">
                <div className="container">
                    <div className="d-flex">
                        <i className="bi bi-info-circle site-color"></i> &nbsp;
                        <h5>View/Edit Customer</h5>
                    </div>
                    <div className="row mt-1">
                        <div className="col-lg-12">
                        <div className="d-flex justify-content-between align-items-center">
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
                            <div className="mr-4" style={{marginRight:'12px'}}>
                            <input type="checkbox" id="edit" name="edit" checked={!isEdit} onClick={()=>setEdit(!isEdit)} />
                            <label htmlFor="edit" className="floating-label" style={{paddingLeft:'5px',fontWeight:'bold'}}>Edit</label>
                            </div>
                            </div>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-shop" role="tabpanel" aria-labelledby="nav-shop-tab" tabindex="0">
                                    <div className="container mt-3">
                                        {/* Owner Details */}
                                        <div className="row">

                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="OwnerFName" className="form-control" placeholder=" " name="OwnerFName" value={values.OwnerFName} onChange={handleChange} onBlur={handleBlur} required disabled={isEdit} />
                                                    <label htmlFor="OwnerFName" className="floating-label">Owner First Name <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="OwnerLName" className="form-control" placeholder=" " name="OwnerLName" value={values.OwnerLName} onChange={handleChange} onBlur={handleBlur} required disabled={isEdit} />
                                                    <label htmlFor="OwnerLName" className="floating-label">Owner Last Name <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <select type="text" id="status" className="form-control" placeholder=" " name="status"
                                                        value={values.status} onChange={handleChange} onBlur={handleBlur}
                                                        required disabled={isEdit}
                                                    >
                                                        <option disabled selected>Select</option>

                                                        <option value={'Clean'}>Clean</option>
                                                        <option value={'Error'}>Error</option>
                                                        <option value={'UnChecked'}>UnChecked</option>

                                                    </select>
                                                    <label htmlFor="status" className="floating-label">Status <span>*</span></label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="OwnerCompanyName" className="form-control" placeholder=" " name="OwnerCompanyName" value={values.OwnerCompanyName} onChange={handleChange} onBlur={handleBlur} required disabled={isEdit} />
                                                    <label htmlFor="OwnerCompanyName" className="floating-label">Owner Company Name <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="RONumber" className="form-control" placeholder=" " name="RONumber" value={values.RONumber} onChange={handleChange} onBlur={handleBlur} required disabled={isEdit} />
                                                    <label htmlFor="RONumber" className="floating-label">RO Number <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="CSRName" className="form-control" placeholder=" " name="CSRName" value={values.CSRName} onChange={handleChange} onBlur={handleBlur} required disabled={isEdit} />
                                                    <label htmlFor="CSRName" className="floating-label">CSR Name <span>*</span></label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="OwnerAddress1" className="form-control" placeholder=" " name="OwnerAddress1" value={values.OwnerAddress1} onChange={handleChange} onBlur={handleBlur} required disabled={isEdit} />
                                                    <label htmlFor="OwnerAddress1" className="floating-label">Address 1 <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="OwnerAddress2" className="form-control" placeholder=" " name="OwnerAddress2" value={values.OwnerAddress2} onChange={handleChange} onBlur={handleBlur} disabled={isEdit} />
                                                    <label htmlFor="OwnerAddress2" className="floating-label">Address 2</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="OwnerCity" className="form-control" placeholder=" " name="OwnerCity" value={values.OwnerCity} onChange={handleChange} onBlur={handleBlur} required disabled={isEdit} />
                                                    <label htmlFor="OwnerCity" className="floating-label">City <span>*</span></label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="OwnerStateProvince" className="form-control" placeholder=" " name="OwnerStateProvince" value={values.OwnerStateProvince} onChange={handleChange} onBlur={handleBlur} required disabled={isEdit} />
                                                    <label htmlFor="OwnerStateProvince" className="floating-label">State <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="OwnerPostalZip" className="form-control" placeholder=" " name="OwnerPostalZip" value={values.OwnerPostalZip} onChange={handleChange} onBlur={handleBlur} required disabled={isEdit} />
                                                    <label htmlFor="OwnerPostalZip" className="floating-label">Zip Code <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="OwnerEmail" className="form-control" placeholder=" " name="OwnerEmail" value={values.OwnerEmail} onChange={handleChange} onBlur={handleBlur} required disabled={isEdit} />
                                                    <label htmlFor="OwnerEmail" className="floating-label">Owner Email <span>*</span></label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="OwnerCellPhone" className="form-control" placeholder=" " name="OwnerCellPhone" value={values.OwnerCellPhone} onChange={handleChange} onBlur={handleBlur} required disabled={isEdit} />
                                                    <label htmlFor="OwnerCellPhone" className="floating-label">Owner Cell Phone <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="date" id="VehicleArrivedDate" className="form-control" placeholder=" " name="VehicleArrivedDate" value={values.VehicleArrivedDate} onChange={handleChange} onBlur={handleBlur} required disabled={isEdit} />
                                                    <label htmlFor="VehicleArrivedDate" className="floating-label">Vehicle Arrived Date <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="date" id="RepairStartedDate" className="form-control" placeholder=" " name="RepairStartedDate" value={values.RepairStartedDate} onChange={handleChange} onBlur={handleBlur} required disabled={isEdit} />
                                                    <label htmlFor="RepairStartedDate" className="floating-label">Repair Started Date <span>*</span></label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="date" id="DeliveredDate" className="form-control" placeholder=" " name="DeliveredDate" value={values.DeliveredDate} 
                                                    onChange={handleChange}
                                                     onBlur={handleBlur} required disabled={isEdit} />
                                                    <label htmlFor="DeliveredDate" className="floating-label">Delivered Date <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="date" id="VehicleYear" className="form-control" placeholder=" " name="VehicleYear" value={values.VehicleYear} onChange={handleChange} onBlur={handleBlur} required disabled={isEdit} />
                                                    <label htmlFor="VehicleYear" className="floating-label">Vehicle Year <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="VehicleMake" className="form-control" placeholder=" " name="VehicleMake" value={values.VehicleMake} onChange={handleChange} onBlur={handleBlur} required disabled={isEdit} />
                                                    <label htmlFor="VehicleMake" className="floating-label">Vehicle Make <span>*</span></label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="VehicleModel" className="form-control" placeholder=" " name="VehicleModel" value={values.VehicleModel} onChange={handleChange} onBlur={handleBlur} required disabled={isEdit} />
                                                    <label htmlFor="VehicleModel" className="floating-label">Vehicle Model <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <select
                                                        id="BusinessKeyPSG"
                                                        className="form-control"
                                                        name="BusinessKeyPSG"
                                                        value={values.BusinessKeyPSG}
                                                        onScroll={handleScroll}
                                                        ref={selectRef}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        required disabled={isEdit}
                                                        aria-label="Select a business"
                                                    >
                                                        <option value="" disabled>Select</option>
                                                        {shopList?.data?.map((shop, index) => (
                                                            <option key={shop.psg_id} value={shop.psg_id}>
                                                                {shop?.shop_name}
                                                            </option>
                                                        ))}
                                                    </select>

                                                    <label htmlFor="BusinessKeyPSG" className="floating-label">Business Key PSG <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="BUName" className="form-control" placeholder=" " name="BUName" value={values.BUName} onChange={handleChange} onBlur={handleBlur} required disabled={isEdit} />
                                                    <label htmlFor="BUName" className="floating-label">BU Name <span>*</span></label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="input_source" className="form-control" placeholder=" " name="input_source" value={values.input_source} onChange={handleChange} onBlur={handleBlur} disabled={isEdit}/>
                                                    <label htmlFor="input_source" className="floating-label">Input Source</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="merge_key" className="form-control" placeholder=" " name="merge_key" value={values.merge_key} onChange={handleChange} onBlur={handleBlur} disabled={isEdit}/>
                                                    <label htmlFor="merge_key" className="floating-label">Merge Key</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="input_date" className="form-control" placeholder=" " name="input_date" value={values.input_date} onChange={handleChange} onBlur={handleBlur} disabled={isEdit} />
                                                    <label htmlFor="input_date" className="floating-label">Input Date</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="purl_id" className="form-control" placeholder=" " name="purl_id" value={values.purl_id} onChange={handleChange} onBlur={handleBlur} required disabled={isEdit} />
                                                    <label htmlFor="purl_id" className="floating-label">PURL ID <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="name_prefix" className="form-control" placeholder=" " name="name_prefix" value={values.name_prefix} onChange={handleChange} onBlur={handleBlur} disabled={isEdit}/>
                                                    <label htmlFor="name_prefix" className="floating-label">Name Prefix</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="OwnerWorkPhone" className="form-control" placeholder=" " name="OwnerWorkPhone" value={values.OwnerWorkPhone} onChange={handleChange} onBlur={handleBlur} required disabled={isEdit} />
                                                    <label htmlFor="OwnerWorkPhone" className="floating-label">Owner Work Phone <span>*</span></label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="OwnerHomePhone" className="form-control" placeholder=" " name="OwnerHomePhone" value={values.OwnerHomePhone} onChange={handleChange} onBlur={handleBlur} disabled={isEdit} />
                                                    <label htmlFor="OwnerHomePhone" className="floating-label">Owner Home Phone</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="OwnerCountryCode" className="form-control" placeholder=" " name="OwnerCountryCode" value={values.OwnerCountryCode} onChange={handleChange} onBlur={handleBlur} required disabled={isEdit} />
                                                    <label htmlFor="OwnerCountryCode" className="floating-label">Owner Country Code <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="OwnerNightPhone" className="form-control" placeholder=" " name="OwnerNightPhone" value={values.OwnerNightPhone} onChange={handleChange} onBlur={handleBlur} required disabled={isEdit} />
                                                    <label htmlFor="OwnerNightPhone" className="floating-label">Owner Night Phone <span>*</span></label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="OwnerDayPhone" className="form-control" placeholder=" " name="OwnerDayPhone" value={values.OwnerDayPhone} onChange={handleChange} onBlur={handleBlur} required disabled={isEdit} />
                                                    <label htmlFor="OwnerDayPhone" className="floating-label">Owner Day Phone <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="OwnerOtherPhone" className="form-control" placeholder=" " name="OwnerOtherPhone" value={values.OwnerOtherPhone} onChange={handleChange} onBlur={handleBlur} required disabled={isEdit} />
                                                    <label htmlFor="OwnerOtherPhone" className="floating-label">Owner Other Phone <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="ReferralSourceName" className="form-control" placeholder=" " name="ReferralSourceName" value={values.ReferralSourceName} onChange={handleChange} onBlur={handleBlur} required disabled={isEdit} />
                                                    <label htmlFor="ReferralSourceName" className="floating-label">Referral Source Name <span>*</span></label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="InsuranceCompany" className="form-control" placeholder=" " name="InsuranceCompany" value={values.InsuranceCompany} onChange={handleChange} onBlur={handleBlur} required disabled={isEdit} />
                                                    <label htmlFor="InsuranceCompany" className="floating-label">Insurance Company <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="ClaimType" className="form-control" placeholder=" " name="ClaimType" value={values.ClaimType} onChange={handleChange} onBlur={handleBlur} required disabled={isEdit} />
                                                    <label htmlFor="ClaimType" className="floating-label">Claim Type <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="number" id="TotalLaborHrs" className="form-control" placeholder=" " name="TotalLaborHrs" value={values.TotalLaborHrs} onChange={handleChange} onBlur={handleBlur} required disabled={isEdit} />
                                                    <label htmlFor="TotalLaborHrs" className="floating-label">Total Labor Hours <span>*</span></label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="number" id="GrossAmount" className="form-control" placeholder=" " name="GrossAmount" value={values.GrossAmount} onChange={handleChange} onBlur={handleBlur} required disabled={isEdit} />
                                                    <label htmlFor="GrossAmount" className="floating-label">Gross Amount <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="number" id="TotalLoss" className="form-control" placeholder=" " name="TotalLoss" value={values.TotalLoss} onChange={handleChange} onBlur={handleBlur} required disabled={isEdit} />
                                                    <label htmlFor="TotalLoss" className="floating-label">Total Loss <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="InsuranceAgentName" className="form-control" placeholder=" " name="InsuranceAgentName" value={values.InsuranceAgentName} onChange={handleChange} onBlur={handleBlur} required disabled={isEdit} />
                                                    <label htmlFor="InsuranceAgentName" className="floating-label">Insurance Agent Name <span>*</span></label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="EstimatorName" className="form-control" placeholder=" " name="EstimatorName" value={values.EstimatorName} onChange={handleChange} onBlur={handleBlur} required disabled={isEdit} />
                                                    <label htmlFor="EstimatorName" className="floating-label">Estimator Name <span>*</span></label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="BodyTechFullName" className="form-control" placeholder=" " name="BodyTechFullName" value={values.BodyTechFullName} onChange={handleChange} onBlur={handleBlur} disabled={isEdit}/>
                                                    <label htmlFor="BodyTechFullName" className="floating-label">Body Tech Full Name</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="text" id="PaintTechFullName" className="form-control" placeholder=" " name="PaintTechFullName" value={values.PaintTechFullName} onChange={handleChange} onBlur={handleBlur} disabled={isEdit} />
                                                    <label htmlFor="PaintTechFullName" className="floating-label">Paint Tech Full Name</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="checkbox" id="update_definitions_on_save" name="update_definitions_on_save" disabled={isEdit}
                                                        checked={values.update_definitions_on_save === 1} // Check if value is 1
                                                        onChange={(e) => {
                                                            const value = e.target.checked ? 1 : 0; // Convert to 1 or 0
                                                            setFieldValue("update_definitions_on_save", value); // Use setFieldValue
                                                        }}
                                                    />
                                                    <label htmlFor="update_definitions_on_save" className="floating-label">Update Definitions on Save</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="checkbox" id="sms_log" name="sms_log" disabled={isEdit}
                                                        checked={values.sms_log === 1} // Check if value is 1
                                                        onChange={(e) => {
                                                            const value = e.target.checked ? 1 : 0; // Convert to 1 or 0
                                                            setFieldValue("sms_log", value); // Use setFieldValue
                                                        }}
                                                    />
                                                    <label htmlFor="sms_log" className="floating-label">SMS Log</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="checkbox" id="invalidron" name="invalidron" disabled={isEdit}
                                                        checked={values.invalidron === 1} // Check if value is 1
                                                        onChange={(e) => {
                                                            const value = e.target.checked ? 1 : 0; // Convert to 1 or 0
                                                            setFieldValue("invalidron", value); // Use setFieldValue
                                                        }} />
                                                    <label htmlFor="invalidron" className="floating-label">Invalid RO Number</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="checkbox" id="sst_definitions" name="sst_definitions" disabled={isEdit}
                                                        checked={values.sst_definitions === 1} // Check if value is 1
                                                        onChange={(e) => {
                                                            const value = e.target.checked ? 1 : 0; // Convert to 1 or 0
                                                            setFieldValue("sst_definitions", value); // Use setFieldValue
                                                        }} />
                                                    <label htmlFor="sst_definitions" className="floating-label">SST Definitions</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-label-group in-border">
                                                    <input type="checkbox" id="scheduled_dm" name="scheduled_dm" disabled={isEdit}
                                                        checked={values.scheduled_dm === 1} // Check if value is 1
                                                        onChange={(e) => {
                                                            const value = e.target.checked ? 1 : 0; // Convert to 1 or 0
                                                            setFieldValue("scheduled_dm", value); // Use setFieldValue
                                                        }} />
                                                    <label htmlFor="scheduled_dm" className="floating-label">Scheduled DM</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-label-group in-border">
                                                    <textarea id="signatureText" className="form-control text-area-height" placeholder=" " name="signatureText" required disabled={isEdit}></textarea>
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

export default View_Edit;
