import React from 'react'
import { Link } from "react-router-dom";
import fourofour from "../Pictures/fourofour.png"; 
import { FiHome } from "react-icons/fi";
const ErrorPage = () => {
  return (
    <div className='h-96 flex items-center justify-center flex-col gap-6'>
      <div>
        
        <img src={fourofour} alt="error" className='w-40' />
      </div>
      <div className='flex flex-wrap items-center gap-2 justify-center '>
        <div className='mono_text1 '>Go Back to base 👉</div>
        <Link to="/"  className='btn btn-ghost'> <FiHome className='text-primary text-3xl'/>  </Link>
      </div>
    </div>
  )
}

export default ErrorPage;