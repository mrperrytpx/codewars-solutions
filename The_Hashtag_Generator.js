// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

// EXAMPLE INPUT

let input = "Do We have A Hashtag" // result = #DoWeHaveAHashtag

// ORIGINAL SOLUTION
function generateHashtag(str) {
    let hashtag = str.split(" ");
    hashtag.forEach(function(word, index) {
        this[index] = this[index].charAt(0).toUpperCase() + this[index].slice(1);
    }, hashtag);
    hashtag = hashtag.join("");
    hashtag = hashtag.replace(/\s/g, "");
    if (hashtag && hashtag.length < 140) {
        return `#${hashtag}`;
    } else {
        return false;
    }
}

// REFACTORED SOLUTION
const generateHashtag = str => {
    let hashtag = str.split(" ");
    hashtag.forEach(function(word, index) {
        this[index] = this[index].charAt(0).toUpperCase() + this[index].slice(1);
    }, hashtag);
    hashtag = hashtag.join("").replace(/\s/g, "");
    return (hashtag && hashtag.length < 140) ? `#${hashtag}` : false;
}

console.log(generateHashtag(input));