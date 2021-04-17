// https://www.codewars.com/kata/55eea63119278d571d00006a

// SOLUTION
function nextId(ids) {
    for (let i = 0; i < ids.length; i++) {
        if (ids.indexOf(i) === -1) return i;
    }
    return ids.length;

}