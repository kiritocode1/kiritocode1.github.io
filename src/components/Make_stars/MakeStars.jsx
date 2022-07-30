import React from 'react'

const MakeStars = ({items }) => {
    return (
        <>
            <div className={`w-6 h-6 rounded-full ${items?"star-active bg-white":"bg-neutral hover:bg-white"} `} />
        </>
    );
}

export default MakeStars;