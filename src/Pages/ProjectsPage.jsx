// import React from 'react'
// import { BiErrorCircle } from "react-icons/bi"
// const ProjectsPage = () => {
//   return (
//     <div className="w-full h-96 flex flex-col items-center justify-center">
//       ProjectsPage
//       <BiErrorCircle className="w-40 h-40" />
//       <div className="text-4xl mono_text1">UMM ... 404? </div>
//       <div>work in progress</div>
//     </div>
//   );
// }

// export default ProjectsPage;

import React from 'react'
import sonicRing from "../Pictures/sonic_ring.webp";
import MoneySounds from "../Sounds/gameySounds/Coin.mp3"
import useSound from "use-sound";
import { useSpring, animated as a } from "react-spring";
import { useState } from 'react';
import MarioCoin from "../Pictures/mario.gif";
import MarioCoinMusic from "../Sounds/mario.mp3";
import { BsFileEarmarkCodeFill,BsFillPatchQuestionFill } from "react-icons/bs";


import mosmi from "../ProjectPictures/Mosmi.png";
import cgpa from "../ProjectPictures/cgpa.png";
import BookMyShow from "../ProjectPictures/Book-My-Show.png";
import Tasky from "../ProjectPictures/tasky.png";






//! logos import    
import {FaHtml5,FaCss3Alt,FaSass,FaJsSquare,FaNodeJs,FaMarkdown,FaPython,FaReact,FaGoogle,FaVuejs,FaGitSquare,FaGithub,FaGitlab,FaPhp,FaAndroid,FaAngular,FaLink} from "react-icons/fa"

import {DiMongodb,} from "react-icons/di"
import {SiExpress,SiRedux,SiDeno,SiAmazonaws,SiTypescript,SiSvelte,SiVercel,SiCplusplus,SiFlutter,SiIonic,SiRedis,SiDocker,SiTensorflow,SiKubernetes,SiFirebase} from "react-icons/si"
import {GrMysql} from "react-icons/gr"
import Gulp from "../MoreSounds/glug.mp3"


const CoolBtn = ({ element ,mariocoinsound}) => {
  const [onhovery, setonhovery] = useState(false);
  const styley = useSpring({
    width: onhovery ? 100 : 70, 
    height: onhovery ? 100 : 70, 
    fontSize:onhovery?60:40
  })

  return (
    <a.div className="btn btn-ghost hover:text-primary btn-circle md:w-20 md:h-20 md:text-4xl text-2xl" onMouseEnter={()=>{
      mariocoinsound();
      setonhovery(!onhovery);
    }}
      onMouseLeave={() => {
        setonhovery(!onhovery);
    }}
    style={{...styley}}
    >
      {element}
    </a.div>
  )
}

const CardForProjects = ({src,live,title,context , badges , code}) => {
  return (
    <div class="card w-96 bg-base-400 shadow-xl">
  <figure class="px-10 pt-10">
    <a href={live}><img src={src} alt="Shoes" class="rounded-xl hover:ring-4 ring-white" /></a>
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{title}</h2>
        <p>{context}</p>
        <div className="w-full flex flex-wrap items-center  justify-end">
          {badges.map(badge=><div className="badge  badge-accent"><BsFillPatchQuestionFill/>{badge}</div>)}
        </div>
        <div class="card-actions">
      <a href={code}><button class="btn btn-primary"><BsFileEarmarkCodeFill/>Checkout Code</button></a>
    </div>
  </div>
</div>
  )
}





// src/Pictures/

const ProjectsPage = () => {
  const [moneysound] = useSound(MoneySounds);
  const [mariocoinsound] = useSound(MarioCoinMusic);
  const [gulp] = useSound(Gulp);
  const [money,setm] = useState(false);
  const moneyText = useSpring({
    backgroundColor: money ? "gold" :"green", 
    config:{duration:500}
  });


  return (
    <div className="w-full  flex flex-col items-center justify-center ">
      <div className="flex   relative  ">
        <div className=' z-10 absolute  bg-base-100 rounded-full top-[1.4rem] left-[8.5rem] ' onClick={() => {
          moneysound();
          setm(!money);
        }}><img src={sonicRing} alt="SonicRing" className="w-8  " /></div>
        <a.div style={moneyText}   className="text-transparent bg-clip-text  text-9xl  skills bg-primary">Skills</a.div>
      </div>
      

      <div className="w-full   flex flex-wrap px-4 justify-center items-start">
        <CoolBtn element={<FaHtml5 />} mariocoinsound={gulp} />
        <CoolBtn element={<FaCss3Alt />}  mariocoinsound={gulp}/>
        <CoolBtn element={<FaSass />}  mariocoinsound={gulp} />
        <CoolBtn element={<FaJsSquare />} mariocoinsound={gulp}/>
        <CoolBtn element={<SiTypescript />} mariocoinsound={gulp}/>
        <CoolBtn element={<SiDeno />} mariocoinsound={gulp}/>
        <CoolBtn element={<SiIonic />} mariocoinsound={gulp}/>
        <CoolBtn element={<SiVercel />} mariocoinsound={gulp}/>
        <CoolBtn element={<SiSvelte />} mariocoinsound={gulp}/>
        <CoolBtn element={<SiAmazonaws />} mariocoinsound={gulp} />
        <CoolBtn element={<FaNodeJs />} mariocoinsound={gulp}/>
        <CoolBtn element={<FaMarkdown />} mariocoinsound={gulp} />
        <CoolBtn element={<FaPython />} mariocoinsound={gulp} />
        <CoolBtn element={<FaReact />} mariocoinsound={gulp} />
        <CoolBtn element={<FaVuejs />} mariocoinsound={gulp} />
        <CoolBtn element={<DiMongodb />} mariocoinsound={gulp} />
        <CoolBtn element={<SiExpress />} mariocoinsound={gulp} />
        <CoolBtn element={<SiRedux />}  mariocoinsound={gulp}/>
        <CoolBtn element={<FaAngular />} mariocoinsound={gulp} />
        <CoolBtn element={<FaAndroid />} mariocoinsound={gulp} />
        <CoolBtn element={<FaGitSquare />} mariocoinsound={gulp} />
        <CoolBtn element={<FaGithub />} mariocoinsound={gulp}/>
        <CoolBtn element={<FaGoogle />} mariocoinsound={gulp}/>
        <CoolBtn element={<SiCplusplus />} mariocoinsound={gulp}/>
        <CoolBtn element={<FaGitlab />} mariocoinsound={gulp}/>
        <CoolBtn element={<FaPhp />} mariocoinsound={gulp}/>
        <CoolBtn element={<SiRedis />} mariocoinsound={gulp}/>
        <CoolBtn element={<SiFlutter />} mariocoinsound={gulp}/>
        <CoolBtn element={<GrMysql />} mariocoinsound={gulp}/>
        <CoolBtn element={<SiDocker />} mariocoinsound={gulp}/>
        <CoolBtn element={<SiTensorflow />} mariocoinsound={gulp}/>
        <CoolBtn element={<SiKubernetes />} mariocoinsound={gulp}/>
        <CoolBtn element={<SiFirebase/>} mariocoinsound={gulp}/>

        
        
      </div>
            <div className="flex">
      <div className="text-2xl">Why No Percentage ?</div> 
<div class="dropdown dropdown-end">
  <label tabindex="0" class="btn btn-circle btn-ghost btn-xs text-info">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  </label>
  <div tabindex="0" class="card compact dropdown-content shadow bg-base-100 rounded-box w-64">
    <div class="card-body">
      <h2 class="card-title twitter_text">Why i dont showcase percentage ?</h2> 
              <p className="twitter_text text-xs">
                although i can easily portray like 80-90% , 
                i feel like that undermines the learning and is for <b>you</b> to decide, 
                but in my opinion i can still get into any project with these tech and understand how theyre working.
      </p>
    </div>
  </div>
</div>
      </div>

      <div className="mb-40 mt-60 text-6xl heroMarkup relative flex">
        <div>Projects</div>
        <div className="w-8 absolute z-10 top-[1.09rem] left-[4.12rem] bg-base-100 " onClick={()=>mariocoinsound()}>
          <img src={MarioCoin} alt="coiny2"  />
          </div>
      </div>

      <div className="   flex flex-wrap items-center justify-evenly gap-10 mb-10">

                <CardForProjects src={BookMyShow} live="https://tailwind-css-beginner-practice-bms.vercel.app/" title="Personal Website" context="this is a private website for my sister as a birthday gift , 🎂" code="https://github.com/kiritocode1/React-Subject/nukes/" badges={["html", "css", "js", "react", "animations"]} />



        {/*! src,live,title,context , badges , code */}
        <CardForProjects src={mosmi} live="https://mosmikathawale.vercel.app/" title="Personal Website" context="this is a private website for my sister as a birthday gift , 🎂" code="https://github.com/kiritocode1/tailwind-css-beginner-practice" badges={["html", "css", "js", "react", "animations"]} />

                <CardForProjects src={cgpa} live="https://cgpa-to-percentage.vercel.app/ " title="Cgpa-to-percentage converter" context="crude website to convert cgpa to percentage done by my team in 2 hours" code="https://github.com/kiritocode1/Cgpa-to-percentage" badges={["html", "css", "js", "react", "animations"]} />
        {/* 
        https://github.com/kiritocode1/Tasky-Project
        https://kiritocode1.github.io/Tasky-Project/
        
        */}
      </div>
      
      </div>
    
  );
}

export default ProjectsPage