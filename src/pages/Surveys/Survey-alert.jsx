const Survey_alert = () => {
return(
<div className="content-container">
    <div className="bg-white py-3">
        <div className="container view_survey">
            <div className="d-flex justify-content-between align-items-center">
                <div className="view_survey_heading">
                    <h5>Select Survey Alerts</h5>
                </div>
                <div>
                    <input type="search" className="form-control" placeholder="Search..." />

                </div>
            </div>
        </div>

        <div className="container mt-3 border">
            <div className="row  p-3">
                <div className="col-3">
                    <div className="text-center">
                        <h6>Send Email and mark Surveys</h6>
                        <div className="switch-container">
                            <input type="checkbox" id="switch-3" />
                            <div className="switch-color"></div>
                            <label for="switch-3"></label>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="text-center">
                        <h6>Email Template</h6>
                        <ul className="nav mb-5" id="pills-tab" role="tablist">
                            <li className="nav-item border" role="presentation">
                                <button className="nav-link-tab active" id="pills-gravity-form-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-gravity-form" type="button" role="tab"
                                    aria-controls="pills-gravity-form" aria-selected="true">Misfires
                                    and Perfect Scores</button>
                            </li>
                            <li className="nav-item border" role="presentation">
                                <button className="nav-link-tab " id="pills-type-embed-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-type-embed" type="button" role="tab"
                                    aria-controls="pills-type-embed" aria-selected="false" tabindex="-1">Hotspots and
                                    Unresolved Issues</button>
                            </li>
                            <li className="nav-item border" role="presentation">
                                <button className="nav-link-tab " id="pills-type-embed-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-type-embed" type="button" role="tab"
                                    aria-controls="pills-type-embed" aria-selected="false" tabindex="-1">Custom</button>
                            </li>

                        </ul>

                    </div>
                </div>
                <div className="col-3">
                    <select className="from-select form-control form-label-group in-border m-0">
                        <option selected="" disabled>Template</option>
                        <option value="1">dm</option>
                        <option value="2">email</option>
                        <option value="3">sms</option>
                    </select>
                </div>
            </div>
            <div className="row border-top">
                <div className="col-6 p-0">
                    <div className="table-responsive">
                        <table className="table table-hover table-striped border-end">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Customer Name</th>
                                    <th>Shop Name</th>
                                    <th>Survey Type</th>
                                    <th>Review</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1.</td>
                                    <td>Dunn Nicole</td>
                                    <td>Smitty's Body Shop</td>
                                    <td>Online</td>
                                    <td><span className="badge bg-success">Misfire</span></td>
                                </tr>
                                <tr>
                                    <td>2.</td>
                                    <td>Dunn Nicole</td>
                                    <td>Smitty's Body Shop</td>
                                    <td>Online</td>
                                    <td><span className="badge bg-success">Misfire</span></td>
                                </tr>
                                <tr>
                                    <td>3.</td>
                                    <td>Dunn Nicole</td>
                                    <td>Smitty's Body Shop</td>
                                    <td>Online</td>
                                    <td><span className="badge bg-success">Misfire</span></td>
                                </tr>
                                <tr>
                                    <td>4.</td>
                                    <td>Dunn Nicole</td>
                                    <td>Smitty's Body Shop</td>
                                    <td>Online</td>
                                    <td><span className="badge bg-success">Misfire</span></td>
                                </tr>
                                <tr>
                                    <td>5.</td>
                                    <td>Dunn Nicole</td>
                                    <td>Smitty's Body Shop</td>
                                    <td>Online</td>
                                    <td><span className="badge bg-success">Misfire</span></td>
                                </tr>
                                <tr>
                                    <td>6.</td>
                                    <td>Dunn Nicole</td>
                                    <td>Smitty's Body Shop</td>
                                    <td>Online</td>
                                    <td><span className="badge bg-success">Misfire</span></td>
                                </tr>
                                <tr>
                                    <td>7.</td>
                                    <td>Dunn Nicole</td>
                                    <td>Smitty's Body Shop</td>
                                    <td>Online</td>
                                    <td><span className="badge bg-success">Misfire</span></td>
                                </tr>
                                <tr>
                                    <td>8.</td>
                                    <td>Dunn Nicole</td>
                                    <td>Smitty's Body Shop</td>
                                    <td>Online</td>
                                    <td><span className="badge bg-success">Misfire</span></td>
                                </tr>
                                <tr>
                                    <td>9.</td>
                                    <td>Dunn Nicole</td>
                                    <td>Smitty's Body Shop</td>
                                    <td>Online</td>
                                    <td><span className="badge bg-success">Misfire</span></td>
                                </tr>
                                <tr>
                                    <td>10.</td>
                                    <td>Dunn Nicole</td>
                                    <td>Smitty's Body Shop</td>
                                    <td>Online</td>
                                    <td><span className="badge bg-success">Misfire</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-6">

                </div>
            </div>
        </div>

        <div className="container mt-4">
            <div className="row">
                <div className="text-center">
                    <button type="submit" className="btn sub-btn">SAVE SELECTION</button>
                </div>
            </div>
        </div>

    </div>
</div>

);
}
export default Survey_alert