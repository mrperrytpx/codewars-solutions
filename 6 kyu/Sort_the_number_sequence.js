// https://www.codewars.com/kata/5816b76988ca9613cc00024f

// EXAMPLE INPUT
const input = [3, 2, 1, 0, 5, 6, 4, 0, 1, 5, 3, 0, 4, 2, 8, 0] // result [1,2,3,0,1,3,5,0,2,4,8,0,4,5,6,0]

// FIRST SOLUTION
function getAllIndexes(arr, val) {
    var indexes = [], i;
    for (i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    return indexes;
}

const chunkArray = (array) => {
    let resultArray = [];
    let indexes = getAllIndexes(array, 0);
    for (let i = 0; i < array.length; i++) {
        const first = indexes.shift();
        const chunk = array.slice(i, first + 1);
        i = first;
        resultArray.push(chunk);
    }
    return resultArray;
}

const reducer = array => {
    if (!array) {
        return [0];
    } else {
        return array.reduce((acc, curr) => acc + curr, 0)
    }
};

function sortSequence(sequence) {
    const chunkedArray = chunkArray(sequence);

    for (let i = 0; i < chunkedArray.length; i++) {
        chunkedArray[i] = chunkedArray[i].sort((a, b) => a - b);
        chunkedArray[i].shift();
        chunkedArray[i].push(0);
    }

    let len = chunkedArray.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (reducer(chunkedArray[i]) > reducer(chunkedArray[i + 1])) {
                let tmp = chunkedArray[i];
                chunkedArray[i] = chunkedArray[i + 1];
                chunkedArray[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);

    return chunkedArray.filter(member => member !== undefined).reduce((acc, curr) => acc.concat(curr), []);
}

// REFACTORED (STOLEN FROM SOMEONE);
const sum = arr => arr.reduce((a, b) => a + b, 0);

function sortSequence(sequence) {
    let res = [];
    for (let i = 0; i < sequence.length; ++i) {
        let temp = [];
        while (sequence[i] !== 0) temp.push(sequence[i++]);
        res.push({
            value: temp.sort((a, b) => a - b).concat(0),
            index: i,
            total: sum(temp)
        });
    }
    res.sort((a, b) => a.total - b.total || a.index - b.index);
    return res.reduce((acc, v) => acc.concat(v.value), []);
}