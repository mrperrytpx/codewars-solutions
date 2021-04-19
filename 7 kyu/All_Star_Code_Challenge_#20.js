// https://www.codewars.com/kata/5865a75da5f19147370000c7

// EXAMPLE INPUT
const input1 = [1, 2], input2 = [4, 5] // result -> [5, 7]

// SOLUTION
function addArrays(array1, array2) {
    if (array1.length !== array2.length) throw new Error("Error");
    let result = [];
    for (let i = 0; i < array1.length; i++) {
      result.push(array1[i] + array2[i]);
    }
    return result;
}

console.log(addArrays(input1, input2));

// REFACTORED
const addArrays = (array1, array2) => {
    if (array1.length !== array2.length) throw new Error("Error");
    return array1.map((num, index) => array1[index] + array2[index]);
}