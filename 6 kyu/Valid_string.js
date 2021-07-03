// https://www.codewars.com/kata/52f3bb2095d6bfeac2002196

// EXAMPLE INPUT
const input1 = ["code", "wars"], input2 = "codewar" // result -> false

// SOLUTION
const validWord = (dict, word) => new RegExp(`^(${dict.join('|')})+$`).test(word);
