import { jquery } from "jquery";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as sdk from "microsoft-cognitiveservices-speech-sdk";
import Texttospeech from "../../../../../src/assets/scss/TextToSpeech.module.scss";
import Loader from "../../../../shared/Loader";

export default function TextToSpeech() {
  // Define Varibles Here

  const [audio, setaudio] = useState();
  const handleAudio = (event) => {
    setaudio(event.target.value);
  };

  const [inputText, setkey] = useState();
  const keyUp = (event) => {
    setkey(event.target.value);
    setShowHide(false);
  };
  const [isShow, setShowHide] = useState(false);
  const [isLoader, setLoader] = useState(false);
  const [jsonArr, setJsonArr] = useState('');
  // const handleShow = (event) => {
  //   setShowHide(event.target.value)
  //   }

  const [speakerVal, setSpeaker] = useState();
  const handleSpeaker = (event) => {
    setSpeaker(event.target.value);
    console.log(speakerVal);
  };

  const langArr = [
    {
      lan: "en-US",
      lanName: "English (United States)",
      gender: "Female",
      nameOfAuthor: "en-US-JennyMultilingualV2Neural",
    },
    {
      lan: "en-US",
      lanName: "English (United States)",
      gender: "Male",
      nameOfAuthor: "en-US-RyanMultilingualNeural",
    },
    {
      lan: "bn-IN",
      lanName: "Bengali (India)",
      gender: "Female",
      nameOfAuthor: "bn-IN-TanishaaNeural",
    },
    {
      lan: "en-IN",
      lanName: "English (India)",
      gender: "Female",
      nameOfAuthor: "en-IN-NeerjaNeural",
    },
    {
      lan: "en-IN",
      lanName: "English (India)",
      gender: "Male",
      nameOfAuthor: "en-IN-PrabhatNeural",
    },
    {
      lan: "en-PH",
      lanName: "	English (Philippines)",
      gender: "Male",
      nameOfAuthor: "en-PH-JamesNeural",
    },
    {
      lan: "en-PH",
      lanName: "	English (Philippines)",
      gender: "Female",
      nameOfAuthor: "en-PH-RosaNeural",
    },
    {
      lan: "hi-IN",
      lanName: "Hindi (India)",
      gender: "Female",
      nameOfAuthor: "hi-IN-SwaraNeural",
    },
    {
      lan: "hi-IN",
      lanName: "Hindi (India)",
      gender: "Male",
      nameOfAuthor: "hi-IN-MadhurNeural",
    },
    {
      lan: "ja-JP",
      lanName: "Japanese (Japan)",
      gender: "Female",
      nameOfAuthor: "ja-JP-NanamiNeural",
    },
    {
      lan: "ja-JP",
      lanName: "Japanese (Japan)",
      gender: "Male",
      nameOfAuthor: "ja-JP-KeitaNeural",
    },
    {
      lan: "ko-KR",
      lanName: "Korean (Korea)",
      gender: "Female",
      nameOfAuthor: "ko-KR-SunHiNeural",
    },
    {
      lan: "ko-KR",
      lanName: "Korean (Korea)",
      gender: "Male",
      nameOfAuthor: "ko-KR-InJoonNeural",
    },
  ];

  const handleSample = (id) => {
    if(id == 1)
    {
      const textElement = document.getElementById('samp1');
      const textarea = document.getElementById('inptTxt');
      console.log(textElement.textContent);
      textarea.value = textElement.textContent;
      setkey(textElement.textContent);
      
    }
    else if(id == 2)
    {
      const textElement = document.getElementById('samp2');
      const textarea = document.getElementById('inptTxt');
      console.log(textElement.textContent);
      textarea.value = textElement.textContent;
      setkey(textElement.textContent);
    }
    else if(id == 3)
    {
      const textElement = document.getElementById('samp3');
      const textarea = document.getElementById('inptTxt');
      console.log(textElement.textContent);
      textarea.value = textElement.textContent;
      setkey(textElement.textContent);
    }
  }

  //Functions Responsible For Text To Speech Conversion
  const runAnalyzer = () => {
    setLoader(true);
    console.log("Speeker Value", speakerVal);
    // txtToSpchConvert();
  };

  // audioFile = "YourAudioFile.wav";

  const txtToSpchConvert = () => {
    setLoader(true)
    console.log("start");
    // var audioFile = "YourAudioFile.wav";
    const speechConfig = sdk.SpeechConfig.fromSubscription(
      "bf6b0ffcade74bb48959d29e4535ed38",
      "centralindia"
    );
    // const audioConfig = sdk.AudioConfig.fromAudioFileOutput(audioFile);
    console.log("start2");
    // The language of the voice that speaks.
    speechConfig.speechSynthesisVoiceName = speakerVal;

    // Create the speech synthesizer.
    var synthesizer = new sdk.SpeechSynthesizer(speechConfig);
    console.log("start3");

    if(speakerVal != null && inputText != null){
      synthesizer.speakTextAsync(
        inputText,
        function (result) {
          if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
            console.log("synthesis finished.");
            setShowHide(true);
            setLoader(false);
            setJsonArr(JSON.stringify(result))
          } else {
            console.error(
              "Speech synthesis canceled, " +
                result.errorDetails +
                "\nDid you set the speech resource key and region values?"
            );
          }
          synthesizer.close();
          synthesizer = null;
        },
        function (err) {
          console.trace("err - " + err);
          synthesizer.close();
          synthesizer = null;
          console.log("hellllooooo");
        }
      );
    }else
    {
      alert("Please Write Some Text Or Choose Speaker You Want To Convert");
      setLoader(false);
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
              Text to Speech
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
              Quickly and accurately transcribe in more than 100 languages and dialects. Enhance the accuracy of your transcriptions by creating a custom speech model that can handle domain-specific terminology, background noise, and accents.
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
                    <div className="card border-0 rounded-0">
                      <div className="card-header bg-white mb-3 d-flex align-items-center w-100">
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

                        <div className="form-group my-3">
                          <label className="form-label text-dark mb-2">
                            Write Your Desired Paragraph You Want To Listen
                          </label>
                          <textarea
                            className="form-control"
                            id="inptTxt"
                            onKeyUp={keyUp}
                            style={{ height: "200px" }}
                          ></textarea>
                        </div>

                        <div className="d-flex align-items-center mb-3">
                          <div className={`${Texttospeech["flex-styles"]}`}>
                            <p
                              className={`mb-0 text-gray font-weight-thick ${Texttospeech["name"]}`}
                            >
                              Speaker
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
                                Name of pet that needs to be updated
                              </label>
                              <select
                                onChange={handleSpeaker}
                                className={`form-control text-gray ${Texttospeech["form-input"]}`}
                              >
                                <option value={0}>--Select Speaker--</option>
                                {langArr.map((option, index) => (
                                  <option
                                    key={index}
                                    value={option.nameOfAuthor}
                                  >
                                    {option.lanName}{" "}
                                    <span className="float-right font-weight-bold">
                                      {option.gender}
                                    </span>
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className={`${Texttospeech["direction"]} mb-4`}>
                          <button
                            className={`btn ${Texttospeech["api-btn"]}`}
                            onClick={txtToSpchConvert}
                          >
                            {" "}
                            <i className="fas fa-barcode"></i> Run API
                          </button>
                        </div>

                        <div className="row px-2">
                          <div className="col-4">
                            <div className="badge badge-secondary p-2 text-wrap text-left" onClick={() => handleSample(1)}>
                              <p className="mb-2" id="samp1">It was really a good weather today. I must having a coffee today. As we step outside, we are greeted by the gentle touch of a cool morning breeze, whispering secrets of the day's weather yet to unfold.</p>
                              <small className="mt-auto">English</small>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="badge badge-secondary p-2 text-wrap text-left" onClick={() => handleSample(2)}>
                              <p className="mb-4" id="samp2">자연어 처리 기술은 인간과 컴퓨터 간의 상호 작용을 개선합니다.( Natural language processing improves interaction between humans and computers. ) </p>
                              <small className="">Korean</small>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="badge badge-secondary p-2 text-wrap text-left" onClick={() => handleSample(3)}>
                              <p className="mb-3" id="samp3">मशीन लर्निंग एक कंप्यूटर विज्ञान की शाखा है जो कंप्यूटर को स्वयं सिखने की क्षमता प्रदान करती है। यह तकनीकी प्रक्रिया है जिसमें कंप्यूटर को डेटा से सीखने की क्षमता प्रदान की जाती है और उसके आधार पर निर्णय लेने की क्षमता भी होती है।</p>
                              <small className="mt-auto">Hindi</small>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
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
                      {isLoader ? (
                        <Loader></Loader>

                      ) : ('')
                      }
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
                              Audio
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
                                    <tr>
                                      <td>Your Written Text</td>
                                      <td>{inputText}</td>
                                    </tr>
                                    <tr>
                                      <td>Your Speaker</td>
                                      <td></td>
                                    </tr>
                                  </tbody>
                                </table>
                              ) : (
                                <p className="text-right">
                                  Waiting For Response.
                                </p>
                              )}
                            </div>
                            <div
                              className="tab-pane fade h-100"
                              id="json"
                              role="tabpanel"
                              aria-labelledby="json-tab"
                            >
                              <textarea value={jsonArr} className="form-control w-100 h-60vh"></textarea>
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
  );
}
