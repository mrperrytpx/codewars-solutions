// https://www.codewars.com/kata/59590976838112bfea0000fa

// EXAMPLE INPUT
let inputArray = [1, 2, 3, 4, 5]; // => [1, 3, 5, 2, 4] => [9, 6]
let inputNumber = 3;

//ORIGINAL SOLUTION
function beggars(values, n) {
    let array = [];
    for (let i = 0; i < values.length; i++) {
        if (i % n === 0) {
            array.push(values[i]);
        }
    }
    return array;
}

console.log(beggars(inputArray, inputNumber));