// https://www.codewars.com/kata/58356a94f8358058f30004b5

// EXAMPLE INPUTS
const input1 = "xxxxxx", input2 = "====T" // result -> "ooooox"

// SOLUTION
function flyBy(lamps, drone) {
    if (lamps.length - drone.length > 0) {
        return `${"o".repeat(drone.length)}${"x".repeat(lamps.length - drone.length)}`;
    }
    return `${"o".repeat(lamps.length)}`;
}

console.log(flyBy(input1, input2));

// REFACTORED
const flyBy = (lamps, drone) => lamps.length - drone.length > 0
    ? `${"o".repeat(drone.length)}${"x".repeat(lamps.length - drone.length)}`
    : `${"o".repeat(lamps.length)}`;