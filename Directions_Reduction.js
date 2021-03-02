// https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript
//ORIGINAL SOLUTION
function dirReduc(arr){
    let newArr = [...arr];
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === "NORTH") {
            newArr[i] = 1;
        }
        if (newArr[i] === "SOUTH") {
            newArr[i] = -1;
        }
        if (newArr[i] === "WEST") {
            newArr[i] = 2;
        }
        if (newArr[i] === "EAST") {
            newArr[i] = -2;
        }
    }
    for (let i = 0; i < newArr.length - 1; i++) {
        if (newArr[i] + newArr[i + 1] === 0 ) {
            newArr.splice(i, 2);
            i -= 2;
        }
    }
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === 1) {
            newArr[i] = "NORTH";
        }
        if (newArr[i] === -1) {
            newArr[i] = "SOUTH";
        }
        if (newArr[i] === 2) {
            newArr[i] = "WEST";
        }
        if (newArr[i] === -2) {
            newArr[i] = "EAST";
        }
    }
    return newArr;
}

// EXAMPLE INPUT
let directions = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"];

// console.log(dirReduc(directions));

// REFACTORED SOLUTION
function dirReduce(arr) {
    let newArr = [...arr];
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === "NORTH") newArr[i] = 1; 
        if (newArr[i] === "SOUTH") newArr[i] = -1;    
        if (newArr[i] === "WEST") newArr[i] = 2;
        if (newArr[i] === "EAST") newArr[i] = -2;
    }
    for (let i = 0; i < newArr.length - 1; i++) {
        if (newArr[i] + newArr[i + 1] === 0 ) {
            newArr.splice(i, 2);
            i -= 2;
        }
    }
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === 1) newArr[i] = "NORTH";
        if (newArr[i] === -1) newArr[i] = "SOUTH";
        if (newArr[i] === 2) newArr[i] = "WEST";
        if (newArr[i] === -2) newArr[i] = "EAST";
    }
    return newArr;
}

console.log(dirReduce(directions));