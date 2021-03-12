// https://www.codewars.com/kata/5121303128ef4b495f000001/train/javascript

// FIX
class Person {
    constructor(name) {
        this.name = name;
    }
    greet(who) {
        return `Hello ${who}, my name is ${this.name}`;
    }
}
