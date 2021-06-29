// https://www.codewars.com/kata/5d68d05e7a60ba002b0053f6

const input1 = [22, 3, 15], input2 = 18228;
// result [1860, 13640, 2728]

// SOLUTION
const bonus = (arr, s) => {
    const total = arr.reduce((acc, curr) => acc + 1 / curr, 0);
    return arr.map(number => Math.round(s * (1 / number) / total))
}

console.log(bonus(input1, input2))