// https://www.codewars.com/kata/513fa1d75e4297ba38000003

// EXAMPLE INPUT
// (1, [2, 3], 4, 5, [6, [7]]) // returns [1, 2, 3, 4, 5, 6, 7]

// SOLUTION
const flatten = (...args) => args.toString().split(",");