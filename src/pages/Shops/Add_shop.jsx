import { useFormik } from "formik";
import { useAddShopMutation } from "../../redux/QueryAPi/shopApi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { shopValidation } from "../../Validation/shop";

const Add_shop = () => {
  const [ownerEmail, setOwnerEmail] = useState([{ field: "", value: "" }]);
  const handleAddMore = () => {
    setOwnerEmail([...ownerEmail, { field: "", value: "" }]);
  };
  const handleChangeField = (e, index) => {
    const { name, value } = e.target;
    console.log(name, value, index);
    const list =[...ownerEmail]
    list[index][name]=value
    setOwnerEmail(list)
  };
  
  console.log(ownerEmail)
  
  // const handleRemove = (id) => {
  //   console.log(id); // Check the index of the item to remove
  //   const list = ownerEmail.filter((value, index) => index !== id);
  //   setOwnerEmail(list); // Update state to remove the item
  // };
  const handleRemove = (index) => {
    const updatedOwnerEmail = ownerEmail.filter((_, i) => i !== index); // Filter out the item at the given index
    setOwnerEmail(updatedOwnerEmail); // Update the state with the filtered array
  };
  
  
  const fields = [
    {
      name: "active",
      title: "Report Active",
    },
    {
      name: "advantage_active",
      title: "Advantage Active",
    },
    {
      name: "mso_shop",
      title: "MSO Shop",
    },
    {
      name: "part_of_mso",
      title: "Part of MSO",
    },
    {
      name: "mapping",
      title: "Alt Mapping",
    },
    {
      name: "switch6",
      title: "Include All in recaps",
    },
  ];
  const initialValues = {
    active: null,
    advantage_active: null,
    mso_shop: null,
    part_of_mso: null,
    mapping: null,
    shop_name: null,
    m_shop_name_display: null,
    psg_id: null,
    m_webaddress: null,
    email: null,
    phone_number: null,
    address1: null,
    m_shop_city: null,
    m_shop_state: null,
    address2: null,
    m_shop_zip: null,
    first_name: null,
    last_name: null,
    m_shop_signature_text: null,
    email_from: null,
    embed_type: null || "Gravity Form",
    form_id: null,
    survey_id: null,
    google_review_link: null,
    email_header: null,
    name_rate: null,
    billing_type: null,
    use_all: null,
    // m_shop_signature_text: null
  };
  const navigate = useNavigate();
  const [addShop, { isSuccess, isLoading }] = useAddShopMutation();
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    setFieldValue,
    touched,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: shopValidation,
    onSubmit: async (values, { resetForm }) => {
      try {
        console.log("Shop added successfully:", values);
        const response = await addShop(values);
        resetForm();
      } catch (error) {
        console.error("Failed to add shop:", error);
      }
    },
  });
  useEffect(() => {
    if (isSuccess) {
      navigate("/shop");
    }
  }, [isSuccess]);
  return (
    <div className="content-container">
      <div className="bg-white py-3">
        <div className="container">
          <div className="d-flex">
            <i className="bi bi-info-circle site-color"></i> &nbsp;{" "}
            <h5>Add Shop</h5>
          </div>
          <div className="row mt-1">
            <div className="col-lg-12">
              <nav>
                <div
                  className="nav nav-tabs border-bottom "
                  id="nav-tab"
                  role="tablist"
                >
                  <div
                    className="tab-nav-link active px-2 py-2"
                    id="nav-shop-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-shop"
                    type="button"
                    role="tab"
                    aria-controls="nav-shop"
                    aria-selected="true"
                  >
                    Shop Information
                  </div>
                  <div
                    className="tab-nav-link px-2 py-2"
                    id="nav-media-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-media"
                    type="button"
                    role="tab"
                    aria-controls="nav-media"
                    aria-selected="false"
                  >
                    Media Storage
                  </div>
                  <div
                    className="tab-nav-link px-2 py-2"
                    id="nav-definition-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-definition"
                    type="button"
                    role="tab"
                    aria-controls="nav-definition"
                    aria-selected="false"
                  >
                    Definiton Array
                  </div>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                {/* tab 1 */}

                <div
                  className="tab-pane fade show active"
                  id="nav-shop"
                  role="tabpanel"
                  aria-labelledby="nav-shop-tab"
                  tabindex="0"
                >
                  <div className="container mt-3">
                    <div className="row">
                      {/* {
                        fields.map((value, index) => {
                          return <div className="col-lg-2 col-md-4 col-6">
                            <p className="mb-1">{value.title}
                              <div className="switch-container">
                                <input type="checkbox" id={`switch${index + 1}`} name={value.name} checked={values[value.name]} onChange={() => setFieldValue(value.name, !values[value.name])} />
                                <div className="switch-color"></div>
                                <label htmlFor={`switch${index + 1}`}><i class="bi bi-x"></i><i class="bi bi-check2"></i></label>
                              </div>
                              {touched[value.name] && errors[value.name] ? (
                                <p style={{ color: '#be3134' }}>{errors[value.name]}</p>
                              ) : null}
                            </p>
                          </div>
                        })
                      } */}

                      {fields.map((value, index) => {
                        return (
                          <div className="col-lg-2 col-md-4 col-6" key={index}>
                            <p
                              className="mb-1"
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              {value.title}
                              <div className="switch-container">
                                <input
                                  type="checkbox"
                                  id={`switch${index + 1}`}
                                  name={value.name}
                                  checked={values[value.name] || false} // Ensure it's either true or false
                                  onChange={() =>
                                    setFieldValue(
                                      value.name,
                                      !values[value.name]
                                    )
                                  }
                                />
                                <div className="switch-color"></div>
                                <label htmlFor={`switch${index + 1}`}>
                                  {/* Conditionally render the icon */}
                                  {values[value.name] ? (
                                    <i className="bi bi-check2"></i>
                                  ) : (
                                    <i className="bi bi-x"></i>
                                  )}
                                </label>
                              </div>
                              {touched[value.name] && errors[value.name] ? (
                                <p style={{ color: "#be3134" }}>
                                  {errors[value.name]}
                                </p>
                              ) : null}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="container mt-3">
                    <div className="row">
                      <div className="col-lg-4 col-md-4">
                        <div className="form-label-group in-border">
                          <input
                            type="text"
                            id="shop_name"
                            className={`form-control ${
                              touched.shop_name && errors.shop_name
                                ? "is-invalid"
                                : ""
                            }`}
                            name="shop_name"
                            value={values.shop_name}
                            onChange={handleChange}
                            placeholder=" "
                            aria-describedby="shopNameError" // For accessibility
                          />
                          <label htmlFor="shop_name" className="floating-label">
                            Shop Name <span className="text-danger">*</span>
                          </label>
                          {touched.shop_name && errors.shop_name ? (
                            <div
                              id="shopNameError"
                              className="invalid-feedback"
                            >
                              {errors.shop_name}
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <div className="form-label-group in-border">
                          <input
                            type="text"
                            id="m_shop_name_display"
                            className={`form-control ${
                              touched.m_shop_name_display &&
                              errors.m_shop_name_display
                                ? "is-invalid"
                                : ""
                            }`}
                            name="m_shop_name_display"
                            value={values.m_shop_name_display}
                            onChange={handleChange}
                            placeholder=" "
                            aria-describedby="m_shop_name_display" // For accessibility
                          />
                          <label
                            htmlFor="m_shop_name_display"
                            className="floating-label"
                          >
                            Shop Display Name <span>*</span>
                          </label>
                          {touched.m_shop_name_display &&
                          errors.m_shop_name_display ? (
                            <div
                              id="m_shop_name_display"
                              className="invalid-feedback"
                            >
                              {errors.m_shop_name_display}
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <div className="form-label-group in-border">
                          <input
                            type="text"
                            id="psg_id"
                            className={`form-control ${
                              touched.psg_id && errors.psg_id
                                ? "is-invalid"
                                : ""
                            }`}
                            name="psg_id"
                            value={values.psg_id}
                            onChange={handleChange}
                            placeholder=" "
                            aria-describedby="psg_id" // For accessibility
                          />
                          <label htmlFor="psg_id" className="floating-label">
                            PSG ID <span>*</span>
                          </label>
                          {touched.psg_id && errors.psg_id ? (
                            <div id="psg_id" className="invalid-feedback">
                              {errors.psg_id}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-4 col-md-4">
                        <div className="form-label-group in-border">
                          <input
                            type="text"
                            id="m_webaddress"
                            className={`form-control ${
                              touched.m_webaddress && errors.m_webaddress
                                ? "is-invalid"
                                : ""
                            }`}
                            name="m_webaddress"
                            value={values.m_webaddress}
                            onChange={handleChange}
                            placeholder=" "
                            aria-describedby="m_webaddress" // For accessibility
                          />
                          <label
                            htmlFor="m_webaddress"
                            className="floating-label"
                          >
                            Web Address <span>*</span>
                          </label>
                          {touched.m_webaddress && errors.m_webaddress ? (
                            <div id="m_webaddress" className="invalid-feedback">
                              {errors.m_webaddress}
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <div className="form-label-group in-border">
                          <input
                            type="email"
                            id="email"
                            className="form-control"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            placeholder=" "
                          />
                          <label htmlFor="email" className="floating-label">
                            Email
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <div className="form-label-group in-border">
                          <input
                            type="text"
                            id="phone_number"
                            className="form-control"
                            name="phone_number"
                            value={values.phone_number}
                            onChange={handleChange}
                            placeholder=" "
                          />
                          <label
                            htmlFor="phone_number"
                            className="floating-label"
                          >
                            Phone Number
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-4 col-md-4">
                        <div className="form-label-group in-border">
                          <input
                            type="text"
                            id="address1"
                            className={`form-control ${
                              touched.address1 && errors.address1
                                ? "is-invalid"
                                : ""
                            }`}
                            name="address1"
                            value={values.address1}
                            onChange={handleChange}
                            placeholder=" "
                            aria-describedby="address1" // For accessibility
                          />
                          <label htmlFor="address1" className="floating-label">
                            Address1 <span>*</span>
                          </label>
                          {touched.address1 && errors.address1 ? (
                            <div id="address1" className="invalid-feedback">
                              {errors.address1}
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-4">
                        <div className="form-label-group in-border">
                          <input
                            type="text"
                            id="m_shop_city"
                            className={`form-control ${
                              touched.m_shop_city && errors.m_shop_city
                                ? "is-invalid"
                                : ""
                            }`}
                            name="m_shop_city"
                            value={values.m_shop_city}
                            onChange={handleChange}
                            placeholder=" "
                            aria-describedby="m_shop_city" // For accessibility
                          />
                          <label
                            htmlFor="m_shop_city"
                            className="floating-label"
                          >
                            City <span>*</span>
                          </label>
                          {touched.m_shop_city && errors.m_shop_city ? (
                            <div id="m_shop_city" className="invalid-feedback">
                              {errors.m_shop_city}
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-4">
                        <div className="form-label-group in-border">
                          <input
                            type="text"
                            id="m_shop_state"
                            className={`form-control ${
                              touched.m_shop_state && errors.m_shop_state
                                ? "is-invalid"
                                : ""
                            }`}
                            name="m_shop_state"
                            value={values.m_shop_state}
                            onChange={handleChange}
                            placeholder=" "
                            aria-describedby="m_shop_state" // For accessibility
                          />
                          <label
                            htmlFor="m_shop_state"
                            className="floating-label"
                          >
                            State <span>*</span>
                          </label>
                          {touched.m_shop_state && errors.m_shop_state ? (
                            <div id="m_shop_state" className="invalid-feedback">
                              {errors.m_shop_state}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-8">
                        <div className="row">
                          <div className="col-lg-6 col-md-4">
                            <div className="form-label-group in-border">
                              <input
                                type="text"
                                id="address2"
                                className="form-control"
                                name="address2"
                                value={values.address2}
                                onChange={handleChange}
                                placeholder=" "
                              />
                              <label
                                htmlFor="address2"
                                className="floating-label"
                              >
                                Address2
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-4">
                            <div className="form-label-group in-border">
                              <input
                                type="text"
                                id="m_shop_zip"
                                className={`form-control ${
                                  touched.m_shop_zip && errors.m_shop_zip
                                    ? "is-invalid"
                                    : ""
                                }`}
                                name="m_shop_zip"
                                value={values.m_shop_zip}
                                onChange={handleChange}
                                placeholder=" "
                                aria-describedby="m_shop_zip" // For accessibility
                              />
                              <label
                                htmlFor="m_shop_zip"
                                className="floating-label"
                              >
                                Zip Code <span>*</span>
                              </label>
                              {touched.m_shop_zip && errors.m_shop_zip ? (
                                <div
                                  id="m_shop_zip"
                                  className="invalid-feedback"
                                >
                                  {errors.m_shop_zip}
                                </div>
                              ) : null}
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-4">
                            <div className="form-label-group in-border">
                              <input
                                type="text"
                                id="first_name"
                                className="form-control"
                                name="first_name"
                                value={values.first_name}
                                onChange={handleChange}
                                placeholder=" "
                              />
                              <label
                                htmlFor="first_name"
                                className="floating-label"
                              >
                                First Name
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-4">
                            <div className="form-label-group in-border">
                              <input
                                type="text"
                                id="last_name"
                                className="form-control"
                                name="last_name"
                                value={values.last_name}
                                onChange={handleChange}
                                placeholder=" "
                              />
                              <label
                                htmlFor="last_name"
                                className="floating-label"
                              >
                                Last Name
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="col-lg-12">
                          <div
                            className={`form-label-group in-border ${
                              touched.m_shop_signature_text &&
                              errors.m_shop_signature_text
                                ? "is-invalid"
                                : ""
                            }`}
                          >
                            <textarea
                              id="m_shop_signature_text"
                              className={`form-control text-area-height ${
                                touched.m_shop_signature_text &&
                                errors.m_shop_signature_text
                                  ? "is-invalid"
                                  : ""
                              }`}
                              name="m_shop_signature_text"
                              value={values.m_shop_signature_text}
                              onChange={handleChange}
                              placeholder=" "
                              aria-describedby="m_shop_signature_text" // For accessibility
                            ></textarea>
                            <label
                              htmlFor="m_shop_signature_text"
                              className="floating-label"
                            >
                              Signature Text <span>*</span>
                            </label>
                            {touched.m_shop_signature_text &&
                            errors.m_shop_signature_text ? (
                              <div
                                id="m_shop_signature_text"
                                className="invalid-feedback"
                              >
                                {errors.m_shop_signature_text}
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="container mt-3">
                    <div className="row">
                      <div className="col-lg-8">
                        <h5>Email From</h5>
                        <p>
                          Fill only if the domian is verified in the Campaign
                          Monitor!!!
                        </p>
                        <input
                          type="text"
                          className={`form-control  ${
                            touched.email_from && errors.email_from
                              ? "is-invalid"
                              : ""
                          }`}
                          name="email_from"
                          value={values.email_from}
                          onChange={handleChange}
                        />
                        {touched.email_from && errors.email_from ? (
                          <div id="email_from" className="invalid-feedback">
                            {errors.email_from}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  <div className="container mt-3">
                    <div className="row">
                      <div className="col-lg-8">
                        <h5>Embed Type</h5>

                        <ul
                          className="nav nav-pills mb-3"
                          id="pills-tab"
                          role="tablist"
                        >
                          <li className="nav-item border" role="presentation">
                            <button
                              className="nav-link-tab active"
                              id="pills-gravity-form-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-gravity-form"
                              type="button"
                              role="tab"
                              aria-controls="pills-gravity-form"
                              aria-selected="true"
                              onClick={() =>
                                setFieldValue("embed_type", "Gravity Form")
                              }
                            >
                              Gravity Form
                            </button>
                          </li>
                          <li className="nav-item border" role="presentation">
                            <button
                              className="nav-link-tab"
                              id="pills-type-embed-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-type-embed"
                              type="button"
                              role="tab"
                              aria-controls="pills-type-embed"
                              aria-selected="false"
                            >
                              TypeForm Embed
                            </button>
                          </li>
                          <li className="nav-item border" role="presentation">
                            <button
                              className="nav-link-tab"
                              id="pills-alchemer-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-alchemer"
                              type="button"
                              role="tab"
                              aria-controls="pills-alchemer"
                              aria-selected="false"
                            >
                              Alchemer
                            </button>
                          </li>
                        </ul>

                        <div className="tab-content" id="pills-tabContent">
                          <div
                            className="tab-pane fade show active"
                            id="pills-gravity-form"
                            role="tabpanel"
                            aria-labelledby="pills-gravity-form-tab"
                          >
                            <div className="form-label-group in-border">
                              <input
                                type="text"
                                id="form_id"
                                className="form-control"
                                placeholder=" "
                                value={values.form_id}
                                onChange={handleChange}
                              />
                              <label for="name" className="floating-label">
                                Form ID
                              </label>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pills-type-embed"
                            role="tabpanel"
                            aria-labelledby="pills-type-embed-tab"
                          >
                            <div className="form-label-group in-border">
                              <input
                                type="text"
                                id="name"
                                className="form-control"
                                placeholder=" "
                              />
                              <label for="name" className="floating-label">
                                TypeForm embed Code
                              </label>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pills-alchemer"
                            role="tabpanel"
                            aria-labelledby="pills-alchemer-tab"
                          >
                            <div className="row">
                              <div className="col-6">
                                <div className="form-label-group in-border">
                                  <input
                                    type="text"
                                    id="survey_id"
                                    className="form-control"
                                    placeholder=" "
                                    value={values.survey_id}
                                    onChange={handleChange}
                                  />
                                  <label
                                    htmlFor="survey_id"
                                    className="floating-label"
                                  >
                                    Survey ID <span>*</span>
                                  </label>
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="form-label-group in-border">
                                  <input
                                    type="text"
                                    id="google_review_link"
                                    className="form-control"
                                    name="google_review_link"
                                    placeholder=" "
                                    value={values.google_review_link}
                                    onChange={handleChange}
                                  />
                                  <label
                                    htmlFor="google_review_link"
                                    className="floating-label"
                                  >
                                    Google Review Link
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="container mt-3">
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="d-flex justify-content-between">
                          <div className="">
                            <h5>Alert Type</h5>
                          </div>
                          <div className="">
                            <div className="add-row">
                              <i className="bi bi-plus"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="container mt-3">
                    <div className="row">
                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn sub-btn"
                          onClick={handleSubmit}
                        >
                          {isLoading ? "Saving..." : "Save"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* tab 2 */}
                <div
                  className="tab-pane fade"
                  id="nav-media"
                  role="tabpanel"
                  aria-labelledby="nav-media-tab"
                  tabindex="0"
                >
                  <div className="container mt-3">
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="">
                            <h5>Email Header</h5>
                          </div>
                          <div className="">
                            <div className="dropzone">
                              <div className="dropzone-desc">
                                <div className="dropzone-icon">
                                  <i className="bi bi-camera"></i>
                                </div>
                                <p>Drag Email Header Image Here</p>
                              </div>
                              <input
                                type="file"
                                name="img_logo"
                                className="dropzone"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="container mt-3">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="table-responsive">
                          <table className="table border">
                            <thead>
                              <tr>
                                <th className="border-end">Sr. No.</th>
                                <th className="border-end">Key *</th>
                                <th>Image *</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border-end">1.</td>
                                <td className="border-end">Envelope Header</td>
                                <td>/shop/name/dsk.pdf</td>
                              </tr>
                              <tr>
                                <td className="border-end" colspan="2">
                                  Image Preview
                                </td>
                                <td>
                                  <button type="submit" className="btn sub-btn">
                                    Generate Image
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="table-responsive">
                          <table className="table border">
                            <thead>
                              <tr>
                                <th className="border-end w-25">Sr. No.</th>
                                <th className="border-end w-25">Key *</th>
                                <th className="w-50">Image *</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border-end w-25">2.</td>
                                <td className="border-end w-25">
                                  Letter Header
                                </td>
                                <td className="w-50">/shop/name/dsk.pdf</td>
                              </tr>
                              <tr>
                                <td className="border-end" colspan="2">
                                  Image Preview
                                </td>
                                <td>
                                  <button type="submit" className="btn sub-btn">
                                    Generate Image
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="table-responsive">
                          <table className="table border">
                            <thead>
                              <tr>
                                <th className="border-end w-25">Sr. No.</th>
                                <th className="border-end w-25">Key *</th>
                                <th className="w-50">Image *</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border-end w-25">3.</td>
                                <td className="border-end w-25">Signature</td>
                                <td className="w-50">/shop/name/dsk.pdf</td>
                              </tr>
                              <tr>
                                <td className="border-end" colspan="2">
                                  Image Preview
                                </td>
                                <td>
                                  <button type="submit" className="btn sub-btn">
                                    Generate Image
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="table-responsive">
                          <table className="table border">
                            <thead>
                              <tr>
                                <th className="border-end w-25">Sr. No.</th>
                                <th className="border-end w-25">Key *</th>
                                <th className="w-50">Image *</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border-end w-25">4.</td>
                                <td className="border-end w-25">
                                  Survey Header
                                </td>
                                <td className="w-50">/shop/name/dsk.pdf</td>
                              </tr>
                              <tr>
                                <td className="border-end" colspan="2">
                                  Image Preview
                                </td>
                                <td>
                                  <button type="submit" className="btn sub-btn">
                                    Generate Image
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-12">
                        <div className="table-responsive">
                          <table className="table border">
                            <thead>
                              <tr>
                                <th className="border-end w-25">Sr. No.</th>
                                <th className="border-end w-25">Key *</th>
                                <th className="w-50">Image *</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border-end">5.</td>
                                <td className="border-end">
                                  Warrenty Header 1
                                </td>
                                <td>/shop/name/dsk.pdf</td>
                              </tr>
                              <tr>
                                <td className="border-end" colspan="2">
                                  Image Preview
                                </td>
                                <td>
                                  <button type="submit" className="btn sub-btn">
                                    Generate Image
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-12">
                        <div className="table-responsive">
                          <table className="table border">
                            <thead>
                              <tr>
                                <th className="border-end w-25 ">Sr. No.</th>
                                <th className="border-end w-25 ">Key *</th>
                                <th className="w-50">Image *</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border-end w-25">6.</td>
                                <td className="border-end w-25">
                                  Warrenty Header 2
                                </td>
                                <td className="w-50">/shop/name/dsk.pdf</td>
                              </tr>
                              <tr>
                                <td className="border-end" colspan="2">
                                  Image Preview
                                </td>
                                <td>
                                  <button type="submit" className="btn sub-btn">
                                    Generate Image
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="container mt-3">
                    <div className="row">
                      <div className="col-12">
                        <h5>Invoicing</h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <div className="col-lg-8">
                          <h6>Invoicing Enabled</h6>
                          <div className="switch-container">
                            <input type="checkbox" id="switch-1" />
                            <div className="switch-color"></div>
                            <label for="switch-1"></label>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 text-center">
                        <h6>Billing Type</h6>
                        <ul
                          className="nav mb-3 justify-content-center"
                          id="pills-tab"
                          role="tablist"
                        >
                          <li className="nav-item border" role="presentation">
                            <button
                              className="nav-link-tab active"
                              id="pills-gravity-form-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-gravity-form"
                              type="button"
                              role="tab"
                              aria-controls="pills-gravity-form"
                              aria-selected="true"
                            >
                              Per Customer Submitted
                            </button>
                          </li>
                          <li className="nav-item border" role="presentation">
                            <button
                              className="nav-link-tab"
                              id="pills-type-embed-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-type-embed"
                              type="button"
                              role="tab"
                              aria-controls="pills-type-embed"
                              aria-selected="false"
                              tabindex="-1"
                            >
                              Per Customer Executed
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="container mt-3">
                    <div className="row">
                      <div className="col-12">
                        <div className="form-label-group in-border">
                          <input
                            type="text"
                            id="name"
                            className="form-control"
                            placeholder=" "
                          />
                          <label for="name" className="floating-label">
                            Invoice Debug
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="form-label-group in-border">
                          <input
                            type="text"
                            id="name"
                            className="form-control"
                            placeholder=" "
                          />
                          <label for="name" className="floating-label">
                            Name Rate
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="container mt-3">
                    <div className="row">
                      <div className="text-center">
                        <buttont type="submit" className="btn sub-btn">
                          Save
                        </buttont>
                      </div>
                    </div>
                  </div>
                </div>
                {/* tab 3 */}
                <div
                  className="tab-pane fade"
                  id="nav-definition"
                  role="tabpanel"
                  aria-labelledby="nav-definition-tab"
                  tabindex="0"
                >
                  <div className="container mt-3">
                    <div className="row">
                      <div className="col-12">
                        <div className="col-lg-2 col-md-4 col-6">
                          <h6 className="mb-1">Use New System</h6>
                          <div className="switch-container">
                            <input type="checkbox" id="switch-2" />
                            <div className="switch-color"></div>
                            <label for="switch-2"></label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="container mt-3">
                    <div className="row">
                      <div className="col-lg-2 col-md-4 col-6">
                        <h6 className="mb-1">Definitions2</h6>
                      </div>
                    </div>
                  </div>

                  <div className="container mt-3 border p-3">
                    <div className="row">
                      <div className="col-4">
                        <div>
                          <h6>OwnerEmail</h6>
                          <ul
                            className="nav mb-3"
                            id="pills-tab"
                            role="tablist"
                          >
                            <li className="nav-item border" role="presentation">
                              <button
                                className="nav-link-tab active"
                                id="pills-gravity-form-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-gravity-form"
                                type="button"
                                role="tab"
                                aria-controls="pills-gravity-form"
                                aria-selected="true"
                              >
                                Exists
                              </button>
                            </li>
                            <li className="nav-item border" role="presentation">
                              <button
                                className="nav-link-tab"
                                id="pills-type-embed-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-type-embed"
                                type="button"
                                role="tab"
                                aria-controls="pills-type-embed"
                                aria-selected="false"
                                tabindex="-1"
                              >
                                Not Exists
                              </button>
                            </li>
                            <li className="nav-item border" role="presentation">
                              <button
                                className="nav-link-tab"
                                id="pills-type-embed-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-type-embed"
                                type="button"
                                role="tab"
                                aria-controls="pills-type-embed"
                                aria-selected="false"
                                tabindex="-1"
                              >
                                Ignore
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="col-4">
                        <div>
                          <h6>OwnerCellPhone</h6>
                          <ul
                            className="nav mb-3"
                            id="pills-tab"
                            role="tablist"
                          >
                            <li className="nav-item border" role="presentation">
                              <button
                                className="nav-link-tab active"
                                id="pills-gravity-form-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-gravity-form"
                                type="button"
                                role="tab"
                                aria-controls="pills-gravity-form"
                                aria-selected="true"
                              >
                                Exists
                              </button>
                            </li>
                            <li className="nav-item border" role="presentation">
                              <button
                                className="nav-link-tab"
                                id="pills-type-embed-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-type-embed"
                                type="button"
                                role="tab"
                                aria-controls="pills-type-embed"
                                aria-selected="false"
                                tabindex="-1"
                              >
                                Not Exists
                              </button>
                            </li>
                            <li className="nav-item border" role="presentation">
                              <button
                                className="nav-link-tab"
                                id="pills-type-embed-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-type-embed"
                                type="button"
                                role="tab"
                                aria-controls="pills-type-embed"
                                aria-selected="false"
                                tabindex="-1"
                              >
                                Ignore
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="col-4">
                        <div>
                          <h6>Full Address</h6>
                          <div className="d-flex">
                            <p>
                              Address1, City, StateProvince, <br />
                              PostalZip
                            </p>
                            <div className="switch-container">
                              <input type="checkbox" id="switch-3" />
                              <div className="switch-color"></div>
                              <label for="switch-3"></label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-4">
                        <div className="border p-3">
                          <div className="d-flex justify-content-between">
                            OwnerEmail
                            <div className="">
                              <div className="add-row" onClick={handleAddMore}>
                                <i className="bi bi-plus"></i>
                              </div>
                            </div>
                          </div>
                        </div>

                        {ownerEmail.map((value, index) => {
                          return (
                            <div
                              key={index}
                              className="border p-3 d-flex gap-2 justify-content-between mt-2 position-relative"
                            >
                              <div className="border-end pe-3 d-flex justify-content-between align-items-center">
                                <span>{index + 1}</span>
                              </div>

                              <div className="d-flex flex-column gap-1">
                                {/* Field Input */}
                                <div className="input-group mb-3">
                                  <label
                                    className="input-group-text"
                                    htmlFor={`fieldInput-${index}`}
                                  >
                                    Field
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id={`fieldInput-${index}`}
                                    name="field"
                                    placeholder="Enter field name"
                                    aria-label="Field name input"
                                    onChange={(e)=>handleChangeField(e,index)}
                                  />
                                </div>

                                {/* Value Input */}
                                <div className="input-group mb-3">
                                  <label
                                    className="input-group-text"
                                    htmlFor={`valueInput-${index}`}
                                  >
                                    Value
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="value"
                                    id={`valueInput-${index}`}
                                    placeholder="Enter value"
                                    aria-label="Value input"
                                    onChange={(e)=>handleChangeField(e,index)}
                                  />
                                </div>
                              </div>

                              <div className="position-absolute d-flex justify-content-evenly flex-column gap-6" style={{ height:'100%',cursor: "pointer",top:'0px',right:'-13px' }}>
                                {/* Remove button */}
                                <i
                                  onClick={() => handleAddMore()} // Pass the correct index
                                  className="bi bi-plus   border rounded-circle px-1 bg-light-subtle"
                                  style={{ cursor: "pointer" }}
                                ></i>

<i
                                  onClick={() => handleRemove(index)} // Pass the correct index
                                  className="bi bi-dash   border rounded-circle px-1 bg-light-subtle"
                                  style={{ cursor: "pointer" }}
                                ></i>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <div className="col-4">
                        <div className="border p-3">
                          <div className="d-flex justify-content-between">
                            Field Condiition
                            <div className="">
                              <div className="add-row">
                                <i className="bi bi-plus"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="border p-3">
                          <div className="d-flex justify-content-between">
                            PreDefined Condiition
                            <div className="">
                              <div className="add-row">
                                <i className="bi bi-plus"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row mt-3">
                      <div>
                        <div className="form-label-group in-border">
                          <textarea
                            type="text"
                            id="name"
                            className="form-control text-area-height"
                            placeholder=" "
                          ></textarea>
                          <label for="name" className="floating-label">
                            Description
                          </label>
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
    </div>
  );
};
export default Add_shop;
