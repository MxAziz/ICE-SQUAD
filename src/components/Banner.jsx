import React from 'react';

const Banner = () => {
    return (
      <div className="text-center mt-[100px] md:mt-[130px] ">
        <div className="space-y-1 mb-8">
          <h1 className="text-2xl md:text-4xl font-bold ">ICE SQUAD || BATCH 16</h1>
          <h3 className="  md:text-xl font-bold text-gray-800 ">
            Information and Communication Engineering <br />
            Pabna University of Science and Technology
          </h3>
        </div>
        <img
          className="w-full lg:w-[80%]  mt-6 rounded-2xl mx-auto "
          src="/cover.jpg"
          alt=""
        />
      </div>
    );
};

export default Banner;