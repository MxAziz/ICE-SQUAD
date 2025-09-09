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
          <Link to="https://www.notion.so/Programming-with-C-Sessional-ICE-1202-1ea8f9f9b28780d89b6be4f1be1b18e8?source=copy_link" className="md:text-lg font-bold text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            sessional code.
          </Link>
        </div>
        <img
          className="w-full lg:w-[80%]  mt-6 rounded-2xl mx-auto "
          src="/cover.jpg"
          alt="banner-image"
        />
      </div>
    );
};

export default Banner;