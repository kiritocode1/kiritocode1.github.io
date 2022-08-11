import React,{useState,useEffect} from 'react'
import meow from "../Pictures/mewo.gif";
import catsound from "../Sounds/catMeow.mp3";
import useSound from "use-sound";

import {AiFillCaretDown} from "react-icons/ai"
import spaceman from "../Pictures/astronaut-removebg.png";

import { useSpring, animated as a } from "react-spring"


const SocialsPage = () => {
  const [GithubData, setGithubData] = useState(null);
  const [mewoSound] = useSound(catsound);
  const [MewoCatText, setmewo] = useState(true);
  const styleCat = useSpring({
    x:MewoCatText?192:194,
    rotatex:MewoCatText?90:0,
  })
  const StyleIssue = useSpring({
    from: { y: -120, rotatez: 0 },
    y: -30, rotatez: 30 
    , config: { duration: 12000 }, 
    loop :{reverse:true}, 
})
  const StyleDEPLOY = useSpring({
    from: { x: -20, rotatez: 0 , y:0},
    x: 10, rotatez: 70 , y:70
    , config: { duration: 12000 }, 
    loop :{reverse:true}, 
})

    const Commit = useSpring({
    from: { rotatez: -10 , y:60},
     rotatez: 10 , y:70
    , config: { duration: 12000 }, 
    loop :{reverse:true}, 
})







  const styleSpaceMan = useSpring({
    from:{
      y: -16,
      rotateZ:24
    },
    y: 12, config: { duration: 12000 },
    loop:{reverse:true},
    rotateZ:-66
    
  })
  const dataGT = async () => {
    fetch('https://api.github.com/users/kiritocode1', {
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    })
      .then(response => response.json()) //Converting the response to a JSON object
            .then(data => setGithubData(data));
  };

  useEffect(() => {
    dataGT();
 
  }, []);

  return (
    <div  className="flex flex-wrap   sm:px-2 md:px-0 w-full  justify-evenly items-center gap-4 mb-10">

      <div className="relative    items-center justify-center flex ">
        <div className="absolute z-10  w-full h-full flex md:items-start items-end justify-end  ">
              <img src={meow} alt="fa-github" className="w-6 h-4"  onClick={()=>{
            mewoSound();
            
          }} onMouseEnter={()=>setmewo(!MewoCatText)} onMouseLeave={()=>setmewo(!MewoCatText)} />
      <a.div className="z-10 absolute bg-black text-xs" style={{...styleCat}}>Waiting for something  to happen?</a.div>
          
</div>
              


        <div class="stats stats-vertical lg:stats-horizontal shadow">
  
  <div class="stat">
    <div class="stat-title">Repos</div>
    <div class="stat-value">{GithubData?.public_repos}</div>
    <div class="stat-desc">{`${GithubData?.public_gists} gists`}</div>
  </div>
  
  <div class="stat">
    <div class="stat-title">Followers</div>
    <div class="stat-value">{GithubData?.followers}</div>
    <div class="stat-desc">all amazing</div>
  </div>
  
  <div class="stat">
    <div class="stat-title">Following</div>
    <div class="stat-value">{GithubData?.following}</div>
    <div class="stat-desc">not ready yet</div>
  </div>
  
</div>











      </div>
      {/* secondary her */}
            <div className=" w-60 h-60  items-center justify-center flex overflow-hidden relative ">
        <div>
          <a.div className="flex z-10
          bg-[#238636] btn gap-2 no-animation " style={{...Commit}} >
            CREATE PULL REQUEST
            <AiFillCaretDown className="w-6 h-6 border-l-2 border-l-green-900"/>
          </a.div>
          <a.div style={{...StyleDEPLOY}} className="z-10 badge badge-outline text-red-500 bg-red-700">problem:critical</a.div>
          <a.img src={spaceman} style={{ ...styleSpaceMan }} alt="astro" className=" " />
          <a.div className="badge badge-outline text-purple-500 bg-[#220f2f] absolute z-10" style={{...StyleIssue}} >good first issue </a.div>
        </div>
      </div>
                  <div className=" w-60 h-60 items-center justify-center flex">
        <div className="mono_text3 text-primary text-xl">wow look at all this empty space </div>
      </div>
      {/* Primary tag ends here  */}
    </div>
  );
}

export default SocialsPage