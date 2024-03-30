import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

function ServiceForm() {
    const servcTypeArr = [
        {id: 1, label:'General Api Service', value: 1 },
        {id: 2, label:'AI Studio Service', value: 2 }
    ]
    const [serviceName, setServiceName] = useState('');
    const [serviceType, setServiceType] = useState('');
    const [errors, setErrors] = useState({});
  
    function validateForm() {
      const newErrors = {};
      if (!serviceName) {
        newErrors.serviceName = 'Service Name is required.';
      }
  
      if (!serviceType) {
        newErrors.serviceType = 'Service Type is required.';
      }
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    }
  
    function handleSubmit(event) {
      event.preventDefault();
  
      if (validateForm()) {
        const params = {
            name : serviceName,
            type : serviceType
        }
        axios.post('assets/Json/services.json', params).then((res) => {
            console.clear();
            console.log(res.data);
          });
      }
    }

    function onHandleCloseModal()
    {
        setServiceName('');
        setServiceType('')
    } 
      
  
    return (
      <form onSubmit={handleSubmit}>
        <div class="modal-body">
            <div className='form-group'>
                <label className='form-label text-primary'>Enter Service Name <span className='text-danger'>*</span></label>
                <input className='form-control form-control-sm' value={serviceName} onChange={(e) => setServiceName(e.target.value)} type='text' placeholder='Ex ABC..' />
                {errors.serviceName && <small className='text-danger'>{errors.serviceName}</small>}
            </div>
            <div className='form-group'>
                <label className='form-label text-primary'>Select Service Type <span className='text-danger'>*</span></label>
                <select className='form-control form-control-sm' value={serviceType} onChange={(e) => setServiceType(e.target.value)}>
                    <option value={''} default>Select</option>
                    {servcTypeArr.map((data,index)=>{
                        return (
                            <option value={data.value}>{data.label}</option>
                        )
                    })}
                </select>
                {errors.serviceType && <small className='text-danger'>{errors.serviceType}</small>}
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" onClick={onHandleCloseModal} data-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary">Save</button>
        </div>
      </form>
    );
  }


export default function Services() {

    // var services =[
    //     {id: 1, name: 'Pan Vefication', type:'General Service',status:1},
    //     {id: 2, name: 'Aadhar Verification',type:'API Studio Service',status:0},
    //     {id: 3, name: 'Identity Verficatio',type:'General Service',status:1},
    // ]
    var [services, setService] = useState([
        {id: 1, name: 'Pan Vefication', type:'General Service',status:1},
        {id: 2, name: 'Aadhar Verification',type:'API Studio Service',status:0},
        {id: 3, name: 'Identity Verficatio',type:'General Service',status:1},
    ]);

    useEffect( () => {
        (
            async () => {
                const {data} = await axios.get('assets/Json/services.json');
                console.log(data.data);
                setService(data.data);
            }
        )()
    }, []); 

    const [filter, setFilter] = useState('');

    const [serviceName, setServiceName] = useState('');
    const [serviceType, setServiceType] = useState('');
    const [res,setres] = useState({});
    
    
    const filteredItems = services.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
    );

    function handleFilterChange(event) {
        setFilter(event.target.value);
    }


  return (
    <>
            {/* <!-- Begin Page Content --> */}
            <div className="container-fluid">
            {/* <!-- Page Heading --> */}
            <div className='row'>
                <div className='col-6'>
                    <h1 class="h3 mb-2 text-primary font-weight-bold">Services
                     <input
                      type="text"
                      value={filter}
                      onChange={handleFilterChange}
                      className="form-control form-control-sm"
                      placeholder="Search by service name"
                    /></h1>
                </div>
                <div className='col-6 text-right'>
                    <button className='btn btn-primary btn-sm' data-toggle="modal" data-target="#exampleModal">+ Add Services</button>
                </div>
            </div>
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">{ res.msg } Services Table</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" width="100%" cellspacing="0">
                            <thead className='bg-gradient-primary text-white'>
                                <tr>
                                    <th>S No.</th>
                                    <th>Service Name</th>
                                    <th>Service Type</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {filteredItems.map((employee, index) => {
                                return (
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{employee.name}</td>
                                        <td>{employee.type}</td>
                                        <td>
                                            <div class="custom-control custom-switch ">
                                                <input type="checkbox" class="custom-control-input" id={'switch'+employee.id} />
                                                <label class="custom-control-label" for={'switch'+employee.id}></label>
                                            </div>
                                        </td>
                                        <td>
                                            <i className='fa fa-edit text-info'></i>
                                            <i className='fa fa-trash pl-2 text-danger'></i>
                                        </td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>




            
            {/* <!-- Add Organisation Modal --> */}
            <div class="modal fade" id="exampleModal" data-backdrop="static" data-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title font-weight-bold text-primary" id="exampleModalLabel">Add Service</h5>
                        {/* <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button> */}
                    </div>
                    <ServiceForm/>
                </div>
            </div>
            </div>
        </div>
        {/* <!-- /.container-fluid --> */}
    </>
  )
}
