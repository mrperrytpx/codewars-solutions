// https://www.codewars.com/kata/59f4a0acbee84576800000af

// EXAMPLE INPUT
const input = "444996, 699990, 666690, 096904, 600644, 640646, 606469, 409694, 666094, 606490";
// result 2.9259259259e+1

//SOLUTION
function posAverage(s) {
    const array = s.split(",").map(string => string.trim());
    let commonPositions = 0;
    const sets = (array.length * (array.length - 1)) / 2;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            for (let k = 0; k < array[i].length; k++) {
                if (array[i][k] === array[j][k]) commonPositions++;
            }
        }
    }
    return ((commonPositions / (sets * array[0].length)) * 100).toExponential(10);
}

console.log(posAverage(input));