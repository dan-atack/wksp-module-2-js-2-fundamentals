// Q5
// Write a JavaScript program to find ALL the Armstrong 
// numbers between 0 and 999, store them in array an output
// that array to the console.

// Note : An Armstrong number of three digits is an integer 
// such that the sum of the cubes of its digits is equal 
// to the number itself. For example,
// 371 is an Armstrong number since 3*3 + 7*3 + 1*3 = 371.

let armstrongNumbers = [];

function armstrongNumbers(limit) {   // User can set upper limit on how many integers they want to explore
    let armstrongs = [];
    for (let i = 0; i < limit; i++) {
        let sumOfCubes = 0;                // be ready to store the sum of cubes for each candidate number
        let digits = String(i).split("");  // convert candidate number into list of its digits;
        digits.forEach(function(digit) {
            sumOfCubes += (digit**3);      // add each digit's cube together
        });
        if (sumOfCubes === i) {            // compare sum of cubes to candidate number
            armstrongs.push(i);            // add matches to list of Armstrong numbers
        }
    }
    return armstrongs;
};


console.log(armstrongNumbers(100));      // Math is beautiful :)