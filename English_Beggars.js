// https://www.codewars.com/kata/59590976838112bfea0000fa

// EXAMPLE INPUT
let inputArray = [1, 2, 3, 4, 5]; // => [1, 3, 5, 2, 4] => [9, 6]
let inputNumber = 3;

//ORIGINAL SOLUTION
function beggars(values, n) {
    if (n <= 0) return [];
    let array = [], resultArr = [], finalArr = [];
    for (let i = 0; i < n; i++) {
        for (let j = i; j < values.length; j += n) {
            array.push(values[j]);
        }
    }
    let step = Math.ceil(array.length / n);
    for (let i = 0; i < array.length; i += step) {
        resultArr.push(array.slice(i, i + step).reduce((acc, curr) => acc + curr, 0));
    }
    if (resultArr < n) {
        for (let i = 0; i <= n - resultArr.length; i++) {
            resultArr.push(0);
        }
    }
    return resultArr;
}

console.log(beggars(inputArray, inputNumber));