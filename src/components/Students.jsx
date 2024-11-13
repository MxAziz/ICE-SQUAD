import React from 'react';
import Banner from './Banner';
import Student from './Student';

const Students = () => {
    return (
      <div className="">
        {/* banner */}
        <Banner></Banner>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {/* student */}
          <div className="card bg-base-100 lg:w-96 shadow-xl mx-auto">
            <figure className=" p-6">
              <img src="/mozahid.jpg" className="rounded-xl h-[200px]" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Name: Mozahid </h2>
              <h3>District: Dinajpur </h3>
            </div>
          </div>
          <div className="card bg-base-100 lg:w-96 shadow-xl mx-auto">
            <figure className=" p-6">
              <img src="/mozahid.jpg" className="rounded-xl h-[200px]" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Name: Mozahid </h2>
              <h3>District: Dinajpur </h3>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure className=" p-6">
              <img src="/mozahid.jpg" className="rounded-xl h-[200px]" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Name: Mozahid </h2>
              <h3>District: Dinajpur </h3>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-xl mt-10">
            <figure className=" p-6">
              <img src="/mozahid.jpg" className="rounded-xl h-[200px]" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Name: Mozahid </h2>
              <h3>District: Dinajpur </h3>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-xl mt-10">
            <figure className=" p-6">
              <img src="/mozahid.jpg" className="rounded-xl h-[200px]" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Name: Mozahid </h2>
              <h3>District: Dinajpur </h3>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-xl mt-10">
            <figure className=" p-6">
              <img src="/mozahid.jpg" className="rounded-xl h-[200px]" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Name: Mozahid </h2>
              <h3>District: Dinajpur </h3>
            </div>
          </div>
          {/* test */}
          <Student
            img={"/founder.jpg"}
            title="Muhammad Aziz"
            description="Chapai Nawabgonj."
          ></Student>
          <Student
            img={"/navin.jpg"}
            title="Navin Nawar"
            description={"Shirajgonj"}
          ></Student>
          <Student
            img="/mozahid.jpg"
            title="Mozahidul Islam Mozahid"
            description={"Dinajpur"}
          ></Student>

          {/*  */}
        </div>
      </div>
    );
};

export default Students;