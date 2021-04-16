// https://www.codewars.com/kata/5574835e3e404a0bed00001b/

// EXAMPLE INPUT
const input = 7; // result 5

const getParticipants = handshakes => {
    if (handshakes <= 2) return (handshakes + 1);
    for (let i = 0; i <= handshakes; i++) {
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