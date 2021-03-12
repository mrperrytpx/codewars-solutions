// https://www.codewars.com/kata/525f4206b73515bffb000b21/train/javascript
// ORIGINAL SOLUTION
function add(a, b) {
    let first = BigInt(a);
    let second = BigInt(b);
    let result = first + second;
    return result.toString();
}

// EXAMPLE INPUT
let a = '63829983432984289347293874', b = '90938498237058927340892374089';

// console.log(add(a, b));

// REFACTORED SOLUTION
function addition(a, b) {
    return (BigInt(a) + BigInt(b)).toString(10);
}

// points

/* 
// BigInt is a thing now so we good, I want my points tho

function add(a, b) {
    let sum = "";  // our result will be stored in a string.

    // we'll need these in the program many times.
    let str1Length = a.length;
    let str2Length = b.length;

    // if s2 is longer than s1, swap them.
    if(str2Length > str1Length ){
        let temp = b;
        b = a;
        a = temp;
    }
  let carry = 0;  // number that is carried to next decimal place, initially zero.
    let c;
    let d;
    let temp;
    let digitSum;
    for (let i = 0; i < a.length; i++) {
        c = parseInt(a.charAt(a.length - 1 - i));      // get ith digit of str1 from right, we store it in c
        d = parseInt(b.charAt(b.length - 1 - i));      // get ith digit of str2 from right, we store it in d
        d = (d) ? d : 0;                                    // make sure d is a number, (this is useful in case, str2 is shorter than str1
        temp = (carry + c + d).toString();                  // add c and d along with carry, store it in a temp string.
        digitSum = temp.charAt(temp.length - 1);            //
        carry = parseInt(temp.substr(0, temp.length - 1));  // split the string into carry and digitSum ( least significant digit of abSum.
        carry = (carry) ? carry : 0;                        // if carry is not number, make it zero.

        sum = (i === a.length - 1) ? temp + sum : digitSum + sum;  // append digitSum to 'sum'. If we reach leftmost digit, append abSum which includes carry too.

    }

    return sum;     // return sum

} */

console.log(addition(a, b));