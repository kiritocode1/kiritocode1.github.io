import React from 'react'


const MainButton = ({ Color="primary",value="btn" ,theme="lofi"}) => {
    return (
    <button data-set-theme={theme}  data-act-class="ACTIVECLASS" className={`btn btn-accent  btn-${Color}`}>{value}</button>

  );
}

export default MainButton;