import React, { useEffect, useState } from "react";
import * as OcrServices from "../../Services/OcrServices";
import Texttospeech from "../../../../src/assets/scss/TextToSpeech.module.scss";
import Loader from "../../../shared/Loader";

export const VoterIdVerification = () => {
    // Define Varibles Here

    const [panForm, setForm] = useState({
        id_number: "",
    });
    const [errors, setErrors] = useState({});
    const [submitForm, setIsSubmit] = useState(false);
    const [outputJson, setJsonOuput] = useState([]);
    const [isLoader, setLoader] = useState(false);

    function validateForm() {
        const newErrors = {};
        if (!panForm.id_number) {
            newErrors.id_number = "Voter Id no is required.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...panForm, [name]: value });
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
                id_number: panForm.id_number,
            },
        };

        //test card //XYN0037192
        OcrServices.postVoterIdDetail(params).then((res) => {
            setTimeout(() => {
                getVoterIdDetails(res.request_id);
            }, 4000);
        });
    }

    const getVoterIdDetails = (reqId) => {
        OcrServices.getPanDetails(reqId).then((res) => {
            console.log(res);
            setJsonOuput(res);
            setLoader(false);
        });
    };

    const runSamples = () => {
        setForm({
            id_number: "XYN0037192",
        });
        return;
      };
    return (
        <>
            <div className={`container-fluid ${Texttospeech["text-wrapper"]}`}>
                {/* <!-- Page Heading --> */}
                <div className="mb-2">
                    <div className="d-flex align-items-center w-100">
                        <h1
                            className={`${Texttospeech["heading"]} mr-auto text-gray  font-weight-thick`}
                        >
                            Voter Id Verification
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

                        <p
                            className={`mb-0 px-3 py-2 pt-3 pb-3 ${Texttospeech["summary"]} font-weight-thick text-gray`}
                        >
                            With the Voter Card Verification API, you can now onboard with confidence knowing that the individuals you onboard are holding a valid Voter Card issued by the Government of India, are eligible to vote, and have provided you with reliable identity and address proofs. Couple it with our Voter Card OCR API to make your identity verification process seamless and instant!
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
                                                    {/* <div
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
                                                    </div> */}

                                                    <div className="d-flex align-items-center mb-3">
                                                        <div className={`${Texttospeech["flex-styles"]}`}>
                                                            <p
                                                                className={`mb-0 text-gray font-weight-thick ${Texttospeech["name"]}`}
                                                            >
                                                                ID Number
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
                                                                    value={panForm.id_number}
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
                                                                <table className="table">
                                                                    <thead>
                                                                        <th>Label</th>
                                                                        <th>Value</th>
                                                                    </thead>
                                                                    <tbody>
                                                                        {Object.entries(outputJson[0]?.result?.source_output || {}).map(([key, value]) => (
                                                                            <tr key={key}>
                                                                                <td>{key}</td>
                                                                                <td>{value}</td>
                                                                            </tr>
                                                                        ))}
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
    )
}