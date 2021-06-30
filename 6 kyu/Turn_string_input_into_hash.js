// https://www.codewars.com/kata/52180ce6f626d55cf8000071

const input = "a=1, b=2, c=3, d=4" // result { 'a': 1, 'b': 2, 'c': 3, 'd': 4}

// SOLUTION
function strToHash(str) {
    let split = str.split(",")
    for (let i = 0; i < split.length; i++) {
        split[i] = split[i].trim();
        split[i] = split[i].split("=");
    }
    let result = {};
    for (let i = 0; i < split.length; i++) {
        for (let j = 0; j < split[i].length - 1; j++) {
            result[split[i][j]] = +(split[i][j + 1]);
        }
    }

    return result;
}


// REFACTORED 

function strToHash(str) {
    if (!str) return {}
    let split = str.split(",")
    for (let i = 0; i < split.length; i++) {
        split[i] = split[i].trim().split("=");
    }
    let result = {};
    for (let i = 0; i < split.length; i++) {
        result[split[i][0]] = +(split[i][1]);
    }
    return result;
}
