import React from 'react'

const CircularProgress = ({ value, size, text_size }) => {
    return (
        <div class="radial-progress text-accent" style={{ "--value": value, "--size": size }}><h1 className={`text-3xl font-bold mono_text1`}>{`${value}%`}</h1></div>
    );
};

export default CircularProgress;