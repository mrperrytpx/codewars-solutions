// https://www.codewars.com/kata/56484848ba95170a8000004d

// EXAMPLE INPUT
const input1 = 15, input2 = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]; 
// result -> 74

// SOLUTION
function gps(s, x) {
    if (x <= 1) return 0;
    let array = [];
    for (let i = 0; i < x.length - 1; i++) {
      array.push((x[i+1]*100 - x[i]*100) / 100);
    }
    array = array.map(num => parseInt((3600 * num) / s));
    return Math.max(...array);
}

console.log(gps(input1, input2));

// REFACTORED
const gps = (s, x) => {
    if (x <= 1) return 0;
    let array = [];
    for (let i = 0; i < x.length - 1; i++) {
      array.push((x[i+1]*100 - x[i]) * 3600 / s);
    }
    return Math.max(...array);
}