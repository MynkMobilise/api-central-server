import { event } from 'jquery';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as sdk from 'microsoft-cognitiveservices-speech-sdk';
import createClient from '@azure-rest/ai-vision-image-analysis';
import { AzureKeyCredential } from '@azure/core-auth';
import Texttospeech from "../../../../../src/assets/scss/TextToSpeech.module.scss";
import Loader from '../../../../shared/Loader';
import txt_img from '../SpeechSamples/image1.jpg';
import txt_img2 from '../SpeechSamples/image2.jpg';
import txt_img3 from '../SpeechSamples/image3.jpg';
import txt_img4 from '../SpeechSamples/image4.jpg';


export default function ImageToSpeech() {
  // Define Varibles Here

  const pageTitle = "Image To Speech";

  const [audio, setaudio] = useState();
  const handleAudio = (event) => {
      setaudio(event.target.value)
    }


  const [uploadImage, setkey] = useState('');
  const handleImage = (event) => {

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
  const [jsonArr, setJsonArr] = useState('');
  // const handleShow = (event) => {
  //   setShowHide(event.target.value)
  //   }
    
    const [speakerVal, setSpeaker] = useState();
    const handleSpeaker = (event) => {
      setSpeaker(event.target.value)
      console.log(speakerVal);
  }

 const langArr = [
    {
      lan : 'en-US',
      lanName : 'English (United States)',
      gender : 'Female',
      nameOfAuthor : 'en-US-JennyMultilingualV2Neural'
    },
    {
      lan : 'en-US',
      lanName : 'English (United States)',
      gender : 'Male',
      nameOfAuthor : 'en-US-RyanMultilingualNeural'
    },
    {
      lan : 'en-IN',
      lanName : 'English (India)',
      gender : 'Female',
      nameOfAuthor : 'en-IN-NeerjaNeural'
    },
    {
      lan : 'en-IN',
      lanName : 'English (India)',
      gender : 'Male',
      nameOfAuthor : 'en-IN-PrabhatNeural'
    },
    {
      lan : 'en-PH',
      lanName : '	English (Philippines)',
      gender : 'Male',
      nameOfAuthor : 'en-PH-JamesNeural'
    },
    {
      lan : 'en-PH',
      lanName : '	English (Philippines)',
      gender : 'Female',
      nameOfAuthor : 'en-PH-RosaNeural'
    },
    {
      lan : 'hi-IN',
      lanName : 'Hindi (India)',
      gender : 'Female',
      nameOfAuthor : 'hi-IN-SwaraNeural'
    },
    {
      lan : 'hi-IN',
      lanName : 'Hindi (India)',
      gender : 'Male',
      nameOfAuthor : 'hi-IN-MadhurNeural'
    },
    {
      lan : 'ja-JP',
      lanName : 'Japanese (Japan)',
      gender : 'Female',
      nameOfAuthor : 'ja-JP-NanamiNeural'
    },
    {
      lan : 'ja-JP',
      lanName : 'Japanese (Japan)',
      gender : 'Male',
      nameOfAuthor : 'ja-JP-KeitaNeural'
    },
    {
      lan : 'ko-KR',
      lanName : 'Korean (Korea)',
      gender : 'Female',
      nameOfAuthor : 'ko-KR-SunHiNeural'
    },
    {
      lan : 'ko-KR',
      lanName : 'Korean (Korea)',
      gender : 'Male',
      nameOfAuthor : 'ko-KR-InJoonNeural'
    },
  ]


  //Functions Responsible For Text To Speech Conversion

  const handleSample = async  (id) => {
    console.log(id);
    if(id == 1)
    {
      const response = await fetch(txt_img);
      const pdfData = await response.blob();

      const reader = new FileReader();
      reader.onloadend = () => {
        setkey(reader.result);
      };
      reader.readAsDataURL(pdfData);

    }
    else if(id == 2)
    {
      const response = await fetch(txt_img2);
      const pdfData = await response.blob();

      const reader = new FileReader();
      reader.onloadend = () => {
        setkey(reader.result);
      };
      reader.readAsDataURL(pdfData);

    }
    else if(id == 3)
    {
      const response = await fetch(txt_img3);
      const pdfData = await response.blob();

      const reader = new FileReader();
      reader.onloadend = () => {
        setkey(reader.result);
      };
      reader.readAsDataURL(pdfData);

    }
    else if(id == 4)
    {
      const response = await fetch(txt_img4);
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
    setLoader(true);
      let uploadImageTemp = uploadImage.split(",")[1];
      console.log(Uint8Array.from(atob(uploadImageTemp), c => c.charCodeAt(0)));
      
      let img = Uint8Array.from(atob(uploadImageTemp), c => c.charCodeAt(0))
      analyzeImageFromUrl(img);
  }

  const endpoint = "https://ashish-personal-computer-vision-api.cognitiveservices.azure.com/";
  const key = "0021faafeef54f2599977f09bafcc59c";

  const credential = new AzureKeyCredential(key);
  const client = createClient(endpoint, credential);

  async function analyzeImageFromUrl(img) {
    console.log(img);
    const result = await client.path('/imageanalysis:analyze').post({
      body: img,
      queryParameters: {
          features: ['Read']
      },
      // contentType: 'application/json'
      contentType: 'application/octet-stream'
    });
  
    let iaResult  = result.body;
     iaResult = iaResult.readResult.blocks;

     iaResult.forEach((ev) => {
       ev.lines.forEach((ev)=>{
        setTimeout(() => {
            txtToSpchConvert(ev.text)
        }, 1000);
      })
    });

  }


  const txtToSpchConvert = (txt) => 
  {
    console.log('start',txt)
    // var audioFile = "YourAudioFile.wav";
    const speechConfig = sdk.SpeechConfig.fromSubscription('bf6b0ffcade74bb48959d29e4535ed38', 'centralindia');
    // const audioConfig = sdk.AudioConfig.fromAudioFileOutput(audioFile);
    console.log('start2')
    // The language of the voice that speaks.
    speechConfig.speechSynthesisVoiceName = speakerVal; 
    // speechConfig.setProperty('SpeechServiceResponse_Synthesis_SpeakingRate', '0.5');
    // speechConfig.SpeechServiceResponse_Synthesis_SpeakingRate = 0.5;
    // Create the speech synthesizer.
    var synthesizer = new sdk.SpeechSynthesizer(speechConfig);
    console.log('start3')

    synthesizer.speakTextAsync(txt,
      function (result) {
        if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
          console.log("synthesis finished.");
          setJsonArr(JSON.stringify(result))
          setShowHide(true)
          setLoader(false)
        } else {
          console.error("Speech synthesis canceled, " + result.errorDetails +
              "\nDid you set the speech resource key and region values?");
        }
        synthesizer.close();
        synthesizer= null;
      },
      function (err) {
        console.trace("err - " + err);
        synthesizer.close();
        synthesizer= null;
        setLoader(false)
      });
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
Quickly and accurately transcribe in more than 100 languages and dialects. Enhance the accuracy of your transcriptions by creating a custom speech model that can handle domain-specific terminology, background noise, and accents.
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

                      <div className="d-flex align-items-center mb-3">
                        <div className={`${Texttospeech['flex-styles']}`}>
                          <p className={`mb-0 text-gray font-weight-thick ${Texttospeech['name']}`}>Speaker</p>
                          <p className={`mb-0 text-gray ${Texttospeech['interger']}`}>Integer</p>
                          <p className={`mb-0 text-gray ${Texttospeech['path']}`}>(Path)</p>
                        </div>
                        <div className={`d-flex align-items-center ${Texttospeech['flex_styles']}`}>
                          <div class="">
                            <label
                              for="exampleFormControlInput1"
                              className={`form-label mb-1 text-gray ${Texttospeech['form-label']}`}
                            >
                             Name of pet that needs to be updated
                            </label>
                            <select onChange={handleSpeaker} className={`form-control text-gray ${Texttospeech['form-input']}`}>
                              <option value={0}>--Select Speaker--</option>
                              {langArr.map((option, index) => (
                                <option key={index} value={option.nameOfAuthor}>{option.lanName} <span className='float-right font-weight-bold'>{option.gender}</span></option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className={`${Texttospeech['direction']} mb-4`}>
                        <button className={`btn ${Texttospeech['api-btn']}`} onClick={runAnalyzer}> <i className="fas fa-barcode"></i> Run API</button>
                      </div>

                      <div className='row'>
                        <div className='col-md-3'>
                          <div className='card py-3 px-2' onClick={() => handleSample(1)}>
                            <img src={txt_img} />
                          </div>
                        </div>
                        <div className='col-md-3'>
                          <div className='card py-3 px-2' onClick={() => handleSample(2)}>
                            <img src={txt_img2} />
                          </div>
                        </div>
                        <div className='col-md-3'>
                          <div className='card py-3 px-2' onClick={() => handleSample(3)}>
                            <img src={txt_img3} />
                          </div>
                        </div>
                        <div className='col-md-3'>
                          <div className='card py-3 px-2' onClick={() => handleSample(4)}>
                            <img src={txt_img4} />
                          </div>
                        </div>
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
                     <div className={`tab-content h-100 ${Texttospeech['tab']}`} id="myTabContent">
                     <div className="tab-pane fade show active h-100 p-3" id="table" role="tabpanel" aria-labelledby="table-tab">
                      {isShow ? (
                            <table className='table'>
                              <thead>
                                <th>Label</th>
                                <th>Value</th>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Your Uploaded Image</td>
                                  <td>
                                  <img className='img-fluid w-100' src={uploadImage}></img>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Your Speaker</td>
                                  <td></td>
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
                          aria-labelledby="json-tab" >
                          <textarea value={jsonArr} className="form-control w-100 h-100"></textarea>
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
