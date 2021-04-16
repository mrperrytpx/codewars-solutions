// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/
// EXAMPLE INPUT
const input = ["a", "b", "c"]; // result -> ["1: a", "2: b", "3: c"]

//SOLUTION
let number = function(array){
    return array = array.map((entry, index) => `${index + 1}: ${entry}`);
}

console.log(number(input));