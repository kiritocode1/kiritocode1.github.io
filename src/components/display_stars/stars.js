import Rand_array from "../Random/Rand_array";

import React from 'react'
const foo = Rand_array(63,52);
const Stars = () => {
  return (
        <div className="text-primary  gap-2 hidden md:flex md:flex-col">
        {
              foo.map((rows) => <div className=" flex ">
                {rows.map((item)=><div className="text-primary">{item?"👹":"🖤"}</div>)}
            </div>)
        }       
        </div>
    )
}

export default Stars;