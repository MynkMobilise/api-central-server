import React from 'react'
import Header from '../../shared/Header.js';
import Footer from '../../shared/Footer.js';
import {
  Outlet,
} from 'react-router-dom';
// import Dashboard from '../../pages/dashboard/Dashboard.js';
import Sidebar from '../../shared/Sidebar.js';

export default function Full() {
  return (
    <>
    {/* <!-- Page Wrapper --> */}
    <div id="wrapper">

      {/* Sidebar */}

      <Sidebar/>

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">

            {/* <!-- Main Content --> */}
            <div id="content">
              <Header/>
              <Outlet/>
            </div>

          <Footer/>

        </div>
    </div>
    </>
  )
}
