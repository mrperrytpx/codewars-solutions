// https://www.codewars.com/kata/5a1a76c8a7ad6aa26a0007a0

// EXMAPLE INPUT 
const input = "1961-07-04";

// ORIGINAL SOLUTION
function dateConvert(date) {
    return {
        year: date.slice(0, 4),
        month: date.slice(5, 7),
        day: date.slice(8, 10)
    }
}
function dateSum(date) {
    return date.split("").map(number => parseInt(number)).reduce((acc, curr) => acc + curr, 0);
}
function checking(date) {
    let check = dateConvert(date);
    check.year = dateSum(check.year);
    check.month = dateSum(check.month);
    check.day = dateSum(check.day);
    return arr = Object.keys(check).map((key) => check[key]);
}
function lifePathNumber(date, arr = []) {
    arr = checking(date);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toString().length > 1) {
            arr[i] = dateSum(arr[i].toString());
        }
    }
    arr = arr.reduce((acc, curr) => acc + curr, 0);
    while (arr >= 10) {
        arr = Math.floor(arr / 10) + (arr % 10);
    }
    return arr;
}

// REFACTORED SOLUTION
function convertDate(date) {
    return date = date.split("-").map(number => parseInt(number));
}

function calculate(number) {
    number = number.toString().split("").map(number => parseInt(number)).reduce((acc, curr) => acc + curr, 0);
    return number >= 10 ? number = calculate(number) : number;
}

function lifePathNumber(date) {
    let arr = convertDate(date);
    arr = arr.map(number => calculate(number)).reduce((acc, curr) => acc + curr, 0);
    while (arr >= 10) arr = Math.floor(arr / 10) + (arr % 10);
    return arr;
}

console.log(lifePathNumber(input));
