import React, { useState } from 'react'
import { AzureKeyCredential } from '@azure/core-auth'
const { TextAnalysisClient } = require("@azure/ai-language-text");
const TextTranslationClient = require("@azure-rest/ai-translation-text").default

export default function TranslateText() {

const pageTitle = "Text Translater";
const [inputText, setkey] = useState();
const keyUp = (event) => {
    setkey(event.target.value)
  }
const [outputText, setopkey] = useState("");
const setOpKey = (event) => {
    setopkey(event)
  }

  const endpoint = "https://mobilise-nlp-processing.cognitiveservices.azure.com/";
  const key = "2f0bdcec5d1046f6b2f0d844c0670927";
  
  const credential = new AzureKeyCredential(key);
  const client = new TextAnalysisClient(endpoint, new AzureKeyCredential(key));

const txtTranslateConvert = () => {
    main();
}

async function main() {

    console.log("== Text translation sample ==");

    const [result] = await client.analyze("SentimentAnalysis", [inputText]);

    console.log(result.sentiment)

    setOpKey("This Sentence '"+inputText+"' Is "+result.sentiment+" and Is "+(result.confidenceScores.positive * 100)+"% Positive and Is "+(result.confidenceScores.neutral * 100)+"% Neutral and Is "+(result.confidenceScores.negative * 100)+"% Negative");
  }


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
                  <h5 className='text-primary font-weight-normal mb-0'>Parameters</h5>
                </div>
                <div className="card-body p-3 h-60vh">
                  <div className='form-group h-75 mb-0'>
                    <label className='form-label text-dark mb-2'>Write Your Desired Paragraph You Want To Listen</label>
                    <textarea className='form-control h-75' onKeyUp={keyUp}></textarea>
                  </div>
                  <div className='form-group'>
                    {/* <label className='form-label text-dark'>Choose Your Speaker</label> */}
                    {/* <select onChange={handleSpeaker} className='form-control'>
                      <option value={0}>--Select Speaker--</option>
                      {langArr.map((option, index) => (
                        <option key={index} value={option.nameOfAuthor}>{option.lanName} <span className='float-right font-weight-bold'>{option.gender}</span></option>
                      ))}
                    </select> */}
                  </div>
                  <div className="col-12 text-right p-0">
                    <button className="btn btn-primary" onClick={txtTranslateConvert}> <i className="fas fa-barcode"></i> Run Analyze</button>
                    {/* <button className="btn btn-success ml-3"> <i className="fas fa-speaker"></i> Stop Audio</button> */}
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
                        {outputText}
                      </div>
                      <div className="tab-pane fade h-100" id="json" role="tabpanel" aria-labelledby="json-tab">
                        <textarea className="form-control w-100 h-100">

                        </textarea>
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
  )
}
