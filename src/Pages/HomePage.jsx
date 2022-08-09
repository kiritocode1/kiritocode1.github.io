import React from 'react'
import { useSpring, animated as a } from 'react-spring';
import { Link } from "react-router-dom";
import  Picture  from "../Pictures/me.png";

import TextGradient from '../components/display_stars/Gradient/TextGradient';
import {FiTwitter} from "react-icons/fi"
import {AiOutlineLinkedin} from "react-icons/ai"
const HomePage = () => {
    const ask = useSpring(
    {
        from: { rotateZ:0},
      to: {  rotateZ:360},
      loop: true,
      config:{duration:13000}
    }
  );

  return (
    <div className=" flex flex-col items-center justify-center gap-3 pb-3 z-10">
              




      <div class="avatar ">
  <div class="w-[10rem] mask mask-hexagon ">
    <img src={Picture} alt="profile" />
  </div>
      </div>








      <div className=" mono_text4 md:text-5xl  text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-3xl hover:bg-gradient-to-l transition ease-linear delay-150  animate-glow  mb-2 h-20 w-full rocket" id="#content">@Aryan_Kathawale</div>

      <div className="flex flex-col  lg:flex-row w-full items-center gap-12 justify-center  pt-4 md:px-16 mt-10">



        <div className=" bg-neutral w-full rounded-xl h-[20rem] text-white flex flex-col gap-4 pt-8 px-6">
          <h1 className='text-3xl flex mono_text4'>About Me👋</h1>
          <div className="mono_text2 font-extrabold flex  text-start w-full flex-wrap"><b className="flex shrink-0">hello there  , im Aryan kathawale ,<br/> Im a 19 yr old </b> <TextGradient text="Computer Programmer" link="projects" /> <b className="flex shrink-0 flex-wrap">based in India, I focus Mostly on &nbsp;</b> 
            <TextGradient text="Open Source &nbsp;" link="offline" />
            <b className="flex shrink-0 flex-wrap">projects </b> 
            <b className="flex shrink-0 flex-wrap">  and cool technologies , i believe <br />and work towards<br />  a society  based on  Curiosity and <br /> Collaboration.  </b> 
          </div>
        </div>
        <div className=" flex w-full rounded-xl justify-center md:visible relative h-[20rem] overflow-hidden items-center">
          <div className="backdrop-filter backdrop-blur-lg bg-opacity-20 z-10 bg-secondary w-full absolute h-[20rem] mono_text4 flex flex-col px-6 pt-8 text-neutral">
          
          <h1 className='text-3xl flex hover:before:content-["#"] hover:before:transition hover:before:ease-out hover:before:delay-[5000ms] hover:before:text-primary'>Socialize </h1>
          <div className="mono_text2">Id love to talk and geek out with you 😊, on projects and jobs </div>
            <div className="w-full  h-40 flex items-start p-4 justify-evenly flex-col flex-wrap">
              <a className="btn btn-rounded flex items-center justify-evenly" href='https://twitter.com/kiritotwt1'><FiTwitter /></a>
              <a className="btn btn-rounded" href='https://www.linkedin.com/in/aryan-kathawale-8983b5171/'><AiOutlineLinkedin /></a>
              <div>im active on other places too , checkout <TextGradient link="Socials" text="/Socials"/>
              
              </div>
          </div>
          </div>  
                          <a.div style={{ ...ask }} className="w-[90rem]  rounded-lg  flex justify-evenly absolute">
        <div className="w-2 h-2 bg-secondary glow_contact1 rounded-full " />
        <div className="w-2 h-2 bg-secondary glow_contact2 rounded-full" />
      </a.div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;