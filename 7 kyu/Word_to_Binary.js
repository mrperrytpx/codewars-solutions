// https://www.codewars.com/kata/59859f435f5d18ede7000050

// EXAMPLE INPUT
const input = "man" // result ->  [ '01101101', '01100001', '01101110' ]

// ORIGINAL SOLUTION
function dec2bin(dec){
    return (dec >>> 0).toString(2);
}

function wordToBin(str){
  return [...str].map(char=> dec2bin(+char.charCodeAt(0))).map(num => "0".repeat(8 - num.length) + num);
}

console.log(wordToBin(input));

// REFACTORED SOLUTION
const wordToBin = (x) => [...x].map(letter=> letter.codePointAt().toString(2).padStart(8, "0"));
