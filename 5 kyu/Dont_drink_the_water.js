// https://www.codewars.com/kata/562e6df5cf2d3908ad00019e

// EXAMPLE INPUT
const input = [['H', 'H', 'W', 'O'], ['W', 'W', 'O', 'W'], ['H', 'H', 'O', 'O']]
// result => [['O', 'O', 'O', 'O'],['W','W','W','W'],['H','H','H','H']]]

// ORIGINAL
function separateLiquids(glass) {
    if (!glass.length) return []
    const density = {
        "H": 1.36,
        "W": 1.00,
        "A": 0.87,
        "O": 0.80,
    }
    let flattened = glass.reduce((a, b) => a.concat(b), []).sort((a, b) => density[a] - density[b])
    const result = [];
    for (let i = 0, width = glass[0].length; i < flattened.length; i += width) {
        result.push(flattened.slice(i, i + width));
    }
    return result;
}

// REFACTORED
const separateLiquids = (glass) => {
    if (!glass.length) return []
    const density = {
        "H": 1,
        "W": 2,
        "A": 3,
        "O": 4,
    }
    let flattened = glass.toString().split(",").sort((a, b) => density[a] - density[b])
    const result = [];
    for (let i = 0, width = glass[0].length; i < flattened.length; i += width) {
        result.push(flattened.slice(i, i + width));
    }
    return result;
}