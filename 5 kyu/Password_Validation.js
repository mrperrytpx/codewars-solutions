// https://www.codewars.com/kata/52e1476c8147a7547a000811/
// ORIGINAL SOLUTION
function validate(password) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(password);
}

// EXAMPLE INPUT
let pw = "Password123"; // expected FALSE
console.log(validate(pw));

// REFACTORED SOLUTION
const val = password => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(password);
console.log(val(pw));