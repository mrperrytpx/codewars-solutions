// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296

// SOLUTION
function howMuchILoveYou(nbPetals) {
    console.log(nbPetals);
    let ans = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
    return ans[nbPetals % ans.length === 0 ? ans.length - 1 : (nbPetals % ans.length) - 1];
}