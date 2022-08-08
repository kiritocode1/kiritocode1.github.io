import React from 'react'

const TextGradient = ({text, link}) => {
  return (
    <a className="  text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary  inline" href={link}>{text}</a>
  );
}

export default TextGradient;