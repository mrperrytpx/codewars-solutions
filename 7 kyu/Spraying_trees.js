// https://www.codewars.com/kata/5981a139f5471fd1b2000071

// SOLUTION
function task(w, n, c) {
    const schedule = {
      "Monday": "James",
      "Tuesday": "John",
      "Wednesday": "Robert",
      "Thursday": "Michael",
      "Friday": "William"
    }
    return `It is ${w} today, ${schedule[w]}, you have to work, you must spray ${n} trees and you need ${n*c} dollars to buy liquid`;
}

console.log(task("Monday", 10, 4));