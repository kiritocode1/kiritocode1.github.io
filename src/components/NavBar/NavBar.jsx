import { useSpring, animated as a  } from "react-spring";

import { Link } from "react-router-dom";
import { HiColorSwatch } from "react-icons/hi";
import { TbDownload,TbBrandOpenSource, TbBrandTwitter } from "react-icons/tb";
import { BsJournalCode, BsLightbulb } from "react-icons/bs";
import {AiFillCode} from "react-icons/ai";
//!  Self explanatory code , animated w/ spring and native implementation of the 
import Themesy from "../../themes/themes";
import MainButton from "../Button/Button";
const NavBar = () => { 


  const styl = useSpring({
    from: { rotateX: 0, x: 0 },
    to: { rotateX: 360, x: 3 },
    loop: { reverse: true },
    delay: 1500
  });
    return (
      <div class="navbar bg-base-100 fixed backdrop-filter backdrop-blur-md bg-opacity-90">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-3xl" href="https://www.github.com/kiritocode1"><div className="bg-clip-text text-transparent  bg-secondary text-3xl flex"><a.div style={styl} className="bg-inherit bg-clip-text text-transparent ">◉</a.div>/_\<a.div style={styl} className="bg-inherit bg-clip-text text-transparent ">◉</a.div></div></a>
  </div>
  <div class="flex-none dropdown dropdown-end">
    <button class="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
          </button>
          <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-primary mono_text1 text-center">
    <li><a href={require("../../Resume/Aryan_Kathawale_.pdf")} download="Aryan_Kathawale" target="_blank" rel="noreferrer" className="flex"><TbDownload className=""/> Download C.V.</a></li>

            <li>
            <Link to="/projects" className="flex"><AiFillCode/>     projects</Link>
            </li>
            <li>
            <Link to="/blogs" className="flex"> <BsJournalCode/>   blogs</Link>
            </li>
            <li>
            <Link to="/learn" className="flex"><BsLightbulb/>   Learn</Link>
            </li>
            <li>
            <Link to="/offline" className="flex"> <TbBrandOpenSource/> Offline</Link>
            </li>
            <li>
            <Link to="/Socials" className="flex"><TbBrandTwitter/>     Socials</Link>
            </li>
                        <li>
            <Link to="/">__Main__</Link>
            </li>
  </ul>
  </div>
    <div class="flex-none dropdown dropdown-end">
          <button class="btn btn-ghost  ">
            
      <HiColorSwatch  className='hover:fill-primary w-6 h-6 '/>

          </button>
          <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-[20rem] md:w-80 flex ">

            <div className="gap-1 flex md:flex-wrap    overflow-scroll">
          {Themesy.map(theme=><MainButton theme={theme} Color="primary btn-accent" value={theme}/>)}</div>
  </ul>
  </div>

</div>
    );
}

export default NavBar;