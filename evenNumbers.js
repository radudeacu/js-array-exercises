
// Filtering Even Number
// Create an array of only even nubmers

// use the .filter() method that creates a new array with all elements that pass the test implemented by the provided function
// the callback function checks if a number is even(num % 2 ==== 0).

let array = [1, 2, 3, 4, 5, 6];

function filterEven(arr) {
    return arr.filter(num => num % 2 === 0); 
}
console.log(filterEven(array)); // [2, 4, 6]