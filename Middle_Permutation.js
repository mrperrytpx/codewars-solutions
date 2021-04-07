// https://www.codewars.com/kata/58ad317d1541651a740000c5/train/javascript

// EXAMPLE INPUT
const input = "wfcairbxklyqnhupvme"

// ORIGINAL SOLUTION - Why is it not ordering correctly I don't understand
// DICTIONARY ORDER MEANS ALPHABETICALLY EACH TIME HAHAHAHHA NICE SO FUNNY :)
// WORKS BUT INCEDIBLY SLOW FOR LONG STRINGS
const permutation = string => {
    if (string.length < 2) return string;
    let resArray = [];

    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (string.indexOf(char) != i) continue
        let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length);

        for (let perm of permutation(remainingChars)) {
            console.log(char + perm);
            resArray.push(char + perm);
        }
    }
    return resArray;
}

const middlePermutation = (string) => {
    string = string.split("").sort().join("");
    let resultArr = permutation(string);
    let res = resultArr.length % 2 === 0 ? resultArr[resultArr.length / 2 - 1] : resultArr[resultArr.length / 2 - 1];
    return res;
}
//I wouldn't use this one smile

console.log(middlePermutation(input));

// EXPLANATION FOR FUTURE SELF
/* wfcairbxklyqnhupvme
pass 1
length isn't even
length / 2 character -> abcefhiklmnpqruvwxy = 19 / 2 = 9.5 rounds to 10, 10th char is 'm' + function run
    run function again
    pass 2
    string is even length
    sorted string is abcefhiklnpqruvwxy, middle character is 18 / 2 = 9, 9th char is 'l'
    return 'lyxwvurqpnkihfecba' ('l' + reversed 'abcefhiklnpqruvwxy' which is 'yxwvurqpnkihfecba')
    back to pass 1
function returned 'lyxwvurqpnkihfecba' and we had 'm' before
return 'mlyxwvurqpnkihfecba' ('m' + 'lyxwvurqpnkihfecba') 
*/

// Most understandable solution I **YOINKED**
function middlePermutation(s) {
    const sortedArr = s.split('').sort();
    if (sortedArr.length % 2 === 0) {
      return [...sortedArr.splice(sortedArr.length / 2 - 1, 1), ...sortedArr.reverse()].join('')
    }
    else {
      return [...sortedArr.splice(sortedArr.length / 2 , 1), middlePermutation(sortedArr.join(''))].join('')
    }
}
