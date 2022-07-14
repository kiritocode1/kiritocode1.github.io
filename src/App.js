// import { useSpring, animated as a } from "react-spring";
// import {useState,useEffect as UseE} from "react";
import './App.css';
//   import randomize from "./components/Randomize";
    
// import Home from "./components/Home/home";
// import { Routes, Route, Link } from "react-router-dom";
// import Music from "./components/Music/index";
function App() {
  // const [col, setcol] = useState(false);
  // // const [insert, setint] = useState([[1, 0, 0], [0, 1, 0], [0, 0, 1]]);
  // const stykle = useSpring({
  //   backgroundColor:col?"red":"white"
  // });
  // UseE(()=>{
  //   console.log("hello world");
  // },[])
  // UseE(() => {
  //   const a = randomize();
  //   console.log(a);
  // }, [col]);
  return (
    <div className='App ' >
      <h1>hello world </h1>
      <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div class="flex flex-col">
    <span class="countdown font-mono text-5xl">
      <span style={{"--value":15}}></span>
    </span>
    days
  </div> 
  <div class="flex flex-col">
    <span class="countdown font-mono text-5xl">
      <span style={{"--value":10}}></span>
    </span>
    hours
  </div> 
  <div class="flex flex-col">
    <span class="countdown font-mono text-5xl">
      <span style={{"--value":24}}></span>
    </span>
    min
  </div> 
  <div class="flex flex-col">
    <span class="countdown font-mono text-5xl">
            <span style={{ "--value": 50}}></span>
    </span>
    sec
  </div>
      </div>
      
  <h1>UI themes :</h1>
      <label class="swap swap-rotate">
  
  <input type="checkbox" />
  
  
  <svg class="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  

  <svg class="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
      </label>
      
      
<label for="my-modal-6" class="btn modal-button">open modal</label>


<input type="checkbox" id="my-modal-6" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="modal-action">
      <label for="my-modal-6" class="btn">Yay!</label>
    </div>
  </div>
</div>
      </div>
  );
}
export default App;