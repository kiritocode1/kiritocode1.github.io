import { useSpring, animated as a } from "react-spring";
import {useState,useEffect as UseE} from "react";
import './App.css';


import Home from "./components/Home/home";

function App() {
  const [col, setcol] = useState(false);
  const [insert, setint] = useState([[1, 0, 0], [0, 1, 0], [0, 0, 1]]);
  const stykle = useSpring({
    backgroundColor:col?"red":"white"
  });
  const randomise_btwn_01 = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  };
  UseE(() => {
    randomise_btwn_01();
  }, [col]);
  return (
    <div className='App' onLoad={setint("super")}>
      <div className={`${col?"white":""}`}>
      <Home/>
      <div className=' mono_text2 animate-pulse'>Work in progress , made W/ {!col?"🖤":"❤️👹"} </div>       
      <div className="japan_text1 text-red-700 justify-center">愛している </div>
      <div className="w-full flex items-center justify-center">
      <a.div style={stykle} className="w-[10px] h-[10px] rounded-xl" /></div>
      <button onClick={()=>setcol(!col)} className="font-mono text-2xl">clickity</button>
        <div>{col ? 'HELLO' : "WORLD"}</div>
        <div>{randomise_btwn_01(0, 1)}</div>
        <div>{insert}</div>
      </div>
      </div>
  );
}
export default App;
