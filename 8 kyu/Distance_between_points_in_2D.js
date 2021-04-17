// https://www.codewars.com/kata/58dced7b702b805b200000be

// SOLUTION
function distanceBetweenPoints(a, b) {
    return Math.sqrt(Math.pow(Math.abs(a.x - b.x), 2) + Math.pow(Math.abs(a.y - b.y), 2));
}