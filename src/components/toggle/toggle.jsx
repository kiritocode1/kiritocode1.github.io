import React from 'react'

const Toggle = ({color}) => {
    return (
        <input type="checkbox"  className={`toggle toggle-${color}`} />
    );
};

export default Toggle;