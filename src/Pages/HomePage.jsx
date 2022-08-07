import React from 'react'
import { useSpring, animated as a  } from 'react-spring';
const HomePage = () => {
    const ask = useSpring(
    {
      from: {  rotateZ:0,x:0 , y:-200 , rotateX:0 , rotateY:0 , borderRadius:"20%"},
      to: { rotateZ:290 ,x:-100 ,y:100 , rotateX:390 , rotateY:-390, borderRadius:"50%"},
      loop: { reverse: true },
      delay:900
    }
  );
  return (
    <div className="h-[40rem] flex flex-col items-center justify-center">
      <div className="font-extrabold mono_text3 md:text-9xl  text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-3xl hover:bg-gradient-to-l transition ease-linear delay-150  animate-glow " id="#content">Hello WoRld</div>
      <a.div style={{ ...ask }} className={"w-20 h-20 bg-accent rounded-lg"}>
      </a.div>
      <h1>Coding in progress</h1>
    </div>
  );
}

export default HomePage;