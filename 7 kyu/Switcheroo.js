// https://www.codewars.com/kata/57f759bb664021a30300007d/

// EXAMPLE INPUT
let input = "aabacbaa" // reulst -> 'bbabcabb'

// FIRST SOLUTION
function switcheroo(x) {
    let result = [...x]
    for (let i = 0; i < result.length; i++) {
        if (result[i] === "a") {
            result[i] = "b";
            continue;
        }
        if (result[i] === "b") {
            result[i] = "a";
            continue;
        }
    }
    return result.join("");
}

console.log(switcheroo(input));

// REFACTORED SOLUTION
function switcheroo(x) {
    let result = [...x].map(elem => {
        if (elem === "a") return "b";
        if (elem === "b") return "a";
        if (elem === "c") return "c";
    });
    return result.join("");
}