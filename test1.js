// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

    // const genArray = (length) => [...new Array(length)]
    //     .map(() => Math.round(Math.random() * 10));
    
        // const array1 = genArray(5);
        // const array2 = genArray(8);
        // const array3 = genArray(15);

    const array1 = [ 3, 1, 8, 4, 4 ];
    const array2 = [4, 9, 7,1, 9, 7, 7, 6]; 
    const array3 = [ 5,  9,  7,  7, 9,  7,  0,  6, 5,  2,  9,  4, 0,  3, 10];

    const test1 = (array, lSize) => {
        const ws =[]
        for(var i=0, l=array.length; i<l; i+= lSize){
            ws.push(
                chunk = array.splice(0, lSize)
            )}
        return ws;
    };
   
console.log(test1(array1, 2));
console.log(test1(array2, 3));
console.log(test1(array3, 5));

// module.exports = test1;


