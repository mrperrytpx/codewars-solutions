// https://www.codewars.com/kata/59f44c7bd4b36946fd000052/javascript

// EXAMPLE INPUT
const input = "uuaaaxbbbbyyhwawiwjjjwwxym" // result -> hist(s) => "u..2.....**\rw..5.....*****\rx..2.....**"

// SOLUTION
function hist(s) {
    const u = s.match(/u/g);
    const w = s.match(/w/g);
    const x = s.match(/x/g);
    const z = s.match(/z/g);
    let results = [];
    if (u) results.push(`u..${u.length}.....${'*'.repeat(u.length)}`);
    if (w) results.push(`w..${w.length}.....${'*'.repeat(w.length)}`);
    if (x) results.push(`x..${x.length}.....${'*'.repeat(x.length)}`);
    if (z) results.push(`z..${z.length}.....${'*'.repeat(z.length)}`);
    return results.join(`\r`);
}

console.log(hist(input));