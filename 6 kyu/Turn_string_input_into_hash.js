// https://www.codewars.com/kata/52180ce6f626d55cf8000071

const input = "a=1, b=2, c=3, d=4" // result { 'a': 1, 'b': 2, 'c': 3, 'd': 4}

// SOLUTION
function strToHash(str) {
    let split = str.split(",")
    for (let i = 0; i < split.length; i++) {
        split[i] = split[i].trim();
        const [key, val] = item.split("=");
        console.log(key, val);
    }
    let result = {};
    for (let i = 0; i < split.length; i++) {
        for (let j = 0; j < split[i].length - 1; j++) {
            console.log(split[i][j], split[i][j + 1])
            result[split[i][j]] = +(split[i][j + 1]);
        }
    }

    return result;
}

// REFACTORED