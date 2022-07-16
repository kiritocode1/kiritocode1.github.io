const Randarray = (length,breadth) => {
    const crude_array= new Array(length).fill(Array(breadth).fill(0));
    var detailed_mapped_array = crude_array.map((i) => {
        const explode = i.map((j) => {
            // return j + Math.round(Math.random());
            const a = Math.random() <= 0.7 ? 0 : 1;
            return j + a;
        })
        return i = explode;
    });
    console.log(detailed_mapped_array);
};
Randarray(13, 12);