function reverseString(s) {
    var strSplit = s.split('').reverse().join('');
    return parseInt(strSplit);
}
console.log(reverseString("1234"));



function Rectangle(a, b) {
    var length = a;
    var width = b;
    var perimeter = 2 * (a + b);
    var area = a * b;
    console.log(length);
    console.log(width);
    console.log(perimeter);
    console.log(area);

}
console.log(Rectangle(4, 5));