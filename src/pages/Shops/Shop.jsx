const Shop = () => {
    return(
        <div class="content-container">

        <h1><i class="bi bi-speedometer2"></i>Shops</h1>
        <div class="container-area mt-5">
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-header">
                  
                  <div class="row mb-3">
                    <div class="col-md-3">
                      <div class="tp-title">
                        <b>Sort by</b>
                      </div>                    
                      <select class="form-select" aria-label="Sort">
                        <option selected>Sort by</option>
                        <option value="1">Name (A-Z)</option>
                        <option value="2">Name (Z-A)</option>
                        <option value="3">Date (Newest)</option>
                        <option value="4">Date (Oldest)</option>
                        <option value="4">Active</option>
                        <option value="4">Inactive</option>
                      </select>
                    </div> 
                    <div class="col-md-3">
                      <div class="tp-title">
                        <b>Status</b>
                      </div>  
                      <select class="form-select" aria-label="Status">
                        <option selected>Any</option>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                      </select>
                    </div>
                    <div class="col-md-3">
                      <div class="tp-title">
                        <b>Definitions</b>
                      </div>  
                      <div class="d-flex  flex-wrap">
                        <div class="form-check pe-1">
                          <input class="form-check-input" type="checkbox" value="" id="SMS" />
                          <label class="form-check-label" for="SMS">
                           SMS
                          </label>
                        </div>
                        <div class="form-check pe-1">
                          <input class="form-check-input" type="checkbox" value="" id="email" checked="" />
                          <label class="form-check-label" for="email">
                            Email
                          </label>
                        </div>
                        <div class="form-check pe-1">
                          <input class="form-check-input" type="checkbox" value="" id="directmail" checked="" />
                          <label class="form-check-label" for="directmail">
                         Direct Mail
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="tp-title">
                        <b>Search</b>
                      </div>  
                      <div class="input-group ">
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
                      <tr>
                        <td>1.</td>
                        <td>Dunn Nicole</td>
                        <td>7517F594</td>
                        <td>mike.meyercox.net</td>
                        <td>4026578899</td>
                        <td>Test address</td>
                        <td>City</td>
                        <td>
                          <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-cart"></i></button>                        
                          <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-bar-chart"></i></button>
                          <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-pencil-square"></i></button>
                        </td>
                      </tr>
                      <tr>
                        <td>2.</td>
                        <td>Dunn Nicole</td>
                        <td>7517F594</td>
                        <td>mike.meyercox.net</td>
                        <td>4026578899</td>
                        <td>Test address</td>
                        <td>City</td>
                        <td>
                          <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-cart"></i></button>                        
                          <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-bar-chart"></i></button>
                          <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-pencil-square"></i></button>
                        </td>
                      </tr>
                      <tr>
                        <td>3.</td>
                        <td>Dunn Nicole</td>
                        <td>7517F594</td>
                        <td>mike.meyercox.net</td>
                        <td>4026578899</td>
                        <td>Test address</td>
                        <td>City</td>
                        <td>
                          <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-cart"></i></button>                        
                          <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-bar-chart"></i></button>
                          <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-pencil-square"></i></button>
                        </td>
                      </tr>
                      <tr>
                        <td>4.</td>
                        <td>Dunn Nicole</td>
                        <td>7517F594</td>
                        <td>mike.meyercox.net</td>
                        <td>4026578899</td>
                        <td>Test address</td>
                        <td>City</td>
                        <td>
                          <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-cart"></i></button>                        
                          <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-bar-chart"></i></button>
                          <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-pencil-square"></i></button>
                        </td>
                      </tr>
                      <tr>
                        <td>5.</td>
                        <td>Dunn Nicole</td>
                        <td>7517F594</td>
                        <td>mike.meyercox.net</td>
                        <td>4026578899</td>
                        <td>Test address</td>
                        <td>City</td>
                        <td>
                          <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-cart"></i></button>                        
                          <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-bar-chart"></i></button>
                          <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-pencil-square"></i></button>
                        </td>
                      </tr>
                      <tr>
                        <td>6.</td>
                        <td>Dunn Nicole</td>
                        <td>7517F594</td>
                        <td>mike.meyercox.net</td>
                        <td>4026578899</td>
                        <td>Test address</td>
                        <td>City</td>
                        <td>
                          <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-cart"></i></button>                        
                          <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-bar-chart"></i></button>
                          <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-pencil-square"></i></button>
                        </td>
                      </tr>
                      <tr>
                        <td>7.</td>
                        <td>Dunn Nicole</td>
                        <td>7517F594</td>
                        <td>mike.meyercox.net</td>
                        <td>4026578899</td>
                        <td>Test address</td>
                        <td>City</td>
                        <td>
                          <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-cart"></i></button>                        
                          <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-bar-chart"></i></button>
                          <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-pencil-square"></i></button>
                        </td>
                      </tr>
                      <tr>
                        <td>8.</td>
                        <td>Dunn Nicole</td>
                        <td>7517F594</td>
                        <td>mike.meyercox.net</td>
                        <td>4026578899</td>
                        <td>Test address</td>
                        <td>City</td>
                        <td>
                          <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-cart"></i></button>                        
                          <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-bar-chart"></i></button>
                          <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-pencil-square"></i></button>
                        </td>
                      </tr>
                      <tr>
                        <td>9.</td>
                        <td>Dunn Nicole</td>
                        <td>7517F594</td>
                        <td>mike.meyercox.net</td>
                        <td>4026578899</td>
                        <td>Test address</td>
                        <td>City</td>
                        <td>
                          <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-cart"></i></button>                        
                          <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-bar-chart"></i></button>
                          <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-pencil-square"></i></button>
                        </td>
                      </tr>
                      <tr>
                        <td>10.</td>
                        <td>Dunn Nicole</td>
                        <td>7517F594</td>
                        <td>mike.meyercox.net</td>
                        <td>4026578899</td>
                        <td>Test address</td>
                        <td>City</td>
                        <td>
                          <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-cart"></i></button>                        
                          <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-bar-chart"></i></button>
                          <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-pencil-square"></i></button>
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

export default Shop

