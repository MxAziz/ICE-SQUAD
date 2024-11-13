import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
      <div className="bg-[#2B3440] text-white fixed w-full top-0 z-50 ">
        {/* navbar */}
        <div className="navbar  md:w-11/12 mx-auto">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl font-bold">
              <img className="size-7" src="/logo.png" alt="" /> ICE SQUAD
            </a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 space-x-4">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `px-2 py-1 md:px-4 md:py-2 rounded-xl text-lg font-bold border-2 border-black ${
                    isActive ? "bg-black text-white" : ""
                  }`
                }
              >
                Students
              </NavLink>
              <NavLink
                to={"/teachers"}
                className={({ isActive }) =>
                  `px-2 py-1 md:px-4 md:py-2 rounded-xl text-lg font-bold border-2 border-black ${
                    isActive ? "bg-black text-white" : ""
                  }`
                }
              >
                Teachers
              </NavLink>
            </ul>
          </div>
        </div>
        {/* navbar ends */}
      </div>
    );
};

export default Header;