// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3

// EXAMPLE INPUT
const input = "abc#d##c" // result => "ac"

// SOLUTION
function cleanString(s) {
    let result = [];
    [...s].map((char) => char === "#" ? result.pop() : result.push(char));
    return result.join("");
}