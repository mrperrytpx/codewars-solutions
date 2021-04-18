// https://www.codewars.com/kata/58841cb52a077503c4000015

// EXAMPLE INPUT
const n1 = 6, n2 = 3; // result -> 2

// SOLUTION
function circleOfNumbers(n, firstNumber) {
    let arr = [];
    for (let i = 0; i < n; i++) arr.push(i);
    return n / 2 > firstNumber ? arr[arr.length / 2 + firstNumber] : firstNumber - arr.length / 2;
}

console.log(circleOfNumbers(n1, n2));