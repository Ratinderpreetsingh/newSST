import { useSelector } from "react-redux";
import Pagination from "../../CustomUi/Pagination";
import { useGetAllCustomersQuery } from "../../redux/QueryAPi/customer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Customer = () => {

  const state = useSelector((state) => state.pagintiona);
  const [deliveryDate, setDeliveryDate] = useState('');
  const [status, setStatus] = useState('');
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const page = state?.currentPage;
  const  delivery_date =deliveryDate.split('-').reverse().join('/')
console.log(status)
const handleSearch=(e)=>{
  console.log(e.target.value)
  setSearch(e.target.value)

}
  const { data: allCustomers, isError, isLoading, isSuccess } = useGetAllCustomersQuery({page:page, delivery_date:delivery_date,status:status,search:search});

  useEffect(() => {
    // If you want to do something with allCustomers, handle it here
  }, [allCustomers]);
  return (
    <div className="content-container">

      <h1><i className="bi bi-speedometer2 "></i>Customer</h1>
      <div className="container-area mt-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">

                <div className="row mb-3">
                  <div className="col-md-2">
                    <div className="tp-title">
                      <b>Sort by</b>
                    </div>
                    <select className="form-select" aria-label="Sort">
                      <option selected>Sort by</option>
                      <option value="1">Name (A-Z)</option>
                      <option value="2">Name (Z-A)</option>
                      <option value="3">Date (Newest)</option>
                      <option value="4">Date (Oldest)</option>
                      <option value="5">Active</option>
                      <option value="6">Inactive</option>
                    </select>
                  </div>
                  <div className="col-md-2">
                    <div className="tp-title">
                      <b>Cleanup</b>
                    </div>
                    <input type="date" className="form-control" placeholder="dd/mm/yyyy" aria-label="Cleanup" />
                  </div>
                  <div className="col-md-2">
                    <div className="tp-title">
                      <b>Status</b>
                    </div>
                    <select className="form-select" aria-label="Status" onChange={(e)=>setStatus(e.target.value)}>
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
                        <input className="form-check-input" type="checkbox" value="" id="SMS" />
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
                           value={deliveryDate}
                           onChange={(e)=>setDeliveryDate(e.target.value)}
                      />
                  </div>
                  <div className="col-md-2">
                    <div className="tp-title">
                      <b>Search</b>
                    </div>
                    <div className="input-group me-2">
                      <div className="form-outline w-100" data-mdb-input-init="">
                        <input id="search-input" type="search" className="form-control" placeholder="Search" onChange={handleSearch} />
                      </div>
                      <span id="search-button" className="btn btn-danger position-absolute end-0">
                        <i className="bi bi-search"></i>
                      </span>
                    </div>
                  </div>
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
                    
                      {isLoading ? <td style={{ textAlign: 'center',padding:'20px' }} colSpan="9">Loading...</td> 
                                  : allCustomers.data.length <1  ?<tr>
                                  <td colSpan="9" style={{ textAlign: 'center' }}>
                                    Not Found
                                  </td>
                                </tr>
                                  :allCustomers && allCustomers.data.map((value, index) => (
                        <tr key={index}>
                          <td>{value.id}.</td>
                          <td>{value.OwnerFName + value.OwnerLName}</td>
                          <td>{value?.UID}</td>
                          <td>{value?.shopName ? value?.shopName : '-'}</td>
                          <td>{value?.OwnerEmail ? value?.OwnerEmail : '-'}</td>
                          <td>
                            <span className={`badge ${value?.status === "Error" ? "bg-danger" : value?.status === "Unchecked" ? "bg-warning" : "bg-success"}`}>
                              {value?.status}
                            </span>
                          </td>
                          <td>{value?.input_date}</td>
                          <td>{value?.DeliveredDate}</td>
                          <td>
                            <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-file-earmark-pdf"></i></button>
                            <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-eye"></i></button>
                            <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-trash3"></i></button>
                          </td>
                        </tr>
                      ))}


                    </tbody>
                  </table>
                </div>
              </div>
              <div className="card-footer text-center">
                <Pagination totalPages={allCustomers?.last_page} />
                {/* <button className="btn btn-danger">View All</button> */}
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>


  );
}
export default Customer

