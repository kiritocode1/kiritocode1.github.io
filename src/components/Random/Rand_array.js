const Randarray = (row,columns) => {
    const crude_array= new Array(row).fill(Array(columns).fill(0));
    var detailed_mapped_array = crude_array.map((i) => {
        const explode = i.map((j) => {
            // return j + Math.round(Math.random());
            const a = Math.random() <= 0.90 ? 0 : 1;
            return j + a;
        })
        return i = explode;
    });
    // console.log(detailed_mapped_array);
    return detailed_mapped_array;
};
// Randarray(12,2) checked 

export default Randarray;