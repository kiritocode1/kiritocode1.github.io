import React from 'react'

const MainButton = ({ Color,value}) => {
    return (
    <button className={`btn btn-outline btn-${Color}`}>{value}</button>
  );
}

export default MainButton;