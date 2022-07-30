import React from 'react'

const Toggle = ({color ,theme="dark"}) => {
    return (
        <input type="checkbox"  data-toggle-theme={theme} className={`toggle toggle-${color}`} />
    );
};

export default Toggle;