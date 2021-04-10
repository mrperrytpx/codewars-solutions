// https://www.codewars.com/kata/5574835e3e404a0bed00001b/train/javascript

// EXAMPLE INPUT
const input = 7; // result 5

const getParticipants = handshakes => {
    if (handshakes === 0) return 1;
    if (handshakes === 1) return 2;
    if (handshakes === 3) return 3;
    for (let i = 0; i < handshakes; i++) {
        if (handshakes <= ((i * (i-1))/2)) return i;
    }
}

console.log(getParticipants(input));

// REFACTORED SOLUTION
function getParticipants(handshakes) {
    let shakes = 1;
    for (let i = 0; i < handshakes; i += shakes++);
    return shakes;
}