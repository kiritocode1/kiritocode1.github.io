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




//! logos import    
import {FaHtml5,FaCss3Alt,FaSass,FaJsSquare,FaNodeJs,FaMarkdown,FaPython,FaReact,FaGoogle,FaVuejs,FaGitSquare,FaGithub,FaGitlab,FaPhp,FaAndroid,FaAngular,} from "react-icons/fa"

import {DiMongodb,} from "react-icons/di"
import {SiExpress,SiRedux,SiDeno,SiAmazonaws,SiTypescript,SiSvelte,SiVercel,SiCplusplus,SiFlutter,SiIonic,SiRedis,SiDocker,SiKubernetes} from "react-icons/si"
import {GrMysql} from "react-icons/gr"



const CoolBtn = ({ element }) => {
  return (
    <a.div className="btn btn-ghost hover:text-primary btn-circle md:w-20 md:h-20 md:text-4xl">
      {element}
    </a.div>
  )
}






// src/Pictures/

const ProjectsPage = () => {
  const [moneysound] = useSound(MoneySounds);
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
        <CoolBtn element={<FaHtml5 />} />
        <CoolBtn element={<FaCss3Alt />} />
        <CoolBtn element={<FaSass />} />
        <CoolBtn element={<FaJsSquare />} />
        <CoolBtn element={<SiTypescript />} />
        <CoolBtn element={<SiDeno />} />
        <CoolBtn element={<SiIonic />} />
        <CoolBtn element={<SiVercel />} />
        <CoolBtn element={<SiSvelte />} />
        <CoolBtn element={<SiAmazonaws />} />
        <CoolBtn element={<FaNodeJs />} />
        <CoolBtn element={<FaMarkdown />} />
        <CoolBtn element={<FaPython />} />
        <CoolBtn element={<FaReact />} />
        <CoolBtn element={<FaVuejs />} />
        <CoolBtn element={<DiMongodb />} />
        <CoolBtn element={<SiExpress />} />
        <CoolBtn element={<SiRedux />} />
        <CoolBtn element={<FaAngular />} />
        <CoolBtn element={<FaAndroid />} />
        <CoolBtn element={<FaGitSquare />} />
        <CoolBtn element={<FaGithub />} />
        <CoolBtn element={<FaGoogle />} />
        <CoolBtn element={<SiCplusplus />} />
        <CoolBtn element={<FaGitlab />} />
        <CoolBtn element={<FaPhp />} />
        <CoolBtn element={<SiRedis />} />
        <CoolBtn element={<SiFlutter />} />
        <CoolBtn element={<GrMysql />} />
        <CoolBtn element={<SiDocker />} />
        <CoolBtn ELEMENT={<SiKubernetes/>}/>
        
      </div>




      
      </div>
    
  );
}

export default ProjectsPage