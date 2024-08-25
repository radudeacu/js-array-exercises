// Exercise 1

// Learn how to reverse the order of elements in an array

// JS has a built in method .reverse(), this method inverts the order of array elements. No need for a new array as .reverse() modifies the original array.


let array = [1, 2, 3, 4, 5];

function reverseArray(arr) {
    return arr.reverse();
}

// same but with arrow function 

// let reverseArray = (arr) => {
//     return arr.reverse(); 
// }

console.log(array);
console.log(reverseArray(array)); // Output: [5, 4, 3, 2, 1];

// step by step implementation using for loop and no built in method

// let reversed = [];
// for (let i = array.length - 1; i >= 0; i--) {
//     reversed.push(array[i]);
// }

// console.log(array);
// console.log(reversed);