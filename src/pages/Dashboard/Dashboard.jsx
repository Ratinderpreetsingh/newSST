import { getCookie } from "../../utils/Cookies";

const Dashboard = () => {
  const res= getCookie('auth')
  console.log(res)
  return (
    <>
      <div className="content-container">
        <h1>
          <i className="bi bi-speedometer2"></i>Dashboard
        </h1>
        <div className="container-area mt-5">
          <div className="row mb-4">
            <div className="col-md-4 ist-card">
              <div className="card card-custom  p-4">
                <div className="card-header-custom">Customer</div>
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-md-8 p-0">
                      <h3>5000+</h3>
                    </div>
                    <div className="col-md-4 p-0 text-right">
                      <div className="card-icon mb-0">👥</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 sec-card">
              <div className="card card-custom  p-4">
                <div className="card-header-custom">Shops</div>
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-md-8 p-0">
                      <h3>2000+</h3>
                    </div>
                    <div className="col-md-4 p-0 text-right">
                      <div className="card-icon mb-0">🏬</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 th-card">
              <div className="card card-custom  p-4">
                <div className="card-header-custom">Surveys</div>
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-md-8 p-0">
                      <h3>2000+</h3>
                    </div>
                    <div className="col-md-4 p-0 text-right">
                      <div className="card-icon mb-0">⭐</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row my-4">
            {/* /* <!-- Shops Section --> */}
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
                        <label htmlFor="Sort" className="form-label">
                          Status
                        </label>
                        <select
                          defaultValue={"DEFAULT"}
                          className="form-select"
                          id="Sort"
                          aria-label="Sort"
                        >
                          <option value="DEFAULT" disabled>
                            Any
                          </option>
                          <option value="1">Yes</option>
                          <option value="2">No</option>
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
                        <tr>
                          <td>1.</td>
                          <td>Santa Ana Body Shop.....</td>
                          <td>PS1168</td>
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
                        <tr>
                          <td>2.</td>
                          <td>Woody's Collision Center......</td>
                          <td>PS1168</td>
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
                        <tr>
                          <td>3.</td>
                          <td>Alioto's Garage - Suisun......</td>
                          <td>PS1168</td>
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
                        <tr>
                          <td>4.</td>
                          <td>Woody's Collision Center......</td>
                          <td>PS1168</td>
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
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="card-footer text-center">
                  <button className="btn btn-danger">View All</button>
                </div>
              </div>
            </div>
            {/* <!-- Surveys Section --> */}
            <div className="col-lg-6 mb-4">
              <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">Surveys</h5>
                  <div className="d-flex">
                    <div className="input-group me-2">
                      <div className="form-outline" data-mdb-input-init>
                        <input
                          id="search-input-2"
                          type="search"
                          className="form-control"
                          placeholder="Search"
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
                      <i className="bi bi-filter"></i> Filter
                    </button>
                    <ul className="dropdown-menu p-3">
                      <li>
                        <label htmlFor="Status" className="form-label m-0">
                          Status
                        </label>
                        <select
                          defaultValue={"DEFAULT"}
                          className="form-select"
                          id="Status"
                          aria-label="Sort"
                        >
                          <option value="DEFAULT" disabled>
                            Any
                          </option>
                          <option value="1">Reviewed</option>
                          <option value="2">Ignore</option>
                          <option value="2">Unchecked</option>
                        </select>
                      </li>
                      <li>
                        <label htmlFor="Shop1" className="form-label m-0">
                          Shop
                        </label>
                        <select
                          defaultValue={"DEFAULT"}
                          className="form-select"
                          id="Shop1"
                          aria-label="Sort"
                        >
                          <option value="DEFAULT" disabled>
                            Any
                          </option>
                          <option value="1">Fuller's Collision Center</option>
                          <option value="2">Fullter Auto Body</option>
                          <option value="2">Smitty's Body Shop</option>
                          <option value="3">Woody's Collision Center</option>
                        </select>
                      </li>
                      <li>
                        <label htmlFor="Shop123" className="form-label m-0">
                          Shop
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          placeholder=""
                          id="Shop123"
                        />
                      </li>

                      <li>
                        <label htmlFor="SMS1" className="form-label m-0">
                          Alert Type
                        </label>
                        <div className="d-flex  flex-wrap" id="altr">
                          <div className="form-check pe-1">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Perfect Score"
                              id="SMS1"
                            />
                            <label className="form-check-label" htmlFor="SMS1">
                              Perfect Score
                            </label>
                          </div>
                          <div className="form-check pe-1">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Misfire"
                              id="email2"
                            />
                            <label className="form-check-label" htmlFor="email">
                              Misfire
                            </label>
                          </div>
                          <div className="form-check pe-1">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Unsolved Issue"
                              id="directmail1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="directmail"
                            >
                              Unsolved Issue
                            </label>
                          </div>
                          <div className="form-check pe-1">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="Hotspot"
                              id="directmail12"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="directmail"
                            >
                              Hotspot
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
                        <tr className="px-4">
                          <th>#</th>
                          <th>Customer Name</th>
                          <th>Shop Name</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1.</td>
                          <td>Joshua Lanning</td>
                          <td>Santa Ana Body Shop......</td>
                          <td>
                            <span className="badge bg-success">Reviewed</span>
                          </td>
                          <td>
                            <button className="btn btn-sm btn-outline-danger p-1">
                              <i className="bi bi-file-earmark-pdf"></i>
                            </button>
                            <button className="btn btn-sm btn-outline-danger p-1">
                              <i className="bi bi-eye"></i>
                            </button>
                            <button className="btn btn-sm btn-outline-danger p-1">
                              <i className="bi bi-trash3"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>2.</td>
                          <td>Joshua Lanning</td>
                          <td>Smitty's Body Shop......</td>
                          <td>
                            <span className="badge bg-success">Reviewed</span>
                          </td>
                          <td>
                            <button className="btn btn-sm btn-outline-danger p-1">
                              <i className="bi bi-file-earmark-pdf"></i>
                            </button>
                            <button className="btn btn-sm btn-outline-danger p-1">
                              <i className="bi bi-eye"></i>
                            </button>
                            <button className="btn btn-sm btn-outline-danger p-1">
                              <i className="bi bi-trash3"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>3.</td>
                          <td>Joshua Lanning</td>
                          <td>Smitty's Body Shop......</td>
                          <td>
                            <span className="badge bg-success">Reviewed</span>
                          </td>
                          <td>
                            <button className="btn btn-sm btn-outline-danger p-1">
                              <i className="bi bi-file-earmark-pdf"></i>
                            </button>
                            <button className="btn btn-sm btn-outline-danger p-1">
                              <i className="bi bi-eye"></i>
                            </button>
                            <button className="btn btn-sm btn-outline-danger p-1">
                              <i className="bi bi-trash3"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>4.</td>
                          <td>Joshua Lanning</td>
                          <td>Smitty's Body Shop......</td>
                          <td>
                            <span className="badge bg-success">Reviewed</span>
                          </td>
                          <td>
                            <button className="btn btn-sm btn-outline-danger p-1">
                              <i className="bi bi-file-earmark-pdf"></i>
                            </button>
                            <button className="btn btn-sm btn-outline-danger p-1">
                              <i className="bi bi-eye"></i>
                            </button>
                            <button className="btn btn-sm btn-outline-danger p-1">
                              <i className="bi bi-trash3"></i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="card-footer text-center">
                  <button className="btn btn-danger">View All</button>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="">Customer</h5>
                  <div className="row mb-3">
                    <div className="col-md-2">
                      <div className="tp-title">
                        <b>Sort by</b>
                      </div>
                      <select
                        name="sortby"
                        defaultValue={"DEFAULT"}
                        className="form-select"
                        aria-label="Sort"
                      >
                        <option value="DEFAULT" disabled>
                          Sort by
                        </option>
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
                      <input
                        type="date"
                        className="form-control"
                        placeholder="dd/mm/yyyy"
                        aria-label="Cleanup"
                      />
                    </div>
                    <div className="col-md-2">
                      <div className="tp-title">
                        <b>Status</b>
                      </div>
                      <select
                        defaultValue={"DEFAULT"}
                        name="statusname"
                        className="form-select"
                        aria-label="Status"
                      >
                        <option value="Any">Any</option>
                        <option value="1">Clean</option>
                        <option value="2">Error</option>
                        <option value="3">Unchecked</option>
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
                            value="SMS"
                            id="SMS2"
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
                            id="email12"
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
                            id="directmail2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="directmail"
                          >
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
                      />
                    </div>
                    <div className="col-md-2">
                      <div className="tp-title">
                        <b>Search</b>
                      </div>
                      <div className="input-group me-2">
                        <div
                          className="form-outline w-100"
                          data-mdb-input-init=""
                        >
                          <input
                            id="search-input-3"
                            type="search"
                            className="form-control"
                            placeholder="Search"
                          />
                        </div>
                        <span
                          id="search-button"
                          className="btn btn-danger position-absolute end-0"
                        >
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
                        <tr>
                          <td>1.</td>
                          <td>Dunn Nicole</td>
                          <td>7517F594</td>
                          <td>Smitty's Body Shop</td>
                          <td>mike.meyer@cox.net</td>
                          <td>
                            <span className="badge bg-danger">Error</span>
                          </td>
                          <td>24-07-2024</td>
                          <td>24-09-2024</td>
                          <td>
                            <button className="btn btn-sm btn-outline-danger p-1">
                              <i className="bi bi-file-earmark-pdf"></i>
                            </button>
                            <button className="btn btn-sm btn-outline-danger p-1">
                              <i className="bi bi-eye"></i>
                            </button>
                            <button className="btn btn-sm btn-outline-danger p-1">
                              <i className="bi bi-trash3"></i>
                            </button>
                          </td>
                        </tr>

                        <tr>
                          <td>2.</td>
                          <td>Dunn Nicole</td>
                          <td>7517F594</td>
                          <td>Smitty's Body Shop</td>
                          <td>mike.meyer@cox.net</td>
                          <td>
                            <span className="badge bg-success">Clean</span>
                          </td>
                          <td>24-07-2024</td>
                          <td>24-09-2024</td>
                          <td>
                            <button className="btn btn-sm btn-outline-danger p-1">
                              <i className="bi bi-file-earmark-pdf"></i>
                            </button>
                            <button className="btn btn-sm btn-outline-danger p-1">
                              <i className="bi bi-eye"></i>
                            </button>
                            <button className="btn btn-sm btn-outline-danger p-1">
                              <i className="bi bi-trash3"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>3.</td>
                          <td>Dunn Nicole</td>
                          <td>7517F594</td>
                          <td>Smitty's Body Shop</td>
                          <td>mike.meyer@cox.net</td>
                          <td>
                            <span className="badge bg-warning">Unchecked</span>
                          </td>
                          <td>24-07-2024</td>
                          <td>24-09-2024</td>
                          <td>
                            <button className="btn btn-sm btn-outline-danger p-1">
                              <i className="bi bi-file-earmark-pdf"></i>
                            </button>
                            <button className="btn btn-sm btn-outline-danger p-1">
                              <i className="bi bi-eye"></i>
                            </button>
                            <button className="btn btn-sm btn-outline-danger p-1">
                              <i className="bi bi-trash3"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>4.</td>
                          <td>Dunn Nicole</td>
                          <td>7517F594</td>
                          <td>Smitty's Body Shop</td>
                          <td>mike.meyer@cox.net</td>
                          <td>
                            <span className="badge bg-danger">Error</span>
                          </td>
                          <td>24-07-2024</td>
                          <td>24-09-2024</td>
                          <td>
                            <button className="btn btn-sm btn-outline-danger p-1">
                              <i className="bi bi-file-earmark-pdf"></i>
                            </button>
                            <button className="btn btn-sm btn-outline-danger p-1">
                              <i className="bi bi-eye"></i>
                            </button>
                            <button className="btn btn-sm btn-outline-danger p-1">
                              <i className="bi bi-trash3"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>5.</td>
                          <td>Dunn Nicole</td>
                          <td>7517F594</td>
                          <td>Smitty's Body Shop</td>
                          <td>mike.meyer@cox.net</td>
                          <td>
                            <span className="badge bg-success">clean</span>
                          </td>
                          <td>24-07-2024</td>
                          <td>24-09-2024</td>
                          <td>
                            <button className="btn btn-sm btn-outline-danger p-1">
                              <i className="bi bi-file-earmark-pdf"></i>
                            </button>
                            <button className="btn btn-sm btn-outline-danger p-1">
                              <i className="bi bi-eye"></i>
                            </button>
                            <button className="btn btn-sm btn-outline-danger p-1">
                              <i className="bi bi-trash3"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>6.</td>
                          <td>Dunn Nicole</td>
                          <td>7517F594</td>
                          <td>Smitty's Body Shop</td>
                          <td>mike.meyer@cox.net</td>
                          <td>
                            <span className="badge bg-warning">Unchecked</span>
                          </td>
                          <td>24-07-2024</td>
                          <td>24-09-2024</td>
                          <td>
                            <button className="btn btn-sm btn-outline-danger p-1">
                              <i className="bi bi-file-earmark-pdf"></i>
                            </button>
                            <button className="btn btn-sm btn-outline-danger p-1">
                              <i className="bi bi-eye"></i>
                            </button>
                            <button className="btn btn-sm btn-outline-danger p-1">
                              <i className="bi bi-trash3"></i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="card-footer text-center">
                  <button className="btn btn-danger">View All</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
