//? styles here . 
import './App.css';



//! imports for finalization                    
import { SiMedium } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import {useEffect,useState } from "react";
function App() {
  const nice = new Date();
      const [clock, setClock] = useState([37 -nice.getDate(), 24, 60, 60]);


// On Mount
  useEffect(() => {


    const timer = () => {




    setTimeout(timer, 3000);
    };
    timer();
  });



  return (
    <div className='App ' >
      <h1 className='text-3xl font-mono animate-pulse'>Coding with love 🖤</h1>
      <div className='w-full flex  justify-center py-20'>




      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div className="flex flex-col">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":clock[0]}}></span>
    </span>
    days
  </div> 
  <div className="flex flex-col">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":clock[1]}}></span>
    </span>
    hours
  </div> 
  <div className="flex flex-col">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":clock[2]}}></span>
    </span>
    min
  </div> 
  <div className="flex flex-col">
    <span className="countdown font-mono text-5xl">
            <span style={{ "--value":clock[3]}}></span>
    </span>
    sec
  </div>
      </div>
      </div>
      <h1 className=' text-5xl text-accent w-full text-center mono_text2'>UI themes :</h1>



      









{/* first ui  */}
      
      <div className="w-full       md:flex md:flex-row flex flex-col  gap-9 items-center justify-evenly">
      
        <div class="rating">
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-sky-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-sky-400"  />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-sky-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-sky-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-sky-400"  />
</div>
        
        
        
        
        
        
        
        
        
        
        <label className="swap swap-rotate">
  
  <input type="checkbox" />
  
  
  <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  

  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
      </label>
      <input type="checkbox" className="toggle toggle-accent"  />
      
<label for="my-modal-6" className="btn modal-button">open modal</label>


<input type="checkbox" id="my-modal-6" className="modal-toggle"  data-toggle-theme="dark,light" data-act-class="ACTIVECLASS"/>
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use ME for free! just get me a cuppa cofee ☕</p>
    <div className="modal-action">
      <label for="my-modal-6" className="btn">Yay!</label>
    </div>
  </div>
      </div>
      </div>

      














      {/* second UI  */}
      <div className="w-full    md:flex md:flex-row flex flex-col items-center justify-between px-20 mt-20">
      <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>


<div class="mockup-phone">
  <div class="camera"></div> 
  <div class="display">
          <div class="artboard artboard-demo phone-1">
            
            
            <img src='https://images.greetingsisland.com/images/cards/holidays/previews/i-love-my-mom.png?auto=format,compress&w=440' alt="cute" className="h-full overflow-scroll " />
            
    </div>
  </div>
</div>
<div class="mockup-code">
  <pre data-prefix="$"><code className="animate-pulse">npx kiritocode1</code></pre>
  <pre data-prefix=">" class="text-warning"><code>for easter egg</code></pre>
</div>
      </div>
      <div className='my-20  w-full    md:flex md:flex-row flex flex-col items-center justify-evenly md:h-96 gap-10   '>
        <div class="radial-progress text-primary" style={{ "--value": 70 , "--size":'12rem'}}>70%</div>
        <div className='flex flex-col justify-evenly md:h-full items-center gap-4 '>
        <progress class="progress progress-secondary w-56" value="0" max="100"></progress>
<progress class="progress progress-secondary w-56" value="10" max="100"></progress>
<progress class="progress progress-secondary w-56" value="40" max="100"></progress>
<progress class="progress progress-secondary w-56" value="70" max="100"></progress>
          <progress class="progress progress-secondary w-56" value="100" max="100"></progress>
        </div>
        
        <div className=" gap-2    md:flex md:flex-row flex flex-col">
          <button class="btn btn-outline">Button</button>
<button class="btn btn-outline btn-primary">Button</button>
<button class="btn btn-outline btn-secondary">Button</button>
<button class="btn btn-outline btn-accent">Button</button>
        </div>
        <div >
          <input type="range" min="0" max="100" class="range range-secondary range-lg" />
          
        </div>
      </div>


      












{/* ! finalization importing .  */}

<footer class="footer items-center p-4 bg-neutral  text-neutral-content w-full">
  <div class="items-center grid-flow-col">
    <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg> 
    <p>Copyright © 2022 - All right reserved by <b className='font-mono'>kiritocode1</b> on <b>Github Pages 🖤</b></p>
  </div> 
  <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a href='https://twitter.com/kirito08922920'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
    </a> 

        <a href='https://www.github.com/kiritocode1' className=" w-8 h-8"><FaGithub className="w-full h-6"/></a>
          <a href='https://medium.com/@kathawalearyan' className=" w-8 h-8"><SiMedium className="w-full h-6" /></a>
            <a href='https://www.facebook.com/aryan.kathawale.16/' className=" w-8 h-8"><BsLinkedin className="w-full h-6"/></a>
  </div>
</footer>

{/* APP end */}
      </div>
  );
}
export default App;