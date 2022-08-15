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
import {FaHtml5,FaCss3Alt,FaSass,FaJsSquare,FaNodeJs,FaMarkdown,FaPython,FaReact,FaGoogle,FaVuejs,FaGitSquare,FaGithub,FaGitlab,FaPhp,FaAndroid,FaAngular} from "react-icons/fa"

import {DiMongodb,} from "react-icons/di"
import {SiExpress,SiRedux,SiDeno,SiAmazonaws,SiTypescript,SiSvelte,SiVercel,SiCplusplus,SiFlutter,SiIonic,SiRedis} from "react-icons/si"
import {GrMysql} from "react-icons/gr"

const Dropdown = ({child , Language , context}) => {
  return (
    <div class="dropdown">
  <label tabindex="0" class="btn btn-ghost btn-circle w-20 h-20 md:m-2">
    {child}
  </label>
  <div tabindex="0" class="dropdown-content card card-compact w-64 p-2 shadow bg-primary text-primary-content">
    <div class="card-body">
      <h3 class="card-title text-3xl heroMarkup">{Language}</h3>
      <p>{context}</p>
    </div>
  </div>
</div>
  );
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
        <div className=' z-10 absolute  bg-base-100 rounded-full ' onClick={() => {
          moneysound();
          setm(!money);
        }}><img src={sonicRing} alt="SonicRing" className="w-8  " /></div>
        <a.div style={moneyText}   className="text-transparent bg-clip-text  text-9xl  skills bg-primary">Skills</a.div>
      </div>
      <div className="w-full  flex flex-wrap justify-center items-center">
        <Dropdown child={<FaHtml5       className='w-8 md:w-12 h-8 md:h-12 text-neutral hover:text-primary focus:text-primary'/>} Language="google" context="google"/>
        <Dropdown child={<FaCss3Alt        className='w-8 md:w-12 h-8 md:h-12 text-neutral hover:text-primary focus:text-primary'/>} Language="google" context="google" />
        <Dropdown child={<FaSass       className='w-8 md:w-12 h-8 md:h-12 text-neutral hover:text-primary focus:text-primary'/>} Language="google" context="google"/>
        <Dropdown child={<FaJsSquare       className='w-8 md:w-12 h-8 md:h-12 text-neutral hover:text-primary focus:text-primary'/>} Language="google" context="google"/>
        <Dropdown child={<FaMarkdown       className='w-8 md:w-12 h-8 md:h-12 text-neutral hover:text-primary focus:text-primary'/>} Language="google" context="google"/>
        <Dropdown child={<FaNodeJs       className='w-8 md:w-12 h-8 md:h-12 text-neutral hover:text-primary focus:text-primary'/>} Language="google" context="google"/>
        <Dropdown child={<FaPython       className='w-8 md:w-12 h-8 md:h-12 text-neutral hover:text-primary focus:text-primary'/>} Language="google" context="google"/>
        <Dropdown child={<FaReact       className='w-8 md:w-12 h-8 md:h-12 text-neutral hover:text-primary focus:text-primary'/>} Language="google" context="google"/>
        <Dropdown child={<FaVuejs       className='w-8 md:w-12 h-8 md:h-12 text-neutral hover:text-primary focus:text-primary'/>} Language="google" context="google"/>
        <Dropdown child={<FaGitSquare       className='w-8 md:w-12 h-8 md:h-12 text-neutral hover:text-primary focus:text-primary'/>} Language="google" context="google"/>
        <Dropdown child={<FaGithub       className='w-8 md:w-12 h-8 md:h-12 text-neutral hover:text-primary focus:text-primary'/>} Language="google" context="google"/>
        <Dropdown child={<FaGitlab       className='w-8 md:w-12 h-8 md:h-12 text-neutral hover:text-primary focus:text-primary'/>} Language="google" context="google"/>
        <Dropdown child={<FaAngular       className='w-8 md:w-12 h-8 md:h-12 text-neutral hover:text-primary focus:text-primary'/>} Language="google" context="google"/>
        <Dropdown child={<SiExpress       className='w-8 md:w-12 h-8 md:h-12 text-neutral hover:text-primary focus:text-primary'/>} Language="google" context="google"/>
        <Dropdown child={<DiMongodb       className='w-8 md:w-12 h-8 md:h-12 text-neutral hover:text-primary focus:text-primary'/>} Language="google" context="google"/>
        <Dropdown child={<SiRedis       className='w-8 md:w-12 h-8 md:h-12 text-neutral hover:text-primary focus:text-primary'/>} Language="google" context="google"/>
        <Dropdown child={<SiRedux       className='w-8 md:w-12 h-8 md:h-12 text-neutral hover:text-primary focus:text-primary'/>} Language="google" context="google"/>
        <Dropdown child={<FaPhp       className='w-8 md:w-12 h-8 md:h-12 text-neutral hover:text-primary focus:text-primary'/>} Language="google" context="google"/>
        <Dropdown child={<SiAmazonaws       className='w-8 md:w-12 h-8 md:h-12 text-neutral hover:text-primary focus:text-primary'/>} Language="google" context="google"/>
        <Dropdown child={<FaGoogle       className='w-8 md:w-12 h-8 md:h-12 text-neutral hover:text-primary focus:text-primary'/>} Language="google" context="google"/>
        <Dropdown child={<FaAndroid       className='w-8 md:w-12 h-8 md:h-12 text-neutral hover:text-primary focus:text-primary'/>} Language="google" context="google"/>
        <Dropdown child={<SiDeno className='w-8 md:w-12 h-8 md:h-12 text-neutral hover:text-primary focus:text-primary' />} Language="google" context="google" />
        <Dropdown child={<SiSvelte className='w-8 md:w-12 h-8 md:h-12 text-neutral hover:text-primary focus:text-primary' />} Language="google" context="google" /> 
        <Dropdown child={<SiVercel className='w-8 md:w-12 h-8 md:h-12 text-neutral hover:text-primary focus:text-primary' />} Language="google" context="google" />     
        <Dropdown child={<SiFlutter className='w-8 md:w-12 h-8 md:h-12 text-neutral hover:text-primary focus:text-primary' />} Language="google" context="google" />  
        
       <Dropdown child={<SiTypescript className='w-8 md:w-12 h-8 md:h-12 text-neutral hover:text-primary focus:text-primary' />} Language="google" context="google" />
      <Dropdown child={<SiCplusplus className='w-8 md:w-12 h-8 md:h-12 text-neutral hover:text-primary focus:text-primary' />} Language="google" context="google" />        
      <Dropdown child={<SiIonic className='w-8 md:w-12 h-8 md:h-12 text-neutral hover:text-primary focus:text-primary' />} Language="google" context="google" />        
      <Dropdown child={<GrMysql className='w-8 md:w-12 h-8 md:h-12 text-neutral hover:text-primary focus:text-primary' />} Language="google" context="google" />        
</div>




      
      </div>
    
  );
}

export default ProjectsPage