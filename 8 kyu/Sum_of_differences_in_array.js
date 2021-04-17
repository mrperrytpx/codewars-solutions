// https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e

// SOLUTION
sumOfDifferences = arr => arr.length <= 1 ? 0 : Math.max(...arr) - Math.min(...arr);
