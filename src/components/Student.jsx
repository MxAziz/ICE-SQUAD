import { FaHouseChimney } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

const Student = ({ img, title, description,phone, fb }) => {
  return (
    <div className="card card-compact bg-base-100 w-[370px] mx-auto shadow-xl">
      <figure>
        <img className="h-[270px] object-cover w-5/6 mt-4 rounded-xl" src={img} loading="lazy" />
      </figure>
      <div className="   space-y-1 my-4 mb-5 text-center">
        <h2 className="text-2xl font-bold text-center">{title}</h2>
        <p className=" text-base font-bold pb-2 text-gray-700 flex gap-1 justify-center items-center">
          <FaHouseChimney className=" size-4 "></FaHouseChimney>
          <p>District: {description}</p>
        </p>
        {/* <a
          href={`tel:+${phone}`}
          className="text-base font-bold text-gray-700 hover:text-purple-700 flex justify-center items-center gap-1"
        >
          <IoCall></IoCall> <p>Call Now</p>
        </a> */}

        <div className="card-actions justify-center">
          <a href={fb}>
            <button className="btn btn-wide bg-[#2B3440] hover:bg-[#1a2534] text-white">
              Facebook
            </button>
          </a>
          <a
            href={`tel:+${phone}`}
            className=" btn bg-[#2B3440] hover:bg-[#1a2534] text-white   text-base font-bold  flex justify-center items-center gap-1"
          >
            <IoCall></IoCall>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Student;
