// https://www.codewars.com/kata/56a5d994ac971f1ac500003e

// EXAMPLE INPUT
const input1 = ["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], input2 = 1;
// result => "abigailtheta"

// ORIGINAL SOLUTION
function longestConsec(strarr, k) {
    if (k <= 0) return "";
    if (k > strarr.length) return "";
    if (k === 1) {
        let maxLen = "";
        for (let i = 0; i < strarr.length; i++) {
            if (strarr[i].length > maxLen.length) maxLen = strarr[i]
        }
        return maxLen;
    } else {
        let maxLen = "";
        for (let i = 0; i < strarr.length - 1; i++) {
            let combo = strarr.slice(i, i + k).reduce((a, c) => a + c, "");
            if (combo.length > maxLen.length) {
                maxLen = combo;
            }
        }
        return maxLen;
    }
}

// REFACTORED SOLUTION
const longestConsec = (strarr, k) => {
    if (k <= 0 || k > strarr.length) return "";
    let maxLen = "";
    for (let i = 0; i <= strarr.length - k; i++) {
        let combo = strarr.slice(i, i + k).join("");
        if (combo.length > maxLen.length) maxLen = combo;
    }
    return maxLen;
}

console.log(longestConsec(input1, input2));