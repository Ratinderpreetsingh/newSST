import { useEffect, useState } from "react";
import { useGetAllShopsQuery, useGetCustomerByShopQuery } from "../../redux/QueryAPi/shopApi";
import Pagination from "../../Custom_hooks/Pagination";
import useDebounce from "../../Custom_hooks/Debouncing";
import { useNavigate, useParams } from "react-router-dom";
import useShopDeleteModal from "./ShopDelete";

const ShopCustomers = () => {
    const { id } = useParams();  // This extracts the `id` from the URL
    const { data,isLoading:customerLoading } = useGetCustomerByShopQuery(id);  // Use the query
    console.log(data)
    // const {shop}=data
    const { handleShow, ModalComponent } = useShopDeleteModal();
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

    const { data: shopList, error, isLoading, isFetching } = useGetAllShopsQuery({
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
        setQueries((prev) => ({ ...prev, [name]: value }));
    };

    const handleClear = () => {
        setQueries({ sorted_by: "", status: "", sms: "" });
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
            <ModalComponent />
            <div className="content-container">
                <h1>
                    <i className="bi bi-speedometer2"></i> Shop Customer
                </h1>
                <div className="container-area mt-5">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                {/* <div className="card-header">
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
                                                    <label className="form-check-label" htmlFor="directmail">
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
                                                <div className="form-outline w-100">
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
                                </div> */}

                                {/* Shop Customers Table */}
                                <div className="card-body ">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Shop Name</th>
                                                <th>PSG ID</th>
                                                {/* <th>Phone Number</th> */}
                                                <th>Email</th>
                                                <th>Address 1</th>
                                                {/* <th>Address 2</th> */}
                                                <th>City</th>
                                                <th>State</th>
                                                <th>Zip</th>
                                                {/* <th>Billing Type</th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                     {   customerLoading?<tr ><td style={{ textAlign: 'center', padding: '20px' }} colSpan="9">Loading...</td></tr> :

                                            <tr>
                                                <td>{data?.shop?.id}</td>
                                                <td>{data?.shop?.shop_name}</td>
                                                <td>{data?.shop?.psg_id}</td>
                                                {/* <td>{data?.shop?.phone_number}</td> */}
                                                <td>{data?.shop?.email}</td>
                                                <td>{data?.shop?.address1}</td>
                                                {/* <td>{data?.shop?.address2}</td> */}
                                                <td>{data?.shop?.m_shop_city}</td>
                                                <td>{data?.shop?.m_shop_state}</td>
                                                <td>{data?.shop?.m_shop_zip}</td>
                                                {/* <td>{data?.shop?.billing_type || '-'}</td> */}

                                            </tr>}
                                        </tbody>
                                    </table>

                                </div>
                            </div>

                            {/* Add a space or separator */}
                            <div className="mt-4">
                                <h3>Shop Customers  {data?.customers?.length}</h3>
                            </div>
                            <div className="card">



                                {/* Shop Table */}
                                <div className="card-body " >
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Customer Name</th>
                                                <th>Customer ID</th>
                                                <th>Email</th>
                                                <th>Status</th>
                                                <th>Input Date</th>
                                                <th>Delivery Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data?.customers?.length < 1 ? <tr >
                                                   <td style={{ textAlign: 'center', padding: '20px' }} colSpan="9">No Customer of this shop</td></tr>
                                                : customerLoading?<tr ><td style={{ textAlign: 'center', padding: '20px' }} colSpan="9">Loading...</td></tr> 
                                                : data?.customers?.map((customer, index) => (
                                                    <tr key={index}>
                                                        <td>{index+1}</td>
                                                        <td>{customer?.OwnerFName + ' ' + customer?.OwnerLName}</td>
                                                        <td>{customer?.UID}</td>
                                                        <td>{customer?.OwnerEmail ? customer?.OwnerEmail : '-'}</td>
                                                        <td>
                                                            <span className={`badge ${customer?.status === "Error" ? "bg-danger" : customer?.status === "Unchecked" ? "bg-warning" : "bg-success"}`}>
                                                                {customer?.status}
                                                            </span>
                                                        </td>
                                                        <td>{customer?.input_date ||'-'}</td>
                                                        <td>{customer?.DeliveredDate || '-'}</td>


                                                    </tr>
                                                ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Pagination */}
                           {/* {data?.customers?.length > 0 ? <div className="card-footer text-center">
                                <Pagination
                                    totalPages={shopList?.last_page}
                                    currentPage={currentPage}
                                    setCurrentPage={setCurrentPage}
                                />
                            </div>:null} */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopCustomers;
