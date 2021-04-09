// https://www.codewars.com/kata/57f22b0f1b5432ff09001cab/train/javascript

// EXAMPLE INPUT
const input = [['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad']];
// result -> "Fail!"

// FIRST SOLUTION
function well(x) {
    let counter = 0;
    for (let i = 0; i < x.length; i++) {
        for (let j = 0; j < x[i].length; j++) {
            if (x[i][j].toString().toLowerCase() == "good") {
                console.log(x[i][j]);
                counter++;
            }
        }
    }
    if (counter !== 0 && counter <= 2) {
        return "Publish!";
    } else if (counter > 2) {
        return "I smell a series!";
    } else {
        return "Fail!";
    }

}

console.log(well(input));

// REFACTORED SOLUTION
function well(x) {
    let counter = 0;
    for (let i = 0; i < x.length; i++) {
        for (let j = 0; j < x[i].length; j++) {
            if (x[i][j].toString().toLowerCase() == "good") counter++;
        }
    }
    if (counter !== 0 && counter <= 2) return "Publish!";
    if (counter > 2) return "I smell a series!";
    return "Fail!";
}