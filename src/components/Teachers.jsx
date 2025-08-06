import React from 'react';

const Teachers = () => {
    return (
      <div>
        <div className=" text-center mt-[100px] md:mt-[150px] space-y-1">
          <h1 className=" text-2xl md:text-4xl font-bold">
            Our Respected Teachers
          </h1>
          <h3 className="md:text-xl font-bold text-gray-700">
            Department of Information and Communication Engineering
          </h3>
          <p className="md:text-xl font-bold text-gray-800">
            Pabna University of Science and Technology
          </p>
        </div>
        <figure>
          <img
            className="w-full lg:w-[80%] mt-6 rounded-2xl mx-auto "
            src="/teachers.jpg"
          />
        </figure>
        {/* teachers container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {/* teacher */}
          <div className="card bg-base-100 w-96 shadow-xl mt-10">
            <figure className=" p-6">
              <img src="/founder.jpg" className="rounded-xl h-[200px]" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Name: Muhammad Aziz </h2>
              <h3>District: Chapai Nawabgonj </h3>
            </div>
          </div>
          {/* teacher */}
          <div className="card bg-base-100 w-96 shadow-xl mt-10">
            <figure className=" p-6">
              <img src="/founder.jpg" className="rounded-xl h-[200px]" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Name: Muhammad Aziz </h2>
              <h3>District: Chapai Nawabgonj </h3>
            </div>
          </div>
          {/* teacher */}
          <div className="card bg-base-100 w-96 shadow-xl mt-10">
            <figure className=" p-6">
              <img src="/founder.jpg" className="rounded-xl h-[200px]" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Name: Muhammad Aziz </h2>
              <h3>District: Chapai Nawabgonj </h3>
            </div>
          </div>
          {/* teacher */}
          <div className="card bg-base-100 w-96 shadow-xl mt-10">
            <figure className=" p-6">
              <img src="/founder.jpg" className="rounded-xl h-[200px]" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Name: Muhammad Aziz </h2>
              <h3>District: Chapai Nawabgonj </h3>
            </div>
          </div>
          {/* teacher */}
          <div className="card bg-base-100 w-96 shadow-xl mt-10">
            <figure className=" p-6">
              <img src="/founder.jpg" className="rounded-xl h-[200px]" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Name: Muhammad Aziz </h2>
              <h3>District: Chapai Nawabgonj </h3>
            </div>
          </div>
          {/* teacher */}
          <div className="card bg-base-100 w-96 shadow-xl mt-10">
            <figure className=" p-6">
              <img src="/founder.jpg" className="rounded-xl h-[200px]" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Name: Muhammad Aziz </h2>
              <h3>District: Chapai Nawabgonj </h3>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Teachers;