// https://www.codewars.com/kata/59d53c3039c23b404200007e/train/javascript
// EXAMPLE INPUT
const input = 13 // result => [1, 7, 10];

//ORIGINAL SOLUTION
/* function digits(x) {
    return x.toString().split("").map(num => parseInt(num) ** 2).reduce((acc, curr) => acc + curr);
}

function square(x, arr = []) {
    if (x === 1 && arr.length > 0) {
        return arr[0];
    } else {
        if (arr.includes(x)) {
            return;
        }
        arr.push(x);
        x = digits(x);
        return square(x, arr);
    }
}

function happyNumbers(x){
    let resultArray = [];
    for (let i = 1; i <= x; i++) {
        resultArray.push(square(i));
    }
    resultArray = resultArray.filter(elem => elem > 0);
    return resultArray;
} */

console.log(happyNumbers(input));

//REFACTORED SOLUTION
function square(x, arr = []) {
    if (x === 1 && arr.length > 0) {
        return arr[0];
    } else {
        if (arr.includes(x)) return;
        arr.push(x);
        x = x.toString().split("").map(num => parseInt(num) ** 2).reduce((acc, curr) => acc + curr);
        return square(x, arr);
    }
}

function happyNumbers(x){
    let resultArray = [];
    for (let i = 1; i <= x; i++) resultArray.push(square(i));
    return resultArray.filter(elem => elem > 0);
}