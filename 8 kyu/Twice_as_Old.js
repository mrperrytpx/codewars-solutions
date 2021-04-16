// https://www.codewars.com/kata/5b853229cfde412a470000d0/

// EXAMPLE INPUT
let input1 = 55, input2 = 30 // result -> 22

// SOLUTION
const twiceAsOld = (dadYearsOld, sonYearsOld) => {
    return Math.abs(dadYearsOld - sonYearsOld * 2);
}

console.log(twiceAsOld(input1, input2));