function reverseWordsInPlace(str) {
    var addReverseWords = [];
    var splitWordsInPlace = str.split(" ");
    for (i = 0; i < splitWordsInPlace.length; i++) {
        var reverseWords = splitWordsInPlace[i].split('').reverse().join('');
        addReverseWords.push(reverseWords);
    }
    var reverseText = addReverseWords.join(' ');
    return reverseText;
}
console.log(reverseWordsInPlace("I love my country"));