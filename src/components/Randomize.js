




const randomize = (min, max) => {
    const random = Math.random();
    return (random  * (max-min +1))+ min;
};


export default randomize;