import React from 'react'
import booklol from "../ProjectPictures/booklol copy.webp"; 
import { SiHashnode,SiMedium } from "react-icons/si";
import { useSpring,animated as a  } from 'react-spring'
import { FaDev, } from "react-icons/fa";

const Card = ({element,Name, Context, link}) => {
  return (
    <div class="card w-96 bg-primary text-primary-content overflow-hidden">
      {element}
      <div class="card-body z-10">
        <h2 class="card-title twitter_text text-2xl">{Name}</h2>
        <p>{Context}</p>
        <div class="card-actions justify-end">
          <a className="btn " href={link} >Read Here 😊</a>
        </div>
      </div>
    </div>
  );
}






const BlogCard = ({heading , explaining , link}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title mono_text1 ">{heading}</h2>
    <p>{explaining}</p>
        <div className="card-actions justify-end">
        <a href={`https://kiritocode1.github.io/${link}/`}  target="_blank"  rel="noreferrer" >
      <button className="btn btn-primary">Read here 😍</button></a>
    </div>
  </div>
</div>
  );
}

const BlogList = [
  { "heading": "HTML 😍 ZERO to hero", "explaining": "this blog covers basics of HTML , written in React , is interactive and fun ❤️❤️❤️ for beginners", "link": "html" }, 
  { "heading": "Python 🐍 ZERO to hero", "explaining": "this blog covers basics of Python Programming language , written in svelte , is interactive and fun ❤️❤️❤️ for beginners", "link": "python" }, 
  { "heading": "CSS , Revealing the Magic [ PART_1] ", "explaining": " Learn why CSS is Magic, in an intuitive way ", "link": "css_basics" }, 
  { "heading": "how I made this Website ", "explaining": "this Blog Covers the tools i used to make this website , this is written in NEXT + React  , is fun ", "link": "how_i_made_this_website" }, 
  { "heading": "DOCKER 🐳 Basics", "explaining": " Interactive Docker  introduction , Written In NEXT JS ", "link": "docker_basics" }, 


  
  
  
]




const BlogsPage = () => {
  const stylie = useSpring({
    from: { y: -50, rotatez:10 }, y: -100,rotatez:-10,
    config: { duration: 13000 },
    loop:{reverse:true}
  })
  return (
    <div className="w-full  flex flex-col items-center justify-center">
      <div className="flex w-full items-center justify-center gap-2 relative">
      <div className=" absolute text-accent text-6xl mono_text4 ">I Love Reading</div>
      <a.img src={booklol} alt="hehehe" className="w-40  z-10" style={{...stylie}}/>
      </div>
      <div className="w-full items-center justify-center my-20 flex gap-6 flex-wrap">
        <Card element={<SiHashnode className="absolute text-9xl top-24 rotate-8 -left-10"/>}  Name="HashNode" Context="Im Starting to blog here as well please it would be a bunch if you follow  "    link="https://kiritocode1.hashnode.dev"/>

                <Card element={<FaDev className="absolute text-9xl -top-[4rem] -rotate-[45deg] left-40"/>}  Name="Dev.to" Context="i blog once a week here and  will   continue to do so for a very long time , i love dev.to's community and interactive interface"    link="https://dev.to/kiritocode1"/>

                        <Card element={<SiMedium className="absolute text-9xl top-[10rem] rotate-[45deg] left-40"/>}  Name="Medium" Context="its awesome , no contest, one of the most interactive and intuitive interfaces ive ever seen , fast architexture and much more "    link="https://medium.com/@kathawalearyan"/>
      </div>
      <div className="w-full  flex flex-col twitter_text">
        <div className="text-3xl">know my future plans For Blogs </div>
        <ul class="steps steps-vertical lg:steps-horizontal">
  <li class="step step-primary" data-content="✓">Make this site</li>
  <li class="step step-primary">Plan a structure for devs to contribute</li>
  <li class="step step-primary">get active contributions</li>
          <li class="step">Receive Sponsors 💵
          </li>
                    <li class="step" data-content="★">Payback to Contributors
</li>
</ul>
      </div>
            <div className='flex  flex-wrap gap-6  justify-center align-center my-6 '>
          {BlogList.map(blog => 
            <BlogCard heading={blog.heading} link={blog.link} explaining={blog.explaining}/>
          )}

          </div>
      </div>
    
  )
}

export default BlogsPage;