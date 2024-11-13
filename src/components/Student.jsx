import React from "react";
import { LiaFacebook } from "react-icons/lia";

const Student = ({ img, title, description, fb }) => {
  return (
    <div className="card card-compact bg-base-100 w-[370px] mx-auto shadow-xl">
      <figure>
        <img className="h-[250px] w-5/6 mt-4 rounded-xl" src={img} />
      </figure>
      <div className="card-body text-center">
        <h2 className="text-xl font-bold text-center">{title}</h2>
        <p className=" text-base font-bold text-gray-700">
          {" "}
          District: {description}
        </p>
        <div className="card-actions justify-center">
          <a href={fb}>
            <button className="btn btn-wide bg-[#2B3440] hover:bg-[#1a2534] text-white">
              Facebook
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Student;
