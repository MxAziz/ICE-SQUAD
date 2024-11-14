import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
// import Navbar from './Navbar';

const Root = () => {
    return (
      <div>
        <Header></Header>
        {/* <Navbar></Navbar> */}
        <div className="w-11/12 mx-auto">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Root;