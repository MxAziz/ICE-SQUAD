import React from 'react';

const Banner = () => {
    return (
      <div className="text-center mt-10 ">
        <div className="space-y-1">
          <h1 className="text-4xl font-bold">ICE SQUAD || BATCH 16</h1>
          <h3 className=" text-2xl font-bold ">
            Pabna University of Science and Technology
          </h3>
        </div>
        <img
          className="w-full lg:w-[75%] object-cover mt-6 rounded-2xl mx-auto h-[500px]"
          src="/cover.jpg"
          alt=""
        />
      </div>
    );
};

export default Banner;