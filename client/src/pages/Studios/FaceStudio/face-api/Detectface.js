import { React, useState, useRef } from 'react';
import Webcam from "react-webcam";
import { v4 as uuid } from 'uuid';

export const Detectface = () => {

    const [image, setImage] = useState(null);
    const [detectedFaces, setDetectedFaces] = useState([]);

    const [getJsonText, setJsonText] = useState(null);
    const [getImage, setImageBase64] = useState("");
    const pageTitle = "Detect Live Face";

    const webcamRef = useRef(null);

    const capture = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc);
    };

    console.log(image);

    const msRest = require('@azure/ms-rest-js');
    const Face = require('@azure/cognitiveservices-face');
    const { v4: uuid } = require('uuid');

    const key = '9df23fae78d94589a8ee78f30d582156'; // Replace with your actual API key
    const endpoint = 'https://mobilise-face-api.cognitiveservices.azure.com';

    const credentials = new msRest.ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': key } });
    const client = new Face.FaceClient(credentials, endpoint);

    const person_group_id = uuid();

    const image_base_url = "https://images.unsplash.com/photo-1604514628550-37477afdf4e3?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    async function detectImage() {
        const imageData = image.split(',')[1]; // Extract base64 data

        const binaryData = atob(imageData);
        const arrayBuffer = new ArrayBuffer(binaryData.length);
        const uint8Array = new Uint8Array(arrayBuffer);

        for (let i = 0; i < binaryData.length; i++) {
            uint8Array[i] = binaryData.charCodeAt(i);
        }

        const blob = new Blob([uint8Array], { type: 'image/jpeg' });

        // Call DetectFaceRecognize function and pass the Blob as an argument
        DetectFaceRecognize(blob, client)
            .then((detectedFaces) => {
                console.log('Detected faces:', detectedFaces);
            })
            .catch((error) => {
                console.error('Error detecting faces:', error);
            });
    }

    /**
     * get the face Id and check if the image has a mask or not
     */
    async function DetectFaceRecognize(blob, client) {
        // detectWithUrl
        let detected_faces = await client.face.detectWithStream(blob, {
            detectionModel: 'detection_03',
            recognitionModel: 'recognition_04',
            returnFaceAttributes: ['QualityForRecognition', 'mask', 'headpose'],

            // detectionModel: 'detection_01',
            // recognitionModel: 'recognition_04',
            // returnFaceAttributes: ['accessories','blur','exposure','glasses','headpose','noise','qualityforrecognition'],
        });

        setDetectedFaces(detected_faces);
        setJsonText(detected_faces);

        return detected_faces.filter(
            (face) =>
                face.faceAttributes.qualityForRecognition === 'high' ||
                face.faceAttributes.qualityForRecognition === 'medium'
        );
    }

    const checkMask = () => {
        detectImage();
    };

    return (
        <>
            {/* <!-- Begin Page Content --> */}
            <div className="container-fluid">
                {/* <!-- Page Heading --> */}
                <div className="row mb-2">
                    <div className="col-md-9">
                        <h1 className='text-dark font-weight-bold'>{pageTitle}</h1>
                    </div>
                </div>
                <div className="card border-0 bg-light">

                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Builder</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Documentation</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active h-100" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div className="row">
                                <div className="col-md-6 pr-1">
                                    <div className="card border-0 rounded-0">
                                        <div className='card-header bg-white'>
                                            {/* <h5 className='text-primary font-weight-normal mb-0'>Parameters</h5> */}
                                        </div>
                                        <div className="card-body p-3 h-120vh">
                                            <div className='form-group h-50 mb-0'>
                                                {/* <label className='form-label text-dark mb-2'>Please Upload Image</label> */}
                                                <div className='card text-center w-100 p-2'>
                                                    <Webcam
                                                        audio={false}
                                                        ref={webcamRef}
                                                        screenshotFormat="image/jpeg"
                                                        style={{ width: '100%', height: '300px' }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12 text-center pt-2">
                                                <button
                                                    className="btn btn-primary rounded-circle"
                                                    onClick={capture}
                                                    style={{ width: '50px', height: '50px' }}
                                                >
                                                    <i className="fas fa-camera"></i>
                                                </button>
                                            </div>
                                            <div className="col-12 text-right pt-2">
                                                <button className="btn btn-primary" onClick={checkMask}> <i className="fas fa-barcode"></i> Run Analyze</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="card border-0 rounded-0 h-100">
                                        <div className='card-header bg-white'>
                                            <h5 className='text-primary font-weight-normal mb-0'>Responses</h5>
                                        </div>
                                        <div className='card-body'>
                                            <ul className="nav nav-tabs mb-2" id="myTab" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <a className="nav-link active" id="table-tab" data-toggle="tab" href="#table" role="tab" aria-controls="table" aria-selected="true">Table</a>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <a className="nav-link" id="json-tab" data-toggle="tab" href="#json" role="tab" aria-controls="json" aria-selected="false">Json</a>
                                                </li>
                                            </ul>
                                            <div className="tab-content h-100" id="myTabContent">
                                                <div className="tab-pane fade show active h-100 p-3" id="table" role="tabpanel" aria-labelledby="table-tab">
                                                    {detectedFaces.length > 0 ? (
                                                        <table className='table table-bordered table-striped'>
                                                            <thead>
                                                                <th>Have Mask</th>
                                                                <th>Face Covered</th>
                                                            </thead>
                                                            <tbody>
                                                                {
                                                                    detectedFaces.map((item, i) => (
                                                                        <tr key={i}>
                                                                            {/* <td>{item.faceId}</td> */}
                                                                            <td>{item.faceAttributes.mask.type}</td>
                                                                            <td>{(item.faceAttributes.mask.noseAndMouthCovered == false) ? "Not Covered" : "Covered"}</td>
                                                                        </tr>
                                                                    ))
                                                                }
                                                            </tbody>
                                                        </table>
                                                    ) : (
                                                        null
                                                    )}
                                                </div>
                                                <div className="tab-pane fade h-100" id="json" role="tabpanel" aria-labelledby="json-tab">
                                                    <textarea className="form-control w-100 h-100" value={JSON.stringify(getJsonText, null, 2)} readOnly />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade h-100" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- /.container-fluid --> */}
        </>
    );
}