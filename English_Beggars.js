// https://www.codewars.com/kata/59590976838112bfea0000fa

// EXAMPLE INPUT
let inputArray = [1,2,3,4,5]; // => [1, 3, 5, 2, 4] => [9, 6]
let inputNumber = 2;

//ORIGINAL SOLUTION
function mutate(array, experArr, n, step = 0, resultArr = [], i = 0) {
    step = Math.ceil(experArr.length / n)
    resultArr.push(array.slice(i, i + step).reduce((acc, curr) => acc + curr, 0));
    n--;
    i = i + step;
    experArr.splice(0, step);
    step = Math.ceil(experArr.length / n)
    if (!step) {
        console.log(resultArr);
        return resultArr;
    } else {
        return mutate(array, experArr, n, step, resultArr, i);
    }
}

function beggars(values, n) {
    if (n <= 0) return [];
    let array = [], resultArr = [];
    for (let i = 0; i < n; i++) {
        for (let j = i; j < values.length; j += n) {
            array.push(values[j]);
        }
    }
    let experArr = [...array];
    resultArr = mutate(array, experArr, n);
    while (resultArr.length < n) {
        console.log(resultArr.push(0));
    }
    return resultArr;
}

// REFACTORED SOLUTION
function mutate(array, experArr, n, step = Math.ceil(experArr.length / n), resultArr = [], i = 0) {
    resultArr.push(array.slice(i, i + step).reduce((acc, curr) => acc + curr, 0));
    n--;
    i = i + step;
    experArr.splice(0, step);
    step = Math.ceil(experArr.length / n)
    return !step ? resultArr : mutate(array, experArr, n, step, resultArr, i);
}

function beggars(values, n) {
    if (n <= 0) return [];
    let array = [], resultArr = [];
    for (let i = 0; i < n; i++) {
        for (let j = i; j < values.length; j += n) {
            array.push(values[j]);
        }
    }
    resultArr = mutate(array, [...array], n);
    while (resultArr.length < n) console.log(resultArr.push(0));
    return resultArr;
}

// No recursion copy paste // NEMAM MOZAK MATERE MI
function beggars(values, n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < values.length; j += n) {
            sum += values[j];
        }
        result.push(sum);
    }
    return result
}

console.log(beggars(inputArray, inputNumber));