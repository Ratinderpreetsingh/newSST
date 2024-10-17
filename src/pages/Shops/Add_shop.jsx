const Add_shop = () => {
    return(
        <div className="content-container">
        <div className="bg-white py-3">
          <div className="container">
            <div className="d-flex"><i className="bi bi-info-circle site-color"></i> &nbsp; <h5>Add Shop</h5>
            </div>
            <div className="row mt-1">
              <div className="col-lg-12">
                <nav>
                  <div className="nav nav-tabs border-bottom " id="nav-tab" role="tablist">
                    <div className="tab-nav-link active px-2 py-2" id="nav-shop-tab" data-bs-toggle="tab"
                      data-bs-target="#nav-shop" type="button" role="tab" aria-controls="nav-shop" aria-selected="true">
                      Shop Information</div>
                    <div className="tab-nav-link px-2 py-2" id="nav-media-tab" data-bs-toggle="tab" data-bs-target="#nav-media"
                      type="button" role="tab" aria-controls="nav-media" aria-selected="false">Media Storage</div>
                    <div className="tab-nav-link px-2 py-2" id="nav-definition-tab" data-bs-toggle="tab"
                      data-bs-target="#nav-definition" type="button" role="tab" aria-controls="nav-definition"
                      aria-selected="false">Definiton Array</div>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade show active" id="nav-shop" role="tabpanel" aria-labelledby="nav-shop-tab"
                    tabindex="0">
  
                  <div className="container mt-3">
                      <div className="row">
                        <div className="col-lg-2 col-md-4 col-6">
                          <p className="mb-1">Report Active
                          <div className="switch-container">
                            <input type="checkbox" id="switch1" />
                            <div className="switch-color"></div>
                            <label for="switch1"></label>
                          </div>
                          </p>
                        </div>
  
                        <div className="col-lg-2 col-md-4 col-6">
                          <p className="mb-1">Advantage Active
                          <div className="switch-container">
                            <input type="checkbox" id="switch2" />
                            <div className="switch-color"></div>
                            <label for="switch2"></label>
                          </div>
                          </p>
                        </div>
  
                        <div className="col-lg-2 col-md-4 col-6">
                          <p className="mb-1">MSO Shop
                          <div className="switch-container">
                            <input type="checkbox" id="switch3" />
                            <div className="switch-color"></div>
                            <label for="switch3"></label>
                          </div>
                          </p>
                        </div>
  
                        <div className="col-lg-2 col-md-4 col-6">
                          <p className="mb-1">Part of MSO
                          <div className="switch-container">
                            <input type="checkbox" id="switch4" />
                            <div className="switch-color"></div>
                            <label for="switch4"></label>
                          </div>
                          </p>
                        </div>
  
                        <div className="col-lg-2 col-md-4 col-6">
                          <p className="mb-1">Alt Mapping
                          <div className="switch-container">
                            <input type="checkbox" id="switch5" />
                            <div className="switch-color"></div>
                            <label for="switch5"></label>
                          </div>
                          </p>
                        </div>
  
                        <div className="col-lg-2 col-md-4 col-6">
                          <p className="mb-1">Include All in recaps
                          <div className="switch-container">
                            <input type="checkbox" id="switch6" />
                            <div className="switch-color"></div>
                            <label for="switch6"></label>
                          </div>
                          </p>
                        </div>
                      </div>
                    </div>
  
                    <div className="container mt-3">
                      <div className="row">
                        <div className="col-lg-4 col-md-4">
  
                          <div className="form-label-group in-border">
                            <input type="text" id="name" className="form-control" placeholder=" " />
                            <label for="name" className="floating-label">Shop Name <span>*</span></label>
                          </div>
  
  
                        </div>
                        <div className="col-lg-4 col-md-4">
  
                          <div className="form-label-group in-border">
                            <input type="text" id="name" className="form-control" placeholder=" " />
                            <label for="name" className="floating-label">Shop Display Name <span>*</span></label>
                          </div>
  
  
                        </div>
                        <div className="col-lg-4 col-md-4">
  
                          <div className="form-label-group in-border">
                            <input type="text" id="name" className="form-control" placeholder=" " />
                            <label for="name" className="floating-label">PSG ID <span>*</span></label>
                          </div>
  
  
                        </div>
                      </div>
  
                      <div className="row">
                        <div className="col-lg-4 col-md-4">
  
                          <div className="form-label-group in-border">
                            <input type="text" id="name" className="form-control" placeholder=" " />
                            <label for="name" className="floating-label">Web Address <span>*</span></label>
                          </div>
  
                        </div>
                        <div className="col-lg-4 col-md-4">
  
                          <div className="form-label-group in-border">
                            <input type="text" id="name" className="form-control" placeholder=" " />
                            <label for="name" className="floating-label">Email</label>
                          </div>
  
                        </div>
                        <div className="col-lg-4 col-md-4">
  
                          <div className="form-label-group in-border">
                            <input type="text" id="name" className="form-control" placeholder=" " />
                            <label for="name" className="floating-label">Phone Number</label>
                          </div>
  
                        </div>
                      </div>
  
                      <div className="row">
                        <div className="col-lg-4 col-md-4">
  
                          <div className="form-label-group in-border">
                            <input type="text" id="name" className="form-control" placeholder=" " />
                            <label for="name" className="floating-label">Address1 <span>*</span></label>
                          </div>
  
  
                        </div>
                        <div className="col-lg-4 col-md-4">
  
                          <div className="form-label-group in-border">
                            <input type="text" id="name" className="form-control" placeholder=" " />
                            <label for="name" className="floating-label">City <span>*</span></label>
                          </div>
  
  
                        </div>
                        <div className="col-lg-4 col-md-4">
  
                          <div className="form-label-group in-border">
                            <input type="text" id="name" className="form-control" placeholder=" " />
                            <label for="name" className="floating-label">State <span>*</span></label>
                          </div>
  
  
                        </div>
                      </div>
  
                      <div className="row">
                        <div className="col-lg-8">
                          <div className="row">
                            <div className="col-lg-6 col-md-4">
  
                              <div className="form-label-group in-border">
                                <input type="text" id="name" className="form-control" placeholder=" " />
                                <label for="name" className="floating-label">Address2</label>
                              </div>
  
  
                            </div>
                            <div className="col-lg-6 col-md-4">
  
                              <div className="form-label-group in-border">
                                <input type="text" id="name" className="form-control" placeholder=" " />
                                <label for="name" className="floating-label">Zip Code <span>*</span></label>
                              </div>
  
  
                            </div>
                            <div className="col-lg-6 col-md-4">
  
                              <div className="form-label-group in-border">
                                <input type="text" id="name" className="form-control" placeholder=" " />
                                <label for="name" className="floating-label">First Name</label>
                              </div>
  
                            </div>
                            <div className="col-lg-6 col-md-4">
  
                              <div className="form-label-group in-border">
                                <input type="text" id="name" className="form-control" placeholder=" " />
                                <label for="name" className="floating-label">Last Name</label>
                              </div>
  
                            </div>
                          </div>
  
                        </div>
                        <div className="col-lg-4">
                          <div className="col-lg-12 ">
  
                            <div className="form-label-group in-border">
                              <textarea type="text" id="name" className="form-control text-area-height"
                                placeholder=" "></textarea>
                              <label for="name" className="floating-label">Signature Text <span>*</span></label>
                            </div>
  
                          </div>
                        </div>
                      </div>
                    </div>
  
                    <div className="container mt-3">
                      <div className="row">
                        <div className="col-lg-8">
                          <h5>Email From</h5>
                          <p>Fill only if the domian is verified in the Campaign Monitor!!!</p>
                          <input typr="text" className="form-control" />
                        </div>
                      </div>
                    </div>
  
                    <div className="container mt-3">
                      <div className="row">
                        <div className="col-lg-8">
                          <h5>Embed Type</h5>
  
  
                          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item border" role="presentation">
                              <button className="nav-link-tab active" id="pills-gravity-form-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-gravity-form" type="button" role="tab"
                                aria-controls="pills-gravity-form" aria-selected="true">Gravity Form</button>
                            </li>
                            <li className="nav-item border" role="presentation">
                              <button className="nav-link-tab" id="pills-type-embed-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-type-embed" type="button" role="tab"
                                aria-controls="pills-type-embed" aria-selected="false">TypeForm Embed</button>
                            </li>
                            <li className="nav-item border" role="presentation">
                              <button className="nav-link-tab" id="pills-alchemer-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-alchemer" type="button" role="tab" aria-controls="pills-alchemer"
                                aria-selected="false">Alchemer</button>
                            </li>
                          </ul>
  
                          <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-gravity-form" role="tabpanel"
                              aria-labelledby="pills-gravity-form-tab">
  
                              <div className="form-label-group in-border">
                                <input type="text" id="name" className="form-control" placeholder=" " />
                                <label for="name" className="floating-label">Form ID</label>
                              </div>
  
                            </div>
                            <div className="tab-pane fade" id="pills-type-embed" role="tabpanel"
                              aria-labelledby="pills-type-embed-tab">
  
                              <div className="form-label-group in-border">
                                <input type="text" id="name" className="form-control" placeholder=" " />
                                <label for="name" className="floating-label">TypeForm embed Code</label>
                              </div>
  
                            </div>
                            <div className="tab-pane fade" id="pills-alchemer" role="tabpanel"
                              aria-labelledby="pills-alchemer-tab">
                              <div className="row">
                                <div className="col-6">
                                  <div className="form-label-group in-border">
                                    <input type="text" id="name" className="form-control" placeholder=" " />
                                    <label for="name" className="floating-label">Survey ID <span>*</span></label>
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div className="form-label-group in-border">
                                    <input type="text" id="name" className="form-control" placeholder=" " />
                                    <label for="name" className="floating-label">Google Review Link</label>
                                  </div>
                                </div>
                              </div>
  
                            </div>
                          </div>
  
  
  
                        </div>
                      </div>
                    </div>
  
                    <div className="container mt-3">
                      <div className="row">
                        <div className="col-lg-8">
                          <div className="d-flex justify-content-between">
                            <div className="">
                              <h5>Alert Type</h5>
                            </div>
                            <div className="">
                              <div className="add-row"><i className="bi bi-plus"></i></div>
                            </div>
  
                          </div>
                        </div>
                      </div>
                    </div>
  
                    <div className="container mt-3">
                      <div className="row">
                        <div className="text-center">
                          <button type="submit" className="btn sub-btn">SAVE</button>
                        </div>
                      </div>
                    </div>
  
  
                  </div>
                  <div className="tab-pane fade" id="nav-media" role="tabpanel" aria-labelledby="nav-media-tab" tabindex="0">
  
                    <div className="container mt-3">
                      <div className="row">
                        <div className="col-lg-8">
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="">
                              <h5>Email Header</h5>
                            </div>
                            <div className="">
  
                              <div className="dropzone">
                                <div className="dropzone-desc">
                                  <div className="dropzone-icon"><i className="bi bi-camera"></i></div>
                                  <p>Drag Email Header Image Here</p>
                                </div>
                                <input type="file" name="img_logo" className="dropzone" />
                              </div>
                            </div>
  
                          </div>
                        </div>
                      </div>
                    </div>
  
                    <div className="container mt-3">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="table-responsive">
                            <table className="table border">
                              <thead>
                                <tr>
                                  <th className="border-end">Sr. No.</th>
                                  <th className="border-end">Key *</th>
                                  <th>Image *</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="border-end">1.</td>
                                  <td className="border-end">Envelope Header</td>
                                  <td>/shop/name/dsk.pdf</td>
                                </tr>
                                <tr>
                                  <td className="border-end" colspan="2">Image Preview</td>
                                  <td><button type="submit" className="btn sub-btn">Generate Image</button></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
  
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="table-responsive">
                            <table className="table border">
                              <thead>
                                <tr>
                                  <th className="border-end w-25">Sr. No.</th>
                                  <th className="border-end w-25">Key *</th>
                                  <th className="w-50">Image *</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="border-end w-25">2.</td>
                                  <td className="border-end w-25">Letter Header</td>
                                  <td className="w-50">/shop/name/dsk.pdf</td>
                                </tr>
                                <tr>
                                  <td className="border-end" colspan="2">Image Preview</td>
                                  <td><button type="submit" className="btn sub-btn">Generate Image</button></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="table-responsive">
                            <table className="table border">
                              <thead>
                                <tr>
                                  <th className="border-end w-25">Sr. No.</th>
                                  <th className="border-end w-25">Key *</th>
                                  <th className="w-50">Image *</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="border-end w-25">3.</td>
                                  <td className="border-end w-25">Signature</td>
                                  <td className="w-50">/shop/name/dsk.pdf</td>
                                </tr>
                                <tr>
                                  <td className="border-end" colspan="2">Image Preview</td>
                                  <td><button type="submit" className="btn sub-btn">Generate Image</button></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
  
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="table-responsive">
                            <table className="table border">
                              <thead>
                                <tr>
                                  <th className="border-end w-25">Sr. No.</th>
                                  <th className="border-end w-25">Key *</th>
                                  <th className="w-50">Image *</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="border-end w-25">4.</td>
                                  <td className="border-end w-25">Survey Header</td>
                                  <td className="w-50">/shop/name/dsk.pdf</td>
                                </tr>
                                <tr>
                                  <td className="border-end" colspan="2">Image Preview</td>
                                  <td><button type="submit" className="btn sub-btn">Generate Image</button></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
  
                      </div>
  
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="table-responsive">
                            <table className="table border">
                              <thead>
                                <tr>
                                  <th className="border-end w-25">Sr. No.</th>
                                  <th className="border-end w-25">Key *</th>
                                  <th className="w-50">Image *</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="border-end">5.</td>
                                  <td className="border-end">Warrenty Header 1</td>
                                  <td>/shop/name/dsk.pdf</td>
                                </tr>
                                <tr>
                                  <td className="border-end" colspan="2">Image Preview</td>
                                  <td><button type="submit" className="btn sub-btn">Generate Image</button></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                       
  
  
                      </div>
  
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="table-responsive">
                            <table className="table border">
                              <thead>
                                <tr>
                                  <th className="border-end w-25 ">Sr. No.</th>
                                  <th className="border-end w-25 ">Key *</th>
                                  <th className="w-50">Image *</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="border-end w-25">6.</td>
                                  <td className="border-end w-25">Warrenty Header 2</td>
                                  <td className="w-50">/shop/name/dsk.pdf</td>
                                </tr>
                                <tr>
                                  <td className="border-end" colspan="2">Image Preview</td>
                                  <td><button type="submit" className="btn sub-btn">Generate Image</button></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
  
                      </div>
  
                    </div>
  
                    <div className="container mt-3">
                      <div className="row">
                        <div className="col-12">
                          <h5>Invoicing</h5>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <div className="col-lg-8">
                            <h6>Invoicing Enabled</h6>
                            <div className="switch-container">
                              <input type="checkbox" id="switch-1" />
                              <div className="switch-color"></div>
                              <label for="switch-1"></label>
                            </div>
                          </div>
                        </div>
                        <div className="col-6 text-center">
                          <h6>Billing Type</h6>
                          <ul className="nav mb-3 justify-content-center" id="pills-tab" role="tablist">
                            <li className="nav-item border" role="presentation">
                              <button className="nav-link-tab active" id="pills-gravity-form-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-gravity-form" type="button" role="tab"
                                aria-controls="pills-gravity-form" aria-selected="true">Per Customer Submitted</button>
                            </li>
                            <li className="nav-item border" role="presentation">
                              <button className="nav-link-tab" id="pills-type-embed-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-type-embed" type="button" role="tab"
                                aria-controls="pills-type-embed" aria-selected="false" tabindex="-1">Per Customer
                                Executed</button>
                            </li>
  
                          </ul>
  
  
                        </div>
                      </div>
                    </div>
  
                    <div className="container mt-3">
                      <div className="row">
                        <div className="col-12">
                          <div className="form-label-group in-border">
                            <input type="text" id="name" className="form-control" placeholder=" " />
                            <label for="name" className="floating-label">Invoice Debug</label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <div className="form-label-group in-border">
                            <input type="text" id="name" className="form-control" placeholder=" " />
                            <label for="name" className="floating-label">Name Rate</label>
                          </div>
                        </div>
                      </div>
  
                    </div>
  
                    <div className="container mt-3">
                      <div className="row">
                        <div className="text-center">
                          <buttont type="submit" className="btn sub-btn">Save</buttont>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="nav-definition" role="tabpanel" aria-labelledby="nav-definition-tab"
                    tabindex="0">
  
                    <div className="container mt-3">
                      <div className="row">
                        <div className="col-12">
                          <div className="col-lg-2 col-md-4 col-6">
                            <h6 className="mb-1">Use New System
                            </h6>
                            <div className="switch-container">
                              <input type="checkbox" id="switch-2" />
                              <div className="switch-color"></div>
                              <label for="switch-2"></label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
  
                    <div className="container mt-3">
                      <div className="row">
  
                        <div className="col-lg-2 col-md-4 col-6">
                          <h6 className="mb-1">Definitions2
                          </h6>
                        </div>
                      </div>
                    </div>
  
                    <div className="container mt-3 border p-3">
                      <div className="row">
                        <div className="col-4">
                          <div>
                            <h6>OwnerEmail</h6>
                            <ul className="nav mb-3" id="pills-tab" role="tablist">
                              <li className="nav-item border" role="presentation">
                                <button className="nav-link-tab active" id="pills-gravity-form-tab" data-bs-toggle="pill"
                                  data-bs-target="#pills-gravity-form" type="button" role="tab"
                                  aria-controls="pills-gravity-form" aria-selected="true">Exists</button>
                              </li>
                              <li className="nav-item border" role="presentation">
                                <button className="nav-link-tab" id="pills-type-embed-tab" data-bs-toggle="pill"
                                  data-bs-target="#pills-type-embed" type="button" role="tab"
                                  aria-controls="pills-type-embed" aria-selected="false" tabindex="-1">Not Exists</button>
                              </li>
                              <li className="nav-item border" role="presentation">
                                <button className="nav-link-tab" id="pills-type-embed-tab" data-bs-toggle="pill"
                                  data-bs-target="#pills-type-embed" type="button" role="tab"
                                  aria-controls="pills-type-embed" aria-selected="false" tabindex="-1">Ignore</button>
                              </li>
  
                            </ul>
  
                          </div>
                        </div>
  
                        <div className="col-4">
                          <div>
                            <h6>OwnerCellPhone</h6>
                            <ul className="nav mb-3" id="pills-tab" role="tablist">
                              <li className="nav-item border" role="presentation">
                                <button className="nav-link-tab active" id="pills-gravity-form-tab" data-bs-toggle="pill"
                                  data-bs-target="#pills-gravity-form" type="button" role="tab"
                                  aria-controls="pills-gravity-form" aria-selected="true">Exists</button>
                              </li>
                              <li className="nav-item border" role="presentation">
                                <button className="nav-link-tab" id="pills-type-embed-tab" data-bs-toggle="pill"
                                  data-bs-target="#pills-type-embed" type="button" role="tab"
                                  aria-controls="pills-type-embed" aria-selected="false" tabindex="-1">Not Exists</button>
                              </li>
                              <li className="nav-item border" role="presentation">
                                <button className="nav-link-tab" id="pills-type-embed-tab" data-bs-toggle="pill"
                                  data-bs-target="#pills-type-embed" type="button" role="tab"
                                  aria-controls="pills-type-embed" aria-selected="false" tabindex="-1">Ignore</button>
                              </li>
  
                            </ul>
  
                          </div>
                        </div>
  
                        <div className="col-4">
                          <div>
                            <h6>Full Address</h6>
                            <div className="d-flex">
                              <p>Address1, City, StateProvince, <br />PostalZip</p>
                              <div className="switch-container">
                                <input type="checkbox" id="switch-3" />
                                <div className="switch-color"></div>
                                <label for="switch-3"></label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
  
                      <div className="row">
                        <div className="col-4">
                          <div className="border p-3">
                            <div className="d-flex justify-content-between">
                              OwnerEmail
                              <div className="">
                                <div className="add-row"><i className="bi bi-plus"></i></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="border p-3">
                            <div className="d-flex justify-content-between">
                              Field Condiition
                              <div className="">
                                <div className="add-row"><i className="bi bi-plus"></i></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="border p-3">
                            <div className="d-flex justify-content-between">
                              PreDefined Condiition
                              <div className="">
                                <div className="add-row"><i className="bi bi-plus"></i></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
  
                      <div className="row mt-3">
                        <div>
                          <div className="form-label-group in-border">
                            <textarea type="text" id="name" className="form-control text-area-height"
                              placeholder=" "></textarea>
                            <label for="name" className="floating-label">Description</label>
                          </div>
                        </div>
                      </div>
                    </div>
    
                  </div>
                </div>
  
              </div>
            </div>
          </div>
  
        </div>
      </div>



    );
}
export default Add_shop
