// HINT:
// You can get the Nth character, or letter, from a string by writing "string"[N].
// The returned value will be a string containing only one character (for example, "b").
// The first character has position 0, which causes the last one to be found at position string.length - 1.
// In other words, a two-character string has length 2, and its characters have positions 0 and 1.

// Q2
// Next, write a function called countChar that behaves like countBs,
// except it takes a second argument that indicates the character that
// is to be counted (rather than counting only uppercase “B” characters).
// Rewrite countBs to make use of this new function.

function countChar(str, char) {
    let hits = 0;                                  // As in the previous exercise, start a counter at zero.
    for (let i = 0; i < str.length; i++) {         // Run through each index position.
        if (str[i] === char) {       // Instead of looking for the letter 'B', now we check for whatever character was specified in the function call.
            hits++;
        }
    }
    return hits;
};

// -------------------------------------------------------------------------
console.log('Q2: ', countChar('BananaBabyBubbles', 'u'));
console.log('Q2: ', countChar('BananaBabyBubbles', 'a'));
console.log('Q2: ', countChar('BananaBabyBubbles', 'Z'));