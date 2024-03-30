import React from "react";
import { Link } from "react-router-dom";

export default function generalApi() {
  return (
    <>
      {/* <!-- Begin Page Content --> */}
      <div className="container-fluid">
        {/* <!-- Page Heading --> */}
        <div className="row mb-2">
          <div className="col-md-9">
          <select className="bg-light px-0 text-primary font-weight-bold border-0 h3 w-50">
              <option>Pan Verification API</option>
              <option>Aadhaar Verification</option>
              <option>Licence Verification</option>
            </select>
          {/* <div class="dropdown">
            <button class=" text-primary p-0 dropdown-toggle border-0 bg-light text-left h3" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Pan Verification API
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{width:'35%'}}>
              <a class="dropdown-item h6 px-1" href="#">Pan Verification API</a>
              <a class="dropdown-item h6 px-1" href="#">Pan Verification API</a>
              <a class="dropdown-item h6 px-1" href="#">Pan Verification API</a>
            </div>
          </div> */}
          </div>
          <div className="col-md-3 col-6 ml-auto">
            <select className="form-control form-control-sm">
              <option>Pan Verification</option>
              <option>Aadhaar Verification</option>
              <option>Licence Verification</option>
            </select>
          </div>
        </div>
        <div className="card bg-light">
          <div className="row">
            <div className="col-md-2 pr-1">
                <div className="form-group mb-2">
                    <div className='card text-center w-100 p-2'>
                        <div className='file file--disabled'>
                            <label htmlFor='input-file' className='border-dotted mb-0 w-100'>
                            <i className="fas fa-image display-1"></i>
                            <p>
                            <small>
                            Upload File
                            </small>
                            </p>
                            </label>
                            <input id='input-file' type='file' />
                        </div>
                    </div>
                </div>
                <div className="card p-2 bg-secondary card-50vh d-lg-block d-md-block d-none">
                  <div className="row">
                    <div className="col-12 mb-2">
                      <img className="img-fluid" src="https://aadhaarcard.co.in/wp-content/uploads/2023/04/sample-aadhaar-card-800x445.png" />
                    </div>
                    <div className="col-12 mb-2">
                      <img className="img-fluid" src="https://aadhaarcard.co.in/wp-content/uploads/2023/04/sample-aadhaar-card-800x445.png" />
                    </div>
                    <div className="col-12 mb-2">
                      <img className="img-fluid" src="https://aadhaarcard.co.in/wp-content/uploads/2023/04/sample-aadhaar-card-800x445.png" />
                    </div>
                    <div className="col-12 mb-2">
                      <img className="img-fluid" src="https://aadhaarcard.co.in/wp-content/uploads/2023/04/sample-aadhaar-card-800x445.png" />
                    </div>
                    <div className="col-12 mb-2">
                      <img className="img-fluid" src="https://aadhaarcard.co.in/wp-content/uploads/2023/04/sample-aadhaar-card-800x445.png" />
                    </div>
                  </div>
                </div>
            </div>
            <div className="col-md-7 px-1">
              <div className="card h-100 p-2">
                <div className="row">
                  <div className="col-12 mb-2">
                    <Link className="btn btn-primary btn-sm"> <i className="fas fa-barcode"></i> Run Analyze</Link>
                  </div>
                  <div className="col-12">
                    <div className="card p-3 bg-secondary rounded-0" style={{height:'70vh'}}>
                      <img className="img-fluid" src="https://aadhaarcard.co.in/wp-content/uploads/2023/04/sample-aadhaar-card-800x445.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 pl-1">
              <div className="card p-1 card-100vh">
              <ul className="nav nav-tabs mb-2" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Table</a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Json</a>
                </li>
              </ul>
              <div className="tab-content h-100" id="myTabContent">
                <div className="tab-pane fade show active h-100" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <textarea className="form-control w-100 h-100">

                  </textarea>
                </div>
                <div className="tab-pane fade h-100" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <textarea className="form-control w-100 h-100">

                  </textarea>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      {/* <!-- /.container-fluid --> */}
    </>
  );
}
