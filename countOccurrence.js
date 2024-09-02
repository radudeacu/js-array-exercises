

// Count how many times an element appears in an array.


// Use the .filter() method to create a new array with elements that match the specified value.
// Return the length of this new array for the count.

let array = [1, 2, 2, 3, 3, 3, 3, 4];

function countOccurrences(arr, element) {
    return arr.filter(x => x === element).length;
}
console.log(countOccurrences(array, 3)); //  4