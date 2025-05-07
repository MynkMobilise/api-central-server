import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Chatgptdesc } from "../Studios/ChatStudio/Header/Chatgptdesc";
import DashboardScss from "../../assets/scss/Dashboard.module.scss";

export default function Dashboard() {
  //Array Creation
  const services = [
    {
      title: "PAN Verification Plus",
      subTitle:
        "Extract details form both the front and back of an Indian passport.",
      image: "assets/img/blue-pan.svg",
      batch: "0 Credits",
    },
    {
      title: "PAN Verification Plus",
      subTitle:
        "Extract details form both the front and back of an Indian passport.",
      image: "assets/img/green-pan.svg",
      batch: "0 Credits",
    },
    {
      title: "Cheque OCR",
      subTitle:
        "Extract details form both the front and back of an Indian passport.",
      image: "assets/img/orange-pan.svg",
      batch: "0 Credits",
    },
  ];

  // const services = ['Apple', 'Banana', 'Orange', 'Grape'];

  const [filter, setFilter] = useState("");

  const filteredItems = services.filter((item) =>
    item.title.toLowerCase().includes(filter.toLowerCase())
  );
  
  const [showChatCheck, setChat] = useState(false);

  function handleFilterChange(event) {
    setFilter(event.target.value);
  }

  function showChat() {
    setChat(true)
  }
  function hideChat() {
    setChat(false)
  }

  // const showChat = () =>{
  //   alert("Raja");
  // }


  // ${DashboardScss['text-gray']}
  return (
    <>
      {/* <!-- Begin Page Content --> */}
      <div className={` ${DashboardScss["dashboard"]} container-fluid`}>
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-12 mb-3">
            <h1
              className={`h3 ${DashboardScss["home"]}  text-gray font-weight-thick mb-3`}
            >
              Home
            </h1>
            {/* <div className="col-xl-3 col-md-6 col-5 ml-auto my-auto text-right">
                  <div className="row">
                    <div className="col-4 p-0 my-auto">
                      <h6 className="text-gray-900 font-weight-bold my-auto">
                        Testing
                      </h6>
                    </div>
                    <div className="col-8 p-0">
                      <div className="card w-75 ml-3 text-left p-1 rounded-sm">
                        <p className="mb-0 text-gray-900">77</p>
                      </div>
                    </div>
                  </div>
                </div> */}
            {/* <div className="row">
                <div className="col-xl-6 col-md-6 col-6">
                </div>
                <div className="col-xl-3 col-md-6 col-5 ml-auto text-right">
                  <div className="row">
                    <div className="col-4 p-0 my-auto">
                      <h6 className="text-gray-900 font-weight-bold my-auto">
                        Live
                      </h6>
                    </div>
                    <div className="col-8 p-0">
                      <div className="card w-75 ml-3 text-left p-1 rounded-sm">
                        <p className="mb-0 text-gray-900">0</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            <div className="row">
              <div className="col-xl-8 col-md-8">
                <div
                  className={`input-group ${DashboardScss["bdr"]} bg-white mb-3`}
                >
                  <img className="mr-1" src="assets/img/search.svg" alt="" />
                  <input
                    type="text"
                    value={filter}
                    onChange={handleFilterChange}
                    className={`form-control ${DashboardScss["no-bdr"]} form-control-sm`}
                    placeholder="Search API"
                  />
                </div>
              </div>
              <div className="col-xl-4 col-md-4 col-6">
                <button className="btn btn-filter bg-white float-right">
                  Filters
                  <img className="ml-2" src="assets/img/filter.svg" alt="" />
                </button>
              </div>
              {/* <div className="col-xl-4 col-md-4 col-6 text-right">
                  <Link className="btn btn-sm btn-link font-weight-bold">
                    Show all API's
                  </Link>
                </div> */}
            </div>
          </div>
        </div>

        {/* <!-- Content Row --> */}
        <div className="row">
          {/* <!-- Earnings (Monthly) Card Example --> */}
          {filteredItems.map((link) => (
            <div className="col-xl-4 col-md-4 p-2">
              <Link to={"/pan-card"}>
                <div className={`card ${DashboardScss["card-bdr"]} p-2`}>
                  <div className="card-body">
                    <div className=" no-gutters align-items-center">
                      <div className={`d-flex align-items-center mb-3 ${DashboardScss["header"]}`} >
                        <div className="d-flex align-items-center">
                          <img className="mr-1" src={link.image} alt="" />
                          <h6  className={`mb-0 text-gray font-weight-thick ${DashboardScss["title"]}`}>
                            {link.title}
                          </h6>
                        </div>
                        <p className={`mb-0 font-weight-thick ${DashboardScss["batch"]}`} >
                          {link.batch}
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <p className={`mb-0 ${DashboardScss["lorem"]}`}>
                          {link.subTitle}
                        </p>
                        <img src="assets/img/right-arrow.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>


          ))}
        </div>
          {showChatCheck ? (
              <div className={`${DashboardScss['chat-box']}`}>
                <div className={`${DashboardScss['chat-box-header']}`}>
                <i class="fa fa-arrow-left"></i> Ask Me!
                  <span className={`${DashboardScss['chat-box-toggle']}`} onClick={hideChat}><i class="fa fa-times"></i></span>
                </div>
                <div className={`${DashboardScss['chat-box-body']}`}>
                  <div className={`${DashboardScss['chat-box-overlay']}`}>   
                  </div>
                  <div className={`${DashboardScss['chat-logs']}`}>
                    <h3>Welcome to AI Studio!</h3>
                    <p>Welcome to our support system! We're here to help you with any questions or concerns you may have. To get started, please select one of the options below.</p>
      
                    <div className={`${DashboardScss['btn_sec']}`}>
                      <button type="button" className={`${DashboardScss['btn_cstm']}`}> A. Lorem Ipsum</button>
                    </div>
                    <div className={`${DashboardScss['btn_sec']} mt-3`}>
                      <button type="button" className={`${DashboardScss['btn_cstm']}`}> B. Lorem Ipsum</button>
                    </div>
                    <div className={`${DashboardScss['btn_sec']} mt-3`}>
                      <button type="button" className={`${DashboardScss['btn_cstm']}`}> C. Lorem Ipsum</button>
                    </div>
                    <div className={`${DashboardScss['btn_sec']} mt-3`}>
                      <button type="button" className={`${DashboardScss['btn_cstm']}`}> D. Lorem Ipsum</button>
                    </div>
                    {/* <Chatgptdesc /> */}
                  </div>
                </div>
                <div className={`${DashboardScss['chat-input']}`}>      
                  <form>
                    <input type="text" id="chat-input" placeholder="Send a message..."/>
                  <button type="submit" className={`${DashboardScss['chat-submit']}`} id="chat-submit"><i class="fa-paper-plane">send</i></button>
                  </form>      
                </div>
              </div>
          ) : (
            <img className={`${DashboardScss['img']}`} onClick={showChat} src="assets/img/ask-me.svg" alt="" /> 
          )}
      </div>

      {/* <!-- /.container-fluid --> */}
    </>
  );
}
