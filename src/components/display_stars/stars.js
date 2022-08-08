import Rand_array from "../Random/Rand_array";
import MakeStars from "../Make_stars/MakeStars";
import React from 'react'
const foo = Rand_array(12, 552);




const Stars = () => {
  return (
    <div className="w-full overflow-hidden flex ">
    <div className="text-primary  gap-2  sm:flex sm:flex-col  ">
      {
        foo.map((rows) => <div className=" flex items-center  ">
          {rows.map((item) => <div className="text-primary"><MakeStars items={item}/></div>)}
        </div>)
      }
      </div>
      <div>hello world</div>
    </div>
  );
}

export default Stars;