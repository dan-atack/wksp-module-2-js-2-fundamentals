// Q3
// Write a function that accepts 5 grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)

function calculateAverage(a, b, c, d, e) {
    return ((a+b+c+d+e)/5).toFixed(0);  // This is good but it would be nice to have something that didn't depend on having exactly 5 grades...
};

// make certain to console the returned value
console.log(calculateAverage(76, 60, 83, 100, 78));

function betterAverage(a, b, c, d, e) {
    a = a || 0;  // convert all falsy values to zeros,
    b = b || 0;
    c = c || 0;
    d = d || 0;
    e = e || 0;  // This lowers the average but lets the function
    return ((a + b + c + d + e)/5).toFixed(0);  
};

betterAverage(80,80,80,80);