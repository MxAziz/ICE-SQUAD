import TeacherCard from "./teacher/TeacherCard";

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
          <p className="md:text-xl font-bold text-gray-700">
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


        </div>
        <TeacherCard></TeacherCard>
      </div>
    );
};

export default Teachers;