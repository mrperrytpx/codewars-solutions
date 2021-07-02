// https://www.codewars.com/kata/513e08acc600c94f01000001

// EXAMPLE INPUT
const input1 = 105, input2 = 14, input3 = 208 // result "690ED0"

// ORIGINAL SOLUTION
function rgb(r, g, b) {
    let arry = [r, g, b];
    arry = arry.map(num => {
        if (num < 0) return 0;
        if (num > 255) return 255;
        return num;
    }).map(num => {
        if (num < 16) return `0${num.toString(16).toUpperCase()}`;
        return num.toString(16).toUpperCase();
    })
    return arry.join("");
}

console.log(rgb(input1, input2, input3))

// REFACTORED SOLUTION
function rgb(r, g, b) {
    function toHex(a) {
        if (a <= 0) return '00';
        else if (a >= 255) return 'FF';
        else return a.toString(16).toUpperCase();
    }
    return toHex(r) + toHex(g) + toHex(b);
}