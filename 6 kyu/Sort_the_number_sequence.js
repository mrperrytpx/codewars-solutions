function getAllIndexes(arr, val) {
    var indexes = [], i;
    for (i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    return indexes;
}

const chunkArray = array => {
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

const reducer = array => array.reduce((acc, curr) => acc + curr, 0);

function sortSequence(sequence) {
    const chunkedArray = chunkArray(sequence);

    for (let i = 0; i < chunkedArray.length; i++) {
        chunkedArray[i] = chunkedArray[i].sort();
        chunkedArray[i].shift();
        chunkedArray[i].push(0);
    }

    for (let j = 0; j < chunkedArray.length; j++) {
        for (let i = 0; i < chunkedArray.length - 1; i++) {
            if (reducer(chunkedArray[i]) > reducer(chunkedArray[i + 1])) {
                [chunkedArray[i], chunkedArray[i + 1]] = [chunkedArray[i + 1], chunkedArray[i]];
            }
        }
    }

    return chunkedArray.reduce((acc, curr) => acc.concat(curr), []);
}

//WIP