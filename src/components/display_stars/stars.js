import React from 'react'
import {useSpring,animated as a } from "react-spring";
import Rand_array from "../Random/Rand_array";
import MakeStars from "../Make_stars/MakeStars";
const foo = Rand_array(10, 552);




const Stars = () => {
  
  const styleStars = useSpring({
    from: { x: 0 }, 
    x: -1200, 
    config:{duration:96000}, 
    loop:{reverse:true}
})

  return (
    <div className="w-full overflow-hidden flex mb-4 ">
      <a.div style={{...styleStars}}>
    <div className="text-primary  gap-2  sm:flex sm:flex-col  ">
      {
        foo.map((rows) => <div className=" flex items-center  ">
          {rows.map((item) => <div className="text-primary"><MakeStars items={item}/></div>)}
        </div>)
      }
      </div>

        </a.div>
    </div>
  );
}

export default Stars;