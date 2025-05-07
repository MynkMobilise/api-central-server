import React, { useEffect, useState } from 'react';
import { ComputerVisionClient } from '@azure/cognitiveservices-computervision';
import { ApiKeyCredentials } from '@azure/ms-rest-js';
import Texttospeech from "../../../../../src/assets/scss/TextToSpeech.module.scss";
import Loader from '../../../../shared/Loader';
import OcrImage1 from './tagsImages/Image1.jpg';
import OcrImage2 from './tagsImages/Image2.jpg';
import OcrImage3 from './tagsImages/Image3.jpg';

// Authentication requirements
const key = '6f146d807cce429090bad3cf88a00f5e';
const endpoint = "https://mobilise-computer-vision-services.cognitiveservices.azure.com/";

export const ImageTags = () => {
  const [analysis, setAnalysis] = useState(null);
  const [error, setError] = useState(null);
  const [getFile, setFile] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [isLoader, setLoader] = useState(false);
  const [getJsonText, setJsonText] = useState(null);
  const [getImage, setImageBase64] = useState("");
  const pageTitle = "Generate Image Tags";

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);

    const url = URL.createObjectURL(file);
    console.log(url);
    setImageURL(url);
    // setImageURL(file);

    // Read the file as a Uint8Array
    const reader = new FileReader();
    reader.onload = (event) => {
      const arrayBuffer = event.target.result;
      const uint8Array = new Uint8Array(arrayBuffer);

      setImageBase64(uint8Array);
      // describeImage(uint8Array);
    };

    reader.readAsArrayBuffer(file);
  };

  const describeImage = async () => {
    const uint8Array = getImage;
    if (!uint8Array) {
      alert("Please add the Image");
      setLoader(false);
      return;
    }
    setLoader(true);
    // const url = "https://portal.vision.cognitive.azure.com/dist/assets/ImageCaptioningSample4-0559774f.png";
    const computerVisionClient = new ComputerVisionClient(
      new ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': key } }), endpoint);

    try {
      const result = await computerVisionClient.analyzeImageInStream(uint8Array, { visualFeatures: ['Tags', 'Objects'] });
      console.log("The result is:", result);
      setAnalysis({ ...result });
      setJsonText(result);
      setLoader(false);
    } catch (err) {
      console.error("An error occurred:", err);
      setError("There was an error processing the image. Please try again later.");
      setLoader(false);
    }
  };

  const handleClick = () => {
    describeImage();
  }

  const handleImageClick = (clickedImageURL) => {
    setImageURL(clickedImageURL);
    simulateFileUpload(clickedImageURL);
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

      handleFileChange(fakeEvent);
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

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

            <p
              className={`mb-0 px-3 py-2 pt-3 pb-3 ${Texttospeech["summary"]} font-weight-thick text-gray`}
            >
              Extract tags based on thousands of recognizable objects, living beings, scenery, and actions.
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

                        <div className='form-group my-3'>
                          <label className='form-label text-dark mb-2'>Please Upload Image</label>
                          <div className='card text-center w-25 p-2'>
                            <div className='file file--disabled'>
                              <label htmlFor='input-file' className='border-dotted mb-0 w-100'>
                                {imageURL == null ? (
                                  <i className="fas fa-image display-1"></i>
                                ) : (
                                  <img className='img-fluid' src={imageURL}></img>
                                )}
                                <p>
                                  <small>
                                    Upload File
                                  </small>
                                </p>
                              </label>
                              <input id='input-file' onChange={handleFileChange} type='file' />
                            </div>
                          </div>
                        </div>

                        <div className={`${Texttospeech['direction']}`}>
                          <button className={`btn ${Texttospeech['api-btn']}`} onClick={describeImage}> <i className="fas fa-barcode"></i> Run API</button>
                        </div>


                        <h5 className='form-label text-dark pt-4 text-underline'>Samples</h5>

                        <div className='row pt-2'>

                          <div className='col-4 my-3'>
                            <div className='card text-center w-100 p-2'>
                              <div className='file file--disabled' onClick={() => handleImageClick(OcrImage1)}>
                                <label className='mb-0 w-100'>
                                  <img style={{ height: "100px" }} className='img-fluid' src={OcrImage1} alt="Preview" />
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className='col-4 my-3'>
                            <div className='card text-center w-100 p-2'>
                              <div className='file file--disabled' onClick={() => handleImageClick(OcrImage2)}>
                                <label className='mb-0 w-100'>
                                  <img style={{ height: "100px" }} className='img-fluid' src={OcrImage2} alt="Preview" />
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className='col-4 my-3'>
                            <div className='card text-center w-100 p-2'>
                              <div className='file file--disabled' onClick={() => handleImageClick(OcrImage3)}>
                                <label className='mb-0 w-100'>
                                  <img style={{ height: "100px" }} className='img-fluid' src={OcrImage3} alt="Preview" />
                                </label>
                              </div>
                            </div>
                          </div>

                          {/* <div className='col-4 my-3'>
                                                        <div className='card text-center w-100 p-2'>
                                                            <div className='file file--disabled' onClick={() => handleImageClick(OcrImage4)}>
                                                                <label className='mb-0 w-100'>
                                                                    <img style={{height:"100px"}} className='img-fluid' src={OcrImage4} alt="Preview" />
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div> */}

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
                              {analysis && analysis.tags && (
                                <table className='table'>
                                  <thead>
                                    <th>Image Tags</th>
                                  </thead>
                                  <tbody>
                                    {analysis.tags.map((tag, index) => (
                                      <tr key={index}>
                                        <td>{tag.name}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              )}
                            </div>
                            <div
                              className="tab-pane fade h-100"
                              id="json"
                              role="tabpanel"
                              aria-labelledby="json-tab" >
                              <textarea className="form-control w-100 h-100" value={JSON.stringify(getJsonText, null, 2)} readOnly />
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
      {/* <!-- /.container-fluid --> */}
    </>
  );
};