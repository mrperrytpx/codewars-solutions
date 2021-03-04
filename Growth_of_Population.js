// https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript
// ORIGINAL SOLUTION
function nbYear(p0, percent, aug, p, counter = 0) {
    let newSum = Math.floor(p0 + (p0 * (percent / 100)) + aug);
    counter++;
    if (newSum >= p) {
        return counter;
    } else { 
        p0 = newSum;
        return nbYear(p0, percent, aug, p, counter);
    } 
}

// EXAMPLE INPUT
let startingPop = 1500000, percentageGrowth = 0, peopleComingLeaving = 10000, goalPopulation = 2000000; // result = 50;
// console.log(nbYear(startingPop, percentageGrowth, peopleComingLeaving, goalPopulation));

// REFACTORED SOLUTION
const nbYear = (p0, percent, aug, p, c = 0) => {
    let newSum = Math.floor(p0 + (p0 * (percent / 100)) + aug);
    c++;
    return newSum >= p ? c : (p0 = newSum, nbYear(p0, percent, aug, p, c));
}

console.log(nbYear(startingPop, percentageGrowth, peopleComingLeaving, goalPopulation));