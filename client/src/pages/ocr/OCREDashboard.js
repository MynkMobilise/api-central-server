import React, { useState } from "react";
import { Link } from "react-router-dom";
import DashboardScss from "../../assets/scss/Dashboard.module.scss";

function OCREDashboard() {
  //Array Creation

  const pageTitle = "Employee Verification Studio";

  const services = [
    {
      title: "Aadhaar OCR",
      subTitle:"Extract details form both the front and back of an Indian passport.",
      link: "aadharOcr",
      image: "assets/img/blue-pan.svg",
      batch: "0 Credits",
    },
    // {
    //   title: "Aadhaar Verification",
    //   subTitle:"Extract details form both the front and back of an Indian passport.",
    //   link: "/ocr_e_dashboard/viewEmployee?ad_vrf",
    //   image: "assets/img/blue-pan.svg",
    //   batch: "0 Credits",
    // },
    // {
    //   title: "Aadhaar Tempering",
    //   subTitle:"Extract details form both the front and back of an Indian passport.",
    //   link: "aadhaarTempering",
    //   image: "assets/img/blue-pan.svg",
    //   batch: "0 Credits",
    // },
    {
      title: "PAN OCR",
      subTitle:"Extract details form both the front and back of an Indian passport.",
      link: "panOCR",
      image: "assets/img/blue-pan.svg",
      batch: "0 Credits",
    },
    {
      title: "PAN Verification",
      subTitle:"Extract details form both the front and back of an Indian passport.",
      link: "panVar",
      image: "assets/img/blue-pan.svg",
      batch: "0 Credits",
    },
    {
      title: "PAN Aadhar Linkage Verification",
      subTitle:"Extract details form both the front and back of an Indian passport.",
      link: "panAadharLink",
      image: "assets/img/blue-pan.svg",
      batch: "0 Credits",
    },
    {
      title: "Passport OCR",
      subTitle:"Extract details form both the front and back of an Indian passport.",
      link: "passportOcr",
      image: "assets/img/blue-pan.svg",
      batch: "0 Credits",
    },
    {
      title: "Passport Verification",
      subTitle:"Extract details form both the front and back of an Indian passport.",
      link: "passportVer",
      image: "assets/img/blue-pan.svg",
      batch: "0 Credits",
    },
    {
      title: "International Passport OCR",
      subTitle:"Extract details form both the front and back of an Indian passport.",
      link: "intPassportOcr",
      image: "assets/img/blue-pan.svg",
      batch: "0 Credits",
    },
    {
      title: "Cheque OCR",
      subTitle:"Extract details form both the front and back of an Indian passport.",
      link: "chequeOcr",
      image: "assets/img/blue-pan.svg",
      batch: "0 Credits",
    },
    {
      title: "Bank Verification",
      subTitle:"Extract details form both the front and back of an Indian passport.",
      link: "bankVer",
      image: "assets/img/blue-pan.svg",
      batch: "0 Credits",
    },
    {
      title: "Bank Statement Analysis",
      subTitle:"Extract details form both the front and back of an Indian passport.",
      link: "bankStatement",
      image: "assets/img/blue-pan.svg",
      batch: "0 Credits",
    },
    {
      title: "UAN employment check",
      subTitle:"Extract details form both the front and back of an Indian passport.",
      link: "uanCheck",
      image: "assets/img/blue-pan.svg",
      batch: "0 Credits",
    },
    {
      title: "Driving Licence OCR",
      subTitle:"Extract details form both the front and back of an Indian passport.",
      link: "dlOcr",
      image: "assets/img/blue-pan.svg",
      batch: "0 Credits",
    },
    {
      title: "ESIC Authentication",
      subTitle:"Extract details form both the front and back of an Indian passport.",
      link: "esicAuth",
      image: "assets/img/blue-pan.svg",
      batch: "0 Credits",
    },
    // {
    //   title: "Salary Slip OCR",
    //   subTitle:"Extract details form both the front and back of an Indian passport.",
    //   link: "/ocr_e_dashboard/viewEmployee?sl_ocr",
    //   image: "assets/img/blue-pan.svg",
    //   batch: "0 Credits",
    // },
    {
      title: "Voter OCR",
      subTitle:"Extract details form both the front and back of an Indian passport.",
      link: "votercard-ocr",
      image: "assets/img/blue-pan.svg",
      batch: "0 Credits",
    },
    {
      title: "Voter ID Verification",
      subTitle:"Extract details form both the front and back of an Indian passport.",
      link: "voter-id-verification",
      image: "assets/img/blue-pan.svg",
      batch: "0 Credits",
    },
    // {
    //   title: "Signature Extraction",
    //   subTitle:"Extract details form both the front and back of an Indian passport.",
    //   link: "signature-extraction",
    //   image: "assets/img/blue-pan.svg",
    //   batch: "0 Credits",
    // },
  ];

  const [filter, setFilter] = useState("");
  function handleFilterChange(event) {
    setFilter(event.target.value);
  }
  const filteredItems = services.filter((item) =>
    item.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {/* <!-- Begin Page Content --> */}
      <div className={` ${DashboardScss["dashboard"]} container-fluid`}>
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-12 mb-3">
            <h1
              className={`h3 ${DashboardScss["home"]}  text-gray font-weight-thick mb-3`}
            >
              {pageTitle}
            </h1>
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
                  <img className="ml-2" src="../../../assets/img/filter.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Content Row --> */}
        <div className="row">
          {/* <!-- Earnings (Monthly) Card Example --> */}
          {filteredItems.map((link) => (
            <div className="col-xl-4 col-md-4 p-2">
              <Link to={link.link}>
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
                        <img src="../../../assets/img/right-arrow.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>


          ))}
        </div>

        <img className={`${DashboardScss['img']}`} src="assets/img/ask-me.svg" alt="" />
      </div>
      {/* <!-- /.container-fluid --> */}
    </>
  );
}

export default OCREDashboard;
