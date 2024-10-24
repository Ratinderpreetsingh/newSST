
// import Pagination from "../../../CustomUi/Pagination";

import { useNavigate } from "react-router-dom";

const Customer = ({ customer, isLoading, handleQuery, queries, handleClear }) => {


  const navigate = useNavigate()

  return (
    <div className="content-container">

      {/* <h1><i className="bi bi-speedometer2 "></i>Customer</h1> */}
      <div className="container-area ">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h5 className="mb-2">Customer</h5>

                <div className="row mb-3">
                  <div className="col-md-2">
                    <div className="tp-title">
                      <b>Sort by</b>
                    </div>
                    <select className="form-select" aria-label="Sort" name="sorted_by" value={queries.sorted_by} onChange={handleQuery}>
                      <option value="">Sort by</option>
                      <option value="name_A_Z">Name (A-Z)</option>
                      <option value="name_Z_A">Name (Z-A)</option>
                      <option value="date_newest">Date (Newest)</option>
                      <option value="date_oldest">Date (Oldest)</option>
                      <option value="true">Active</option>
                      <option value="false">Inactive</option>
                    </select>
                  </div>
                  <div className="col-md-2">
                    <div className="tp-title">
                      <b>Cleanup</b>
                    </div>
                    <input type="date" className="form-control" placeholder="dd/mm/yyyy" aria-label="Cleanup" value={queries.cleanup} name="cleanup" onChange={handleQuery} />
                  </div>
                  <div className="col-md-2">
                    <div className="tp-title">
                      <b>Status</b>
                    </div>
                    <select className="form-select" aria-label="Status" value={queries.status} name="status" onChange={handleQuery}>
                      <option selected value=''>Any</option>
                      <option value="Clean">Clean</option>
                      <option value="Error">Error</option>
                      <option value="Unchecked">Unchecked</option>
                    </select>
                  </div>
                  <div className="col-md-2">
                    <div className="tp-title">
                      <b>Definitions</b>
                    </div>
                    <div className="d-flex  flex-wrap">
                      <div className="form-check pe-1">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={queries.sms} // Check if sms is 1 to determine the checked state
                          value={1}
                          id="SMS"
                          name='sms'
                          onChange={handleQuery}
                        />
                        {/* <input className="form-check-input" type="checkbox" value={1}  checked={queries.sms}  onChange={handleQuery} name='sms' /> */}
                        <label className="form-check-label" for="SMS">
                          SMS
                        </label>
                      </div>
                      <div className="form-check pe-1">
                        <input className="form-check-input" type="checkbox" value="" id="email" checked="" />
                        <label className="form-check-label" for="email">
                          Email
                        </label>
                      </div>
                      <div className="form-check pe-1">
                        <input className="form-check-input" type="checkbox" value="" id="directmail" checked="" />
                        <label className="form-check-label" for="directmail">
                          Direct Mail
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="tp-title">
                      <b>Delivered Date</b>
                    </div>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="dd/mm/yyyy"
                      aria-label="Input Delivered Date"
                      name="delivery_date"
                      value={queries.delivery_date}
                      onChange={handleQuery}
                    />
                  </div>
                  <div className="col-md-2">
                    <div className="tp-title">
                      <b>Search</b>
                    </div>
                    <div className="input-group me-2">
                      <div className="form-outline w-100" data-mdb-input-init="">
                        <input id="search-input" type="search" className="form-control" placeholder="Search" name="search" value={queries.search}
                          onChange={handleQuery} />
                      </div>
                      <span id="search-button" className="btn btn-danger position-absolute end-0">
                        <i className="bi bi-search"></i>
                      </span>
                    </div>
                  </div>
                  <span style={{ textAlign: 'right', cursor: 'pointer', color: '#0000EE' }} onClick={handleClear}>Clear All Filter</span>

                </div>

              </div>
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Customer Name</th>
                        <th>Customer ID</th>
                        <th>Shop Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Input Date</th>
                        <th>Delivery Date</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>

                      {isLoading ? <td style={{ textAlign: 'center', padding: '20px' }} colSpan="9">Loading...</td>
                        : customer?.data?.length < 1 ? <tr>
                          <td colSpan="9" style={{ textAlign: 'center' }}>
                            Not Found
                          </td>
                        </tr>
                          : customer?.data && customer?.data.map((value, index) => {
                            const [month, day, year] = value?.DeliveredDate.split('/');
                            const formattedDate = `${day}/${month}/${year}`;
                            return   <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{value.OwnerFName + ' ' + value.OwnerLName}</td>
                            <td>{value?.UID}</td>
                            <td>{value?.shop_name?.shop_name ? value?.shop_name?.shop_name : '-'}</td>
                            <td>{value?.OwnerEmail ? value?.OwnerEmail : '-'}</td>
                            <td>
                              <span className={`badge ${value?.status === "Error" ? "bg-danger" : value?.status === "Unchecked" ? "bg-warning" : "bg-success"}`}>
                                {value?.status}
                              </span>
                            </td>
                            <td>{value?.input_date}</td>
                            <td>{formattedDate}</td>
                            <td>
                              <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-file-earmark-pdf"></i></button>
                              <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-eye"></i></button>
                              <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-trash3"></i></button>
                            </td>
                          </tr>
                          }
                          
                          )}


                    </tbody>
                  </table>
                </div>
              </div>
              <div className="card-footer text-center">


                <button className="btn btn-danger" onClick={() => navigate('/customer')}>View All</button>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>


  );
}
export default Customer

// import React from 'react'

// const Customer = () => {
//   return (
//     <div>Customer</div>
//   )
// }

// export default Customer