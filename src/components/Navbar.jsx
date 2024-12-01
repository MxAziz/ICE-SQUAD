import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const links = (
      <>
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `px-4 py-2 rounded-xl text-lg font-bold border-2 border-black ${
                isActive ? "bg-black text-white" : ""
              }`
            }
          >
            Students
          </NavLink>{" "}
        </li>
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `px-4 py-2 rounded-xl text-lg font-bold border-2 border-black ${
                isActive ? "bg-black text-white" : ""
              }`
            }
          >
            Teachers
          </NavLink>{" "}
        </li>
      </>
    );

  return (
    <div className="bg-[#2B3440] text-white fixed w-full top-0 z-50">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">daisyUI</a>
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost  lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#2B3440] rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
             {links}
            </ul>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
