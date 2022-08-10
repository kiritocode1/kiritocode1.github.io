import React from 'react'
import honk from "./honk.jpg"
import { VscGithubInverted } from "react-icons/vsc";
import {FaTwitter, FaWhatsapp} from "react-icons/fa"
const Phone = () => {
    return (
    
        <div class="mockup-phone ">
            <div class="camera"></div>
            <div class="display">
                <div class="artboard artboard-demo phone-1 " >
                    <div className="relative w-full h-full items-center flex justify-center">
                        <img src={honk} alt="phone-imge"  className="w-full h-full overflow-hidden  " />
                        <div className="absolute z-20 w-full h-full  items-center justify-center grid  grid-rows-4 grid-flow-col gap-16 p-10"> <div className="btn btn-primary w-12 h-12 flex items-center justify-center"><FaTwitter/></div>
                            <div className="btn btn-primary w-12 h-12 flex items-center justify-center"><VscGithubInverted/></div><div className="btn btn-primary w-12 h-12 flex items-center justify-center"><FaWhatsapp/></div><div className="btn btn-primary w-12 h-12 flex items-center justify-center">hello</div><div className="btn btn-primary w-12 h-12 flex items-center justify-center">hello</div>
                            <div className="btn btn-primary w-12 h-12 flex items-center justify-center">hello</div><div className="btn btn-primary w-12 h-12 flex items-center justify-center">hello</div><div className="btn btn-primary w-12 h-12 flex items-center justify-center">hello</div>
                            <div className="btn btn-primary w-12 h-12 flex items-center justify-center">hello</div><div className="btn btn-primary w-12 h-12 flex items-center justify-center">hello</div><div className="btn btn-primary w-12 h-12 flex items-center justify-center">hello</div><div className="btn btn-primary w-12 h-12 flex items-center justify-center">hello</div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Phone;