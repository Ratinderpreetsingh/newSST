const Surveys_type = () => {
    return(
        <div className="content-container">

      <div className="container-area mt-5">
         
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header bg-white">
                <div className="view_survey_heading mt-2">
                  <h5>Survey Type</h5>
              </div>
                <div className="row mb-3">
                  <div className="col-md-2">
                    <div className="tp-title">
                      <b>Status</b>
                    </div>  
                    <select className="form-select" aria-label="Status">
                      <option selected>Any</option>
                      <option value="1">Reviewed</option>
                      <option value="2">Ignore</option>                      
                      <option value="3">Unchecked</option>
                    </select>
                  </div>
                  <div className="col-md-2">
                    <div className="tp-title">
                      <b>Shop</b>
                    </div>  
                    <select className="form-select" aria-label="Sort">
                      <option selected="">Any</option>
                      <option value="1">Fuller's Collision Center</option>
                      <option value="2">Fullter Auto Body</option>  
                      <option value="2">Smitty's Body Shop</option> 
                      <option value="3">
                        Woody's Collision Center</option> 
                    </select>
                  </div>
                  <div className="col-md-3">
                      <div className="tp-title">
                        <b>Alert Type</b>
                      </div>  
                      <div className="d-flex  flex-wrap">
                        <div className="form-check pe-1">
                          <input className="form-check-input" type="checkbox" value="" id="SMS" />
                          <label className="form-check-label" for="SMS">
                            Perfect Score
                          </label>
                        </div>
                        <div className="form-check pe-1">
                          <input className="form-check-input" type="checkbox" value="" id="email" checked="" />
                          <label className="form-check-label" for="email">
                            Misfire
                          </label>
                        </div>
                        <div className="form-check pe-1">
                          <input className="form-check-input" type="checkbox" value="" id="directmail" checked="" />
                          <label className="form-check-label" for="directmail">
                            Unresolved Issue
                          </label>
                        </div>
                        <div className="form-check pe-1">
                          <input className="form-check-input" type="checkbox" value="" id="directmail" checked="" />
                          <label className="form-check-label" for="directmail">
                            Hotspot
                          </label>
                        </div>
                      </div>
                    </div>
                  <div className="col-md-2">
                    <div className="tp-title">
                      <b>Date</b>
                    </div>  
                    <input type="date" className="form-control" placeholder="dd/mm/yyyy" aria-label="Input Delivered Date" />
                  </div>
                  <div className="col-md-3">
                    <div className="tp-title">
                      <b>Search</b>
                    </div>  
                    <div className="input-group">
                      <div className="form-outline w-100" data-mdb-input-init="">
                        <input id="search-input" type="search" className="form-control" placeholder="Search" />  
                        </div>
                      <span id="search-button" className="btn btn-danger position-absolute end-0">
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
                      <th>Customer Name</th>
                      <th>Customer ID</th>
                      <th>Shop Name</th>
                      <th>Info</th>
                      <th>Surveys Date</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1.</td>
                      <td>Dunn Nicole</td>
                      <td>7517F594</td>
                      <td>Shop Name</td>
                      <td>Info details</td>
                      <td>24-07-2024</td>
                      <td><span className="badge bg-success">Reviewed</span></td>
                      
                      <td>
                        <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-file-earmark-pdf"></i></button>
                       <a href="./viewsurvey.html" target="_blank"> <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-eye"></i></button></a>
                        <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-trash3"></i></button>
                      </td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Dunn Nicole</td>
                        <td>7517F594</td>
                        <td>Shop Name</td>
                        <td>Info details</td>
                        <td>24-07-2024</td>
                        <td><span className="badge bg-success">Reviewed</span></td>
                        
                        <td>
                          <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-file-earmark-pdf"></i></button>
                          <a href="./viewsurvey.html" target="_blank"> <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-eye"></i></button></a>
                           <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-trash3"></i></button>
                        </td>
                      </tr>
                      <tr>
                        <td>3.</td>
                        <td>Dunn Nicole</td>
                        <td>7517F594</td>
                        <td>Shop Name</td>
                        <td>Info details</td>
                        <td>24-07-2024</td>
                        <td><span className="badge bg-warning">Unchecked</span></td>
                        
                        <td>
                          <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-file-earmark-pdf"></i></button>
                          <a href="./viewsurvey.html" target="_blank"> <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-eye"></i></button></a>
                           <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-trash3"></i></button>
                        </td>
                      </tr>
                      <tr>
                        <td>4.</td>
                        <td>Dunn Nicole</td>
                        <td>7517F594</td>
                        <td>Shop Name</td>
                        <td>Info details</td>
                        <td>24-07-2024</td>
                        <td><span className="badge bg-success">Reviewed</span></td>
                        
                        <td>
                          <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-file-earmark-pdf"></i></button>
                          <a href="./viewsurvey.html" target="_blank"> <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-eye"></i></button></a>
                           <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-trash3"></i></button>
                        </td>
                      </tr>
                      <tr>
                        <td>5.</td>
                        <td>Dunn Nicole</td>
                        <td>7517F594</td>
                        <td>Shop Name</td>
                        <td>Info details</td>
                        <td>24-07-2024</td>
                        <td><span className="badge bg-success">Reviewed</span></td>
                        
                        <td>
                          <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-file-earmark-pdf"></i></button>
                          <a href="./viewsurvey.html" target="_blank"> <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-eye"></i></button></a>
                           <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-trash3"></i></button>
                        </td>
                      </tr>
                      <tr>
                        <td>6.</td>
                        <td>Dunn Nicole</td>
                        <td>7517F594</td>
                        <td>Shop Name</td>
                        <td>Info details</td>
                        <td>24-07-2024</td>
                        <td><span className="badge bg-warning">Unchecked</span></td>
                        
                        <td>
                          <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-file-earmark-pdf"></i></button>
                          <a href="./viewsurvey.html" target="_blank"> <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-eye"></i></button></a>
                           <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-trash3"></i></button>
                        </td>
                      </tr>
                      <tr>
                        <td>7.</td>
                        <td>Dunn Nicole</td>
                        <td>7517F594</td>
                        <td>Shop Name</td>
                        <td>Info details</td>
                        <td>24-07-2024</td>
                        <td><span className="badge bg-success">Reviewed</span></td>
                        
                        <td>
                          <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-file-earmark-pdf"></i></button>
                       <a href="./viewsurvey.html" target="_blank"> <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-eye"></i></button></a>
                        <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-trash3"></i></button>
                        </td>
                      </tr>
                      <tr>
                        <td>8.</td>
                        <td>Dunn Nicole</td>
                        <td>7517F594</td>
                        <td>Shop Name</td>
                        <td>Info details</td>
                        <td>24-07-2024</td>
                        <td><span className="badge bg-warning">Unchecked</span></td>
                        
                        <td>
                          <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-file-earmark-pdf"></i></button>
                          <a href="./viewsurvey.html" target="_blank"> <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-eye"></i></button></a>
                           <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-trash3"></i></button>
                        </td>
                      </tr>
                  
                  </tbody>
                </table>
              </div>
              <div className="card-footer text-center">
                <button className="btn btn-danger">View All</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    );
}
export default Surveys_type