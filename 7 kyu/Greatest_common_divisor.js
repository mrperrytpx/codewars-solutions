// https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd

// EXAMPLE INPUT
const input1 = 30, input2 = 12 // result -> 6

// SOLUTION
function mygcd(x,y){
    let rem = x % y;
    return y === 0 ? x : mygcd(y, rem);
}

console.log(mygcd(input1, input2));