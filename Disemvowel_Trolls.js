// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

// EXAMPLE INPOUT
let input = "N ffns bt,\nYur wrtng s mng th wrst \'v vr rad" // result -> "'N ffns bt,\nYr wrtng s mng th wrst \'v vr rd'"

// FIRST SOLUTION
function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}

console.log(disemvowel(input));

/* let result = [...str.toLowerCase()].map(elem => {
        if (elem.match(/^[aeiou]/g) === false) console.log("yo");
    })
    return result; */