// https://www.codewars.com/kata/525f4206b73515bffb000b21/train/javascript
// ORIGINAL SOLUTION
function add(a, b) {
    let first = BigInt(a);
    let second = BigInt(b);
    let result = first + second;
    return result.toString();
}

// EXAMPLE INPUT
let a = '1', b = '1';

// console.log(add(a, b));

// REFACTORED SOLUTION
function addition(a, b) {
    return (BigInt(a) + BigInt(b)).toString();
}

console.log(addition(a, b));