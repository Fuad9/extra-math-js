function isPalindrome(word) {
    var reverseWord = word.split("").reverse().join("");
    if (word == reverseWord) {
        return true;
    } else {
        return false;
    }
}
console.log(isPalindrome("medium"));
// note:  in order to use reverse prototype,