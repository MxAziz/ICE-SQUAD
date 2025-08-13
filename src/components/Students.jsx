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
            phone={8801724677082}
            fb="https://www.facebook.com/al.nafee.7"
          ></Student>
          <Student
            img="/leone.jpg"
            title="Shahriar Mahmud Leone "
            description={"Jhenaidah"}
            phone={8801775484703}
            fb="https://www.facebook.com/profile.php?id=61568144774135"
          ></Student>
          <Student
            img="/mozahid.jpg"
            title="Mozahidul Islam Mozahid"
            description={"Dinajpur"}
            phone={8801330128867}
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
            phone={8801827791122}
            fb="https://www.facebook.com/mdevan.sarker"
          ></Student>
          <Student
            img={"/girl.jpg"}
            title="Sumaiya Islam Ouishi"
            description="Natore"
            phone={8801862433898}
            fb="https://www.facebook.com/profile.php?id=100077558732875"
          ></Student>
          <Student
            img={"/meye.jpg"}
            title="MST. Rume Khatun"
            description="Rajshahi"
            phone={8801971183496}
            fb="https://www.facebook.com/profile.php?id=61560324622658"
          ></Student>
          <Student
            img={"/meye.jpg"}
            title="MST. Sadika Rubia "
            description="Dinajpur"
            phone={8801704383577}
            fb="https://www.facebook.com/profile.php?id=100060950273264"
          ></Student>
          <Student
            img={"/meye.jpg"}
            title="MST. Maya Akter"
            description="Mymensihgh"
            phone={8801}
            fb="https://www.facebook.com/maya.akter.588886"
          ></Student>
          <Student
            img={"/santo.jpg"}
            title="Md. Hasibul Islam"
            description="Pabna"
            phone={8801744-204817}
            fb="https://www.facebook.com/hasib.santo.790"
          ></Student>
          <Student
            img={"/rony.jpg"}
            title="Jobayer Rony"
            description="Sherpur"
            phone={8801643851764}
            fb="https://www.facebook.com/JobayerRony5678"
          ></Student>
          <Student
            img="/araf.jpg"
            title="Araf Zaman "
            description={"Pabna"}
            phone={8801973301382}
            fb="https://www.facebook.com/araf.zaman.718"
          ></Student>
          <Student
            img="/arafat.jpg"
            title="MD. Arafat Hossain "
            description={"Bogura"}
            phone={8801728473799}
            fb="https://www.facebook.com/profile.php?id=100026325469914"
          ></Student>
          <Student
            img="/rahib.jpg"
            title="MD. Rahib Chawdhury "
            description={"Dinajpur"}
            phone={8801998155343}
            fb="https://www.facebook.com/profile.php?id=100090396586934"
          ></Student>
          <Student
            img="/ifti.jpg"
            title="M Iftikharul Islam Khan "
            description={"Tangail"}
            phone={8801932804420}
            fb="https://www.facebook.com/Iftikharulislam.khan"
          ></Student>
          <Student
            img="/apurba.jpg"
            title="Apurba Chandra Sarker "
            description={"Netrakona"}
            phone={8801971477453}
            fb="https://www.facebook.com/apurba.sarker.5817"
          ></Student>
          <Student
            img={"/shishir.jpg"}
            title="Shishir Debnath"
            description="Tangail."
            phone={8801720342023}
            fb="https://www.facebook.com/profile.php?id=100031113705468"
          ></Student>
          <Student
            img={"/sami.jpg"}
            title="MD. Samiul Alim"
            description="Pabna."
            phone={8801825850540}
            fb="https://www.facebook.com/profile.php?id=61563980463805"
          ></Student>
          <Student
            img={"/sumon.jpg"}
            title="MD. Sumon Rayhan"
            description="Gazipur"
            phone={8801306667836}
            fb="https://www.facebook.com/profile.php?id=61552912084357"
          ></Student>
          <Student
            img={"/neem.jpg"}
            title="Neem Ahmed"
            description="Kishoreganj"
            phone={8801753266598}
            fb="https://www.facebook.com/naeemahmed.naeemahmed.98622"
          ></Student>
          <Student
            img={"/mehedi.jpg"}
            title="MD. Mehedi Hasan"
            description="Satkhira."
            phone={8801868809756}
            fb="https://www.facebook.com/profile.php?id=100086902454934"
          ></Student>
          <Student
            img={"/imran.jpg"}
            title="MD. Imran Hossen"
            description="Kishoreganj"
            phone={8801322439125}
            fb="https://www.facebook.com/profile.php?id=61559140854709"
          ></Student>
          <Student
            img={"/himel.jpg"}
            title="MD. Himel Hossen"
            description="Jhenaidah."
            phone={8801607788393}
            fb="https://www.facebook.com/md.himelhussain.01"
          ></Student>
          <Student
            img={"/shuvo.jpg"}
            title="Joytirmoy Sana Shuvo"
            description="Satkhira"
            phone={8801766738407}
            fb="https://www.facebook.com/profile.php?id=100072857113719"
          ></Student>
          <Student
            img={"/salman.jpg"}
            title="MD. Salman Ahmed Akash"
            description="Pabna"
            phone={8801724285148}
            fb="https://www.facebook.com/profile.php?id=100078435044091"
          ></Student>
          <Student
            img={"/atik.jpg"}
            title="MD. Atik Hasan"
            description="Rajshahi"
            phone={8801888526192}
            fb="https://www.facebook.com/profile.php?id=100012176677529"
          ></Student>
          <Student
            img={"/imtiaz.jpg"}
            title="Imtiaz Ahmed"
            description="Rajshahi"
            phone={8801311865439}
            fb="https://www.facebook.com/imtiaz2184"
          ></Student>
          <Student
            img={"/mithun.jpg"}
            title="MD. Naimul Islam Mithun"
            description="Pabna"
            phone={8801980185857}
            fb="https://www.facebook.com/naimulislam.mithun.5"
          ></Student>
          <Student
            img={"/emon.jpg"}
            title="MD. Mahfuzur  Rahman Emon"
            description="Khustia"
            phone={8801521720760}
            fb="https://www.facebook.com/profile.php?id=100080354675299"
          ></Student>
          {/* student card ends here... */}
        </div>
      </div>
    );
};

export default Students;