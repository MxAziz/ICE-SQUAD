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
            description={"Jhenaidah"}
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
            phone={8801966267867}
            fb="https://www.facebook.com/navin.nawar.79"
          ></Student>

          <Student
            img="/evan.jpg"
            title="Asibuzzaman Evan Sarker "
            description={"Sirajganj"}
            fb="https://www.facebook.com/mdevan.sarker"
          ></Student>
          <Student
            img={"/girl.jpg"}
            title="Sumaiya Islam Ouishi"
            description="Natore"
            phone={88}
            fb="https://www.facebook.com/profile.php?id=100077558732875"
          ></Student>
          <Student
            img={"/meye.jpg"}
            title="MST. Rume Khatun"
            description="Rajshahi"
            phone={88}
            fb="https://www.facebook.com/profile.php?id=61560324622658"
          ></Student>
          <Student
            img={"/girl.jpg"}
            title="MST. Lutfunnahar Keya"
            description="Rajshahi"
            phone={88}
            fb="https://www.facebook.com/keyalutfunnahar"
          ></Student>
          <Student
            img={"/meye.jpg"}
            title="MST. Sadika Rubia "
            description="Dinajpur"
            phone={88}
            fb="https://www.facebook.com/profile.php?id=100060950273264"
          ></Student>
          <Student
            img="/araf.jpg"
            title="Araf Zaman "
            description={"Pabna"}
            fb="https://www.facebook.com/araf.zaman.718"
          ></Student>
          <Student
            img="/arafat.jpg"
            title="MD. Arafat Hossain "
            description={"Bogura"}
            fb="https://www.facebook.com/profile.php?id=100026325469914"
          ></Student>
          <Student
            img="/rahib.jpg"
            title="MD. Rahib Chawdhury "
            description={"Dinajpur"}
            fb="https://www.facebook.com/profile.php?id=100090396586934"
          ></Student>
          <Student
            img="/ifti.jpg"
            title="M Iftikharul Islam Khan "
            description={"Tangail"}
            fb="https://www.facebook.com/Iftikharulislam.khan"
          ></Student>
          <Student
            img="/sabbir.jpg"
            title="MD. Sabbir Hossain "
            description={"Rajshahi"}
            fb="https://www.facebook.com/Sabbir42001"
          ></Student>
          <Student
            img="/apurba.jpg"
            title="Apurba Chandra Sarker "
            description={"Netrakona"}
            fb="https://www.facebook.com/apurba.sarker.5817"
          ></Student>
          <Student
            img={"/shishir.jpg"}
            title="Shishir Debnath"
            description="Tangail."
            phone={88}
            fb="https://www.facebook.com/profile.php?id=100031113705468"
          ></Student>
          <Student
            img={"/sami.jpg"}
            title="MD. Samiul Alim"
            description="Pabna."
            phone={88}
            fb="https://www.facebook.com/profile.php?id=61563980463805"
          ></Student>
          <Student
            img={"/sumon.jpg"}
            title="MD. Sumon Rayhan"
            description="Gazipur"
            phone={88}
            fb="https://www.facebook.com/profile.php?id=61552912084357"
          ></Student>
          <Student
            img={"/neem.jpg"}
            title="Neem Ahmed"
            description="Kishoreganj"
            phone={88}
            fb="https://www.facebook.com/naeemahmed.naeemahmed.98622"
          ></Student>
          <Student
            img={"/mehedi.jpg"}
            title="MD. Mehedi Hasan"
            description="Satkhira."
            phone={88}
            fb="https://www.facebook.com/profile.php?id=100086902454934"
          ></Student>
          <Student
            img={"/imran.jpg"}
            title="MD. Imran Hossen"
            description="Kishoreganj"
            phone={88}
            fb="https://www.facebook.com/profile.php?id=61559140854709"
          ></Student>
          <Student
            img={"/mahfuz.jpg"}
            title="MD. Mahfujur Rahman"
            description="Natore"
            phone={88}
            fb="https://www.facebook.com/mahfujur.rahman.2003"
          ></Student>
          <Student
            img={"/isteak.jpg"}
            title="MD. Isteak Ahmed"
            description="Tangail"
            phone={88}
            fb="https://www.facebook.com/profile.php?id=61568415114075"
          ></Student>
          <Student
            img={"/himel.jpg"}
            title="MD. Himel Hossen"
            description="Jhenaidah."
            phone={88}
            fb="https://www.facebook.com/md.himelhussain.01"
          ></Student>
          <Student
            img={"/shuvo.jpg"}
            title="Joytirmoy Sana Shuvo"
            description="Satkhira"
            phone={88}
            fb="https://www.facebook.com/profile.php?id=100072857113719"
          ></Student>
          <Student
            img={"/salman.jpg"}
            title="MD. Salman Ahmed Akash"
            description="Pabna"
            phone={88}
            fb="https://www.facebook.com/profile.php?id=100078435044091"
          ></Student>

          <Student
            img={"/tonmoy.jpg"}
            title="Tonmoy Rahman"
            description="Cox's Bazar"
            phone={88}
            fb="https://www.facebook.com/profile.php?id=100071401667575"
          ></Student>
          <Student
            img={"/atik.jpg"}
            title="MD. Atik Hasan"
            description="Rajshahi"
            phone={88}
            fb="https://www.facebook.com/profile.php?id=100012176677529"
          ></Student>
          <Student
            img={"/juhayer.jpg"}
            title="Mir Juhayer-Ul-Islam"
            description="Rajshahi"
            phone={88}
            fb="https://www.facebook.com/mji.asif"
          ></Student>
          <Student
            img={"/imtiaz.jpg"}
            title="Imtiaz Ahmed"
            description="Rajshahi"
            phone={88}
            fb="https://www.facebook.com/imtiaz2184"
          ></Student>
          <Student
            img={"/mithun.jpg"}
            title="MD. Naimul Islam Mithun"
            description="Pabna"
            phone={88}
            fb="https://www.facebook.com/naimulislam.mithun.5"
          ></Student>
          <Student
            img={"/emon.jpg"}
            title="MD. Mahfuzur  Rahman Emon"
            description="Khustia"
            phone={88}
            fb="https://www.facebook.com/profile.php?id=100080354675299"
          ></Student>

          {/* student card ends here... */}
        </div>
      </div>
    );
};

export default Students;