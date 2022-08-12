import React,{useState,useEffect} from 'react'
import meow from "../Pictures/mewo.gif";
import catsound from "../Sounds/catMeow.mp3";
import useSound from "use-sound";
import PicturesInsta from "../Pictures/BattleOfRetention.gif"
import {AiFillCaretDown} from "react-icons/ai"
import spaceman from "../Pictures/astronaut-removebg.png";
import { RiHeart2Line ,RiHeart2Fill} from "react-icons/ri";
import { useSpring, animated as a } from "react-spring"
import {FiGithub} from "react-icons/fi"
import byesound from "../MoreSounds/bye.mp3";
import {IoPaperPlaneOutline} from "react-icons/io5"
const SocialsPage = () => {
  const [GithubData, setGithubData] = useState(null);
  const [mewoSound] = useSound(catsound);
  const [MewoCatText, setmewo] = useState(true);
  const [byebye] = useSound(byesound);
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


  const [likeInsta,setLike ]= useState(false);




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
    <div >
      <div className="w-full h-40 flex items-center justify-center md:text-6xl text-3xl  ">GITHUB</div>
      <div className=" flex justify-center w-full">
                  <div className=" w-full h-60 md:w-96  flex justify-evenly items-center bg-[#010409] rounded-xl mx-2 border-2 border-accent ">
        <div className="mono_text2 text-primary text-xl  h-40  flex flex-col justify-evenly items-center  ">
          <a href="https://github.com/kiritocode1" className="btn bg-[#010409] flex gap-2" onMouseEnter={()=>byebye()} target="_blank" rel="noreferrer"><FiGithub/> Check mY GITHUB </a>
          <div className=" h-full flex flex-col mt-4">
            <h2>People  I  follow </h2>
            <div className='flex items-center  justify-center '>
              <div class="avatar-group -space-x-6 overflow-visible">
  <div class="avatar hover:ring ring-green-300 hover:z-10">
    <div class="w-12 ">
      <a className=""   target="_blank" rel="noreferrer"    href="https://github.com/eddiejaoude">
      <img src="https://avatars.githubusercontent.com/u/624760?v=4" alt="enter img"  /></a>
    </div>
  </div>
  <div class="avatar  hover:ring ring-green-300 hover:z-10">
                  <div class="w-12 ">
      <a className="ring  " target="_blank" rel="noreferrer"    href="https://github.com/kunal-kushwaha">
      <img src="https://avatars.githubusercontent.com/u/42698533?v=4" alt="enter img"  /></a>
    </div>
  </div>
  <div class="avatar  hover:ring ring-green-300 hover:z-10">
    <div class="w-12 ">
      <a className="ring  " target="_blank" rel="noreferrer"    href="https://github.com/naomi-lgbt" ><img src="https://avatars.githubusercontent.com/u/63889819?v=4" alt="enter img"  /></a>
    </div>
  </div>
  <div class="avatar  hover:ring ring-green-300 hover:z-10">
                  <div class="w-12 ">
                    <a className="ring  " target="_blank" rel="noreferrer"    href="https://cs.harvard.edu/malan/">
      <img src="https://cs.harvard.edu/malan/malan.jpg" alt="enter img"  /></a>
    </div>
  </div>
</div>
            </div>
          </div>
        </div>
      </div>
</div>

    <div className="flex flex-wrap   sm:px-2 md:px-0 w-full  justify-evenly items-center gap-4 mb-10">
      <div className="relative    items-center justify-center flex ">
        <div className="absolute z-10  w-full h-full flex md:items-start items-end justify-end  ">
              <img src={meow} alt="fa-github" className="w-6 h-4"  onClick={()=>{
            mewoSound();
            
          }} onMouseEnter={()=>setmewo(!MewoCatText)} onMouseLeave={()=>setmewo(!MewoCatText)} />
      <a.div className="z-10 absolute bg-black text-xs text-white  pt-2 omori_text p-3 " style={{...styleCat}}>Waiting for something to happen?</a.div>
          
</div>
              


        <div class="stats stats-vertical lg:stats-horizontal shadow">
  
  <div class="stat">
    <div class="stat-title">Repos</div>
    <div class="stat-value text-primary">{GithubData?.public_repos}</div>
    <div class="stat-desc">{`${GithubData?.public_gists} gists`}</div>
  </div>
  
  <div class="stat">
    <div class="stat-title">Followers</div>
    <div class="stat-value text-accent">{GithubData?.followers}</div>
    <div class="stat-desc">all amazing</div>
  </div>
  
  <div class="stat">
    <div class="stat-title">Following</div>
    <div class="stat-value text-secondary">{GithubData?.following}</div>
    <div class="stat-desc">And Many More </div>
  </div>
  
</div>











      </div>
      {/* secondary her */}
            <div className=" w-60 h-60  items-center justify-center flex overflow-hidden relative ">
        <div>
          <a.div className="flex z-10
          bg-[#238636] btn gap-2 no-animation  text-green-500" style={{...Commit}} >
            CREATE PULL REQUEST
            <AiFillCaretDown className="w-6 h-6 border-l-2 border-l-green-900"/>
          </a.div>
          <a.div style={{...StyleDEPLOY}} className="z-10 badge badge-outline text-red-500 bg-red-700">problem:critical</a.div>
          <a.img src={spaceman} style={{ ...styleSpaceMan }} alt="astro" className=" " />
          <a.div className="badge badge-outline text-purple-500 bg-[#220f2f] absolute z-10" style={{...StyleIssue}} >good first issue </a.div>
        </div>
      </div>

      
      {/* Primary tag ends here  */}
      </div>
      <div className="w-full h-40 flex items-center justify-center md:text-6xl text-3xl  ">Socials</div>
      <div className="px-6 my-10">
        <div class="card md:w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={PicturesInsta} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title text-3xl Instagram">Instagram</h2>
    <p className="font-mono">I Dont take pictures but hey , Love to meet people </p>
            <div class="card-actions  justify-center">
    <div className="btn btn-ghost bg-clip-text" onClick={()=>{setLike(!likeInsta)}}><a href="https://www.instagram.com/kiritocode1" className="w-full h-full " target="_blank" rel="noreferrer">{!likeInsta?<RiHeart2Line className={`w-full h-full `}/>:<RiHeart2Fill className='w-full h-full fill-[#ed4956]'/>}</a></div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
}

export default SocialsPage