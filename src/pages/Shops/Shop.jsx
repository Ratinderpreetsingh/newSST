import { useEffect, useState } from "react";
import { useGetAllShopsQuery } from "../../redux/QueryAPi/shopApi";
import Pagination from "../../Custom_hooks/Pagination";
import useDebounce from "../../Custom_hooks/Debouncing";
import { useNavigate } from "react-router-dom";
import { ShopPath } from "../../Constant/Pages_Routes";
import CheckboxModal from "./TestDeleete";

const Shop = () => {
  const [selectedShop, setSelectedShop] = useState(null);

  // This will trigger the modal and pass the shop details
  const handleOpenModal = (shop) => {
    setSelectedShop(shop);
  };
  const query = {
    sorted_by: "",
    status: "",
    sms: "",
  };
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const debouncedTerm = useDebounce(search, 300);
  const [queries, setQueries] = useState(query);
  const {
    data: shopList,
    error,
    isLoading,
    isFetching,
  } = useGetAllShopsQuery({
    page: currentPage,
    search: debouncedTerm,
    status: queries.status,
    sorted_by: queries.sorted_by,
  });
  // Handle search input change
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const handleQuery = (e) => {
    const { name, value } = e.target;
    // debugger
    setQueries((per) => ({ ...per, [name]: value }));
  };
  const handleClear = () => {
    setQueries({
      sorted_by: "",
      status: "",
      sms: "",
    });
    setSearch("");
  };
  const handleEdit = (id) => {
    navigate(`/edit_shop/${id}`);
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the component mounts
  }, []);
  if (error) {
    return <div>Error loading shops</div>;
  }

  return (
    <>
      {selectedShop && (
        <CheckboxModal
          shop={selectedShop}
          onClose={() => setSelectedShop(null)} // Close modal and reset selected shop
        />
      )}
      <div className="content-container">
        <h1>
          <i className="bi bi-speedometer2"></i>Shops      

        </h1>
        <div className="container-area mt-5">
          <div className="row">
            <div style={{display:'flex',justifyContent:'end'}}>
            <span
              onMouseEnter={(e) => {
                e.target.style.color = "#FF5733"; // Change color on hover
                e.target.style.textDecoration = "underline"; // Add underline on hover
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#BE3134"; // Revert color when mouse leaves
                e.target.style.textDecoration = "none"; // Remove underline when mouse leaves
              }}
              style={{
                cursor: "pointer", // Pointer cursor only on the text
                fontSize: "16px",
                fontWeight: "bold",
                color: "#BE3134",
                textAlign: "right", // Keep text right-aligned
                whiteSpace: "nowrap", // Prevent text from wrapping if needed
              }}
              onClick={() => navigate(`/${ShopPath.SHOP_CUSTOMER}`)}
            >
              Show Customer By Shops
            </span>
            </div>
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <div className="row mb-3">
                    <div className="col-md-3">
                      <div className="tp-title">
                        <b>Sort by</b>
                      </div>
                      <select
                        className="form-select"
                        aria-label="Sort"
                        name="sorted_by"
                        value={queries.sorted_by}
                        onChange={handleQuery}
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
                    <div className="col-md-3">
                      <div className="tp-title">
                        <b>Status</b>
                      </div>
                      <select
                        className="form-select"
                        aria-label="Status"
                        name="status"
                        value={queries.status}
                        onChange={handleQuery}
                      >
                        <option value="">Any</option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                      </select>
                    </div>
                    <div className="col-md-3">
                      <div className="tp-title">
                        <b>Definitions</b>
                      </div>
                      <div className="d-flex flex-wrap">
                        <div className="form-check pe-1">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
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
                            value=""
                            id="email"
                            checked=""
                          />
                          <label className="form-check-label" htmlFor="email">
                            Email
                          </label>
                        </div>
                        <div className="form-check pe-1">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="directmail"
                            checked=""
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
                    <div className="col-md-3">
                      <div className="tp-title">
                        <b>Search</b>
                      </div>
                      <div className="input-group">
                        <div
                          className="form-outline w-100"
                          data-mdb-input-init=""
                        >
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
                        // onClick={handleSearchClick}
                        >
                          <i className="bi bi-search"></i>
                        </span>
                      </div>
                    </div>

                    <span
                      style={{
                        textAlign: "right",
                        cursor: "pointer",
                        color: "#0000EE",
                        paddingTop: "5px",
                      }}
                      onClick={handleClear}
                    >
                      Clear All Filter
                    </span>
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
                      {isLoading ? (
                        <td
                          style={{ textAlign: "center", padding: "20px" }}
                          colSpan="9"
                        >
                          Loading...
                        </td>
                      ) : (
                        shopList &&
                        shopList?.data?.map((shop, index) => {
                          const serialNumber =
                            (shopList?.current_page - 1) * 15 + index + 1;

                          return (
                            <tr key={shop.id}>
                              <td>{serialNumber}</td>
                              <td>{shop?.m_shop_name_display || "-"}</td>
                              <td>{shop?.psg_id || "-"}</td>
                              <td>{shop?.m_webaddress || "-"}</td>
                              <td>{shop?.phone_number || "-"}</td>
                              <td>{shop?.address1 || "-"}</td>
                              <td>{shop?.m_shop_city || "-"}</td>

                              <td>
                                <button className="btn btn-sm btn-outline-danger p-1">
                                  <i className="bi bi-cart"></i>
                                </button>
                                <button className="btn btn-sm btn-outline-danger p-1">
                                  <i className="bi bi-bar-chart"></i>
                                </button>
                                <button
                                  className="btn btn-sm btn-outline-danger p-1"
                                  onClick={() => handleEdit(shop?.id)}
                                >
                                  <i className="bi bi-pencil-square"></i>
                                </button>
                                <button
                                  className="btn btn-sm btn-outline-danger p-1"
                                  onClick={() => handleOpenModal(shop)}
                                >
                                  <i className="bi bi-trash3"></i>
                                </button>
                              </td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>

                <div className="card-footer text-center">
                  {/* <button className="btn btn-danger" onClick={() => setCurrentPage(currentPage + 1)}>
                  Load More
                </button> */}
                  <Pagination
                    totalPages={shopList?.last_page}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
