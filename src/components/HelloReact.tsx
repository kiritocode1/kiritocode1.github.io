import { useState , useEffect } from "react";


const RC = () =>{ 
const [hello , sethello] = useState(0); 
const [Result, setResult]:[number, Function] = useState(0);

    

useEffect(() => {
  setResult(Result+hello); 
}, [])


    return (<div>
    <h1>{hello} 
    </h1>
        <button onClick={() => sethello(hello+1)}>Click React Component</button>
<h1>{Result}</h1>

    </div>); 
}; 

export default RC ; 
