import * as Yup from "yup";

export const customerValidation = Yup.object().shape({
  // UID: Yup.string().required('UID is required'),
  OwnerFName: Yup.string().required("Shop Name is required"),
  OwnerLName: Yup.string().required("Owner Last Name is required"),
  status: Yup.string().required("Status is required"),
  OwnerCompanyName: Yup.string().required("Owner Company Name is required"),
  RONumber: Yup.string().required("RO Number is required"),
  CSRName: Yup.string().required("CSR Name is required"),
  OwnerAddress1: Yup.string().required("Address 1 is required"),
  OwnerCity: Yup.string().required("City is required"),
  // OwnerAddress2: Yup.string().required('OwnerAddress2 is required'),

  OwnerStateProvince: Yup.string().required("State is required"),
  OwnerPostalZip: Yup.string().required("Zip Code is required"),
  OwnerEmail: Yup.string()
    .email("Invalid email")
    .required("Owner Email is required"),
  OwnerCellPhone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Owner Cell Phone is required"),
  VehicleArrivedDate: Yup.date().required("Vehicle Arrived Date is required"),
  RepairStartedDate: Yup.date().required("Repair Started Date is required"),
  DeliveredDate: Yup.date().required("Delivered Date is required"),
  VehicleModel: Yup.string().required("Vehicle Model is required"),
  VehicleYear: Yup.string().required("Vehicle Year is required"),
  VehicleMake: Yup.string().required("Vehicle make is required"),

  BusinessKeyPSG: Yup.string().required("Business Key PSG is required"),
  BUName: Yup.string().required("BU Name is required"),
  purl_id: Yup.string().required("PURL ID is required"),
  OwnerWorkPhone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Owner Work Phone is required"),
  OwnerCountryCode: Yup.string().required("Owner Country Code is required"),

  OwnerHomePhone: Yup.string()
    .matches(/^[0-9]{10}$/, "OwnerHomePhone must be 10 digits")
    .required("Owner Night Phone is required"),
  OwnerNightPhone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Owner Night Phone is required"),
  OwnerDayPhone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Owner Day Phone is required"),

  OwnerOtherPhone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Owner Other Phone is required"),

  ReferralSourceName: Yup.string().required("Referral Source Name is required"),

  InsuranceCompany: Yup.string().required("Insurance Company is required"),

  ClaimType: Yup.string().required("Claim Type is required"),

  TotalLaborHrs: Yup.number()
    .typeError("Total Labor Hours must be a number")
    .positive("Total Labor Hours must be a positive number")
    .required("Total Labor Hours is required"),

  GrossAmount: Yup.number()
    .typeError("Gross Amount must be a number")
    .positive("Gross Amount must be a positive number")
    .required("Gross Amount is required"),

  TotalLoss: Yup.number()
    .typeError("Total Loss must be a number")
    .positive("Total Loss must be a positive number")
    .required("Total Loss is required"),

  InsuranceAgentName: Yup.string().required("Insurance Agent Name is required"),

  EstimatorName: Yup.string().required("Estimator Name is required"),

  BodyTechFullName: Yup.string()
    .nullable() // This field is optional, so it can be null or an empty string
    .notRequired(),

  PaintTechFullName: Yup.string()
    .nullable() // This field is optional, so it can be null or an empty string
    .notRequired(),
});
