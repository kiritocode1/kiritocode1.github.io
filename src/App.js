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









      {/* <div className={`${col ? "white" : ""}`}>
      <Link to ="/">home</Link>
      <Link to="/muse">Music</Link>
      <div className=' mono_text2 animate-pulse'>Work in progress , made W/ {!col?"🖤":"❤️👹"} </div>       
      <div className="japan_text1 text-red-700 justify-center">愛している </div>
      <div className="w-full flex items-center justify-center">
      <a.div style={stykle} className="w-[10px] h-[10px] rounded-full" /></div>
      <button onClick={()=>setcol(!col)} className="font-mono text-2xl">clickity</button>
        <div>{col ? 'HELLO' : "WORLD"}</div>
        <div>{randomize(0, 1)}</div>

      <Home/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/:music" element={<Music/>}/>
      </Routes>
        
      </div> */}
      </div>
  );
}
export default App;