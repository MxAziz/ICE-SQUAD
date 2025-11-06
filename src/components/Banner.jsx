import { Link } from "react-router-dom";

const Banner = () => {
    return (
      <div className="text-center mt-[100px] md:mt-[125px] ">
        <div className="space-y-1 mb-8">
          <h1 className="text-2xl md:text-4xl font-bold ">ICE SQUAD || BATCH 16</h1>
          <h3 className="  md:text-xl font-bold text-gray-800 ">
            Information and Communication Engineering <br />
            Pabna University of Science and Technology
          </h3>
        </div>
        {/* <img
          className="w-full lg:w-[80%]  mt-6 rounded-2xl mx-auto "
          src="/cover.jpg"
          loading="lazy"
          alt="banner-image"
        /> */}

        <img
          className="w-full md:w-[98%] md:h-screen object-cover  mt-6 rounded-2xl mx-auto "
          src="/banner.webp"
          loading="lazy"
          alt="banner-image"
        />
      </div>
    );
};

export default Banner;