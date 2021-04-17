// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15

// SOLUTION
function warnTheSheep(queue) {
    queue = queue.reverse();
    let wolf = queue.indexOf("wolf");
    return !wolf ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${wolf}! You are about to be eaten by a wolf!`
}