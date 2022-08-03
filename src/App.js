//? styles here . 
import './App.css';

import { HiColorSwatch } from "react-icons/hi";

import { useSpring, animated as a  } from "react-spring";
// import { useState } from 'react';
//? import element lol .  /////////////////////////////////////////////////////////////////////////////////////////////////

// import CircularProgress from './components/CircularProgress/CircularProgress';
//? Random Starry_sky Generator✅ ;
import Stars from './components/display_stars/stars';

// ? DAY-Night Theme Switch . lol .✅
// import ModeSwap from './components/light_dark'; 

//? Rating 5 ✅
// import RateFront from './components/Rating_system/Rate_front';

//? toggle done ✅
// import Toggle from './components/toggle/toggle';

//? phone done ✅
// import Phone from './components/phone/phone';

//? modal_prime done ✅
// import ModalPrime from './components/Modal/Modal_prime';

//? ModelPrompt done ✅
// import ModelImg from './components/Model/ModelImg';


//? Main Button Done ✅
import MainButton from './components/Button/Button';


//! Navbar 
import NavBar from './components/NavBar/NavBar';



import End from './components/End';

import { useEffect } from 'react'
import { themeChange } from 'theme-change'



// ! ///////////////////////////////////////////////////////////////////////////////////////////

function App() {

 
  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, []);

  const ask = useSpring(
    {
      from: {  rotateX:0},
      to: { rotateX:290 },
      loop: { reverse: true },
      delay:1500
    }
  );



  return (
    <div className='App ' >

      <NavBar/>
      <Stars />
      <MainButton Color='neutral'  value='neutral'/>
      <MainButton theme='dark'  value='dark'/>
      <MainButton theme='coffee' value='coffee' />
      <MainButton theme='lofi' value='lofi'/>
      <MainButton theme='garden'  value='garden'/>
      <MainButton theme='cupcake'  value='cupcake'/>
      <MainButton theme='emerland'  value='emerland'/>
      <MainButton theme='corporate'  value='corporate'/>
      <MainButton theme='synthwave'  value='synthwave'/>
      <MainButton theme='retro'  value='retro'/>
      <MainButton theme='valentine' value='valentine'/>
      <MainButton theme='halloween' value='halloween' />
      <MainButton theme='business' value='business'/>
      <MainButton theme='dracula'   value='dracula'/>
      <MainButton theme='wireframe' value='wireframe' />
      <MainButton theme='black' value='black'/>
      <MainButton theme='pastel'  value='pastel'/>
      <MainButton theme='cmyk'  value='cmyk'/>
      <MainButton theme='acid'  value='acid'/>
      <MainButton theme='lemonade'  value='lemonade'/>
      <MainButton theme='winter' value='winter'/>
      

<div className='h-[300px] w-20'/>
      
      <div  className="font-extrabold mono_text3 md:text-9xl  text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-3xl hover:bg-gradient-to-l transition ease-linear delay-150  animate-glow " id="#content">Hello WoRld!</div>

      <a.div style={{...ask}} className={"w-20 h-20 bg-accent rounded-lg"}>

      </a.div>
      <div className=' '>
        <div className="text-primary text-4xl">primary</div>
        <div  className="text-secondary text-4xl">secondary</div>
        < div  className="text-neutral text-4xl">neutral</div>
        <div  className="text-accent text-4xl">accent</div>

      </div>
      <HiColorSwatch  className='w-20 h-20 fill-primary'/>
      <End  id="footer"/>
      

{/*//* APP end */}
      </div>
  );
}
export default App;