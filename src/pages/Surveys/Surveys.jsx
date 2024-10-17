const Surveys = () => {
    return(

        <div class="content-container">

      <h1><i class="bi bi-speedometer2"></i>Surveys</h1>
      <div class="container-area mt-5">
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-header">
                
                <div class="row mb-3">
                  <div class="col-md-2">
                    <div class="tp-title">
                      <b>Status</b>
                    </div>  
                    <select class="form-select" aria-label="Status">
                      <option selected>Any</option>
                      <option value="1">Reviewed</option>
                      <option value="2">Ignore</option>                      
                      <option value="3">Unchecked</option>
                    </select>
                  </div>
                  <div class="col-md-2">
                    <div class="tp-title">
                      <b>Shop</b>
                    </div>  
                    <select class="form-select" aria-label="Sort">
                      <option selected="">Any</option>
                      <option value="1">Fuller's Collision Center</option>
                      <option value="2">Fullter Auto Body</option>  
                      <option value="2">Smitty's Body Shop</option> 
                      <option value="3">
                        Woody's Collision Center</option> 
                    </select>
                  </div>
                  <div class="col-md-3">
                      <div class="tp-title">
                        <b>Alert Type</b>
                      </div>  
                      <div class="d-flex  flex-wrap">
                        <div class="form-check pe-1">
                          <input class="form-check-input" type="checkbox" value="" id="SMS" />
                          <label class="form-check-label" for="SMS">
                            Perfect Score
                          </label>
                        </div>
                        <div class="form-check pe-1">
                          <input class="form-check-input" type="checkbox" value="" id="email" checked="" />
                          <label class="form-check-label" for="email">
                            Misfire
                          </label>
                        </div>
                        <div class="form-check pe-1">
                          <input class="form-check-input" type="checkbox" value="" id="directmail" checked="" />
                          <label class="form-check-label" for="directmail">
                            Unresolved Issue
                          </label>
                        </div>
                        <div class="form-check pe-1">
                          <input class="form-check-input" type="checkbox" value="" id="directmail" checked="" />
                          <label class="form-check-label" for="directmail">
                            Hotspot
                          </label>
                        </div>
                      </div>
                    </div>
                  <div class="col-md-2">
                    <div class="tp-title">
                      <b>Date</b>
                    </div>  
                    <input type="date" class="form-control" placeholder="dd/mm/yyyy" aria-label="Input Delivered Date" />
                  </div>
                  <div class="col-md-3">
                    <div class="tp-title">
                      <b>Search</b>
                    </div>  
                    <div class="input-group">
                      <div class="form-outline w-100" data-mdb-input-init="">
                        <input id="search-input" type="search" class="form-control" placeholder="Search" />  
                        </div>
                      <span id="search-button" class="btn btn-danger position-absolute end-0">
                        <i class="bi bi-search"></i>
                      </span>              
                    </div>
                  </div>
                </div>

              </div>
              <div class="card-body p-0">

                <table class="table table-hover">
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
                      <td><span class="badge bg-success">Reviewed</span></td>
                      
                      <td>
                        <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-file-earmark-pdf"></i></button>
                       <a href="./viewsurvey.html" target="_blank"> <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-eye"></i></button></a>
                        <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-trash3"></i></button>
                      </td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Dunn Nicole</td>
                        <td>7517F594</td>
                        <td>Shop Name</td>
                        <td>Info details</td>
                        <td>24-07-2024</td>
                        <td><span class="badge bg-success">Reviewed</span></td>
                        
                        <td>
                          <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-file-earmark-pdf"></i></button>
                          <a href="./viewsurvey.html" target="_blank"> <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-eye"></i></button></a>
                           <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-trash3"></i></button>
                        </td>
                      </tr>
                      <tr>
                        <td>3.</td>
                        <td>Dunn Nicole</td>
                        <td>7517F594</td>
                        <td>Shop Name</td>
                        <td>Info details</td>
                        <td>24-07-2024</td>
                        <td><span class="badge bg-warning">Unchecked</span></td>
                        
                        <td>
                          <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-file-earmark-pdf"></i></button>
                          <a href="./viewsurvey.html" target="_blank"> <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-eye"></i></button></a>
                           <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-trash3"></i></button>
                        </td>
                      </tr>
                      <tr>
                        <td>4.</td>
                        <td>Dunn Nicole</td>
                        <td>7517F594</td>
                        <td>Shop Name</td>
                        <td>Info details</td>
                        <td>24-07-2024</td>
                        <td><span class="badge bg-success">Reviewed</span></td>
                        
                        <td>
                          <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-file-earmark-pdf"></i></button>
                          <a href="./viewsurvey.html" target="_blank"> <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-eye"></i></button></a>
                           <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-trash3"></i></button>
                        </td>
                      </tr>
                      <tr>
                        <td>5.</td>
                        <td>Dunn Nicole</td>
                        <td>7517F594</td>
                        <td>Shop Name</td>
                        <td>Info details</td>
                        <td>24-07-2024</td>
                        <td><span class="badge bg-success">Reviewed</span></td>
                        
                        <td>
                          <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-file-earmark-pdf"></i></button>
                          <a href="./viewsurvey.html" target="_blank"> <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-eye"></i></button></a>
                           <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-trash3"></i></button>
                        </td>
                      </tr>
                      <tr>
                        <td>6.</td>
                        <td>Dunn Nicole</td>
                        <td>7517F594</td>
                        <td>Shop Name</td>
                        <td>Info details</td>
                        <td>24-07-2024</td>
                        <td><span class="badge bg-warning">Unchecked</span></td>
                        
                        <td>
                          <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-file-earmark-pdf"></i></button>
                          <a href="./viewsurvey.html" target="_blank"> <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-eye"></i></button></a>
                           <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-trash3"></i></button>
                        </td>
                      </tr>
                      <tr>
                        <td>7.</td>
                        <td>Dunn Nicole</td>
                        <td>7517F594</td>
                        <td>Shop Name</td>
                        <td>Info details</td>
                        <td>24-07-2024</td>
                        <td><span class="badge bg-success">Reviewed</span></td>
                        
                        <td>
                          <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-file-earmark-pdf"></i></button>
                       <a href="./viewsurvey.html" target="_blank"> <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-eye"></i></button></a>
                        <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-trash3"></i></button>
                        </td>
                      </tr>
                      <tr>
                        <td>8.</td>
                        <td>Dunn Nicole</td>
                        <td>7517F594</td>
                        <td>Shop Name</td>
                        <td>Info details</td>
                        <td>24-07-2024</td>
                        <td><span class="badge bg-warning">Unchecked</span></td>
                        
                        <td>
                          <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-file-earmark-pdf"></i></button>
                          <a href="./viewsurvey.html" target="_blank"> <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-eye"></i></button></a>
                           <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-trash3"></i></button>
                        </td>
                      </tr>
                  
                  </tbody>
                </table>
              </div>
              <div class="card-footer text-center">
                <button class="btn btn-danger">View All</button>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
    );
}
export default Surveys