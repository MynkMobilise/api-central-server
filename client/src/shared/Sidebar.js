import React from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery';
import SidebarScss from '../../src/assets/scss/Sidebar.module.scss';

const menu = [
    {id: 1, name: 'AI Studio',status:0,image: '/assets/img/ai-studio.svg',
    subServc:[
        {
            id:1,
            name: 'Speech Studio',
            link: 'speech-studio', 
            status: 1
        },
        {
            id:2,
            name: 'Document Studio',
            link: 'document-studio',
            status: 1
        },
        {
            id:3,
            name: 'Language Studio',
            link: 'language-studio',
            status: 1
        },
        {
            id:5,
            name: 'Face Studio',
            link: 'face_studio',
            status: 1
        },
        {
            id:5,
            name: 'Custom Vision',
            link: 'custom-vision',
            status: 1
        },
        {
            id:6,
            name: 'Chat Studio',
            link: 'chat-Studio',
            status: 1
        },
    ]
    },
    {id: 2, name: 'General API',status:0,image: '/assets/img/ai-studio.svg',
    subServc:[
        {
            id:1,
            name: 'Employee Verification',
            link: 'ocr_e_dashboard',
            status: 1
        },
        {
            id:2,
            name: 'Business Verification',
            link: 'ocr_b_dashboard',
            status: 1
        },
    ]
    },
    {id: 3,name: 'Credits and Pricing',image: '/assets/img/usage.svg',status:1,
        subServc:[
            {
                id:1,
                name: 'Org Structure',
                link: 'setups',
                status: 1
            },
            {
                id:2,
                name: 'Services',
                link: 'services',
                status: 1
            },
            {
                id:3,
                name: 'Report',
                link: 'reports',
                status: 1
            }
        ]
    },
    {id: 4, name: 'API Documentation' , image: '/assets/img/api.svg',status:0,
        subServc:[
            {
                id:1,
                name: 'Document Intel.',
                link: 'general-api',
                status: 1
            },
            {
                id:2,
                name: 'Text To Speech',
                link: 'general-api',
                status: 1
            }
        ]
    },
    {id: 5, name: 'API Credentials' , image: '/assets/img/support.svg',status:0,
        subServc:[
            {
                id:1,
                name: 'Document Intel.',
                link: 'general-api',
                status: 1
            },
            {
                id:2,
                name: 'Text To Speech',
                link: 'general-api',
                status: 1
            }
        ]
    },
    {id: 6, name: 'Support' , image: '/assets/img/support.svg',status:0,
        subServc:[
            {
                id:1,
                name: 'Speech Studio',
                link: 'speech-studio',
                status: 1
            },
            {
                id:2,
                name: 'Document Studio',
                link: 'document-studio',
                status: 1
            },
            {
                id:3,
                name: 'Employee Verification',
                link: 'ocr_e_dashboard',
                status: 1
            },
            {
                id:4,
                name: 'Business Verification',
                link: 'ocr_b_dashboard',
                status: 1
            },
        ]
    },
    {id: 7, name: 'Setups' , image: '/assets/img/support.svg',status:0,
        subServc:[
            {
                id:1,
                name: 'Organisations',
                link: 'setups/org',
                status: 1
            },
        ]
    },
  ];

export default function Sidebar() {
  return (
    <>
            {/* <!-- Sidebar --> */}

           <div className='d-flex flex-column bg-gradient-primary sidebar_bg'>
                <div className='h-100 w-100 overlay-sm'>
                    <ul className="navbar-nav flex_design sidebar sidebar-dark accordion" id="accordionSidebar">

                        {/* <!-- Sidebar - Brand --> */}
                        <Link className="sidebar-brand d-flex align-items-center justify-content-center bg-white border mb-4" href="index.html">
                            <img src="/assets/img/mobilise-logo.svg" className='w-100' alt="" />
                        </Link>

                        {/* <!-- Divider --> */}
                        {/* <hr className="sidebar-divider my-0"/> */}

                        {/* <!-- Nav Item - Dashboard --> */}
                        <li className="nav-item active">
                            <Link className="nav-link" to={'document-studio'}>
                            <img className='mr-2' src="/assets/img/ai-studio.svg" alt="" />
                                <span>Dashboard</span></Link>
                        </li>

                        {/* <!-- Divider --> */}
                        {/* <hr className="sidebar-divider" /> */}

                        {/* <!-- Heading --> */}
                        {/* <div className="sidebar-heading">
                            Setups
                        </div> */}
                        {/* <li className="nav-item">
                            <a className="nav-link collapsed w-100" href="javascript:void(0)" data-toggle="collapse" data-target="#orgCollapse"
                                aria-expanded="true" aria-controls="orgCollapse">
                                <i className="fas fa-fw fa-cog"></i>
                                <span>Setups</span>
                            </a>
                            <div id="orgCollapse" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <Link className="collapse-item" to={'setups'}>Org Structure</Link>
                                    <Link className="collapse-item" to={'services'}>Services</Link>
                                    <Link className="collapse-item" to={'services'}>Billing</Link>
                                </div>
                            </div>
                        </li> */}
                        {menu.map((data, index) => {
                            return (
                                <>
                                    {/* <!-- Heading --> */}
                                    {/* <div className="sidebar-heading">
                                        {data.name}
                                    </div> */}
                                    <li className="nav-item">
                                        <a className="nav-link collapsed w-100" href="javascript:void(0)" data-toggle="collapse" data-target={'#coll'+data.id}
                                            aria-expanded="true" aria-controls={'coll'+data.id}>
                                            <img className='mr-2' src={data.image} />
                                            <span>{data.name}</span>
                                        </a>
                                        <div id={'coll'+data.id} className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                                            <div className="bg-white py-2 collapse-inner rounded">
                                                {data.subServc.map((data2,index)=>{
                                                    return(
                                                        <>
                                                            <Link className="collapse-item" to={data2.link}>{data2.name}</Link>
                                                        </>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </li>
                                </>
                                )
                            })}


                        {/* <!-- Divider --> */}
                        {/* <hr className="sidebar-divider d-none d-md-block" /> */}

                        {/* <!-- Sidebar Toggler (Sidebar) --> */}
                        <div className="text-center d-none d-md-inline">
                            <button className="rounded-circle border-0" onClick={() => toggleSidebar()} id="sidebarToggle"></button>
                        </div>


                    </ul>
                </div>
           </div>
        {/* <!-- End of Sidebar --> */}
    </>
  )
}


function toggleSidebar(){
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
    //   $('.sidebar .collapse').collapse('hide');
    };
}
