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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-24">
          <TeacherCard
            photo="/founder.jpg"
            name="Anwar Hossain"
            designation="Professor"
            study="M.Phill. (PUST) & M.Sc. in ICE (RU)"
            field="Machine Learning, Image processing"
            email="abc4534@gmail.com"
            number={8801723883838}
          />

          <TeacherCard
            photo="/sumon.jpg"
            name="Sohag Sorkar"
            designation="Associate Professor"
            study="M.Phill. (PUST) & M.Sc. in ICE (RU)"
            field="Deep Learning, Machine Learning, IoT, Wireless Communication"
            email="sohag@example.com"
            number={8801575598429}
          />
          <TeacherCard
            photo="/nafi.jpg"
            name="Sohag Sorkar"
            designation="Associate Professor"
            study="M.Phill. (PUST) & M.Sc. in ICE (RU)"
            field="Deep Learning, Machine Learning, IoT, Wireless Communication"
            email="sohag@example.com"
            number={8801575598429}
          />
          <TeacherCard
            photo="/leone.jpg"
            name="Sohag Sorkar"
            designation="lecturer"
            study="M.Phill. (PUST) & M.Sc. in ICE (RU)"
            field="Deep Learning, Machine Learning, IoT, Wireless Communication"
            email="akif.mahadi@example.com"
            number={8801575598429}
          />
        </div>
      </div>
    );
};

export default Teachers;