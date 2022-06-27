import { useSpring, animated as a } from "react-spring";
import { useState } from "react";
// import logo from './logo.svg';
import './App.css';
// import { useSpring,animated as a } from "react-spring";
function App() {
  const [butt, setButt] = useState(true);
  const stykle = useSpring({
    backgroundColor: butt ? "red" : "white"
  })
  return (
    <div className='App white'>
      <div className=' mono_text2 animate-pulse'>Work in progress , made W/ 🖤 </div>       
      <div className="japan_text1 text-red-700 justify-center">愛している </div>
      <a.div style={stykle} className="w-[20px] h-[20px] rounded-xl" />
      <button onClick={setButt(!butt)}></button>
    </div>

  );
}

export default App;
