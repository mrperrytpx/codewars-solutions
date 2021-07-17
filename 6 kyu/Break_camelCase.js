// https://www.codewars.com/kata/5208f99aee097e6552000148

// EXAMPLE INPUT
const input = "camelCase" // result => camel Case

// ORIGINAL SOLUTION
function solution(string) {
    let array = [...string];
    for (let i = 0; i < array.length; i++) {
        if (!/[a-z]/.test(array[i]) && /[A-Z]/.test(array[i])) {
            array.splice(i, 0, " ");
            i++;
        }
    }
    return array.join("");
}

// REFACTORED SOLUTION
const solution = (string) => string.replace(/([A-Z])/g, ' $1');
