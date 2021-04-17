// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7

// SOLUTION
const gooseFilter = (birds) => {
    const geese = new Set(['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'])
    return birds.filter((bird) => !geese.has(bird))
}