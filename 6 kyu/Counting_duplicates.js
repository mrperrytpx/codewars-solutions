// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

// EXAMPLE INPUT
const inpuit = "aabBcde" // result => 2

// ORIGINAL SOLUTION
function duplicateCount(text) {
    let arr = [...text.toLowerCase()];
    let resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (resultArr.includes(arr[i])) continue;
            if (arr[i] === arr[j]) resultArr.push(arr[i])
        }
    }
    return resultArr.length;
}

// REFACTORED SOLUTION
const duplicateCount = (text) => ([...text.toLowerCase()].filter((val, idx, arr) => arr.indexOf(val) !== idx && arr.lastIndexOf(val) === idx)).length;