const definition_dm = () => {
    return(
        <div class="content-container">
        <div class="bg-white py-3">
            <div class="container">
                <div class="d-flex"><i class="bi bi-info-circle site-color"></i> &nbsp; <h5>DM Definition Test</h5>
                </div>
               
                <nav>
                    <div class="nav nav-tabs border-bottom " id="nav-tab" role="tablist">
                      <div class="tab-nav-link active px-4" id="nav-email-tab" data-bs-toggle="tab"
                        data-bs-target="#nav-email" type="button" role="tab" aria-controls="nav-email" aria-selected="true">
                       Email</div>
                      
                    </div>
                  </nav>
                 
                        <div class="container mt-3">
                            <div class="row">
                                <div class="col-3">
                                    Select Definition SMS * </div>
                                <div class="col-6">
                                    <select class="from-select form-control form-label-group in-border m-0">
                                        <option selected>None</option>
                                        <option value="1">dm</option>
                                        <option value="2">email</option>
                                        <option value="3">sms</option>
                                    </select>
                                </div>
                            </div>


                            <div class="row mt-3">
                                <div class="col-3">
                                    Use Shop * </div>
                                <div class="col-6">
                                    <select class="from-select form-control form-label-group in-border m-0">
                                        <option selected>None</option>
                                        <option value="1">dm</option>
                                        <option value="2">email</option>
                                        <option value="3">sms</option>
                                    </select>
                                </div>
                            </div> 

                            <div class="row mt-3">
                                <div class="col-3">
                                    Use Customer * </div>
                                <div class="col-6">
                                    <select class="from-select form-control form-label-group in-border m-0">
                                        <option selected>None</option>
                                        <option value="1">dm</option>
                                        <option value="2">email</option>
                                        <option value="3">sms</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                        <div class="container mt-3">
                            <div class="row">
                              <div class="text-center">
                                <button type="submit" class="btn sub-btn">Test It</button>
                              </div>
                            </div>
                          </div>
                     
            </div>


        </div>
    </div>

    );
}
export default definition_dm