import React from 'react'
import { useSpring, animated as a } from 'react-spring';

import  Picture  from "../Pictures/kirito..png";

import TextGradient from '../components/display_stars/Gradient/TextGradient';


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








      <div className=" mono_text4 md:text-5xl  text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-3xl hover:bg-gradient-to-l transition ease-linear delay-150  animate-glow  mb-2 h-20 w-full" id="#content">@Aryan_Kathawale</div>

      <div className="flex flex-col  lg:flex-row w-full items-center gap-12 justify-center  pt-4 md:px-16 mt-10">



        <div className=" bg-neutral w-full rounded-xl h-[20rem] text-white flex flex-col gap-4 pt-8 px-6">
          <h1 className='text-3xl flex mono_text4'>About Me👋</h1>
          <div className="mono_text2 font-extrabold flex  text-start w-full flex-wrap"><b className="flex shrink-0">hello there  , im Aryan kathawale ,<br/> Im a 19 yr old </b> <TextGradient text="Computer Programmer" link="projects" /> <b className="flex shrink-0 flex-wrap">based in India, I focus Mostly on &nbsp;</b> 
            <TextGradient text="Open Source &nbsp;" link="offline" />
            <b className="flex shrink-0 flex-wrap">projects </b> 
            <b className="flex shrink-0 flex-wrap">  and cool technologies , i believe and<br /> work towards<br />  a society  based on  Curiosity and <br /> Collaboration.  </b> 
          </div>
        </div>
        <div className=" flex w-full rounded-xl justify-center invisible md:visible relative h-[20rem] overflow-hidden items-center">
          <div className="backdrop-filter backdrop-blur-lg bg-opacity-20 z-10 bg-secondary w-full absolute h-[20rem] mono_text4 flex flex-col px-6 pt-8 text-neutral">
          
          <h1 className='text-3xl flex '>Contact Me here, pwease </h1>
          <div>Id love to talk and geek out with you 😊 </div>
          
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