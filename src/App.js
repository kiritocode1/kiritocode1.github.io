//? styles here . 
import './App.css';
import AnimatedCursor from "react-animated-cursor";
import HomePage from "./Pages/HomePage";
import LearnPage from "./Pages/Learn";
import OfflinePage from "./Pages/OfflinePage";
import ErrorPage from "./Pages/ErrorPage";

import SocialsPage from "./Pages/SocialsPage";
import ProjectsPage from "./Pages/ProjectsPage";
import BlogsPage from "./Pages/BlogsPage";


import ContactEmail from './components/ContactEmail/ContactEmail';

// import GetTwitterData from './components/GetTwitterData';
// import { useSpring, animated as a  } from "react-spring";
// import { useState } from 'react';


// import Themesy from './themes/themes';

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
// import MainButton from './components/Button/Button';



import { Route, Routes } from 'react-router-dom';


//! Navbar 
import NavBar from './components/NavBar/NavBar';



import End from './components/End';

import { useEffect } from 'react'
import { themeChange } from 'theme-change'




//! Import The Blogs Here . 






























// ! ///////////////////////////////////////////////////////////////////////////////////////////

function App() {



   const getColour = getComputedStyle(document.body).getPropertyValue("--p").replace("%",",");
  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project to use themes . 
    console.log(getColour);
  }, [getColour]);

  return (
    <div className='App ' >

      <NavBar />
      
      <Stars />

      
      <Routes>
        <Route path="/" element={<HomePage  className="px-1 md:px-0"/>} />
        <Route path="/learn" element={<LearnPage/>}    />
        <Route path="/offline" element={<OfflinePage/>}    />
        <Route path="*" element={<ErrorPage/>}    />
        <Route path="/blogs" element={<BlogsPage/>} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/socials" element={<SocialsPage/>}/>
      </Routes>
      

      <ContactEmail/>
      <End   id="footer"/>
    <AnimatedCursor       innerSize={18}
      outerSize={25}
        color="111,0,255"
        // '111, 0, 255'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}/>
{/*//* APP end */}
      </div>
  );
}







export default App;