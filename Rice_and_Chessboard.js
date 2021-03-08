// https://www.codewars.com/kata/5b0d67c1cb35dfa10b0022c7/train/javascript

// EXAMPLE INPUT
const input = 4 // result = 2, 4 -> result = 3, 16 -> result = 5 (2^n+1)

// ORIGINAL SOLUTION 
function squaresNeeded(grains, sum = 0, n = 0, counter = 0){
    if (grains === 0) return 0;
    if (sum >= grains) {
        return counter
    } else {
        sum += (2 ** n);
        return squaresNeeded(grains, sum, n + 1, counter + 1)
    }
}
console.log(squaresNeeded(input));

//REFACTORED SOLUTION
function squaresNeeded(grains, sum = 0, n = 0, counter = 0){
    return sum >= grains ? counter : (sum += (2 ** n), squaresNeeded(grains, sum, n + 1, counter + 1));
}