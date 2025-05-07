import React from 'react'
import { Link } from 'react-router-dom'

export default function Users() {
  return (
    <>
                <div class="card shadow mb-4">
            <div class="card-header p-2">
                <div className="row">
                  <div className="col-6 my-auto">
                    <h6 class="m-0 font-weight-bold text-primary">
                      Users Table
                    </h6>
                  </div>
                  <div className="col-6 text-right">
                    <button
                      className="btn btn-primary btn-sm"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      + Add User
                    </button>
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
    </>
  )
}
