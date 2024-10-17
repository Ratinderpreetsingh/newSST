const definition_test  = () => {
    return(
        <div className="content-container">
            <div className="bg-white py-3">
                <div className="container">
                    <div className="d-flex"><i className="bi bi-info-circle site-color"></i> &nbsp; <h5>Definition Test</h5>
                    </div>
                   
                    <nav>
                        <div className="nav nav-tabs border-bottom " id="nav-tab" role="tablist">
                          <div className="tab-nav-link active px-4 py-2" id="nav-email-tab" data-bs-toggle="tab"
                            data-bs-target="#nav-email" type="button" role="tab" aria-controls="nav-email" aria-selected="true">
                           Email</div>
                          <div className="tab-nav-link px-4 py-2" id="nav-sms-tab" data-bs-toggle="tab" data-bs-target="#nav-sms"
                            type="button" role="tab" aria-controls="nav-sms" aria-selected="false">SMS</div>
                         
                        </div>
                      </nav>
                      <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-email" role="tabpanel" aria-labelledby="nav-email-tab"
                          tabindex="0">
        
        
                          <div className="container mt-3">
                            <div className="row">
                                <div className="col-3">
                                    Select Definition Array * </div>
                                <div className="col-6">
                                    <select className="from-select form-control form-label-group in-border m-0">
                                        <option selected>None</option>
                                        <option value="1">dm</option>
                                        <option value="2">email</option>
                                        <option value="3">sms</option>
                                    </select>
                                </div>
                            </div>


                            <div className="row mt-3">
                                <div className="col-3">
                                    Use Email * </div>
                                <div className="col-6">
                                    <div className="form-label-group in-border m-0">
                                        <input type="text" id="name" className="form-control"  placeholder=" " />
                                        <label for="name" className="floating-label">Email</label>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-3">
                                    Use Shop * </div>
                                <div className="col-6">
                                    <select className="from-select form-control form-label-group in-border m-0">
                                        <option selected>None</option>
                                        <option value="1">dm</option>
                                        <option value="2">email</option>
                                        <option value="3">sms</option>
                                    </select>
                                </div>
                            </div> 

                            <div className="row mt-3">
                                <div className="col-3">
                                    Use Customer * </div>
                                <div className="col-6">
                                    <select className="from-select form-control form-label-group in-border m-0">
                                        <option selected>None</option>
                                        <option value="1">dm</option>
                                        <option value="2">email</option>
                                        <option value="3">sms</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                        <div className="container mt-3">
                            <div className="row">
                              <div className="text-center">
                                <button type="submit" className="btn sub-btn">Test It</button>
                              </div>
                            </div>
                          </div>
        
                        </div>
                        <div className="tab-pane fade" id="nav-sms" role="tabpanel" aria-labelledby="nav-sms-tab" tabindex="0">
        
                            <div className="container mt-3">
                                <div className="row">
                                    <div className="col-3">
                                        Select Definition SMS * </div>
                                    <div className="col-6">
                                        <select className="from-select form-control form-label-group in-border m-0">
                                            <option selected>None</option>
                                            <option value="1">dm</option>
                                            <option value="2">email</option>
                                            <option value="3">sms</option>
                                        </select>
                                    </div>
                                </div>


                                <div className="row mt-3">
                                    <div className="col-3">
                                        Use Email * </div>
                                    <div className="col-6">
                                        <div className="form-label-group in-border m-0">
                                            <input type="text" id="name" className="form-control"  placeholder=" "/>
                                            <label for="name" className="floating-label">Email</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col-3">
                                        Use Shop * </div>
                                    <div className="col-6">
                                        <select className="from-select form-control form-label-group in-border m-0">
                                            <option selected>None</option>
                                            <option value="1">dm</option>
                                            <option value="2">email</option>
                                            <option value="3">sms</option>
                                        </select>
                                    </div>
                                </div> 

                                <div className="row mt-3">
                                    <div className="col-3">
                                        Use Customer * </div>
                                    <div className="col-6">
                                        <select className="from-select form-control form-label-group in-border m-0">
                                            <option selected>None</option>
                                            <option value="1">dm</option>
                                            <option value="2">email</option>
                                            <option value="3">sms</option>
                                        </select>
                                    </div>
                                </div>

                            </div>
                            <div className="container mt-3">
                                <div className="row">
                                  <div className="text-center">
                                    <button type="submit" className="btn sub-btn">Test It</button>
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
export default definition_test