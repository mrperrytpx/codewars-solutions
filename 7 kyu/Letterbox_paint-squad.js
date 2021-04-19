// https://www.codewars.com/kata/597d75744f4190857a00008d

// EXAMPLE INPUT
const input1 = 125, input2 = 132 // result -> [1,9,6,3,0,1,1,1,1,1]

// FIRST SOLUTION

var paintLetterboxes = function(start, end) {
    let array = [];
    for (let i = start; i <= end; i++) {
      array.push(i);
    }
    array = array.map(num => num.toString().split(""));
    let newArr = []
    for (let i = 0; i < array.length; i++) {
      newArr = newArr.concat(array[i]);
    }
    newArr = newArr.join("");
    let result = [];
    for (let i = 0; i < 10; i++) {
      result.push((newArr.match(new RegExp(`${i}`, "g")) || []).length)
    }
    return result;
}

console.log(paintLettetboxes(input1, input2));

// REFACTORED
const paintLetterboxes = (start, end) => {
    let array = [];
    for (let i = start; i <= end; i++) array.push(i);
    let result = [];
    for (let i = 0; i < 10; i++) result.push((array.join("").match(new RegExp(`${i}`, "g")) || []).length)
    return result;
}