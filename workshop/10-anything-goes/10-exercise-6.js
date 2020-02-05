// Q6
// Take the code you wrote in Q5 and now let's create a
// reusable function that takes two arguments,
// numbers that dictate the range within which to look for 
// Armstrong numbers....

// I sort of anticipated we might wanna do this... Lucky me!

function narcNumbers(lowerLimit, upperLimit) {   // User can set lower AND upper limit on how many integers they want to explore
    let narcs = [];                                   // Create a list of 'narcs' that fit the bill
    for (let i = lowerLimit; i < upperLimit; i++) {
        let sumOfCubes = 0;                           // be ready to store the sum of cubes (or other exponents) for each candidate number
        let digits = String(i).split("");             // convert candidate number into list of its digits. The length of this list will be used further down...
        digits.forEach(function(digit) {
            sumOfCubes += (digit**(digits.length));   // add each digit to the power of the *number of digits*
        });
        if (sumOfCubes === i) {                       // compare sum of exponents to candidate number
            narcs.push(i);                            // add matches to list of Narcissistic numbers
        }
    }
    return narcs;
};

// This means that our code from the previous question will need to be tweaked a little
// to determine Armstrong numbers of different lengths.
// e.g.
// a number of 1 digit; each digit is to the power of 1
// a number of 2 digit; each digit is to the power of 2
// a number of 3 digit; each digit is to the power of 3
// a number of 4 digit; each digit is to the power of 4
// a number of 5 digit; each digit is to the power of 5

// See this site for a list of "narcissistic" numbers
// http://mathworld.wolfram.com/NarcissisticNumber.html

console.log(narcNumbers(100, 99999));  // WOW!!! Who'd have thought math could be fun??