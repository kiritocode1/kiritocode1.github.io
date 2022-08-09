import React from 'react'
import { Link } from 'react-router-dom';





const TextGradient = ({text, link}) => {
  return (
    <Link className="  text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary  flex-none" to={link}>{text}</Link>
  );
}

export default TextGradient;