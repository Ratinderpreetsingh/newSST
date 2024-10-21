import React from 'react'
import { useNavigate } from 'react-router-dom';

const Shops = ({shop,isLoading,handleSearch,handleStatus}) => {
    const navigate = useNavigate();
    
  return (
    <>
    <div className="col-lg-6 mb-4">
              <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">Shops</h5>
                  <div className="d-flex">
                    <div className="input-group me-2">
                      <div className="form-outline" data-mdb-input-init>
                        <input
                          id="search-input-1"
                          type="search"
                          className="form-control"
                          placeholder="Search"
                          onChange={handleSearch}
                        />
                      </div>
                      <span
                        id="search-button"
                        className="btn btn-danger position-absolute end-0"
                      >
                        <i className="bi bi-search"></i>
                      </span>
                    </div>
                    <button
                      className="btn btn-outline-secondary inline-filter"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-filter"> </i> Filter
                    </button>
                    <ul className="dropdown-menu p-3">
                      <li>
                        <label htmlFor="Sort" className="form-label" >
                          Status
                        </label>
                        <select
                          defaultValue={"DEFAULT"}
                          className="form-select"
                          id="Sort"
                          aria-label="Sort"
                          onChange={handleStatus}
                        >
                          <option value="DEFAULT" disabled>
                            Any
                          </option>
                          <option value="1">Yes</option>
                          <option value="0">No</option>
                        </select>
                      </li>
                      <li>
                        <label htmlFor="SMS" className="form-label m-0">
                          Definitions
                        </label>
                        <div className="d-flex  flex-wrap">
                          <div className="form-check pe-1">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="SMS"
                              id="SMS"
                            />
                            <label className="form-check-label" htmlFor="SMS">
                              SMS
                            </label>
                          </div>
                          <div className="form-check pe-1">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Email"
                              id="email"
                              autoComplete="off"
                            />
                            <label className="form-check-label" htmlFor="email">
                              Email
                            </label>
                          </div>
                          <div className="form-check pe-1">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Direct Mail"
                              id="directmail"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="directmail"
                            >
                              Direct Mail
                            </label>
                          </div>
                        </div>
                      </li>
                      <li>
                        <button className="btn btn-danger w-100">
                          Apply Filters
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-hover mb-0">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Shop Name</th>
                          <th>PSG ID</th>
                          <th>Owner Name</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {isLoading ? <td style={{ textAlign: 'center',padding:'20px' }} colSpan="9">Loading...</td> 
                                  : shop?.data?.length <1  ?<tr>
                                  <td colSpan="9" style={{ textAlign: 'center' }}>
                                    Not Found
                                  </td>
                                </tr>
                                  : shop && shop?.data?.map((value,index)=>{
                                return    <tr>
                                <td>{index+1}</td>
                                <td>{value?.shop_name || '-'}</td>
                                <td>{value?.psg_id || '-'}</td>
                                <td>Bob Wiese</td>
                                <td>
                                  <button className="btn btn-sm btn-outline-danger p-1">
                                    <i className="bi bi-eye"></i>
                                  </button>
                                  <button className="btn btn-sm btn-outline-danger p-1">
                                    <i className="bi bi-trash3"></i>
                                  </button>
                                </td>
                              </tr>
                            })
                        }
                     
                     
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="card-footer text-center">
                  <button className="btn btn-danger" onClick={()=>navigate('/shop')}>View All</button>
                </div>
              </div>
            </div>
    </>
  )
}

export default Shops