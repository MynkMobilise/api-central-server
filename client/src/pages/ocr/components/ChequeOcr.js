import React, { useEffect, useState } from "react";
import DocOutput from "../DocOutput.js";
import * as OcrServices from "../../Services/OcrServices";
import Texttospeech from "../../../assets/scss/TextToSpeech.module.scss";
import Loader from "../../../shared/Loader";
import panImage from './chequeOcr/cheque.webp';

export default function ChequeOcr(){
    const pageTitle = "Cheque OCR";
    const [base64String, setBase64String] = useState("");
    const [idCardArr, setIdCardArr] = useState([]);
    const [outputJson, setJsonOuput] = useState([]);

    const handleImage = (event) => {
        const file = event.target.files[0];
    
        if (file) {
          const reader = new FileReader();
    
          reader.onloadend = () => {
            const base64String = reader.result.split(",")[1];
            setBase64String(base64String);
          };
    
          reader.readAsDataURL(file);
        }
      };

    const [ocrInfo, setOcrMoreInfo] = useState(
        "Typing in bank details like the account number and IFSC is slow and cumbersome. Enable your customers to pre-fill their onboarding forms by letting them upload or scan a cheque Cheque OCR API will digitize the document for you instantly! When paired with Bank account verification API, you can make your onboarding journey seamless and instant, by onboarding customers using just their cancelled cheque will handle both digitization and verification of account details via a penny drop!"
    );

    const [isLoader, setLoader] = useState(false);


    //Functions Responsible For Text To Speech Conversion
  const runAnalyzer = () => {
    if(base64String == ""){
      alert("Please add Image");
      setLoader(false);
      return;
    }
    setLoader(true);
    const params = {
        task_id : "74f4c926-250c-43ca-9c53-453e87ceacd1",
        group_id : "8e16424a-58fc-4ba4-ab20-5bc8e7c3c41e",
      data: {
        document1: base64String,
      },
    };
    OcrServices.getChequeDetail(params).then((res) => {
      console.log(res);
      setJsonOuput(res);
      setLoader(false);
    //   setTimeout(() => {
    //     getPassportDetails(res.request_id);
    //   }, 3000);
    });
  };

  const handleImageClick = () => {
    setBase64String(panImage);
    simulateFileUpload(panImage);
  };

  const simulateFileUpload = async (url) => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to fetch image. HTTP status: ${response.status}`);
      }

      const blob = await response.blob();

      const fakeEvent = {
        target: {
          files: [blob],
        },
      };

      handleImage(fakeEvent);
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  return (
    <div>
       {/* <!-- Begin Page Content --> */}
      <div className={`container-fluid ${Texttospeech["text-wrapper"]}`}>
        {/* <!-- Page Heading --> */}
        <div className="mb-2">
          <div className="d-flex align-items-center w-100">
            <h1
              className={`${Texttospeech["heading"]} mr-auto text-gray  font-weight-thick`}
            >
              {pageTitle}
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
              {ocrInfo}
            </p>
            <div className={`tab-content ${Texttospeech["hght"]}`} id="myTabContent">
              <div
                className="tab-pane fade show active h-100"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row h-100">
                  <div className={`col-md-6 pr-0 ${Texttospeech["bdr-btw"]}`}>
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

                        <div className="card-body p-3 h-50vh">
                          <div className="form-group h-50 mb-0">
                            <div className="row">
                              <div className="col-6">
                                {/* <label className="form-label text-dark mb-2">
                                  Front
                                </label> */}
                                <div className="card text-center w-50 p-2">
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

                            </div>
                          </div>

                        </div>


                        <div className={`${Texttospeech['direction']}`}>
                          <button className={`btn ${Texttospeech['api-btn']}`} onClick={runAnalyzer}> <i className="fas fa-barcode"></i> Run API</button>
                        </div>


                        <h5 className='form-label text-dark pt-4 text-underline'>Samples</h5>

                        <div className='row pt-2'>

                        <div className='col-4 my-3'>
                          <button className="btn btn-outline-primary" onClick={handleImageClick}>Run Samples</button>
                          </div>

                          <div className='col-4 my-3 d-none'>
                            <div className='card text-center w-100 p-2'>
                              <div className='file file--disabled' onClick={() => handleImageClick(panImage)}>
                                <label className='mb-0 w-100'>
                                  <img style={{ height: "100px" }} className='img-fluid' src={panImage} alt="Preview" />
                                </label>
                              </div>
                            </div>
                          </div>

                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 pl-0">
                    {isLoader ? (
                      <Loader />

                    ) : ('')
                    }
                    <div className="card border-0 rounded-0 h-100">
                      <div className="card-header bg-white">
                        <h5 className={`text-gray font-weight-thick mr-auto mb-0 ${Texttospeech["parameter"]}`}>
                          RESPONSES
                        </h5>
                      </div>
                      <div className={`card-body p-3 ${Texttospeech["bck-clr"]}`}>

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
                          className={`nav nav-tabs mb-2 ${Texttospeech['ul-elements']}`}
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
                          <div className={`tab-content h-60vh ${Texttospeech['tab']}`} id="myTabContent">
                            <div className="tab-pane fade overflow-scroll h-75 show active p-3" id="table" role="tabpanel" aria-labelledby="table-tab">
                            <table className="table text-dark">
                            <tbody>
                            {outputJson && outputJson?.result && outputJson?.result.extraction_output ? (
                                Object.entries(outputJson?.result.extraction_output).map(([key, value]) => (
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
                              aria-labelledby="json-tab" >
                               <textarea
                            className="text-dark form-control w-100 h-100"
                            value={JSON.stringify(outputJson)}
                          ></textarea>
                            </div>
                          </div>
                        </div>

                        {/* <div>
                          <h2>More about this API</h2>
                          {ocrInfo}
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
      {/* <!-- /.container-fluid --> */}
    </div>
  )
}

