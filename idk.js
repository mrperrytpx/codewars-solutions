let n = 4, k = 3;

let arr = [];

for (let i = 0; i < n; i++) {
    let subArray = [];
    for (let j = 0; j < k; j++) {
        subArray.push(j)
    }
    arr.push(subArray);
}

console.log(arr);