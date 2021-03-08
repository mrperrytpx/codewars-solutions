// https://www.codewars.com/kata/5694cb0ec554589633000036/train/javascript

// EXAMPLE INPUT

const input = 5; // result = 120

//SOLUTION 
const factorial = (n) => {
    return n === 0 ? 1 :  (n * factorial(n - 1));
};

console.log(factorial(input));