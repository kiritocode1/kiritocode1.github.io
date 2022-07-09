import React from 'react'
import { useParams } from 'react-router-dom';
const Music = () => {
  const {music} = useParams();
  return (
    <div>{music}</div>
  )
};

export default Music;