// https://www.codewars.com/kata/58069e4cf3c13ef3a6000168/

// EXAMPLE INPUT 
const input = 1234; // result = 4321

// ORIGINAL SOLUTION
function reverse(n){
    let rev = 0;
    while (n > 0) {
        rev = (rev * 10) + (n % 10);
        n = Math.floor(n / 10);
    }
    return rev;
}

console.log(reverse(input));

// REFACTORED SOLUTION
function reverse(n, rev = 0){
    rev = (rev * 10) + (n % 10);
    n = Math.floor(n / 10);
    return n > 0 ? reverse(n, rev) : rev;
}