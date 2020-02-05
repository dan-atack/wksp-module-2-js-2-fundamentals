// Q10
// Build on what you did for Q9.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 	is F
// <70 	is D
// <80 	is C
// <90 	is B
// <100 is A

// Write function here

function letterer(grades) {
    let letters = [];
    grades.forEach(function(grade) {
        if (grade < 60) {
            letters.push("F");
        } else if (grade < 70) {
            letters.push("D");
        } else if (grade < 80) {
            letters.push("C");
        } else if (grade < 90) {
            letters.push("B");
        } else {
            letters.push("A");
        }
    });
    return letters;
};
 
// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]

// Try with other values as well


