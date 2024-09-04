
// Find both the minimum and the maximum values in an array.

// 1. Use MAth.min() and Math.max() in conjunction with the spread operator to find the smallest and largest numbers.
// 2. Return these values in an object for clarity.


let array = [1, 2, 3, 4, 5];

function findMinMax(arr) {
    return { min: Math.min(...arr), max: Math.max(...arr) };
}
console.log(findMinMax(array)); // Output: { min: 1, max: 5 }