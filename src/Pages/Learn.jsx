import React from 'react'
import { FaQuoteLeft,FaQuoteRight, FaGuitar } from "react-icons/fa"
import kooshbrain from "../ProjectPictures/koosh-brain.png"
import { useSpring,animated as a  } from 'react-spring'
import { RiVipCrownLine } from "react-icons/ri";
import {IoGlassesSharp} from "react-icons/io5";
import {GiLoveSong,GiEgyptianBird} from "react-icons/gi";
import moot from "../MoreSounds/boop.mp3"; 
import useSound from "use-sound";
const LearnPage = () => {
const [boop] =useSound(moot);
  const brainStyle = useSpring({
    from: { y: 60 },
    y: 80,
    loop: { reverse: true },
    config:{duration:6000}
  })
  const quotes = ["Fail Faster","Question Everything", "think Openly.","Worry Less","imagine Loudly","Be Wierd","Hakuna Matata!","Help Others"]
  return (
    <div className="w-full  flex flex-col items-center justify-center ">
      <a.div style={{...brainStyle}} className="bg-clip"><img src={kooshbrain} alt="imagebrain" classNAme="hover:ring-8" /></a.div>
      <div className="flex  items-center  h-40 font-mono bg-base-100 text-[3.4rem]  justify-center px-2">
        <FaQuoteLeft/>
        {quotes[Math.floor(Math.random() * quotes.length)]}<FaQuoteRight/>
      </div>
      <div>
        <div className="text-4xl mono_text1
        mb-2">
          Topics To learn
        </div>
              <div className="mono_text4 text-2xl px-6">
          this is just  a private repo for all the resources and topics and things to cover including web dev , full stack 
          Data Structures and Much More .  start reading . this is the fastest way to learn and costs free. also  the topics will each be a new repo . if you want to update the repo you can do  by visiting the end of the page and clicking on the link there . if you make a new topic you want to add , add an issue to this repo and ill do it  . also thank you for checking out my profile . 
        </div>
        <div className="w-full flex justify-center items-center h-[30rem]">
        <div className="mx-2 border-primary border-dashed border-4   rounded-xl text-xl mono_text4">
          insert the  Blog Posts here 
        </div></div>



        <div className="text-4xl twitter_text
        ">People i Reccomend You to Follow</div>
      </div>

      {/* <div className="EddieJoude w-full h-[30rem]  px-6">
<div class="avatar">
  <div class="w-40 mask mask-squircle">
    <img src="" alt="eddie" className="absolute" />
  </div>
        </div>

      </div> */}
      <div className="Eddie  relative my-20">
        <RiVipCrownLine className="md:absolute md:z-10 md:text-9xl  md:top-[4rem] md:left-72 md:rotate-[10deg] md:blur-sm invisible md:visible   text-red-500 animate-pulse "/>
      <div class="card lg:card-side bg-base-100 shadow-xl text-lg">
        
  <figure><img src="https://media-exp1.licdn.com/dms/image/C4E03AQGebyWspiK0yw/profile-displayphoto-shrink_800_800/0/1598013722461?e=1666224000&v=beta&t=0u5UsSB3lhLSumCEa3csFlFm-XjLHLqh0bZ1vxNBR0Q" alt="Album"/></figure>
  <div class="card-body">
    <h2 class="card-title text-3xl twitter_text">Eddie Jaoude</h2>
            <p >Eddie is an Open Source developer , Github Star and one of the most trusted source of inspiration on the planet .
            He is CoFounder of <a href="https://www.eddiehub.org/" className="btn btn-ghost animate-pulse" target="_blank"  rel="noreferrer" onMouseEnter={()=>boop()}>@Eddiehub</a> . Follow him to get to know more about Open Source and Contributing to the wider community and learn more about Adding value to your resume and your working style . 
    </p>
    <div class="card-actions justify-end">
      <a href="https://www.eddiehub.org/"  target="_blank"  rel="noreferrer">
      <button class="btn btn-primary">Follow Him</button></a>
    </div>
  </div>
            </div>
      </div>
          <div className="Kunal Kushwaha  relative my-20">
        <div className="md:absolute md:z-10 md:text-6xl  md:top-[14rem] md:left-[30rem] md:-rotate-[10deg] md:blur-sm invisible md:visible   text-sky-500 animate-pulse ">[   Certified Goat ]</div>
      <div class="card lg:card-side bg-base-100 shadow-xl text-lg">
        
  <figure><img src="https://avatars.githubusercontent.com/u/42698533?v=4" alt="Kunal"/></figure>
  <div class="card-body">
    <h2 class="card-title text-3xl twitter_text">Kunal Kushwaha</h2>
            <p >Kunal Kushwaha is easily one of the best teacher and example  to show that hardwork and willpower is enough to learn and do anything . He is  the founder of <a href="https://www.commclassroom.org/" target="_blank" rel="noreferrer" className="btn btn-ghost animate-pulse" onMouseEnter={()=>boop()}>@Community Classroom</a> and will help you a lot to get into devOPs , CNCF and Opportunities
    </p>
    <div class="card-actions justify-end">
      <a href="https://www.commclassroom.org/"  target="_blank"  rel="noreferrer">
      <button class="btn btn-primary" onMouseEnter={()=>boop()}>Follow Him</button></a>
    </div>
  </div>
            </div>
      </div>
            <div className="Arsh Goyal  relative my-20">
        <IoGlassesSharp className="md:absolute md:z-10 md:text-[8rem]  md:top-[4.75rem] md:left-[9.4rem] md:rotate-[1deg] md:blur-sm invisible md:visible   text-green-600 animate-pulse "/>
      <div class="card lg:card-side bg-base-100 shadow-xl text-lg">
        
  <figure><img src="https://media-exp1.licdn.com/dms/image/C4D03AQFiExHrbotsqQ/profile-displayphoto-shrink_400_400/0/1640675476658?e=1666224000&v=beta&t=PYBmFU5zyJ8O-7l9ZWrFMJI8yb7OI0UexB81fSL670w" alt="Arsh"/></figure>
  <div class="card-body">
    <h2 class="card-title text-3xl twitter_text">Arsh Goyal </h2>
            <p >Arsh is Ex-isro Engineer . one of the hardes workers and one of the best ppl to get info from 
            His youtube handle  is  <a href="https://www.youtube.com/c/ArshGoyal" onMouseEnter={()=>boop()} className="btn btn-ghost animate-pulse" target="_blank"  rel="noreferrer">Arsh Goyal</a> also follow him on linked in for more info on Placements and other important stuff 
    </p>
    <div class="card-actions justify-end">
      <a href="https://www.linkedin.com/in/arshgoyal/"  target="_blank"  rel="noreferrer">
      <button class="btn btn-primary" onMouseEnter={()=>boop()}>his Linkedin </button></a>
    </div>
  </div>
            </div>



<div className="Naomi  relative my-20">
                                <GiLoveSong className="md:absolute md:z-10 md:text-6xl  md:top-[13rem] md:left-[30rem] md:rotate-[30deg] md:blur-sm invisible md:visible   text-purple-500 animate-pulse "/>
                    <GiLoveSong className="md:absolute md:z-10 md:text-6xl  md:top-[12rem] md:left-[40rem] md:rotate-[50deg] md:blur-sm invisible md:visible   text-purple-500 animate-pulse "/>
        <GiLoveSong className="md:absolute md:z-10 md:text-9xl  md:top-[14rem] md:left-[30rem] md:rotate-[10deg] md:blur-sm invisible md:visible   text-purple-500 animate-pulse "/>
      <div class="card lg:card-side bg-base-100 shadow-xl text-lg">
        
  <figure><img src="https://pbs.twimg.com/media/FZ28NIfUIAIChnI?format=jpg&name=small" alt="Album"/></figure>
  <div class="card-body">
    <h2 class="card-title text-3xl twitter_text">Naomi Carrigan</h2>
            <p >
           Naomi is one of the smartest people i know , trust me she can do more than many people can dream of , please follow her  , i learnt  discord.js and typescript entirely just by existing on her discord
    </p>
    <div class="card-actions justify-end">
      <a href="https://www.naomi.lgbt/"  target="_blank"  rel="noreferrer">
      <button class="btn btn-primary" onMouseEnter={()=>boop()}>Follow her</button></a>
    </div>
  </div>
            </div>
      </div>
          <div className="Ujjwal  relative my-20">
        <FaGuitar className="md:absolute md:z-10 md:text-9xl  md:top-[14rem] md:left-[35rem] md:-rotate-[60deg] md:blur-sm invisible md:visible   text-yellow-500 animate-pulse "/>
      <div class="card lg:card-side bg-base-100 shadow-xl text-lg">
        
  <figure><img src="https://media-exp1.licdn.com/dms/image/C4D03AQE4gsOj1lNnpQ/profile-displayphoto-shrink_400_400/0/1591319621197?e=1666224000&v=beta&t=2YFim5ZiZsPxbJsTTlne7i9QQHq0QWoDMg7Kmp0xcU0" alt="ujjwal"/></figure>
  <div class="card-body">
    <h2 class="card-title text-3xl twitter_text">Ujjwal Chadha</h2>
            <p >Ujjwal is an absolute chad teacher , his tweets daily and i would appreciate if you can go give him a follow 
    </p>
    <div class="card-actions justify-end">
      <a href="https://www.eddiehub.org/"  target="_blank"  rel="noreferrer">
      <button class="btn btn-primary" onMouseEnter={()=>boop()}>Follow Him</button></a>
    </div>
  </div>
            </div>
      </div>
              <div className="Robin  relative my-20">
        <GiEgyptianBird className="md:absolute md:z-10 md:text-9xl  md:top-[17rem] md:left-[55rem] md:blur-sm invisible md:visible   text-rose-600	 animate-pulse "/>
      <div class="card lg:card-side bg-base-100 shadow-xl text-lg">
        
  <figure><img src="https://pbs.twimg.com/profile_images/1545859901922099200/xVJvLZzk_400x400.jpg" alt="Robin"/></figure>
  <div class="card-body">
    <h2 class="card-title text-3xl twitter_text">Robin jagal</h2>
            <p >Robin is software engineer at google , he is awesome and deserves more love than here please go follow him , he'll surely help you .
    </p>
    <div class="card-actions justify-end">
      <a href="https://www.linkedin.com/in/ujjwalchadha8/"  target="_blank"  rel="noreferrer">
      <button class="btn btn-primary" onMouseEnter={()=>boop()}>Follow Him</button></a>
    </div>
  </div>
            </div>
      </div>
        </div>
    </div>
  )
}

export default LearnPage;