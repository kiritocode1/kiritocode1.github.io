import React from 'react'
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa"
import kooshbrain from "../ProjectPictures/koosh-brain.png"
import { useSpring,animated as a  } from 'react-spring'
import { RiVipCrownLine } from "react-icons/ri";
import {IoGlassesSharp} from "react-icons/io5";
const LearnPage = () => {
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
            He is CoFounder of <a href="https://www.eddiehub.org/" className="btn btn-ghost animate-pulse" target="_blank"  rel="noreferrer">@Eddiehub</a> . Follow him to get to know more about Open Source and Contributing to the wider community and learn more about Adding value to your resume and your working style . 
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
            <p >Kunal Kushwaha is easily one of the best teacher and example  to show that hardwork and willpower is enough to learn and do anything . He is  the founder of <a href="https://www.commclassroom.org/" target="_blank" rel="noreferrer" className="btn btn-ghost animate-pulse">@Community Classroom</a> and will help you a lot to get into devOPs , CNCF and Opportunities
    </p>
    <div class="card-actions justify-end">
      <a href="https://www.commclassroom.org/"  target="_blank"  rel="noreferrer">
      <button class="btn btn-primary">Follow Him</button></a>
    </div>
  </div>
            </div>
      </div>
            <div className="Arsh Goyal  relative my-20">
        <IoGlassesSharp className="md:absolute md:z-10 md:text-[8rem]  md:top-[4.75rem] md:left-[9.4rem] md:rotate-[1deg] md:blur-sm invisible md:visible   text-green-600 animate-pulse "/>
      <div class="card lg:card-side bg-base-100 shadow-xl text-lg">
        
  <figure><img src="https://media-exp1.licdn.com/dms/image/C4D03AQFiExHrbotsqQ/profile-displayphoto-shrink_400_400/0/1640675476658?e=1666224000&v=beta&t=PYBmFU5zyJ8O-7l9ZWrFMJI8yb7OI0UexB81fSL670w" alt="Arsh"/></figure>
  <div class="card-body">
    <h2 class="card-title text-3xl twitter_text">Eddie Jaoude</h2>
            <p >Eddie is an Open Source developer , Github Star and one of the most trusted source of inspiration on the planet .
            He is CoFounder of <a href="https://www.eddiehub.org/" className="btn btn-ghost animate-pulse" target="_blank"  rel="noreferrer">@Eddiehub</a> . Follow him to get to know more about Open Source and Contributing to the wider community and learn more about Adding value to your resume and your working style . 
    </p>
    <div class="card-actions justify-end">
      <a href="https://www.eddiehub.org/"  target="_blank"  rel="noreferrer">
      <button class="btn btn-primary">Follow Him</button></a>
    </div>
  </div>
            </div>
        </div>
    </div>
  )
}

export default LearnPage;