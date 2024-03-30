import React, { useEffect, useState } from "react";
import * as OcrServices from "../../Services/OcrServices";
import Texttospeech from "../../../../src/assets/scss/TextToSpeech.module.scss";
import { ToastContainer } from "react-toastify";
import * as Notification from "../../../Utils/Notification";

export default function FssaiVerification() {
  const [panForm, setForm] = useState({
    registration_no: "",
  });
  const [errors, setErrors] = useState({});
  const [submitForm, setIsSubmit] = useState(false);
  const [outputJson, setJsonOuput] = useState([]);
  const [outputJsonRaw, setJsonOuputRaw] = useState([]);

  function validateForm() {
    const newErrors = {};
    if (!panForm.registration_no) {
      newErrors.registration_no = "Fssai no is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...panForm, [name]: value });
  };

  const runSamples = () => {
    panForm.registration_no = '10012021000071';
    // console.log(panForm.gstin)
    setForm({ ...panForm, name: '07AAJPK0695C1ZT'});
  }


  const [isShow, setShowHide] = useState(true);

  function submit(event) {
    setIsSubmit(true);
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    const params = {
      task_id: "74f4c926-250c-43ca-9c53-453e87ceacd1",
      group_id: "8e16424a-58fc-4ba4-ab20-5bc8e7c3c41e",
      data: {
        registration_no: panForm.registration_no,
      },
    };

    OcrServices.postFssaiNoDetails(params).then(
      (res) => {
        console.log(res);
        setTimeout(() => {
          getPanDetails(res.request_id);
        }, 3000);
      },
      (errors) => {
        console.log(errors.response.status);
        if (errors.response.status == 422) {
          Notification.notifyError(errors);
          alert("Error");
        }
      }
    );
  }

  const getPanDetails = (reqId) => {
    OcrServices.getPanDetails(reqId).then((res) => {
      console.log(res);
      setJsonOuputRaw(res);
      if (res[0].result.source_output) {
        setJsonOuput(res[0].result.source_output);
      }
    });
  };

  //Functions Responsible For Text To Speech Conversion
  const runAnalyzer = () => {};

  async function startAnalyzingDoc(img) {}

  return (
    <>
      <ToastContainer />

      <div className={`container-fluid ${Texttospeech["text-wrapper"]}`}>
        {/* <!-- Page Heading --> */}
        <div className="mb-2">
          <div className="d-flex align-items-center w-100">
            <h1
              className={`${Texttospeech["heading"]} mr-auto text-gray  font-weight-thick`}
            >
              Fssai Verification
            </h1>
            <button className={`btn ${Texttospeech["credits-btn"]}`}>
              Credits to be use 0
            </button>
          </div>
        </div>
        <div className="card border-0 bg-light">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link font-weight-thick active"
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
                className={`nav-link text-gray ${Texttospeech["not-selected"]}`}
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

          <div className={`${Texttospeech["bdr"]}`}>
            {/* <div className="d-flex align-items-center px-3 py-2">
              <button className={`btn mr-2 ${Texttospeech["get-api"]}`}>
                GET
              </button>
              <p
                className={`mb-0 text-gray font-weight-thick ${Texttospeech["api"]}`}
              >
                /find/findByTags
              </p>
            </div>

            <p
              className={`mb-0 px-3 py-2 ${Texttospeech["summary"]} font-weight-thick text-gray`}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores accusantium cupiditate autem laboriosam impedit earum,
              deleniti temporibus officia voluptate in, sunt eveniet sed dolorem
              quae non, harum rerum quibusdam eaque.
            </p> */}
            <div
              className={`tab-content ${Texttospeech["hght"]}`}
              id="myTabContent"
            >
              <div
                className="tab-pane fade show active h-100"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row h-100">
                  <div className={`col-md-6 pr-0 ${Texttospeech["bdr-btw"]}`}>
                    <form onSubmit={submit}>
                      <div className="card border-0 rounded-0">
                        <div className="card-header mb-3 bg-white d-flex align-items-center w-100">
                          <h5
                            className={`text-gray font-weight-thick mr-auto mb-0 ${Texttospeech["parameter"]}`}
                          >
                            PARAMETERS
                          </h5>
                          {/* <button
                            className={`btn font-weight-thick ${Texttospeech["default-btn"]}`}
                          >
                            Default Value
                          </button> */}
                        </div>
                        <div
                          className={`card-body p-3 ${Texttospeech["bck-clr"]}`}
                        >
                          <div
                            className={`d-flex align-items-center ${Texttospeech["bdr-btm"]} `}
                          >
                            <p
                              className={`mb-3 text-gray font-weight-thick ${Texttospeech["name"]}`}
                            >
                              Name
                            </p>
                            <p
                              className={`mb-2 text-gray font-weight-thick ${Texttospeech["desc"]}`}
                            >
                              Description
                            </p>
                          </div>

                          <div className="d-flex align-items-center mb-3">
                            <div className={`${Texttospeech["flex-styles"]}`}>
                              <p
                                className={`mb-0 text-gray font-weight-thick ${Texttospeech["name"]}`}
                              >
                                Enter Fssai registration number for verification
                              </p>
                              <p
                                className={`mb-0 text-gray ${Texttospeech["interger"]}`}
                              >
                                Integer
                              </p>
                              <p
                                className={`mb-0 text-gray ${Texttospeech["path"]}`}
                              >
                                (Path)
                              </p>
                            </div>
                            <div
                              className={`d-flex align-items-center ${Texttospeech["flex_styles"]}`}
                            >
                              <div class="">
                                <label
                                  for="exampleFormControlInput1"
                                  className={`form-label mb-1 text-gray ${Texttospeech["form-label"]}`}
                                >
                                  ID Number that needs to be updated
                                </label>
                                <input
                                  value={panForm.registration_no}
                                  onChange={(e) => handleFormChange(e)}
                                  type="text"
                                  className={`form-control text-gray ${Texttospeech["form-input"]}`}
                                  id="exampleFormControlInput1"
                                  placeholder="IUYTRETYUI"
                                  name="registration_no"
                                />
                                {submitForm ? (
                                  <>
                                    {errors.registration_no && (
                                      <small className="text-danger">
                                        {errors.registration_no}
                                      </small>
                                    )}
                                  </>
                                ) : (
                                  <></>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className={`${Texttospeech["direction"]}`}>
                            <button
                              className={`btn ${Texttospeech["api-btn"]}`}
                              type="submit"
                            >
                              Run API
                            </button>
                          </div>
                          
                          <h5 className='form-label text-dark pt-4 text-underline'>Samples</h5>

                            <div className='row'>

                            <div className='col-4 my-3'>
                              <button type="button" className="btn btn-outline-primary" onClick={runSamples}>Run Samples</button>
                              </div>

                            </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-6 pl-0">
                    <div className="card border-0 rounded-0 h-100">
                      <div className="card-header bg-white mb-3">
                        <h5
                          className={`text-gray font-weight-thick mr-auto mb-0 ${Texttospeech["parameter"]}`}
                        >
                          RESPONSES
                        </h5>
                      </div>
                      <div
                        className={`card-body p-3 ${Texttospeech["bck-clr"]}`}
                      >
                        <div
                          className={`d-flex align-items-center ${Texttospeech["bdr-btm"]} `}
                        >
                          <p
                            className={`mb-3 text-gray font-weight-thick ${Texttospeech["name"]}`}
                          >
                            Code
                          </p>
                          <p
                            className={`mb-2 text-gray font-weight-thick ${Texttospeech["desc"]}`}
                          >
                            Description
                          </p>
                        </div>
                        <div
                          className={`mt-3 d-flex align-items-center ${Texttospeech[""]} `}
                        >
                          <p
                            className={`mb-3 text-gray font-weight-thick ${Texttospeech["name"]}`}
                          >
                            200
                          </p>
                          <p
                            className={`mb-2 text-gray font-weight-thick ${Texttospeech["desc"]}`}
                          >
                            Successful Operation
                          </p>
                        </div>
                        <ul
                          className={`nav nav-tabs mb-2 ${Texttospeech["ul-elements"]}`}
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
                              Tabular
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
                              JSON
                            </a>
                          </li>
                        </ul>
                        <div className="d-flex">
                          <div
                            className={`tab-content h-60vh ${Texttospeech["tab"]}`}
                            id="myTabContent"
                          >
                            <div
                              className="tab-pane fade show active overflow-scroll h-75 p-3"
                              id="table"
                              role="tabpanel"
                              aria-labelledby="table-tab"
                            >
                              {outputJson != "" ? (
                                <table className="table">
                                  <thead>
                                    <th>Label</th>
                                    <th>Value</th>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Company Name</td>
                                      <td>
                                        {
                                          outputJson.company_details
                                            .company_name
                                        }
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>License Number</td>
                                      <td>
                                        {outputJson.company_details.license_no}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Address</td>
                                      <td>
                                        {
                                          outputJson.company_details
                                            .premise_address
                                        }
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Status</td>
                                      <td>{outputJson.status}</td>
                                    </tr>
                                    <tr>
                                      <td>License Type</td>
                                      <td>
                                        {
                                          outputJson.company_details
                                            .license_type
                                        }
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Products</td>
                                      <td>{outputJson.products}</td>
                                    </tr>
                                    <tr>
                                      <td>State</td>
                                      <td>
                                        {outputJson.company_details.state}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Validity</td>
                                      <td>
                                        {outputJson.company_details.validity}
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              ) : (
                                <p>Waiting For Response.</p>
                              )}
                            </div>
                            <div
                              className="tab-pane fade h-100"
                              id="json"
                              role="tabpanel"
                              aria-labelledby="json-tab"
                            >
                              <textarea
                                className="form-control w-100 h-100"
                                value={JSON.stringify(outputJsonRaw)}
                              ></textarea>
                            </div>
                          </div>
                        </div>

                        <div
                          className={`mt-3 d-flex align-items-center ${Texttospeech[""]} `}
                        >
                          <p
                            className={`mb-3 text-gray font-weight-thick ${Texttospeech["name"]}`}
                          >
                            400
                          </p>
                          <p
                            className={`mb-2 text-gray font-weight-thick ${Texttospeech["desc"]}`}
                          >
                            Invalid ID Supplied
                          </p>
                        </div>

                        <div
                          className={`mt-3 d-flex align-items-center ${Texttospeech[""]} `}
                        >
                          <p
                            className={`mb-3 text-gray font-weight-thick ${Texttospeech["name"]}`}
                          >
                            400
                          </p>
                          <p
                            className={`mb-2 text-gray font-weight-thick ${Texttospeech["desc"]}`}
                          >
                            Pet not found
                          </p>
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
      </div>
    </>
  );
}
