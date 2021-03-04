// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript
// EXAMPLE INPUT

let input = "0 tempora o mores !" // result = igPay atinlay siay oolcay

// ORIGINAL SOLUTION
/* function pigIt(str){
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].charAt(0) !== "!" && arr[i].charAt(0) !== "?") {
            arr[i] = arr[i].slice(1) + arr[i].charAt(0) + "ay";
        }
    }
    return arr.join(" ");
} */

// REFACTORED SOLUTION
const pigIt = str => {
    let arr = str.split(" ");
    arr.forEach(function(part, index) {
        if(this[index] !== "!" && this[index] !== "?") this[index] = `${this[index].slice(1)}${this[index].charAt(0)}ay`;
    }, arr); 
    return arr.join(" ");
}

console.log(pigIt(input));


