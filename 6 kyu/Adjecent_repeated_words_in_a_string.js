// https://www.codewars.com/kata/5245a9138ca049e9a10007b8

// EXAMPLE INPUT
const input = 'orange Orange kiwi pineapple apple' // result -> 1

// SOLUTION
function countAdjacentPairs(searchString) {
    let cnt = 0;
    let array = searchString.split(" ").map(word => word.toLowerCase());
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] === array[i+1]) {
        if (array[i+1] === array[i+2]) continue
        cnt++;
      }
    }
    return cnt;
}

console.log(countAdjacentPairs(input));

// REFACTORED 
const countAdjacentPairs = searchString => {
    let cnt = 0;
    let array = searchString.split(" ").map(word => word.toLowerCase());
    for (let i = 0; i < array.length - 1; i++) if (array[i] === array[i+1] && array[i+1] !== array[i+2]) cnt++;
    return cnt;
}