//? styles here . 
import './App.css';



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
import Toggle from './components/toggle/toggle';

//? phone done ✅
// import Phone from './components/phone/phone';

//? modal_prime done ✅
// import ModalPrime from './components/Modal/Modal_prime';

//? ModelPrompt done ✅
// import ModelImg from './components/Model/ModelImg';


//? Main Button Done ✅
import MainButton from './components/Button/Button';


//! Navbar 
// import NavSm from './components/NavBar/NavBar';



import End from './components/End';

import { useEffect } from 'react'
import { themeChange } from 'theme-change'



// ! ///////////////////////////////////////////////////////////////////////////////////////////

function App() {

 
useEffect(() => {
  themeChange(false)
  // 👆 false parameter is required for react project
}, [])

  return (
    <div className='App ' >

      <Stars />
      <MainButton Color='neutral' />
      <MainButton theme='dark' />
      <MainButton theme='coffee' />
      <MainButton theme='lofi' />
      <MainButton theme='garden' />
      <MainButton theme='cupcake' />
      <MainButton theme='emerland' />
      <MainButton theme='corporate' />
      <MainButton theme='synthwave' />
      <MainButton theme='retro' />
      <MainButton theme='valentine'/>
      <MainButton theme='halloween' />
      <MainButton theme='business' />
      <MainButton theme='dracula' />
      <MainButton theme='wireframe' />
      <MainButton theme='black'/>
      <MainButton theme='pastel' />
      <MainButton theme='cmyk' />
      <MainButton theme='acid' />
      <MainButton theme='lemonade' />
      <MainButton theme='winter'/>
      <MainButton theme='fantasy' />
      

      
      
      
      
      
      
      
      
      
      
      
      
      
<End/>


{/*//* APP end */}
      </div>
  );
}
export default App;