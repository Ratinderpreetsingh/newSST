import React from 'react'

const Im_Ex_Customer = () => {
    return (
        <div class="content-container">
            <div class="bg-white py-3">
                <div class="container">
                    <div class="d-flex justify-content-between align-items-center">
                        <h5>Import Export</h5>
                        <div>
                            <button type="button" class="btn sub-btn">Go To Cusotemr Page</button>
                        </div>
                    </div>
                </div>
                <div class="container mt-3">
                    <div class="row ">
                        <div class="col-12 d-flex justify-content-center">
                            <div class="import-box text-center ">
                                <div class="p-3">
                                    <h6 class="m-0">Import Customer's CSV file</h6></div>
                                <div class="border-bottom"></div>
                                <div class="import-box-rounded">
                                    <div class="import-dropzone-desc">

                                        <button type="button" class="btn sub-btn">Select CSV file</button>
                                        <p>or Drag and Drop Here</p>
                                        <input type="file" name="img_logo" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-12 d-flex justify-content-center">
                            <div class="import-box text-center ">
                                <div class="p-3">
                                    <h6 class="m-0">Export Customer's CSV file</h6></div>
                                <div class="border-bottom"></div>
                                <div class="import-box-rounded">
                                    <div class="import-dropzone-desc">
                                        <div>
                                            <i class="bi bi-file-earmark fs-1"></i>
                                        </div>
                                        <button type="button" class="btn sub-btn">Export Customer's CSV </button>
                                        <input type="file" name="img_logo" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>








        </div>
    )
}

export default Im_Ex_Customer