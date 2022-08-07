import React from 'react'
import { useSpring, animated as a  } from 'react-spring';
const HomePage = () => {
    const ask = useSpring(
    {
      from: {  rotateZ:0,x:0},
      to: { rotateZ:290 ,x:100},
      loop: { reverse: true },
      delay:1500
    }
  );
  return (
    <div className="h-[40rem] flex flex-col items-center justify-center">
      <div className="font-extrabold mono_text3 md:text-9xl  text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-3xl hover:bg-gradient-to-l transition ease-linear delay-150  animate-glow " id="#content">Hello WoRld</div>
      <a.div style={{ ...ask }} className={"w-20 h-20 bg-accent rounded-lg"}>
      </a.div>

    </div>
  );
}

export default HomePage;