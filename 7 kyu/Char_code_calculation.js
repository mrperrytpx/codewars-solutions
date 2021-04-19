// https://www.codewars.com/kata/57f75cc397d62fc93d000059

// EXMAPLE INPUT
const input = "ABC" // result -> 6

// SOLUTION
function calc(x){
    let num1 = [...x].map(letter => letter.charCodeAt(0).toString()).join("");
    let num2 = num1.toString().replace(/7/g, "1");
    num1 = [...num1].map(Number).reduce((a,b)=>a+b, 0);
    num2 = [...num2].map(Number).reduce((a,b)=>a+b, 0);
    return num1-num2;
}

console.log(calc(input));