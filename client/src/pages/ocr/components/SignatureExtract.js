import React, { useEffect, useState } from "react";
import * as OcrServices from "../../Services/OcrServices";

export const SignatureExtract = () => {
    const pageTitle = "Signature Extraction";

    const [idCardArr, setIdCardArr] = useState([]);
    const [jsonArr, setJsonArr] = useState([]);
    const [outputJson, setJsonOuput] = useState([]);

    const [base64String, setBase64String] = useState("");
    const handleImage = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                const base64String = reader.result;
                setBase64String(base64String);
            };

            reader.readAsDataURL(file);
        }
    };
    const [isShow, setShowHide] = useState(true);
    const [ocrInfo, setOcrMoreInfo] = useState(
        "Both Individual/company PAN (Indian Tax ID) can be verified from the government database. We also provide the name match result in case you provide a name in the request."
    );

    //Functions Responsible For Text To Speech Conversion
    const runAnalyzer = () => {
        const params = {
            task_id: "1234",
            group_id: "8e16424a-58fc-4ba4-ab20-5bc8e7c3c41e",
            data: {
                document1: base64String,
                doc_type: "wet_signature",
            },
        };
        OcrServices.getSignatureExtraction(params).then((res) => {
            console.log(res);

            // setTimeout(() => {
            //     getPanImgDetails(res.request_id);
            // }, 5000);
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
                                                    Please Upload Image
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
                                                                    src={base64String}
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
                                                            {idCardArr.map((link) => (
                                                                <tr>
                                                                    <td>{link}</td>
                                                                </tr>
                                                            ))}
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
                                                        value={JSON.stringify(outputJson[0])}
                                                    ></textarea>
                                                
                                                </div>
                                                
                                                
                                            </div>
                                            <div className="pb-3">
                                                <h2 className="text-dark">More about this API</h2>
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