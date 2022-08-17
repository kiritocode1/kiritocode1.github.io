import React from 'react'
import booklol from "../ProjectPictures/booklol copy.webp"
import { useSpring,animated as a  } from 'react-spring'
const BlogsPage = () => {
  const stylie = useSpring({
    from: { y: -50, rotatez:10 }, y: -100,rotatez:-10,
    config: { duration: 13000 },
    loop:{reverse:true}
  })
  return (
    <div className="w-full  flex flex-col items-center justify-center">
      <div className="flex w-full items-center justify-center gap-2 relative">
      <div className=" absolute text-accent text-6xl mono_text4 ">I Love Reading</div>
      <a.img src={booklol} alt="hehehe" className="w-40  z-10" style={{...stylie}}/>
      </div>
    </div>
  )
}

export default BlogsPage;