// https://www.codewars.com/kata/51c8e37cee245da6b40000bd

// EXAMPLE INPUT
const input1 = 'a #b\nc\nd $e f g', input2 = ['#', '$']
// result => "apples, plums\npears\noranges"

// ORIGINAL SOLUTION
// function solution(input, markers) {
//     let arr = input.split("\n")
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length > 1) arr[i] = arr[i].split(" ");
//         for (let m = 0; m < markers.length; m++) {
//             for (let j = 0; j < arr[i].length; j++) {
//                 if (arr[i][j].includes(markers[m])) {
//                     arr[i].splice(j, arr[i].length)
//                 }
//             }
//         };
//     }
//     return arr.reduce((acc, curr) => acc.concat(curr.length > 1 ? curr.join(" ") : curr), []).join("\n")
// }

// REFACTORED SOLUTION
const solution = (input, markers) => {
    let arr = input.split("\n")
    for (let i = 0; i < markers.length; i++) arr = arr.map(line => line.replace(new RegExp(`\\${markers[i]}.*$`), "").trim())
    return arr.join("\n")
}

console.log(solution(input1, input2));