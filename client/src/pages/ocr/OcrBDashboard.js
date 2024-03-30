import React, { useState } from "react";
import { Link } from "react-router-dom";
import DashboardScss from "../../assets/scss/Dashboard.module.scss";
function OcrBDashboard() {
  const pageTitle = "Business Verification Studio";

  const services = [
    {
      title: "Director Verification",
      subTitle:
        "Extract details form both the front and back of an Indian passport.",
      link: "",
      image: "assets/img/blue-pan.svg",
      batch: "0 Credits",
    },
    {
      title: "GST Certificate OCR",
      subTitle:
        "Extract details form both the front and back of an Indian passport.",
      link: "gstOcr",
      image: "assets/img/blue-pan.svg",
      batch: "0 Credits",
    },
    {
      title: "GST Number Verification",
      subTitle:
        "Extract details form both the front and back of an Indian passport.",
      link: "gstNo",
      image: "assets/img/blue-pan.svg",
      batch: "0 Credits",
    },
    {
      title: "Fssai Verification",
      subTitle:
        "Extract details form both the front and back of an Indian passport.",
      link: "fssaiNo",
      image: "assets/img/blue-pan.svg",
      batch: "0 Credits",
    },
    {
      title: "EPFO Establishment verification",
      subTitle:
        "Extract details form both the front and back of an Indian passport.",
      link: "epfo",
      image: "assets/img/blue-pan.svg",
      batch: "0 Credits",
    },
    {
      title: "TAX Defaulter Check",
      subTitle:
        "Extract details form both the front and back of an Indian passport.",
      link: "",
      image: "assets/img/blue-pan.svg",
      batch: "0 Credits",
    },
    {
      title: "MCA Company Verification",
      subTitle:
        "Extract details form both the front and back of an Indian passport.",
      link: "mcaCompany",
      image: "assets/img/blue-pan.svg",
      batch: "0 Credits",
    },
    {
      title: "Udyog Aadhar OCR",
      subTitle:
        "Extract details form both the front and back of an Indian passport.",
      link: "udhyogAadharOcr",
      image: "assets/img/blue-pan.svg",
      batch: "0 Credits",
    },
  ];

  const [filter, setFilter] = useState("");

  const filteredItems = services.filter((item) =>
    item.title.toLowerCase().includes(filter.toLowerCase())
  );

  function handleFilterChange(event) {
    setFilter(event.target.value);
  }

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
                  <img
                    className="ml-2"
                    src="../../../assets/img/filter.svg"
                    alt=""
                  />
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
                      <div
                        className={`d-flex align-items-center mb-3 ${DashboardScss["header"]}`}
                      >
                        <div className="d-flex align-items-center">
                          <img className="mr-1" src={link.image} alt="" />
                          <h6
                            className={`mb-0 text-gray font-weight-thick ${DashboardScss["title"]}`}
                          >
                            {link.title}
                          </h6>
                        </div>
                        <p
                          className={`mb-0 font-weight-thick ${DashboardScss["batch"]}`}
                        >
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

        <img
          className={`${DashboardScss["img"]}`}
          src="assets/img/ask-me.svg"
          alt=""
        />
      </div>
      {/* <!-- /.container-fluid --> */}
    </>
  );
}

export default OcrBDashboard;
