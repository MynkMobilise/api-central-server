import React, { useState } from 'react'
import { AzureKeyCredential } from '@azure/core-auth';
import Texttospeech from "../../../../../src/assets/scss/TextToSpeech.module.scss";
import Loader from '../../../../shared/Loader';
import layout1 from '../DocumentSamples/layout.png';
const { DocumentAnalysisClient } = require("@azure/ai-form-recognizer");

export default function Layouts() {
  // Define Varibles Here

  const pageTitle = "Layouts";

  const [idCardArr, setIdCardArr] = useState([]);
  const [jsonArr, setJsonArr] = useState([]);

  const endpoint = "https://ashish-personal-openai-document-intelligence-services.cognitiveservices.azure.com";
    const key = "5f3ac733e5a14ae5b3cc3f086f2707c9";

    const credential = new AzureKeyCredential(key);
    const client = new DocumentAnalysisClient(endpoint, new AzureKeyCredential(key));

  const [uploadImage, setkey] = useState('');
  const handleImage = (event) => {
    setLoader(false)
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setkey(reader.result);
      };
      reader.readAsDataURL(file);
    }

      setShowHide(false);
    }
  const [isShow, setShowHide] = useState(false);
  const [isLoader, setLoader] = useState(false);


  //Functions Responsible For Text To Speech Conversion

  const handleSample = async  (id) => {
    console.log(id);
    if(id == 1)
    {
      const response = await fetch(layout1);
      const pdfData = await response.blob();

      const reader = new FileReader();
      reader.onloadend = () => {
        setkey(reader.result);
      };
      reader.readAsDataURL(pdfData);

    }
    // setkey();
  }

  const runAnalyzer = () => {
    setLoader(true)
    let uploadImageTemp = uploadImage.split(",")[1];
    if(!uploadImageTemp)
    {
        alert("Please Upload Id Card Image");
        setLoader(false)
    }
    else{
        console.log(Uint8Array.from(atob(uploadImageTemp), c => c.charCodeAt(0)));
        
        let img = Uint8Array.from(atob(uploadImageTemp), c => c.charCodeAt(0))
        startAnalyzingDoc(img);
    }
  }

  async function startAnalyzingDoc(img) {
 
    const poller = await client.beginAnalyzeDocument('prebuilt-layout',img) ;
 
    let result  =  await poller.pollUntilDone();

    setJsonArr(JSON.stringify(result))
    setIdCardArr(result.content)
    setShowHide(true)
    setLoader(false)
   
   }


  return (
    <>
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

          {/* <p
            className={`mb-0 px-3 py-2 ${Texttospeech["summary"]} font-weight-thick text-gray`}
          >
Document Intelligence Studio is an online tool to visually explore, understand, train, and integrate features into your applications. You can easily extract key data from documents or create your own custom models with a no-code approach.
          </p> */}
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

                      <div className='form-group my-3'>
                        <label className='form-label text-dark mb-2'>Please Upload Image</label>
                        <div className='card text-center w-25 p-2'>
                            <div className='file file--disabled'>
                                <label htmlFor='input-file' className='border-dotted mb-0 w-100'>
                                {uploadImage == '' ? (
                                    <i className="fas fa-image display-1"></i>
                                ) :(
                                    <img className='img-fluid' src={uploadImage}></img>
                                )}
                                <p>
                                <small>
                                Upload File
                                </small>
                                </p>
                                </label>
                                <input id='input-file' onChange={handleImage} type='file' />
                            </div>
                        </div>
                      </div>

                      <div className={`${Texttospeech['direction']} mb-4`}>
                        <button className={`btn ${Texttospeech['api-btn']}`} onClick={runAnalyzer}> <i className="fas fa-barcode"></i> Run API</button>
                      </div>

                      <div className='row'>
                        <div className='col-md-3'>
                          <div className='card py-3 px-2' onClick={() => handleSample(1)}>
                            <img src={layout1} />
                          </div>
                        </div>
                        {/* <div className='col-md-3'>
                          <div className='card py-3 px-2' onClick={() => handleSample(4)}>
                          <img src={id_Card4} />
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 pl-0">
                  <div className="card border-0 rounded-0 h-100">
                    <div className="card-header bg-white mb-3">
                      <h5 className={`text-gray font-weight-thick mr-auto mb-0 ${Texttospeech["parameter"]}`}>
                        RESPONSES
                      </h5>
                    </div>
                    {isLoader ? (
                      <Loader></Loader>
                    ) : ('')
                    }
                    <div className={`card-body p-3 ${Texttospeech["bck-clr"]}`}>

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
                            Tabular
                          </a>
                        </li> */}
                      </ul>
                     <div className="d-flex">
                     <div className={`tab-content h-60vh ${Texttospeech['tab']}`} id="myTabContent">
                     <div className="tab-pane fade overflow-scroll h-75 show active p-3" id="table" role="tabpanel" aria-labelledby="table-tab">
                      {isShow ? (
                        <textarea value={idCardArr} className='form-control w-100 h-100 text-dark'></textarea>
                        ) : (
                          <p>Waiting For Response.</p>
                        )}
                      </div>
                        <div
                          className="tab-pane fade h-100"
                          id="json"
                          role="tabpanel"
                          aria-labelledby="json-tab" >
                          <textarea className='text-dark form-control w-100 h-100' value={jsonArr}></textarea>
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
    {/* <!-- /.container-fluid --> */}
    </>
  )
}