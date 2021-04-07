// https://www.codewars.com/kata/58ad317d1541651a740000c5/train/javascript

// EXAMPLE INPUT
const input = "abc" // solution => abc acb bac bca cab cba - math.floor arr length = bac

// ORIGINAL SOLUTION - Why is it not ordering correctly I don't understand
const permutation = string => {
    if (string.length < 2) return string;
    let resArray = [];

    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (string.indexOf(char) != i) continue
        let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length);

        for (let perm of permutation(remainingChars)) {
            resArray.push(char + perm);
        }
    }
    return resArray;
}

const middlePermutation = (string) => {
    console.log(string);
    let resultArr = permutation(string);
    let res = resultArr.length % 2 === 0 ? resultArr[resultArr.length / 2 - 1] : resultArr[resultArr.length / 2 - 1];
    for (let i = 0; i < resultArr.length; i++) {
        console.log(`${i + 1} = ${resultArr[i]} - ${resultArr.length}`);
    }
    console.log(resultArr.indexOf("cxgdba"));
    return res;
}

console.log(middlePermutation(input));


/* function middlePermutation(s) {
    const sortedArr = s.split('').sort();
    if (sortedArr.length % 2 === 0) {
      return [...sortedArr.splice(sortedArr.length / 2 - 1, 1), ...sortedArr.reverse()].join('')
    }
    else {
      return [...sortedArr.splice(sortedArr.length / 2 , 1), middlePermutation(sortedArr.join(''))].join('')
    }
  } */