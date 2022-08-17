import React from 'react'
import gulgb from "../MoreSounds/rising-pops.mp3";
import ish from "../MoreSounds/plunger.mp3";
import kaus from "../ProjectPictures/Kaustubh.jpg";
import useSound from 'use-sound';
import meinspace from "../ProjectPictures/astro3d.webp";
import ishwari from "../ProjectPictures/ishwari.webp";
import { SiGooglefit } from "react-icons/si";
import { ImInstagram } from "react-icons/im";
import ask from "../ProjectPictures/downthing.webp";
import { TbCornerLeftDown } from "react-icons/tb";
import vib from "../ProjectPictures/vib.jpg";
import { FaCrown } from "react-icons/fa";

const OfflinePage = () => {
  const [ping] = useSound(gulgb)
  const [ishy] = useSound(ish);

  return (
    <div className="w-full  flex flex-col items-center justify-center">
      <div className="text-4xl twitter_text">
        <img src={meinspace} alt="me in spaaaace" />
        About Me Offline
      </div>
      <div className='w-full px-14 '>
        Hey INTERNET , im Aryan btw you can call me <b className="text-accent">Aaron</b> if my name is hard to pronounce ,
        Im into all sorts of things , im part of many many communities 
        like <a className="btn btn-ghost" onMouseEnter={()=>ping()}   href="https://github.com/orgs/community/discussions/">GhCommuninity</a>,
        <a className="btn btn-ghost" onMouseEnter={() => ping()} href="https://eddiehub.org">Eddiehub</a>, <a className="btn btn-ghost" onMouseEnter={() => ping()} href="https://www.commclassroom.org/">ComClassRoom</a> , <a className="btn btn-ghost" onMouseEnter={() => ping()} href="https://mlh.io/">MLH</a>  and now recently <a className="btn btn-ghost" onMouseEnter={() => ping()} href="https://gdsc.community.dev/nbn-sinhgad-school-of-engineering-pune/">GDSC</a> . Ive taken part in some offline  hackathons  (although covid made that harder and harder) and ive interacted with tech twitter many times . I Love what i do and want to share the joy of Computer programming to everyone i come across .I also want to be an astronaut , please make me one if someone from Nasa is reading this . also im an INTP.Please read some of the testimonials and what people think about me .  
      </div>
            <div className="text-4xl twitter_text my-10">
        Testimonials. 
      </div>
<div className="w-full flex flex-wrap items-center justify-evenly mb-20">
      <div class="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={ishwari}alt="ishwari" /></figure>
  <div class="card-body">
    <h2 class="card-title twitter_text ">Ishwari Kulkarni (gdsc lead)</h2>
    <p className="mono_text4">
            Aryan is one of the hardest working and supportive person in my team . 
            he helps me a lot and generates hype around learning . 
            i hope to work with him more and develop cool projects . 
    </p>
    <div class="card-actions justify-end">
            <a href="https://twitter.com/geeky_ish_23" target="_blank" rel="noreferrer">
            <button class="btn btn-primary flex items-center justify-evenly gap-2" onMouseEnter={ishy}><SiGooglefit /> her Twitter</button></a>
    </div>
  </div>
        </div>
    
      <div class="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={kaus}alt="kaustubh" /></figure>
  <div class="card-body">
    <h2 class="card-title twitter_text ">Kaustubh Mahalle (Web Developer / Student)</h2>
    <p className="mono_text4">
      I just wanted to share a quick note and let you know that aryan is doing really good job. Ill be glad to to work with him in future.
    </p>
    <div class="card-actions justify-end">
            <a href="https://www.instagram.com/kaustubh__023/" target="_blank" rel="noreferrer">
            <button class="btn btn-primary flex items-center justify-evenly  gap-2" onMouseEnter={ishy}><ImInstagram />his insta</button></a>
    </div>
  </div>
        </div>

            <div class="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={vib}alt="vibwhore" /></figure>
  <div class="card-body">
    <h2 class="card-title twitter_text " >Vibhor Sharma (he/him)</h2>
    <p className="mono_text4">
            Aryan is honestly a very cool guy , he helps when he can and spends time with me . I really like his attitude towards teaching and helping others .  
    </p>
    <div class="card-actions justify-end">
            <a href="https://www.instagram.com/vibhor21_/?hl=en" target="_blank" rel="noreferrer">
            <button class="btn btn-primary flex items-center justify-evenly gap-2" onMouseEnter={ishy}><FaCrown />His instagram</button></a>
    </div>
  </div>
</div>
    
    
      </div>














      <div className="flex items-center justify-center twitter_text px-6">
        <img src={ask} alt="down" className='w-60' />
        <div className='flex gap-2 items-start h-40 justify-center text-end'>
          <TbCornerLeftDown className="text-6xl hidden md:flex"/>
          if you want to add your testimonial , please  write down below. i would love to hear from you and talk</div>
      </div>
      
    </div>
  )
}

export default OfflinePage;