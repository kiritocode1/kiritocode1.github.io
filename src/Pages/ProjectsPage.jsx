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



//! logos import    
import {FaHtml5,FaCss3Alt,FaSass,FaJsSquare,FaNodeJs,FaMarkdown,FaPython,FaReact,FaGoogle,FaVuejs,FaGitSquare,FaGithub,FaGitlab,FaPhp,FaAndroid,FaAngular,} from "react-icons/fa"

import {DiMongodb,} from "react-icons/di"
import {SiExpress,SiRedux,SiDeno,SiAmazonaws,SiTypescript,SiSvelte,SiVercel,SiCplusplus,SiFlutter,SiIonic,SiRedis,SiDocker,SiTensorflow,SiKubernetes,SiFirebase} from "react-icons/si"
import {GrMysql} from "react-icons/gr"



const CoolBtn = ({ element }) => {
  return (
    <a.div className="btn btn-ghost hover:text-primary btn-circle md:w-20 md:h-20 md:text-4xl text-2xl">
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
        <CoolBtn element={<SiTensorflow />} />
        <CoolBtn element={<SiKubernetes />} />
        <CoolBtn element={<SiFirebase/>}/>

        
        
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
        <div className="w-8 absolute z-10 top-[1.09rem] left-[4.12rem] bg-base-100 ">
          <img src={MarioCoin} alt="coiny2" />
          </div>
      </div>

      
      </div>
    
  );
}

export default ProjectsPage