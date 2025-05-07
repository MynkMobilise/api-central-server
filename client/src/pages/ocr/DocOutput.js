import React, { useEffect, useState } from "react";

export default function DocOutput({ moreInfo, jsonOutput }) {
  const [idCardArr, setIdCardArr] = useState([]);

  useEffect(() => {
    console.log(moreInfo);
    console.log(jsonOutput);
  }, []);

  return (
    <>
      <div className="card border-0 rounded-0 h-100">
        <div className="card-header bg-white">
          <h5 className="text-primary font-weight-normal mb-0">Responses</h5>
        </div>
        <div className="card-body">
          <ul className="nav nav-tabs mb-2" id="myTab" role="tablist">
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
              <textarea className="text-dark form-control w-100 h-100"></textarea>
            </div>
            <div>
              <h2>More about this API</h2>
              {moreInfo}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
