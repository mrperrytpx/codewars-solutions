// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

// EXAMPLE INPUT
const input = [5, 3, 2, 8, 1, 4] // result [1, 3, 2, 8, 5, 4]

// SOLUTION
function sortArray(array) {
    let oddNumbers = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            oddNumbers.push(array[i]);
            array.splice(i, 1, "x")
        }
    }
    oddNumbers = oddNumbers.sort((a, b) => a - b);
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "x") {
            array[i] = oddNumbers.shift();
        }
    }
    return array;
}

// REFACATORED 
function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
    return array.map((x) => x % 2 !== 0 ? odd.shift() : x);
}

console.log(sortArray(input));