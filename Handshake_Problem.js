// https://www.codewars.com/kata/5574835e3e404a0bed00001b/train/javascript

// EXAMPLE INPUT
const input = 7; // result 5

// FIRST SOLUTION
function getParticipants(handshakes) {
    let shakes = 1;
    for (let i = 0; i < handshakes; i += shakes++);
    return shakes;
}

console.log(getParticipants(input));