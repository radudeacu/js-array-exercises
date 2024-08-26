

// Calculate the sum of elements in an array.

// 1. use .reduce() method which performs a reduction fuction on each array element, resulting in a single output value.

// 2. the function inside.reduce() has two parameters: acc(accumulator) and val(current value).

// 3. Initializa acc to 0 and add each val to it.

// Solution one

let array = [1, 2, 3, 4, 5];

function sumElements(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}

console.log(sumElements(array)); // 15

// Solution two using a for loop

// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
// }

// console.log(sum); // 15