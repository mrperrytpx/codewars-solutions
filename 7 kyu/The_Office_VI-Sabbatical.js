// https://www.codewars.com/kata/57fe50d000d05166720000b1

// EXAMPLE INPUT
const input1 = 'Can I have a sabbatical?', input2 = 5, input3 = 5 // result > 'Sabbatical! Boom!'

// SOLUTION
function sabb(s, val, happiness){
    let arr = [...s], res = 0;
    for (let i = 0; i < arr.length; i++) if ("sabbatical".includes(arr[i])) res++;
    return res + val + happiness > 22 ? "Sabbatical! Boom!" : "Back to your desk, boy."
}

console.log(sabb(input1, input2, input3));