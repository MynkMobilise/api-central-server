import React, { useEffect, useState } from "react";
import DocOutput from "../DocOutput.js";
import * as OcrServices from "../../Services/OcrServices";

export const AadhaarTemp = () => {
    const pageTitle = "Aadhaar Tempering";

    const [idCardArr, setIdCardArr] = useState([]);
    const [jsonArr, setJsonArr] = useState([]);
    const [outputJson, setJsonOuput] = useState([]);
  
    const [base64String, setBase64String] = useState("");
    const handleImage = (event) => {
      const file = event.target.files[0];
  
      if (file) {
        const reader = new FileReader();
  
        reader.onloadend = () => {
          const base64String = reader.result.split(",")[1];;
          setBase64String(base64String);
        };
  
        reader.readAsDataURL(file);
      }
    };
    const [isShow, setShowHide] = useState(true);
    const [ocrInfo, setOcrMoreInfo] = useState(
      "Eliminate fraudulent onboarding at source by ensuring that the Identity Card image provided to you is not a tampered card. Generic tampering API allows you to be confident that the Identity Card supplied to you hasn’t been built using a fake ID card generator app, doesn't have a passport photo pasted on it, and has all the expected color schemes that a standard Identity Card is expected to have."
    );
  
    // const getPanImgDetails = (reqId) => {
    //   OcrServices.getPanDetails(reqId).then((res) => {
    //     console.log(res);
    //     setJsonOuput(res);
    //   });
    // };
  
    //Functions Responsible For Text To Speech Conversion
    const runAnalyzer = () => {
      const params = {
        task_id: "74f4c926-250c-43ca-9c53-453e87ceacd1",
        group_id: "8e16424a-58fc-4ba4-ab20-5bc8e7c3c41e",
        data: {
          document1: base64String,
        },
      };
      OcrServices.getAadhaarTempering(params).then((res) => {
        console.log(res);
        setJsonOuput(res);
        // console.log(outputJson.result.details);
        console.log(outputJson.result.is_tampered);
        console.log(outputJson.result.confidence_score);
        
        // setTimeout(() => {
        //   getPanImgDetails(res.request_id);
        // }, 3000);
      });
    };
  
    return (
      <>
        {/* <!-- Begin Page Content --> */}
        <div className="container-fluid">
          {/* <!-- Page Heading --> */}
          <div className="row mb-2">
            <div className="col-md-9">
              <h1 className="text-dark font-weight-bold">{pageTitle}</h1>
            </div>
          </div>
          <div className="card border-0 bg-light">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Builder
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Documentation
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active h-100"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row">
                  <div className="col-md-6 pr-1">
                    <div className="card border-0 rounded-0">
                      <div className="card-header bg-white">
                        <h5 className="text-primary font-weight-normal mb-0">
                          Parameters
                        </h5>
                      </div>
                      <div className="card-body p-3 h-60vh">
                        <div className="form-group h-50 mb-0">
                          <label className="form-label text-dark mb-2">
                            Front
                          </label>
                          <div className="card text-center w-25 p-2">
                            <div className="file file--disabled">
                              <label
                                htmlFor="input-file"
                                className="border-dotted mb-0 w-100"
                              >
                                {base64String == "" ? (
                                  <i className="fas fa-file display-1"></i>
                                ) : (
                                  <img
                                    className="img-fluid"
                                    src={`data:image/png;base64,${base64String}`}
                                  ></img>
                                )}
                                <p>
                                  <small>Upload File</small>
                                </p>
                              </label>
                              <input
                                id="input-file"
                                onChange={handleImage}
                                type="file"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 text-right p-0">
                          <button
                            className="btn btn-primary"
                            onClick={runAnalyzer}
                          >
                            {" "}
                            <i className="fas fa-barcode"></i> Run Analyze
                          </button>
                          {/* <button className="btn btn-success ml-3"> <i className="fas fa-speaker"></i> Stop Audio</button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/* <DocOutput moreInfo={ocrInfo} jsonOutput={outputJson} /> */}
  
                    <div className="card border-0 rounded-0 h-100">
                      <div className="card-header bg-white">
                        <h5 className="text-primary font-weight-normal mb-0">
                          Responses
                        </h5>
                      </div>
                      <div className="card-body">
                        <ul
                          className="nav nav-tabs mb-2"
                          id="myTab"
                          role="tablist"
                        >
                          <li className="nav-item" role="presentation">
                            <a
                              className="nav-link active"
                              id="table-tab"
                              data-toggle="tab"
                              href="#table"
                              role="tab"
                              aria-controls="table"
                              aria-selected="true"
                            >
                              Table
                            </a>
                          </li>
                          <li className="nav-item" role="presentation">
                            <a
                              className="nav-link"
                              id="json-tab"
                              data-toggle="tab"
                              href="#json"
                              role="tab"
                              aria-controls="json"
                              aria-selected="false"
                            >
                              Json
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content h-60vh" id="myTabContent">
                          <div
                            className="tab-pane overflow-scroll h-75 fade show active p-3"
                            id="table"
                            role="tabpanel"
                            aria-labelledby="table-tab"
                          >
                            <table className="table text-dark">
                              <tbody>
                                <tr>
                                  <td>is_tampered</td>
                                  <td>{outputJson?.result.is_tampered == true ? "True" : "False"}</td>
                                  </tr>
                                  <tr>
                                    <td>confidence_score</td>
                                  <td>{outputJson?.result.confidence_score}</td>
                                </tr>
                              {outputJson && outputJson?.result && outputJson?.result.details ? (
                                Object.entries(outputJson?.result.details).map(([key, value]) => (
                                    <tr key={key}>
                                    <td>{key}</td>
                                    <td>{value}</td>
                                    </tr>
                                ))
                                
                                ) : (
                                <p>No data available</p>
                            )}
                              </tbody>
                            </table>
                          </div>
                          <div
                            className="tab-pane fade h-100"
                            id="json"
                            role="tabpanel"
                            aria-labelledby="json-tab"
                          >
                            <textarea
                              className="text-dark form-control w-100 h-100"
                              value={JSON.stringify(outputJson)}
                            ></textarea>
                          </div>
                        </div>
                          <div>
                            <h2>More about this API</h2>
                            {ocrInfo}
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade h-100"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              ></div>
            </div>
          </div>
        </div>
        {/* <!-- /.container-fluid --> */}
      </>
    );
  }

