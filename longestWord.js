// Finding the longest word in a string 
function getLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for (i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > longestWord) {
            longestWord = strSplit[i].length;
        }
    }
    return longestWord;
}
console.log(getLongestWord("I love my country"));