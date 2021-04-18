// https://www.codewars.com/kata/566fc12495810954b1000030

// EXAMPLE INPUT
const n = 5750, d = 0; // result -> 4700 counts of digit d

// ORIGINAL SOLUTION
function nbDig(n, d) {
    let squared = []
    for (let i = 0; i <= n; i++) {
      squared.push(i*i);
    }
    squared = squared.map(num => num.toString()).filter(num => num.includes(d.toString()));
    let result = []
    for (let i = 0; i < squared.length; i++) {
        for (let j = 0; j < squared[i].length; j++) {
            result.push(squared[i][j] === d.toString() ? 0 : 1);
        }
    }
    return result.filter(num => num === 0).length;
}

console.log(nbDig(n, d));

// REFACTORED
function nbDig(n, d) {
    let res = 0;
    for (let i = 0; i <= n; i++) {
        let char = ((i*i).toString()).split("");
        char.forEach(str => str == d.toString() ? res++ : null);
    }
    return res;
}