import React from 'react'

const MakeStars = ({items }) => {
    return (
        <>
            <div className={`w-6 h-6 rounded-full ${items?"star-active bg-white hover:bg-secondary":"bg-neutral hover:bg-accent"} `} />
        </>
    );
}

export default MakeStars;