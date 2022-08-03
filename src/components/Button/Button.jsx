import React from 'react'

const MainButton = ({ Color="primary",value="btn" ,theme=""}) => {
  return (
      
      <button data-set-theme={theme} data-act-class="ACTIVECLASS" className={`btn btn-outline btn-primary  btn-${Color}`} >{value}</button>

  );
}

export default MainButton;