// https://www.codewars.com/kata/52755006cc238fcae70000ed

// EXAMPLE INPUT
const input = 5
// result 
//     *    
//    ***   
//   *****  
//  ******* 
// *********

// SOLUTION
function christmasTree(height) {
    let tree = [];
    for (let i = 1; i <= height; i++) {
        tree.push(" ".repeat(height - i) + "*".repeat((i - 1) * 2 + 1) + " ".repeat(height - i));
    }
    return tree.join("\n");
}

console.log(christmasTree(5));