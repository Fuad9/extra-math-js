function reverseWord(str) {
    reverseWord = str.split(' ').reverse().join(' ');
    return reverseWord;
}
console.log(reverseWord("I love my country"));