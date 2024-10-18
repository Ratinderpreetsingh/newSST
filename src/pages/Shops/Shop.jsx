import { useState } from "react";
import { useGetAllShopsQuery } from "../../redux/QueryAPi/shopApi";
import Pagination from "../../CustomUi/Pagination";

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1); // Local state for pagination
  const [search, setSearch] = useState(''); // Local state for search input

  // Fetch data using the query hook
  const { data: shopList, error, isLoading, isFetching } = useGetAllShopsQuery({ page: currentPage, search });
  console.log(shopList)
  // Handle search input change
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Handle search button click
  const handleSearchClick = () => {
    setCurrentPage(1); // Reset to the first page on a new search
  };

 
  if (error) {
    return <div>Error loading shops</div>;
  }

  return (
    <div className="content-container">
      <h1><i className="bi bi-speedometer2"></i>Shops</h1>
      <div className="container-area mt-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="row mb-3">
                  <div className="col-md-3">
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
                  <div className="col-md-3">
                    <div className="tp-title">
                      <b>Status</b>
                    </div>
                    <select className="form-select" aria-label="Status">
                      <option selected>Any</option>
                      <option value="1">Yes</option>
                      <option value="2">No</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <div className="tp-title">
                      <b>Definitions</b>
                    </div>
                    <div className="d-flex flex-wrap">
                      <div className="form-check pe-1">
                        <input className="form-check-input" type="checkbox" value="" id="SMS" />
                        <label className="form-check-label" htmlFor="SMS">SMS</label>
                      </div>
                      <div className="form-check pe-1">
                        <input className="form-check-input" type="checkbox" value="" id="email" checked="" />
                        <label className="form-check-label" htmlFor="email">Email</label>
                      </div>
                      <div className="form-check pe-1">
                        <input className="form-check-input" type="checkbox" value="" id="directmail" checked="" />
                        <label className="form-check-label" htmlFor="directmail">Direct Mail</label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="tp-title">
                      <b>Search</b>
                    </div>
                    <div className="input-group">
                      <div className="form-outline w-100" data-mdb-input-init="">
                        <input
                          id="search-input"
                          type="search"
                          className="form-control"
                          placeholder="Search"
                          value={search}
                          onChange={handleSearchChange}
                        />
                      </div>
                      <span
                        id="search-button"
                        className="btn btn-danger position-absolute end-0"
                        onClick={handleSearchClick}
                      >
                        <i className="bi bi-search"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-body p-0">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Shop Name</th>
                      <th>PSG ID</th>
                      <th>Web Address</th>
                      <th>Phone Number</th>
                      <th>Address</th>
                      <th>City</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading ? <td style={{ textAlign: 'center',padding:'20px' }} colSpan="9">Loading...</td> 
                    :shopList && shopList?.data?.map((shop, index) => (
                      <tr key={shop.id}>
                        <td>{shop?.id}</td>
                        <td>{shop?.m_shop_name_display || "-"}</td>
                        <td>{shop?.psg_id || "-"}</td>
                        <td>{shop?.m_webaddress || "-"}</td>
                        <td>{shop?.phone_number || "-"}</td>
                        <td>{shop?.address1 || "-"}</td>
                        <td>{shop?.m_shop_city || "-"}</td>

                        <td>
                          <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-cart"></i></button>
                          <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-bar-chart"></i></button>
                          <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-pencil-square"></i></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="card-footer text-center">
                {/* <button className="btn btn-danger" onClick={() => setCurrentPage(currentPage + 1)}>
                  Load More
                </button> */}
                <Pagination totalPages={shopList?.last_page} currentPage={currentPage} setCurrentPage={setCurrentPage} />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
