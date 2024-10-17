const Definition = () => {
    return(
        <div className="content-container">
            <div className="bg-white py-3">
                <div className="container">
                    <div className="d-flex"><i className="bi bi-info-circle site-color"></i> &nbsp; <h5>Add Definition</h5>
                    </div>
                    <div className="row mt-1">
                        <div className="col-2">
                            Definition Name *
                        </div>
                        <div className="col-lg-5">
                            <input type="text" className="form-control " />
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-2">
                            Parent Definiton
                        </div>
                        <div className="col-5">
                            <div className="d-flex justify-content-between">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="directmail"
                                        value="option1" checked />
                                    <label className="form-check-label" for="directmail">
                                        Direct Mail
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="mail"
                                        value="option2" />
                                    <label className="form-check-label" for="mail">
                                        Email
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="sms"
                                        value="option3" />
                                    <label className="form-check-label" for="sms">
                                        SMS
                                    </label>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="d-flex align-items-center definition-icon">
                            <i className="bi bi-gear-fill fs-4 me-2"></i>
                            <h6 className="mb-0">Settings</h6>
                        </div>
                    </div>

                    <div className="border-bottom"></div>
                </div>

                <div className="container mt-3">
                    <div className="row">
                        <div className="col-6 ">
                            <h6>Enabled</h6>
                            <div className="switch-container">
                                <input type="checkbox" id="switch-1" />
                                <div className="switch-color"></div>
                                <label for="switch-1"></label>
                            </div>
                        </div>
                        <div className="col-6 ">
                            <h6>Embed Type</h6>
                            <ul className="nav mb-3 justify-content-start" id="pills-tab" role="tablist">
                                <li className="nav-item border" role="presentation">
                                    <button className="nav-link-tab active" id="pills-gravity-form-tab"
                                        data-bs-toggle="pill" data-bs-target="#pills-gravity-form" type="button"
                                        role="tab" aria-controls="pills-gravity-form" aria-selected="true">Day</button>
                                </li>
                                <li className="nav-item border" role="presentation">
                                    <button className="nav-link-tab" id="pills-type-embed-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-type-embed" type="button" role="tab"
                                        aria-controls="pills-type-embed" aria-selected="false" tabindex="-1">Month
                                    </button>
                                </li>
                                <li className="nav-item border" role="presentation">
                                    <button className="nav-link-tab" id="pills-type-embed-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-type-embed" type="button" role="tab"
                                        aria-controls="pills-type-embed" aria-selected="false" tabindex="-1">Year
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-6">
                            <div className="col-8">
                                <div className="form-label-group in-border">
                                    <input type="text" id="name" className="form-control" placeholder=" " />
                                    <label for="name" className="floating-label">Delay Value</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="col-8">
                                <select className="form-control form-label-group in-border m-0">
                                    <option selected>None</option>
                                    <option value="1">dm</option>
                                    <option value="2">email</option>
                                    <option value="3">sms</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-12">
                            <h6>Skip Condition</h6>
                        </div>
                        <div className="col-12">
                            <div className="table-responsive">
                                <table className="table border" >
                                    <thead>
                                        <tr>
                                            <th className="border-end">Sr. No.</th>
                                            <th className="border-end">Key *</th>
                                            <th>Image *</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border-end">&nbsp;</td>
                                            <td className="border-end">&nbsp;</td>
                                            <td>&nbsp;</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="d-flex justify-content-end">
                            <div className="">
                                <div className="add-row"><i className="bi bi-plus"></i></div>
                            </div> &nbsp;
                            <div className="">
                                <div className="add-row"><i className="bi bi-dash"></i></div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-12">
                            <h6>Completed</h6>
                        </div>
                        <div className="col-12">
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
                                            <td className="border-end">&nbsp;</td>
                                            <td className="border-end">&nbsp;</td>
                                            <td>&nbsp;</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="d-flex justify-content-end">
                            <div className="">
                                <div className="add-row"><i className="bi bi-plus"></i></div>
                            </div> &nbsp;
                            <div className="">
                                <div className="add-row"><i className="bi bi-dash"></i></div>
                            </div>
                        </div>
                    </div>


                    <div className="row mt-3">
                        <div className="col-12">
                            <h6>Media Files</h6>
                        </div>
                        <div className="col-12">
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
                                            <td className="border-end">&nbsp;</td>
                                            <td className="border-end">&nbsp;</td>
                                            <td>&nbsp;</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="d-flex justify-content-end">
                            <div className="">
                                <div className="add-row"><i className="bi bi-plus"></i></div>
                            </div> &nbsp;
                            <div className="">
                                <div className="add-row"><i className="bi bi-dash"></i></div>
                            </div>
                        </div>
                    </div>


                    <div className="row mt-3">
                        <div className="col-12">
                            <h6>Execution Parameters</h6>
                        </div>
                        <div className="col-12">
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
                                            <td className="border-end">&nbsp;</td>
                                            <td className="border-end">&nbsp;</td>
                                            <td>&nbsp;</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="d-flex justify-content-end">
                            <div className="">
                                <div className="add-row"><i className="bi bi-plus"></i></div>
                            </div> &nbsp;
                            <div className="">
                                <div className="add-row"><i className="bi bi-dash"></i></div>
                            </div>
                        </div>
                    </div>


                    <div className="row mt-3">
                        <div className="text-center">
                            <button type="submit" className="btn sub-btn">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Definition