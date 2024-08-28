// Find the mximum value in an array.
// unfiltered thought proccess for step by step basic implementation without Math.max()
// loop through the given array and compare each element until we find the largest. Maybe we need to store that as we go through in another variable and update it until we don't find another so basically we have something like [1, 3, 2, 5, 4] so we loop thorugh the array and we add 1 to the max variable then we compare the max variable with the next element which is 3, it is larger than 1 so we update maxvar = 3, then we get 2, maxvar > 2 so no change and so on until we finish going through the array and we return the final value of max var.

// first step by step basic implementation

function findMax(arr) {
    // init maxvar to the first element of the array (not empty as it's easier this way)
    let maxvar = arr[0];

    // Loop thorugh the array from the second element
    for (let i = 1;i < arr.length; i++) {
        // If elem > maxvar, update maxvar
        if (arr[i] > maxvar) {
            maxvar = arr[i];
        }
    }
    return maxvar;
}

const array = [1, 3, 2, 5, 4];
console.log(findMax(array));

// Second / Modern Implementation, best practice
// 1. Use Math.max() - returns the largest of the provided nrs
// 2. Pass all array elems as separate arguments using the spread operator ...

function niceMax(arr) {
    return Math.max(...arr);
}
console.log(niceMax(array));

// As we can see, the second impl is much cleaner but going through the first one provides better understanding of the whole process.