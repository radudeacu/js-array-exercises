// Merge two arrays into one

// 1. Use the spread operator ... to expand both arrays within a new array.
// 2. This results in a single array containing all elements from both arrays.


let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}
console.log(mergeArrays(array1, array2)); // [1, 2, 3, 4, 5, 6]