import { useSpring, animated as a } from "react-spring";
import { useState,useEffect as ue } from "react";
// import logo from './logo.svg';
import './App.css';
// import { useSpring,animated as a } from "react-spring";
function App() {
  const [col, setcol] = useState(true);
  const func = () => {
    setcol(!col);
  };
  const stykle = useSpring({
    from: {
    backgroundColor: "red",
      
    },
    backgroundColor: "white",
    loop:true,
  });
  
  return (
    <div className='App white'>
      <div className=' mono_text2 animate-pulse'>Work in progress , made W/ 🖤 </div>       
      <div className="japan_text1 text-red-700 justify-center">愛している </div>
      <a.div style={stykle} className="w-[20px] h-[20px] rounded-xl" />
      <button onClick={func}>clickme</button>
    </div>

  );
}

export default App;
