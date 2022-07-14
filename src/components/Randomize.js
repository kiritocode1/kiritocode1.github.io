




const randomize = (min, max) => {
    const random = Math.random();
    const answer = (random * (max - min + 1)) + min;
    return answer >=0.5 ? 1 : 0; 
};


export default randomize;