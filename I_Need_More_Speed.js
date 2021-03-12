// https://www.codewars.com/kata/55de9c184bb732a87f000055/train/javascript
// EXAMPLE INPUT
let input = ['hello','world','how','are','you','?']; // result -> ['?','you','are','how','world','hello']

// SOLUTION 
function reverse(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[arr.length - (i + 1)];
        arr[arr.length - (i + 1)] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

console.log(reverse(input));