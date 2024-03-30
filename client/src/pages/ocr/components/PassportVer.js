import React, { useEffect, useState } from "react";
import * as OcrServices from "../../Services/OcrServices";
import Texttospeech from "../../../../src/assets/scss/TextToSpeech.module.scss";
import Loader from "../../../shared/Loader";

export default function PassportVer() {
  // Define Varibles Here

  const [passportForm, setForm] = useState({
    id_number: "",
    dob: "",
  });
  const [errors, setErrors] = useState({});
  const [submitForm, setIsSubmit] = useState(false);
  const [outputJson, setJsonOuput] = useState([]);
  const [isLoader, setLoader] = useState(false);

  function validateForm() {
    const newErrors = {};
    if (!passportForm.id_number) {
      newErrors.id_number = "Passport File Number required.";
    }
    if (!passportForm.dob) {
      newErrors.dob = "Birth date required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...passportForm, [name]: value });
  };

  const [isShow, setShowHide] = useState(true);

  function submit(event) {
    setIsSubmit(true);
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    setLoader(true);
    const params = {
      task_id: "74f4c926-250c-43ca-9c53-453e87ceacd1",
      group_id: "8e16424a-58fc-4ba4-ab20-5bc8e7c3c41e",
      data: {
        passport_file_number: passportForm.id_number,
        date_of_birth: passportForm.dob,
      },
    };

    OcrServices.getPassportVarifiedData(params).then((res) => {
        console.log(res);
        // setJsonOuput(res);
      setTimeout(() => {
        getPanDetails(res.request_id);
      }, 4000);
    });
  }

  const getPanDetails = (reqId) => {
    OcrServices.getPanDetails(reqId).then((res) => {
      if(res[0].status == "in_progress"){
        setTimeout(() => {
          getPanDetails(reqId);
        }, 3000);
        
      }else{
        setJsonOuput(res);
      }
      setLoader(false);
    });
  };

  const runSamples = () => {
    setForm({
      id_number: "DL1069017456015",
      dob: "1986-06-10",
    });
    return;
  };

  //Functions Responsible For Text To Speech Conversion
  const runAnalyzer = () => {};

  async function startAnalyzingDoc(img) {}

  return (
    <>
      <div className={`container-fluid ${Texttospeech["text-wrapper"]}`}>
        {/* <!-- Page Heading --> */}
        <div className="mb-2">
          <div className="d-flex align-items-center w-100">
            <h1
              className={`${Texttospeech["heading"]} mr-auto text-gray  font-weight-thick`}
            >
             Passport Verification
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
            </div> */}

            <p
              className={`mb-0 px-3 py-2 pt-3 pb-3 ${Texttospeech["summary"]} font-weight-thick text-gray`}
            >
              Instant Passport Verification using government database check. IDfy’s Passport Verification API instantly verifies details of a Passport by confirming them from the Government database.
            </p>
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
                        <div className="card-header bg-white d-flex align-items-center w-100">
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
                                Passport File Number*
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
                                </label>
                                <input
                                  value={passportForm.id_number}
                                  onChange={(e) => handleFormChange(e)}
                                  type="text"
                                  className={`form-control text-gray ${Texttospeech["form-input"]}`}
                                  id="exampleFormControlInput1"
                                  placeholder="IUYTRETYUI"
                                  name="id_number"
                                />
                                {submitForm ? (
                                  <>
                                    {errors.id_number && (
                                      <small className="text-danger">
                                        {errors.id_number}
                                      </small>
                                    )}
                                  </>
                                ) : (
                                  <></>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="d-flex align-items-center mb-3">
                            <div className={`${Texttospeech["flex-styles"]}`}>
                              <p
                                className={`mb-0 text-gray font-weight-thick ${Texttospeech["name"]}`}
                              >
                                Birth Date*
                              </p>
                            </div>
                            <div
                              className={`d-flex align-items-center ${Texttospeech["flex_styles"]}`}
                            >
                              <div class="">
                                {/* <label
                                  for="exampleFormControlInput1"
                                  className={`form-label mb-1 text-gray ${Texttospeech["form-label"]}`}
                                >
                               
                                </label> */}
                                <input
                                  type="date"
                                  name="dob"
                                  value={passportForm.dob}
                                  onChange={(e) => handleFormChange(e)}
                                  className={`form-control text-gray ${Texttospeech["form-input"]}`}
                                  id="exampleFormControlInput1"
                                />
                                   {submitForm ? (
                                  <>
                                    {errors.dob && (
                                      <small className="text-danger">
                                        {errors.dob}
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
                              // onClick={(e) => submit(e)}
                              type="submit"
                            >
                              Run API
                            </button>
                          </div>
                          <h5 className='form-label text-dark pt-2 pb-3 text-underline'>Samples</h5>
                          <div>
                              <button type="button" className="btn btn-outline-primary" onClick={runSamples}>Run Samples</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-6 pl-0">
                    {isLoader ? (
                      <Loader />

                    ) : ('')
                    }
                    <div className="card border-0 rounded-0 h-100">
                      <div className="card-header bg-white">
                        <h5
                          className={`text-gray font-weight-thick mr-auto mb-0 ${Texttospeech["parameter"]}`}
                        >
                          RESPONSES
                        </h5>
                      </div>
                      <div
                        className={`card-body p-3 ${Texttospeech["bck-clr"]}`}
                      >
                        {/* <div
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
                        </div> */}
                        {/* <div
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
                        </div> */}
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
                              JSON
                            </a>
                          </li>
                          {/* <li className="nav-item" role="presentation">
                            <a
                              className="nav-link"
                              id="json-tab"
                              data-toggle="tab"
                              href="#json"
                              role="tab"
                              aria-controls="json"
                              aria-selected="false"
                            >
                              Schema
                            </a>
                          </li> */}
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
                              Tabular
                            </a>
                          </li>
                        </ul>
                        <div className="d-flex">
                          <div
                            className={`tab-content h-100 ${Texttospeech["tab"]}`}
                            id="myTabContent"
                          >
                            <div
                              className="tab-pane fade show active h-100 p-3"
                              id="table"
                              role="tabpanel"
                              aria-labelledby="table-tab"
                            >
                              {isShow ? (
                                <table className="table tbale-dark">
                                  <thead>
                                    <th>Label</th>
                                    <th>Value</th>
                                  </thead>
                                  <tbody>
                                  {outputJson && outputJson[0]?.result && outputJson[0]?.result.source_output ? (
                                Object.entries(outputJson[0]?.result.source_output).map(([key, value]) => (
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
                                className="form-control" rows={10}
                                value={JSON.stringify(outputJson[0])}
                              ></textarea>
                            </div>
                          </div>
                        </div>

                        {/* <div
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
                        </div> */}

                        {/* <div
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
                        </div> */}
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
