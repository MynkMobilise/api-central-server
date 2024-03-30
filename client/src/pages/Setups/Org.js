import React from 'react'
import { Link } from 'react-router-dom'

export default function Org() {
  return (
    <>
        {/* <!-- Begin Page Content --> */}
        <div className="container-fluid">
        {/* <!-- Page Heading --> */}
            <div className='row'>
                <div className='col-6'>
                    <h1 class="h3 mb-2 text-primary font-weight-bold">Organisation</h1>
                </div>
                <div className='col-6 text-right'>
                    <button className='btn btn-primary btn-sm' data-toggle="modal" data-target="#exampleModal">+ Add Button</button>
                </div>
            </div>
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Organisation Table</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" width="100%" cellspacing="0">
                            <thead className='bg-gradient-primary text-white'>
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
                                    <td>Tiger Nixon
                                        <Link to={'/setups/org-mapping'}>
                                            <i className='fa fa-eye float-right'></i>
                                        </Link>
                                    </td>
                                    <td>Edinburgh Edinburgh Edinburgh</td>
                                    <td>LCFPS3345</td>
                                    <td>
                                        <div class="custom-control custom-switch ">
                                            <input type="checkbox" class="custom-control-input" id="customSwitch1" />
                                            <label class="custom-control-label" for="customSwitch1"></label>
                                        </div>
                                    </td>
                                    <td>
                                        <i className='fa fa-edit text-info'></i>
                                        <i className='fa fa-trash pl-2 text-danger'></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>




            
            {/* <!-- Add Organisation Modal --> */}
            <div class="modal fade" id="exampleModal" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title font-weight-bold text-primary" id="exampleModalLabel">Add Organisation</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div className='form-group'>
                        <label className='form-label text-primary'>Enter Organisation Name</label>
                        <input className='form-control form-control-sm' type='text' placeholder='Ex ABC..' />
                    </div>
                    <div className='form-group'>
                        <label className='form-label text-primary'>Website</label>
                        <input className='form-control form-control-sm' type='text' placeholder='Ex www.abc.com..' />
                    </div>
                    <div className='form-group'>
                        <label className='form-label text-primary'>Enter Address</label>
                        <input className='form-control form-control-sm' type='text' placeholder='Ex HN123X..' />
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save</button>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* <!-- /.container-fluid --> */}
    </>
  )
}
