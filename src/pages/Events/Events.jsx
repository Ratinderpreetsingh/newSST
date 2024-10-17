const Events = () => {
    return(
        <div class="content-container">
            <div class="bg-white py-3">
                <div class="container">
                    <div class="d-flex justify-content-between align-items-center">
                        <h5>Events</h5>
                        <div>
                            <button type="button" class="btn sub-btn">New Event</button>
                        </div>
                    </div>

                    <nav>
                        <div class="nav nav-tabs border-bottom " id="nav-tab" role="tablist">
                            <div class="tab-nav-link active px-4 py-2" id="nav-event-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-event" type="button" role="tab" aria-controls="nav-event"
                                aria-selected="true">
                                Events</div>
                            <div class="tab-nav-link px-4 py-2" id="nav-event-s-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-event-s" type="button" role="tab" aria-controls="nav-event-s"
                                aria-selected="false">Events Settings</div>
                            <div class="tab-nav-link px-4 py-2" id="nav-s-alert-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-s-alert" type="button" role="tab" aria-controls="nav-s-alert"
                                aria-selected="false">Scheduled Alerts Settings</div>

                        </div>
                    </nav>
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-event" role="tabpanel"
                            aria-labelledby="nav-event-tab" tabindex="0">


                            <div class="container mt-3">
                                <div class="table-responsive">
                                    <table class="table border">
                                        <thead>
                                            <tr>
                                                <th class="border-end">Title</th>
                                                <th class="border-end">Include Shop</th>
                                                <th class="border-end">Include Survey Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="border-end">Weekly Fullers Manually</td>
                                                <td class="border-end"> B Street Collision West Dodge</td>
                                                <td class="border-end">Misfire, Perfect Score</td> 
                                                    <td>
                                                        <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-eye"></i></button>                        
                                                        <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-trash"></i></button> 
                                                      </td> 
                                            </tr>
                                            <tr>
                                                <td class="border-end">Weekly Fullers Manually</td>
                                                <td class="border-end"> B Street Collision West Dodge</td>
                                                <td class="border-end">Misfire, Perfect Score</td>
                                                <td>
                                                    <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-eye"></i></button>                        
                                                    <button class="btn btn-sm btn-outline-danger p-1"><i class="bi bi-trash"></i></button> 
                                                  </td> 
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>


                            </div>


                        </div>
                        <div class="tab-pane fade" id="nav-event-s" role="tabpanel" aria-labelledby="nav-event-s-tab"
                            tabindex="0">

                            <div class="container mt-3">
                                <div class="row">
                                    <textarea class="form-control">

                                    </textarea>

                                </div>
                                <div class="container mt-3">
                                    <div class="row">
                                        <div class="text-center">
                                            <button type="submit" class="btn sub-btn">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="tab-pane fade" id="nav-s-alert" role="tabpanel" aria-labelledby="nav-s-alert-tab"
                            tabindex="0">

                            <div class="container mt-3">
                                <div class="table-responsive">
                                    <table class="table border">
                                        <thead>
                                            <tr>
                                                <th class="border-end">Sr. No.</th>
                                                <th class="border-end"> </th>
                                                <th class="border-end">Definition Email Events</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="border-end"></td>
                                                <td class="border-end">Alert Enabled</td>
                                                <td class="border-end">
                                                    <div class="col-lg-2 col-md-4 col-6">
                                                        <div class="switch-container">
                                                            <input type="checkbox" id="switch1" />
                                                            <div class="switch-color"></div>
                                                            <label for="switch1"></label>
                                                        </div>
                                                        <p></p>
                                                    </div>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td class="border-end"></td>
                                                <td class="border-end">Freqency *</td>
                                                <td class="border-end"> </td>

                                            </tr>
                                            <tr>
                                                <td class="border-end"></td>
                                                <td class="border-end">Alert Templates</td>
                                                <td class="border-end"> </td>

                                            </tr>
                                            <tr>
                                                <td class="border-end"></td>
                                                <td class="border-end">Execution Time & Date</td>
                                                <td class="border-end"> </td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="d-flex justify-content-end">
                                    <div class="">
                                        <div class="add-row"><i class="bi bi-plus"></i></div>
                                    </div> &nbsp;
                                    <div class="">
                                        <div class="add-row"><i class="bi bi-dash"></i></div>
                                    </div>
                                </div>



                            </div>
                            <div class="container mt-3">
                                <div class="row">
                                    <div class="text-center">
                                        <button type="submit" class="btn sub-btn">Submit</button>
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
  export default Events