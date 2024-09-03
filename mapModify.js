
// Multiply each element of an array by a number

// 1. use .map() method to create a new array that contains the result of calling a function on every element in the array.
// 2. Multiply each element by the specified multiplier.

let array = [1, 2, 3, 4, 5];

function multiplyElements(arr, multiplier) {
    return arr.map(num => num * multiplier);
}
console.log(multiplyElements(array, 2)); // [2, 4, 6, 8, 10];