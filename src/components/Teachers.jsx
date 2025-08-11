import TeacherCard from "./teacher/TeacherCard";
import anwarSir from "../assets/teachers/anwar-sir.jpg"
import pollobSir from "../assets/teachers/pallab-sir.png"
import mofSir from "../assets/teachers/mof-sir.jpg"
import iffatMam from "../assets/teachers/iffat-ara-mam.jpg"
import sohagSir from "../assets/teachers/sohag-sir.jpg"
import sarwarSir from "../assets/teachers/sarwar-sir.jpg"
import zainulSir from "../assets/teachers/zainul-sir.jpg"
import imranSir from "../assets/teachers/imran-sir.jpg"
import turnaMam from "../assets/teachers/turna-mam.jfif"
import tofailsir from "../assets/teachers/tofail-sir.jfif"
import tarunSir from "../assets/teachers/tarun-sir.jpg"
import akifSir from "../assets/teachers/akif-sir.jpg"


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
            photo={anwarSir}
            name="Anwar Hossain"
            designation="Professor"
            study="M.Phill. (PUST) & M.Sc. in ICE (RU)"
            field="Machine Learning, Image processing"
            email="chairman.ice@pust.ac.bd"
            number={8801723883838}
          />
          <TeacherCard
            photo={pollobSir}
            name="Dr. Pallab Kanti Podder"
            designation="Associate Professor (on study leave)"
            study="Ph.D (CSU, Australia)"
            field=""
            email="pkpnext@pust.ac.bd"
            number={8801917485890}
          />
          <TeacherCard
            photo={iffatMam}
            name="Iffat Ara"
            designation="Associate Professor (on study leave)"
            study="M.Phill. (PUST) & M.Sc. in APEE (RU)"
            field="Machine Learning, Image processing"
            email="chairman.ice@pust.ac.bd"
            number={8801723883838}
          />
          <TeacherCard
            photo={mofSir}
            name="Dr. Md. Omar Faruk"
            designation="Associate Professor"
            study="Ph.D. (RU)"
            field="Signal Processing, IoT, Fiber Optic Communication"
            email="fom_06@pust.ac.bd"
            number={8801712415335}
          />
          <TeacherCard
            photo={sohagSir}
            name="Sohag Sorkar"
            designation="Associate Professor"
            study="M.Phill. (PUST) & M.Sc. in ICE (RU)"
            field="Deep Learning, Machine Learning, IoT, Wireless Communication"
            email="sohagsarker5614@pust.ac.bd (Office)"
            number={8801575598429}
          />
          <TeacherCard
            photo={sarwarSir}
            name="Dr. Md. Sarwar Hosain"
            designation="Associate Professor"
            study="Ph.D.(Saitama University, Japan) M.Phill. (PUST)"
            field="Speech Emotion Recognition, Bone Conducted Speech, Deep Learning, Wireless Communication"
            email="sarwar.ice@pust.ac.bd"
            number={8801722047833}
          />
          <TeacherCard
            photo={zainulSir}
            name="Sohag Sorkar"
            designation="lecturer"
            study="M.Phill. (PUST) & M.Sc. in ICE (RU)"
            field="Deep Learning, Machine Learning, IoT, Wireless Communication"
            email=""
            number={8801575598429}
          />
        </div>
      </div>
    );
};

export default Teachers;