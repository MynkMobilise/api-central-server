import React from 'react'
import { Link } from "react-router-dom";
import Roles from "./Roles";
import Users from "./Users";
import Token from "./Token";
export default function OrgMapping() {
  return (
    <>
    {/* <!-- Begin Page Content --> */}
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}
      <h1 class="h3 mb-2 text-primary font-weight-bold">
        Organisation Mapping
      </h1>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <a
            class="nav-link active"
            id="role"
            data-toggle="tab"
            href="#home"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Roles
          </a>
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link"
            id="home-tab"
            data-toggle="tab"
            href="#home"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Users
          </a>
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link"
            id="profile-tab"
            data-toggle="tab"
            href="#profile"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Tokens
          </a>
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link"
            id="key_endpoint-tab"
            data-toggle="tab"
            href="#key_endpoint"
            role="tab"
            aria-controls="key_endpoint"
            aria-selected="false"
          >
            Services
          </a>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active py-3"
          id="role"
          role="tabpanel"
          aria-labelledby="role"
        >
          <Roles/>
        </div>
        <div
          class="tab-pane fade show py-3"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <Users/>
        </div>
        <div
          class="tab-pane fade py-3"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <Token/>
        </div>
        <div
          class="tab-pane fade py-3"
          id="key_endpoint"
          role="tabpanel"
          aria-labelledby="key_endpoint-tab"
        >
          <div class="card shadow mb-4">
            <div class="card-header p-2">
              <div className="row">
                <div className="col-6 my-auto">
                  <h6 class="m-0 font-weight-bold text-primary">
                    Services Table
                  </h6>
                </div>
                <div className="col-6 text-right">
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table
                  class="table table-bordered"
                  width="100%"
                  cellspacing="0"
                >
                  <thead className="bg-gradient-primary text-white">
                    <tr>
                      <th>S No.</th>
                      <th>Name</th>
                      <th>Address</th>
                      <th>Pan</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        Tiger Nixon
                        <Link to={"/org-mapping"}>
                          <i className="fa fa-eye float-right"></i>
                        </Link>
                      </td>
                      <td>Edinburgh Edinburgh Edinburgh</td>
                      <td>LCFPS3345</td>
                      <td>
                        <div class="custom-control custom-switch ">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customSwitch1"
                          />
                          <label
                            class="custom-control-label"
                            for="customSwitch1"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <i className="fa fa-edit text-info"></i>
                        <i className="fa fa-trash pl-2 text-danger"></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Add Organisation Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        data-backdrop="static"
        data-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5
                class="modal-title font-weight-bold text-primary"
                id="exampleModalLabel"
              >
                Add Organisation
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="form-group">
                <label className="form-label text-primary">
                  Enter Organisation Name
                </label>
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="Ex ABC.."
                />
              </div>
              <div className="form-group">
                <label className="form-label text-primary">Website</label>
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="Ex www.abc.com.."
                />
              </div>
              <div className="form-group">
                <label className="form-label text-primary">
                  Enter Address
                </label>
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="Ex HN123X.."
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- /.container-fluid --> */}
    </>
  )
}
