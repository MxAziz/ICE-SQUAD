import React from 'react';
import Banner from './Banner';
import Student from './Student';

const Students = () => {
    return (
      <div className="">
        {/* banner */}
        <Banner></Banner>
        {/*all student card container */}
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 ">
          <Student
            img={"/founder.jpg"}
            title="Muhammad Aziz"
            description="Chapai Nawabgonj."
            phone={8801518939563}
            fb="https://www.facebook.com/mxaziz10"
          ></Student>
          <Student
            img="/nafi.jpg"
            title="Abdullah Al Nafi"
            description={"Bogura"}
            fb="https://www.facebook.com/al.nafee.7"
          ></Student>
          <Student
            img="/leone.jpg"
            title="Shahriar Mahmud Leone "
            description={"khulna"}
            fb="https://www.facebook.com/profile.php?id=61568144774135"
          ></Student>
          <Student
            img="/mozahid.jpg"
            title="Mozahidul Islam Mozahid"
            description={"Dinajpur"}
            fb="https://www.facebook.com/mozahid.zahid.3975"
          ></Student>
          <Student
            img={"/navin.jpg"}
            title="Navin Nawar"
            description={"Gazipur"}
            fb="https://www.facebook.com/navin.nawar.79"
          ></Student>

          <Student
            img="/evan.jpg"
            title="Asibuzzaman Evan Sarker "
            description={"Shirajgonj"}
            fb="https://www.facebook.com/mdevan.sarker"
          ></Student>
          {/* student card ends here... */}
        </div>
      </div>
    );
};

export default Students;