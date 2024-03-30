import React, { useState } from 'react';
import Texttospeech from "../../../../../src/assets/scss/TextToSpeech.module.scss";
import Loader from '../../../../shared/Loader';
import OcrImage1 from './OcrImages/image1.jpg';
import OcrImage2 from './OcrImages/image2.jpg';
import OcrImage3 from './OcrImages/image3.jpg';
import OcrImage4 from './OcrImages/image4.jpg';
const { ImageAnalysisClient } = require('@azure-rest/ai-vision-image-analysis');
const createClient = require('@azure-rest/ai-vision-image-analysis').default;
const { AzureKeyCredential } = require('@azure/core-auth');

export const Imagetotextocr = () => {
    const [getText, setText] = useState("");
    const [getJsonText, setJsonText] = useState("");
    const [getFile, setFile] = useState(null);
    const [imageURL, setImageURL] = useState(null);
    const [getImage, setImageBase64] = useState("");
    const [isLoader, setLoader] = useState(false);

    const pageTitle = "Get Text From Image";

    const endpoint = "https://ashish-personal-computer-vision-api.cognitiveservices.azure.com/";
    const key = "0021faafeef54f2599977f09bafcc59c";

    const credential = new AzureKeyCredential(key);
    const client = createClient(endpoint, credential);

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

            // analyzeImage(uint8Array);
            setImageBase64(uint8Array);

        };

        reader.readAsArrayBuffer(file);
    };

    const features = [
        // 'Caption',
        'Read'
    ];

    async function analyzeImage() {
        const uint8Array = getImage;
        if (!uint8Array) {
            alert("Please add the Image");
            setLoader(false);
            return;
        }
        setLoader(true);
        const result = await client.path('/imageanalysis:analyze').post({
            body: uint8Array,
            queryParameters: {
                features: features
            },
            contentType: 'application/octet-stream'
        });

        const iaResult = result.body;

        setJsonText(iaResult);

        if (iaResult.captionResult) {
            console.log(`Caption: ${iaResult.captionResult.text} (confidence: ${iaResult.captionResult.confidence})`);
        }
        if (iaResult.readResult) {
            iaResult.readResult.blocks.forEach(block => console.log(`Text Block: ${JSON.stringify(block)}`));
            const linesText = iaResult.readResult.blocks.map(block => {
                return block.lines.map(line => line.text).join(' ');
            });
            setText(linesText[0]);
            setLoader(false);
        }
    }

    const handleClick = () => {
        analyzeImage();
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
                                            <div className="card-header bg-white mb-3 d-flex align-items-center w-100">
                                                <h5
                                                    className={`text-gray font-weight-thick mr-auto mb-0 ${Texttospeech["parameter"]}`}
                                                >
                                                    PARAMETERS
                                                </h5>
                                            </div>
                                            <div
                                                className={`card-body p-3 ${Texttospeech["bck-clr"]}`}
                                            >
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
                                                    <button className={`btn ${Texttospeech['api-btn']}`} onClick={analyzeImage}> <i className="fas fa-barcode"></i> Run API</button>
                                                </div>
                                                
                                                
                                                <h5 className='form-label text-dark pt-4 text-underline'>Samples</h5>

                                                <div className='row pt-2'>

                                                    <div className='col-4 my-3'>
                                                        <div className='card text-center w-100 p-2'>
                                                            <div className='file file--disabled' onClick={() => handleImageClick(OcrImage1)}>
                                                                <label className='mb-0 w-100'>
                                                                    <img style={{height:"100px"}} className='img-fluid' src={OcrImage1} alt="Preview" />
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='col-4 my-3'>
                                                        <div className='card text-center w-100 p-2'>
                                                            <div className='file file--disabled' onClick={() => handleImageClick(OcrImage2)}>
                                                                <label className='mb-0 w-100'>
                                                                    <img style={{height:"100px"}} className='img-fluid' src={OcrImage2} alt="Preview" />
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='col-4 my-3'>
                                                        <div className='card text-center w-100 p-2'>
                                                            <div className='file file--disabled' onClick={() => handleImageClick(OcrImage3)}>
                                                                <label className='mb-0 w-100'>
                                                                    <img style={{height:"100px"}} className='img-fluid' src={OcrImage3} alt="Preview" />
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
                                                            <table className='table'>
                                                                <thead>
                                                                    <th>Image Text</th>
                                                                </thead>
                                                                {getText ? (
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>{getText ? `${getText}` : null}</td>
                                                                        </tr>
                                                                    </tbody>
                                                                ) : (
                                                                    null
                                                                )}

                                                            </table>
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
    )
}