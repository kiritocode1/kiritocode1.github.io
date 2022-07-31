//? styles here . 
import './App.css';


import { useSpring, animated as a  } from "react-spring";
// import { useState } from 'react';
//? import element lol .  /////////////////////////////////////////////////////////////////////////////////////////

// import CircularProgress from './components/CircularProgress/CircularProgress';
//? Random Starry_sky Generator✅
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
// import MainButton from './components/Button/Button';


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
      from: { x: 0 },
      to: { x: 180 },
      loop: {reverse:true},

    }
  )



  return (
    <div className='App ' >

      <Stars />
      <NavBar/>
      {/* <MainButton Color='neutral'  value='neutral'/>
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

      

      
       */}

      <div className="font-extrabold font-mono md:text-9xl  text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-3xl">HeLlo WoRld!</div>

      <a.div style={{...ask}} className={"w-20 h-20 bg-red-500 "}>

      </a.div>
      
      
<End/>


{/*//* APP end */}
      </div>
  );
}
export default App;