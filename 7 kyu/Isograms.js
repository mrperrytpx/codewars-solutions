// https://www.codewars.com/kata/54ba84be607a92aa900000f1

// EXAMPLE INOUT
const input = "Richard" // result -> true

// SOLUTION
const isIsogram = str => new Set(str.toLowerCase()).size === str.length;

console.log(isIsogram(input));