// https://www.codewars.com/kata/563b74ddd19a3ad462000054

// SOLUTION
function stringy(size) {
    console.log(size);
    let str = "10"
    return size % 2 === 0 ? str.repeat(size / 2) : str.repeat(size / 2) + "1"
}