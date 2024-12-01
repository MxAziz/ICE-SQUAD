import React from 'react';
import { IoMenu } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
      <div className="bg-[#2B3440] text-white fixed w-full top-0 z-50 ">
        {/* navbar */}
        <div className="navbar  md:w-11/12 mx-auto">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl font-bold">
              <img className="size-10 rounded-full  md:size-12" src="/ice.jpg" /> ICE SQUAD
            </a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 space-x-2 md:space-x-4 hidden md:block">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `px-2 py-1 md:px-4 md:py-2 rounded-xl md:text-lg font-bold border-2 border-black ${
                    isActive ? "bg-black text-white" : ""
                  }`
                }
              >
                Students
              </NavLink>
              <NavLink
                to={"/teachers"}
                className={({ isActive }) =>
                  `px-2 py-1 md:px-4 md:py-2 rounded-xl md:text-lg font-bold border-2 border-black ${
                    isActive ? "bg-black text-white" : ""
                  }`
                }
              >
                Teachers
              </NavLink>
            </ul>
            {/* drawer test.. */}
            <div className="drawer drawer-end pr-5 md:hidden">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                {/* Page content here */}
                <label
                  htmlFor="my-drawer-4"
                  className="drawer-button text-2xl cursor-pointer"
                >
                  <IoMenu></IoMenu>
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu bg-[#2B3440] space-y-2 text-white min-h-full w-48 p-4">
                  {/* Sidebar content here */}
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      `  px-4 py-2 rounded-xl text-lg font-bold border-2 border-black ${
                        isActive ? "bg-black text-white" : ""
                      }`
                    }
                  >
                    Students
                  </NavLink>
                  <NavLink
                    to={"/teachers"}
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-xl text-lg font-bold border-2 border-black ${
                        isActive ? "bg-black text-white" : ""
                      }`
                    }
                  >
                    Teachers
                  </NavLink>
                </ul>
              </div>
            </div>
            {/* drawer test.. */}
          </div>
        </div>
        {/* navbar ends */}
      </div>
    );
};

export default Header;