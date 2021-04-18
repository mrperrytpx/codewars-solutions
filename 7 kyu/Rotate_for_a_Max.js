// https://www.codewars.com/kata/56a4872cbb65f3a610000026

// EXAMPLE INPUT
const input = 56789 // result -> 68957

// ORIGINAL SOLUTION
function maxRot(n) {
    let max = n
    let arr = String(n).split('')
    for (let i = 0; i < arr.length; i++) {
        arr.push(arr.splice(i, 1)) // array = [5,6,7,8,9] = push splice 0 [6,7,8,9,5] = push splice 1 [6,8,9,5,7] = push splice 2 [6,8,5,7,9]
        // = push splice 3 [6,8,5,9,7] = push splice 4 [6,8,5,9,7] - join all then keep track which is max each interation
        const num = Number(arr.join(''))
        console.log(num);
        if (num > max) max = num
    }
    return max
}

console.log(maxRot(input));