// https://www.codewars.com/kata/57096af70dad013aa200007b

// SOLUTION

function andCalc(array) {
    if (array.every((x) => x === true) || array.every((x) => x === false)) {
        return array[0];
    } else {
        return false;
    }
}

//OR
function orCalc(array) {
    return array.reduce((x, y, z) => { return x === y ? x : true; });
}

//XOR
function xorCalc(array) {
    return array.reduce((x, y, z) => x !== y);
}

function logicalCalc(array, op) {
    if (op === 'AND') {
        return andCalc(array);
    } else if (op === 'OR') {
        return orCalc(array);
    } else if (op === 'XOR') {
        return xorCalc(array);
    }
}