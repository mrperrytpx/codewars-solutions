// https://www.codewars.com/kata/57ee31c5e77282c24d000024

// EXAMPLE INPUT
const input1 = ['life', 'eating', 'life']; // result -> "Supper happy!"

// ORIGINAL SOLUTION
function paul(x){
    const score = {
      "kata": 5,
      "life": 0,
      "Petes kata": 10,
      "eating": 1
    }
    let res = 0;
    const results = ["Super happy!", "Happy!", "Sad!", "Miserable!"];
    for (let i = 0; i < x.length; i++) if (score[x[i]]) res += score[x[i]];
    if (res < 40) return results[0];
    if (res < 70) return results[1];
    if (res < 100) return results[2];
    return results[3];
}

console.log(input1);

// REFACTORED
