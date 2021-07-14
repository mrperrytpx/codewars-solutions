// https://www.codewars.com/kata/585d7d5adb20cf33cb000235

// EXAMPLE INPUT
const input = [1, 1, 1, 1, 1, 2, 1] // result => 2

// SOLUTION
function findUniq(arr) {
    if (arr[0] !== arr[1] && arr[1] === arr[2]) return arr[0]
    for (let index = 0; index < arr.length; index++) {
        if (arr[0] !== arr[index]) return arr[index]
    }
}