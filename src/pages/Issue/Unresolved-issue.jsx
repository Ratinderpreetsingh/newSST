const Unresolved_issue = () => {
    return(
    <div className="content-container">
        <div className="bg-white py-3">
            <div className="container view_survey">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="view_survey_heading">
                        <h5><strong>Unresolved Issue</strong></h5>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-4">
                        <div>
                            <p>Review: </p>
                                {/* <span style="font-size:100%;color:#FFA534;"> </span>(Unresolved Issue)</p> */}
                        </div>
                    </div>
                    <div className="col-4">
                        <div>
                            <p>Review Date:08/08/2024</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <ul className="nav mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item border" role="presentation">
                                <button className="nav-link-tab active" id="pills-gravity-form-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-gravity-form" type="button" role="tab"
                                    aria-controls="pills-gravity-form" aria-selected="true">Input
                                    Unchecked</button>
                            </li>
                            <li className="nav-item border" role="presentation">
                                <button className="nav-link-tab" id="pills-type-embed-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-type-embed" type="button" role="tab"
                                    aria-controls="pills-type-embed" aria-selected="false" tabIndex="-1">Reviewed</button>
                            </li>
                            <li className="nav-item border" role="presentation">
                                <button className="nav-link-tab" id="pills-type-embed-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-type-embed" type="button" role="tab"
                                    aria-controls="pills-type-embed" aria-selected="false" tabIndex="-1">Ignore</button>
                            </li>
                        </ul>
                    </div>
                </div>
    
                <div className="row mt-3">
                    <div className="col-4">
                        <div>
                            <div>Online Survey</div>
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                    <label className="form-check-label" for="inlineCheckbox1">Online</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                    <label className="form-check-label" for="inlineCheckbox2">Paper</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div>
                            <div>Paper Survey Date</div>
                            <div>08/08/2024</div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div> Done Business with Shop in the Past </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option2" />
                            <label className="form-check-label" for="inlineCheckbox3">Paper</label>
                        </div>
                    </div>
                </div>
    
                <div className="row mt-3">
                    <div className="col-4">
                        <div>
                            <div>How Long</div>
                            <div>
                                3
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div>
                            <div>Year of Months</div>
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox4" value="option1" />
                                    <label className="form-check-label" for="inlineCheckbox4">Years</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="option2" />
                                    <label className="form-check-label" for="inlineCheckbox5">Months</label>
                                </div>
                            </div>
                        </div>
                    </div>
    
                </div>
    
                <div className="row mt-3">
                    <div className="col-12">
                        <h6>IN terms of Shop selection did you</h6>
                        <div className="border-bottom"></div>
                    </div>
                </div>
    
                <div className="row mt-3">
                    <div className="col-4">
                        <div>
                            <div>Chose Insurance preferred shop</div>
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="option1" />
                                    <label className="form-check-label" for="inlineCheckbox6">Yes</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div>
                            <div>Chose your own shop</div>
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox7" value="option1" />
                                    <label className="form-check-label" for="inlineCheckbox7">Yes</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div>Preferred shop in insurance list</div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox8" value="option2" />
                            <label className="form-check-label" for="inlineCheckbox8">Yes</label>
                        </div>
                    </div>
                </div>
    
                <div className="row mt-3">
                    <div className="col-12">
                        Shop Selection Comments:
                        <textarea className="form-control" rows="5"></textarea>
                    </div>
                </div>
    
                <div className="row mt-3">
                    <div className="col-12">
                        <h6>Did anyone recommend this shop to you you</h6>
                        <div className="border-bottom"></div>
                    </div>
                </div>
    
                <div className="row mt-3">
                    <div className="col-2">
                        <div>
                            <div>Agent</div>
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="option1" /> 
                                    <label className="form-check-label" for="inlineCheckbox6">Yes</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div>
                            <div>Insurance</div>
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox7" value="option1" />
                                    <label className="form-check-label" for="inlineCheckbox7">Yes</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div>Company Dealership</div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox8" value="option2" />
                            <label className="form-check-label" for="inlineCheckbox8">Yes</label>
                        </div>
                    </div>
                    <div className="col-2">
                        <div>Friend/Family</div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox8" value="option2" />
                            <label className="form-check-label" for="inlineCheckbox8">Yes</label>
                        </div>
                    </div>
                    <div className="col-2">
                        <div>BtoB</div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox8" value="option2" />
                            <label className="form-check-label" for="inlineCheckbox8">Yes</label>
                        </div>
                    </div>
                    <div className="col-2">
                        <div>Other</div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox8" value="option2" />
                            <label className="form-check-label" for="inlineCheckbox8">Yes</label>
                        </div>
                    </div>
                </div>
    
                <div className="row mt-3">
                    <div className="col-12">
                        Please Specify:
                        <textarea className="form-control" rows="5"></textarea>
                    </div>
                </div>
    
                <div className="row mt-3">
                    <div className="col-12">
                        How many shops did you consider before you chose this shop
                        <input type="text" className="form-control" />
                    </div>
                </div>
    
                <div className="row mt-3">
                    <div className="col-12">
                        <h6>If you used the internet to research this shop, what sources did you consult:</h6>
                        <div className="border-bottom"></div>
                    </div>
                </div>
    
                <div className="row mt-3">
                    <div className="col-2">
                        <div>
                            <div>Internet Search</div>
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="option1" />
                                    <label className="form-check-label" for="inlineCheckbox6">Yes</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div>
                            <div>Shop Website</div>
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox7" value="option1" />
                                    <label className="form-check-label" for="inlineCheckbox7">Yes</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div>Estimate Tool</div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox8" value="option2" />
                            <label className="form-check-label" for="inlineCheckbox8">Yes</label>
                        </div>
                    </div>
                    <div className="col-2">
                        <div>Social Media</div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox8" value="option2" />
                            <label className="form-check-label" for="inlineCheckbox8">Yes</label>
                        </div>
                    </div>
                    <div className="col-2">
                        <div>Online Reviews</div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox8" value="option2" />
                            <label className="form-check-label" for="inlineCheckbox8">Yes</label>
                        </div>
                    </div>
                    <div className="col-2">
                        <div>Not Applicable</div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox8" value="option2" />
                            <label className="form-check-label" for="inlineCheckbox8">Yes</label>
                        </div>
                    </div>
                </div>
    
                <div className="row mt-3">
                    <div className="col-12">
                        If you Considered Online Reviews how important were they to your decision?
                        <input type="text" className="form-control" />
                    </div>
                </div>
    
                <div className="row mt-3">
                    <div className="col-12">
                        <h6>In Selecting this shop, which factors were important to you?</h6>
                        <div className="border-bottom"></div>
                    </div>
                </div>
    
                <div className="row mt-3">
                    <div className="col-2">
                        <div>
                            <div>Friendly Customer Service</div>
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="option1" />
                                    <label className="form-check-label" for="inlineCheckbox6">Yes</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div>
                            <div>Past Experience</div>
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox7" value="option1" />
                                    <label className="form-check-label" for="inlineCheckbox7">Yes</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div>Quality Workmanship</div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox8" value="option2" />
                            <label className="form-check-label" for="inlineCheckbox8">Yes</label>
                        </div>
                    </div>
                    <div className="col-2">
                        <div>Trust Honestly</div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox8" value="option2" />
                            <label className="form-check-label" for="inlineCheckbox8">Yes</label>
                        </div>
                    </div>
                    <div className="col-2">
                        <div>Shop Reputation</div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox8" value="option2" />
                            <label className="form-check-label" for="inlineCheckbox8">Yes</label>
                        </div>
                    </div>
                    <div className="col-2">
                        <div>Shop Location</div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox8" value="option2" />
                            <label className="form-check-label" for="inlineCheckbox8">Yes</label>
                        </div>
                    </div>
                </div>
    
                <div className="row mt-3">
                    <div className="col-2">
                        <div>
                            <div>Shop Warranty</div>
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="option1" />
                                    <label className="form-check-label" for="inlineCheckbox6">Yes</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div>
                            <div>Insurance Approved</div>
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox7" value="option1" />
                                    <label className="form-check-label" for="inlineCheckbox7">Yes</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div>New/Used Parts</div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox8" value="option2" />
                            <label className="form-check-label" for="inlineCheckbox8">Yes</label>
                        </div>
                    </div>
                    <div className="col-2">
                        <div>Indeopendently owned</div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox8" value="option2" />
                            <label className="form-check-label" for="inlineCheckbox8">Yes</label>
                        </div>
                    </div>
                    <div className="col-2">
                        <div>Environmentally Con</div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox8" value="option2" />
                            <label className="form-check-label" for="inlineCheckbox8">Yes</label>
                        </div>
                    </div>
                    <div className="col-2">
                        <div>Community Involvement</div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox8" value="option2" />
                            <label className="form-check-label" for="inlineCheckbox8">Yes</label>
                        </div>
                    </div>
                </div>
    
                <div className="row mt-3">
                    <div className="col-2">
                        <div>
                            <div>On Site Rental</div>
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="option1" />
                                    <label className="form-check-label" for="inlineCheckbox6">Yes</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div>
                            <div>Cost</div>
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox7" value="option1" />
                                    <label className="form-check-label" for="inlineCheckbox7">Yes</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div>length of Repair</div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox8" value="option2" />
                            <label className="form-check-label" for="inlineCheckbox8">Yes</label>
                        </div>
                    </div>
                    <div className="col-2">
                        <div>Online Repair Udates </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox8" value="option2" />
                            <label className="form-check-label" for="inlineCheckbox8">Yes</label>
                        </div>
                    </div>
                    <div className="col-2">
                        <div>TV/Radio/Bilboard</div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox8" value="option2" />
                            <label className="form-check-label" for="inlineCheckbox8">Yes</label>
                        </div>
                    </div>
                    <div className="col-2">
                        <div>Manufacturer Certified</div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox8" value="option2" />
                            <label className="form-check-label" for="inlineCheckbox8">Yes</label>
                        </div>
                    </div>
                </div>
    
                <div className="row mt-3">
                    <div className="col-12">
                        If there were any other factors considered in selecting this shop, please describe
                        <textarea className="form-control" rows="5"></textarea>
                    </div>
                </div>
    
                <div className="row mt-3">
                    <div className="col-12">
                        <h6>Satisfaction Performance Details</h6>
                        <div className="border-bottom"></div>
                    </div>
                </div>
    
                <div className="row mt-3">
                    <div className="col-4">
                        <div>
                            <div>Expectations Set</div>
                            <div>
                                3
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div>
                            <div>Shop Provide an completion Date?</div>
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox7" value="option1" />
                                    <label className="form-check-label" for="inlineCheckbox7">Yes</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox8" value="option1" />
                                    <label className="form-check-label" for="inlineCheckbox8">No</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div>
                            <div>If yes was the date met</div>
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox7" value="option1" />
                                    <label className="form-check-label" for="inlineCheckbox7">Yes</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox8" value="option1" />
                                    <label className="form-check-label" for="inlineCheckbox8">No</label>
                                </div>
                            </div>
                        </div>
                    </div>
    
                </div>
    
                <div className="row mt-3">
                    <div className="col-12">
                        Completion Date Comments:
                        <textarea className="form-control" rows="5"></textarea>
                    </div>
                </div>
    
                <div className="row mt-3">
                    <div className="col-4">
                        <div>
                            <div>Rate overall treatment</div>
                            <div>
                                3
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div>
                            <div>Rate Shop Commnication</div>
                            <div>
                                3
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div>
                            <div>Reviewed completed repair</div>
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox7" value="option1" />
                                    <label className="form-check-label" for="inlineCheckbox7">Yes</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox8" value="option1" />
                                    <label className="form-check-label" for="inlineCheckbox8">No</label>
                                </div>
                            </div>
                        </div>
                    </div>
    
                </div>
    
                <div className="row mt-3">
                    <div className="col-12">
                        <h6>Unresolved Issues</h6>
                        <div className="border-bottom"></div>
                    </div>
                </div>
    
                <div className="row mt-3">
                    <div className="col-12">
                        <div>
                            <div>Are there still any pending issues with that require additional Service</div>
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox7" value="option1" />
                                    <label className="form-check-label" for="inlineCheckbox7">Yes</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox8" value="option1" />
                                    <label className="form-check-label" for="inlineCheckbox8">No</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="row mt-3">
                    <div className="col-12">
                        Unresolved Issue Notes
                        <textarea className="form-control" rows="5"></textarea>
                    </div>
                </div>
    
                <div className="row mt-3">
                    <div className="col-12">
                        <h6>Title: TBD</h6>
                        <div className="border-bottom"></div>
                    </div>
                </div>
    
                <div className="row mt-3">
                    <div className="col-6">
                        What would be the best way for this shop to improve
                        <textarea className="form-control" rows="5"></textarea>
                    </div>
                    <div className="col-6">
                        How likely to refer comments
                        <textarea className="form-control" rows="5"></textarea>
                    </div>
                </div>
    
                <div className="row mt-3">
                    <div className="col-12">
                        <div>
                            <div>Baed on this experience how likely are you to refer friend or a family member</div>
                            <div>
                                3
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="row mt-3">
                    <div className="col-12">
                        <h6>Age Group</h6>
                        <div className="border-bottom"></div>
                    </div>
                </div>
    
                <div className="row mt-3">
                    <div className="col-3">
                        <div>
                            <div>16 to 25</div>
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox7" value="option1" />
                                    <label className="form-check-label" for="inlineCheckbox7">Yes</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <div>26 to 40</div>
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox7" value="option1" />
                                    <label className="form-check-label" for="inlineCheckbox7">Yes</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div>
                            <div>41 to 60</div>
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox7" value="option1" />
                                    <label className="form-check-label" for="inlineCheckbox7">Yes</label>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-3">
                        <div>
                            <div>61 & Up</div>
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox7" value="option1" />
                                    <label className="form-check-label" for="inlineCheckbox7">Yes</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="row mt-3">
                    <div className="col-12">
                        <h6>Claim Experience</h6>
                        <div className="border-bottom"></div>
                    </div>
                </div>
    
                <div className="row mt-3">
                    <div className="col-6">
                        Rate your satisfaction with the rental car company
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-6">
                        Rate insurance agent performance
                        <input type="text" className="form-control" />
                    </div>
                </div>
    
                <div className="row mt-3">
                    <div className="col-12">
                        <h6>Rental Experience</h6>
                        <div className="border-bottom"></div>
                    </div>
                </div>
    
                <div className="row mt-3">
                    <div className="col-6">
                        Rate Your Satisfaction with the rental car company
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-3">
                        Rental Co
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-3">
                        Rental Other
                        <input type="text" className="form-control" />
                    </div>
                </div>
    
                <div className="row mt-3">
                    <div className="col-4">
                        Rental Comments
                        <textarea className="form-control" rows="5"></textarea>
                    </div>
                    <div className="col-4">
                        General Comments
                        <textarea className="form-control" rows="5"></textarea>
                    </div>
                    <div className="col-4">
                        ACRB Comments
                        <textarea className="form-control" rows="5"></textarea>
                    </div>
                </div>
    
                <div className="row mt-3">
                    <div className="col-12">
                        <h6>Additional Questions</h6>
                        <div className="border-bottom"></div>
                    </div>
                </div>
    
                <div className="row mt-3">
                    <div className="col-6">
                        Trust Recommending
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-6">
                        Experience Feel
                        <input type="text" className="form-control" />
                    </div>
                </div>
    
            </div>
    
            <div className="container mt-4">
                <div className="row">
                    <div className="text-center">
                        <button type="submit" className="btn sub-btn">UPDATE</button>
                    </div>
                </div>
            </div>
    
        </div>
    </div>
    );
    }
    export default Unresolved_issue