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
      <a.div style={{...brainStyle}}><img src={kooshbrain} alt="imagebrain" /></a.div>
      <div className="flex  items-center  h-40 font-mono bg-base-100 text-6xl gap-2">
        <FaQuoteLeft/>
        {quotes[Math.floor(Math.random() * quotes.length)]}<FaQuoteRight/>
      </div>
      <div>
        <div className="text-4xl mono_text1
        mb-2">
          Topics To learn
        </div>
              <div className="mono_text4 text-2xl px-2">
          this is just  a private repo for all the resources and topics and things to cover including web dev , full stack 
          Data Structures and Much More . Click on the link , and start reading . this is the fastest way to learn and costs free. also  the topics will each be a new repo . if you want to update the repo you can do  by visiting the end of the page and clicking on the link there . if you make a new topic you want to add , add an issue to this repo and ill do it  . also thank you for checking out my profile . 
        </div>
        <div className="w-full flex justify-center items-center h-[30rem]">
        <div className="mx-2 border-primary border-dashed border-4   rounded-xl text-2xl mono_text4">
          insert the  Blog Posts here 
        </div></div>



        <div className="text-4xl mono_text1
        ">People i Reccomend You to Follow</div>
      </div>
    </div>
  )
}

export default LearnPage;