// Q4
// Write a function that filters out the non-unique values in an array.
// This function should accept an array as an argument and return a new array.

// Hint: consider using .filter(), .indexOf() and .lastIndexOf()

function filterNonUnique(array) {
    let uniques = [];                      // We'll store the first instance of each element in a new list
    array.forEach(function(elem) {
        if (!(uniques.includes(elem))) {   // If an element isn't already in the uniques list, add it...
            uniques.push(elem);
        }                                  // ... Otherwise move on to the next one.
    });
    return uniques;
};

console.log(filterNonUnique([1,2,3,3,4,5,6,7,1,7,7,8]));
