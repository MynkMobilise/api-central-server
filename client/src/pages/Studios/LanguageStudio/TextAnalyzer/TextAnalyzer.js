import React, { useState } from 'react'
import { AzureKeyCredential } from '@azure/core-auth'
import Texttospeech from "../../../../../src/assets/scss/TextToSpeech.module.scss";
import Loader from '../../../../shared/Loader';
const { TextAnalysisClient } = require("@azure/ai-language-text");
const TextTranslationClient = require("@azure-rest/ai-translation-text").default


export default function TextAnalyzer() {

    const pageTitle = "Sentiment Analyzer";
    const [inputText, setkey] = useState();
    const [isShow, setShowHide] = useState(false);
    const [isLoader, setLoader] = useState(false);
    const keyUp = (event) => {
        setkey(event.target.value)
        setShowHide(false)
      }
    const [outputText, setopkey] = useState("");
    const setOpKey = (event) => {
        setopkey(event)
      }
    
      const endpoint = "https://mobilise-nlp-processing.cognitiveservices.azure.com/";
      const key = "2f0bdcec5d1046f6b2f0d844c0670927";
      
      const credential = new AzureKeyCredential(key);
      const client = new TextAnalysisClient(endpoint, new AzureKeyCredential(key));

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
    
    const txtTranslateConvert = () => {
      setLoader(true)
        main();
    }
    
    async function main() {
    
        console.log("== Text translation sample ==");
    
        console.log(inputText);
        const [result] = await client.analyze("SentimentAnalysis", [inputText]);
        const [result2] = await client.analyze("LanguageDetection", [inputText]);
        setShowHide(true)
        setLoader(false)
        console.log(result2.primaryLanguage.name)
    
        setOpKey("This Sentence '"+inputText+"' Is "+result.sentiment+" and Is "+(result.confidenceScores.positive * 100)+"% Positive and Is "+(result.confidenceScores.neutral * 100)+"% Neutral and Is "+(result.confidenceScores.negative * 100)+'% Negative. \n\nThis Sentence Is Written In '+result2.primaryLanguage.name+" ("+result2.primaryLanguage.iso6391Name+") Language");
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Asperiores accusantium cupiditate autem laboriosam impedit earum,
                deleniti temporibus officia voluptate in, sunt eveniet sed dolorem
                quae non, harum rerum quibusdam eaque.
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
                      <div className="card h-50 border-0 rounded-0">
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
                          className={`card-body h-100 p-3 ${Texttospeech["bck-clr"]}`}
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
  
                          <div className='form-group my-3 h-75'>
                            <label className='form-label text-dark mb-2'>Write Your Desired Paragraph You Want To Listen</label>
                            <textarea className='form-control h-75' id="inptTxt"  onKeyUp={keyUp}></textarea>
                          </div>
  
                          <div className={`${Texttospeech['direction']} mb-4`}>
                            <button className={`btn ${Texttospeech['api-btn']}`} onClick={txtTranslateConvert}> <i className="fas fa-barcode"></i> Run API</button>
                          </div>

                        <div className="row px-2">
                          <div className="col-4">
                            <div className="badge badge-secondary p-2 text-wrap text-left" onClick={() => handleSample(1)}>
                              <p className="mb-4 pb-3" id="samp1">The sunflowers danced in the warm breeze, spreading joy with their golden petals.</p>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="badge badge-secondary p-2 text-wrap text-left" onClick={() => handleSample(2)}>
                              <p className="pb-1" id="samp2">The weight of loneliness settled upon her shoulders like a heavy blanket, suffocating her spirit with each passing moment. </p>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="badge badge-secondary p-2 text-wrap text-left" onClick={() => handleSample(3)}>
                              <p className="mb-4 pb-2" id="samp3">I can't believe you forgot my birthday again! It's like you don't even care about me at all!</p>
                            </div>
                          </div>
                        </div>
                        </div>
                      </div>
                    </div>
                    {isLoader ? (
                        <Loader></Loader>

                      ) : ('')
                      }
                    <div className="col-md-6 pl-0">
                      <div className="card border-0 rounded-0 h-100">
                        <div className="card-header bg-white mb-3">
                          <h5 className={`text-gray font-weight-thick mr-auto mb-0 ${Texttospeech["parameter"]}`}>
                            RESPONSES
                          </h5>
                        </div>
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
                                JSON
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
                                Schema
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
                                Tabular
                              </a>
                            </li>
                          </ul>
                         <div className="d-flex">
                         <div className={`tab-content h-100 ${Texttospeech['tab']}`} id="myTabContent">
                            <div className="tab-pane fade show active h-100 p-3" id="table"  role="tabpanel"aria-labelledby="table-tab">
                              {isShow ? (
                                                          <textarea className='form-control w-100 h-60vh' value={outputText}></textarea>
                              ) : (
                                <p className="text-right">Waiting For Response.</p>
                              )}
                            </div>
                            <div
                              className="tab-pane fade h-100"
                              id="json"
                              role="tabpanel"
                              aria-labelledby="json-tab" >
                              <textarea className="form-control w-100 h-100"></textarea>
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
    