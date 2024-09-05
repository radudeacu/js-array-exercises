// https://medium.com/@francesco.saviano87/mastering-javascript-arrays-10-progressive-exercises-b88e23d1b787

// Flatten an array of arrays into a single array.

// 1. Use the .flat() method, which creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.


let array = [[1, 2], [3, 4], [5, 6]];

function flattenArray(arr) {
    return arr.flat();
}
console.log(flattenArray(array)); // Output: [1, 2, 3, 4, 5, 6]
