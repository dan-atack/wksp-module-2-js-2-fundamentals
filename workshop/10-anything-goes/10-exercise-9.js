// The purpose of this exercise is to re-implement standard array methods
// Do not use the array methods .map, .filter and .every
// You can use for loops to implement your logic

// Q9
// - every(lst, func) returns a true if func returns true for every element of lst
//
// Example:
// function isEven(num) { return num % 2 === 0 }
// every([2,4,12], isEven) returns true
// every([2,3,12], isEven) returns false

function every(lst, func) {
    let canary = true;        // The idea is this will instantly stop the dangerous while loop at the first false value.
    let i = 0;                             // index counter
    while (canary && i<lst.length) {       // if the truth never changes, the loop ends at the last member of the list.
        canary = func(lst[i]);             // test each item in the list one at a time. If one of them is false, the loop is over.
        i++;                               // Don't forget to increase the index :)
    }
    return canary;                         // Like the canary in the coal mine ya know?
};

// -------------------------------------------------------------------------
function isEven(num) { return num % 2 === 0 }
console.log('Q9: ', every([2, 42, 540, 8, 64], isEven));
console.log('Q9: ', every([2, 42, 540, 3, 64], isEven));