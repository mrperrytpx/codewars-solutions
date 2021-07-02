// https://www.codewars.com/kata/5282b48bb70058e4c4000fa7

// EXAMPLE INPUT
const input = "#FF9900";

// ORIGINAL SOLUTION
function hexStringToRGB(hexString) {
    const hexArray = hexString.replace("#", "").match(/.{2}/g)
    let rgbArray = []
    hexArray.forEach(str => rgbArray.push(parseInt(str, 16)))
    return result = {
        r: rgbArray[0],
        g: rgbArray[1],
        b: rgbArray[2]
    }
}

// REFACTORED SOLUTION
function hexStringToRGB(hexString) {
    return {
        r: parseInt(h.slice(1, 3), 16),
        g: parseInt(h.slice(3, 5), 16),
        b: parseInt(h.slice(5, 7), 16)
    };
}