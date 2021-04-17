// https://www.codewars.com/kata/576bb71bbbcf0951d5000044

// SOLITION
function countPositivesSumNegatives(input) {
    console.log(input);
    if (!input || !input.length) return [];
    return [input.filter(num => num > 0).length,
    input.filter(num => num < 0).reduce((acc, curr) => acc + curr)];
}