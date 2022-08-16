import React from 'react'
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa"
import kooshbrain from "../ProjectPictures/koosh-brain.png"
import { useSpring,animated as a  } from 'react-spring'

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
      <div className="flex  items-center  h-40 font-mono bg-base-100 text-6xl gap-2">
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
        <div className="mx-2 border-primary border-dashed border-4   rounded-xl text-2xl mono_text4">
          insert the  Blog Posts here 
        </div></div>



        <div className="text-4xl mono_text1
        ">People i Reccomend You to Follow</div>
      </div>

      <div className="EddieJoude w-full h-[30rem]  px-6">
<div class="avatar">
  <div class="w-60 mask mask-squircle">
    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGebyWspiK0yw/profile-displayphoto-shrink_800_800/0/1598013722461?e=1666224000&v=beta&t=0u5UsSB3lhLSumCEa3csFlFm-XjLHLqh0bZ1vxNBR0Q" alt="eddie" className="absolute" />
  </div>
</div>
      </div>
    </div>
  )
}

export default LearnPage;