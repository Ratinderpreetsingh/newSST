import { useSelector } from "react-redux";
import Pagination from "../../Custom_hooks/Pagination";
import { useGetAllCustomersQuery } from "../../redux/QueryAPi/customer";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import useDebounce from "../../Custom_hooks/Debouncing";
import { ModifyDate } from "../../utils/ModifyDate";
import { generatePDF } from "./CustomerPdf";
import { CustomerPath } from "../../Constant/Pages_Routes";
import useDeleteModal from "../../Custom_hooks/DeleteModal";


const Customer = () => {
  const [currentPage, setCurrentPage] = useState(1); // Local state for ComponentA
  const state = useSelector((state) => state.pagintiona);
  const [deliveryDate, setDeliveryDate] = useState('');
  const [cleanup, setCleanup] = useState('');
  const [status, setStatus] = useState('');
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [sms, setSms] = useState('');
  const { handleShow, ModalComponent,isLoading:deletLoading } = useDeleteModal();

  const debouncevalue = useDebounce(search, 300)

  const navigate = useNavigate();
  const page = state?.currentPage;

  // const delivery_date_m = deliveryDate.split('-').reverse();
  //  const modify = deliveryDate ? delivery_date_m[1]+ '/'+ delivery_date_m[0] + '/'+ delivery_date_m[2] : ''
  const modifyDate = useMemo(() => ModifyDate(deliveryDate), [deliveryDate]);
  const modifycleanup = useMemo(() => ModifyDate(cleanup), [cleanup]);



  const handleSearch = (e) => {
    setSearch(e.target.value)

  }

  const handleChange = (e) => {
    // Set sms to 1 if checked, else set to 0
    setSms(e.target.checked ? 1 : 0);
  };
  const handleClear = () => {
    setDeliveryDate('')
    setStatus('')
    setSearch('')
    setSortBy('')
    setCleanup('')
    setSms('')
  }
  const { data: allCustomers, isError, isLoading, isSuccess } = useGetAllCustomersQuery({
    page: currentPage,
    delivery_date: modifyDate,
    status: status,
    search: debouncevalue,
    sorted_by: sortBy,
    cleanup: modifycleanup,
    sms: sms
  });



  const handleEdit = (id) => {
    navigate(`/view-edit-customer/${id}`)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <>
      <ModalComponent />
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
                      <select
                        className="form-select"
                        aria-label="Sort"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                      >
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
                      <input type="date" className="form-control" placeholder="dd/mm/yyyy" aria-label="Cleanup" value={cleanup} onChange={(e) => setCleanup(e.target.value)} />
                    </div>
                    <div className="col-md-2">
                      <div className="tp-title">
                        <b>Status</b>
                      </div>
                      <select className="form-select" aria-label="Status" value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value=''>Any</option>
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
                            checked={sms === 1} // Check if sms is 1 to determine the checked state
                            id="SMS"
                            onChange={handleChange}
                          />                        <label className="form-check-label" htmlFor="SMS">
                            SMS
                          </label>
                        </div>
                        <div className="form-check pe-1">
                          <input className="form-check-input" type="checkbox" value="" id="email" checked="" />
                          <label className="form-check-label" htmlFor="email">
                            Email
                          </label>
                        </div>
                        <div className="form-check pe-1">
                          <input className="form-check-input" type="checkbox" value="" id="directmail" checked="" />
                          <label className="form-check-label" htmlFor="directmail">
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
                        placeholder="mm/dd/yyyy"
                        aria-label="Input Delivered Date"
                        value={deliveryDate}
                        onChange={(e) => setDeliveryDate(e.target.value)}
                      />
                    </div>
                    <div className="col-md-2">
                      <div className="tp-title">
                        <b>Search</b>
                      </div>
                      <div className="input-group me-2">
                        <div className="form-outline w-100" data-mdb-input-init="">
                          <input id="search-input" type="search" className="form-control" placeholder="Search" value={search} onChange={handleSearch} />
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

                        {isLoading || deletLoading ? <tr ><td style={{ textAlign: 'center', padding: '20px' }} colSpan="9">Loading...</td></tr>
                          : allCustomers?.data?.length < 1 ? <tr ><td style={{ textAlign: 'center', padding: '20px' }} colSpan="9">Not Found</td></tr>
                            : allCustomers && allCustomers?.data?.map((value, index, arr) => {
                              const serialNumber = (allCustomers?.current_page - 1) * 15 + index + 1;
                              const [month, day, year] = value?.DeliveredDate.split('/');
                              const formattedDate = `${day}/${month}/${year}`;
                              // console.log(format)
                              return <tr key={`${value.UID}-${value.OwnerFName}`} // Example of combining properties
                              >
                                <td>{serialNumber}</td>
                                <td>{value?.OwnerFName + ' ' + value?.OwnerLName}</td>
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
                                  <button className="btn btn-sm btn-outline-danger p-1" onClick={() => generatePDF(value)}><i className="bi bi-file-earmark-pdf"></i></button>
                                  <button className="btn btn-sm btn-outline-danger p-1" onClick={() => handleEdit(value?.id)}><i className="bi bi-eye"></i></button>
                                  <button className="btn btn-sm btn-outline-danger p-1" onClick={() => handleShow(value)}><i className="bi bi-trash3"></i></button>
                                </td>
                              </tr>
                            }

                            )}


                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="card-footer text-center">
                  {/* <Pagination totalPages={allCustomers?.last_page} /> */}
                  <Pagination totalPages={allCustomers?.last_page} currentPage={currentPage} setCurrentPage={setCurrentPage} />

                  {/* <button className="btn btn-danger">View All</button> */}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>



  );
}
export default Customer

