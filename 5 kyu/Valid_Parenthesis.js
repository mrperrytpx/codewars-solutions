// https://www.codewars.com/kata/52774a314c2333f0a7000688

//ORIGINAL SOLUTION
function validParentheses(parens){
    while (parens.includes("()") === true) parens = parens.replace("()", "");
    return parens.length > 0 ? false : true;
}


// EXAMPLE INPUT

let input = "()";
console.log(validParentheses(input));