// https://www.codewars.com/kata/597c684822bc9388f600010f/train/javascript
// EXAMPLE INPUT
const first = "Clint", second = "Eastwood" // result -> Clint Eastwood

// FIX
class Dinglemouse{

    constructor(firstName, lastName = "") {
        this.firstName = firstName,
        this.lastName = lastName
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`.trim();
    }   
}

const solution = new Dinglemouse(first, second).getFullName();
console.log(solution);