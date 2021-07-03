// https://www.codewars.com/kata/527e4141bb2ea5ea4f00072f

// EXAMPLE INPUT
const input = 5; // result => 15

// ORIGINAL SOLUTION
// function twistedSum(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         if (i >= 10) {
//             let number = i.toString().split("").reduce((a, c) => a + +c, 0)
//             sum += number;
//         } else {
//             sum += i
//         }
//     }
//     return sum;
// }

// REFACTORED SOLUTION
const twistedSum = n => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        i => 10 ? console.log(i.toString().split("").reduce((a, c) => a + +c, 0)) : sum += i;
    }
    return sum;
}

console.log(twistedSum(input))