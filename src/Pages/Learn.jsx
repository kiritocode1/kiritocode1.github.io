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
      <div className="flex  items-center  h-40 font-mono bg-base-100 text-6xl">
        <FaQuoteLeft/>
        {quotes[Math.floor(Math.random() * quotes.length)]}<FaQuoteRight/>
      </div>
      <div>

              <div className="mono_text4">
        this is just  a private repo for all the resources and topics and things to cover including web dev , full stack and much much more
        </div>









        <div className="text-4xl mono_text1
        ">
          Topics To learn
        </div>


        <div className="text-4xl mono_text1
        ">People i Reccomend You to Follow</div>
      </div>
    </div>
  )
}

export default LearnPage;