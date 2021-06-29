// https://www.codewars.com/kata/546f922b54af40e1e90001da

// EXAMPLE INPUT

const input = "The sunset sets at twelve o' clock."
// result "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

// ORIGINAL SOLUTION
const letterToNumber = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
}

function alphabetPosition(text) {
    text = text.replace(/[^A-Za-z0-9]/gi, '');
    const transformedText = [...text.toLowerCase()]
        .filter(letter => letterToNumber.hasOwnProperty(`${letter}`))
        .map(letter => letterToNumber[letter])
        .join(" ");

    return transformedText;
}

// REFACTORED SOLUTION
function alphabetPosition(text) {
    text = text.toUpperCase().match(/[A-Z]/g);
    if (!text) return "";
    const transformedText = text
        .map(letter => letter.charCodeAt() - 64)
        .join(" ");

    return transformedText;
}