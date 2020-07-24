function feetToMile(feet) {
    var mile = feet / 5280;
    if (feet <= 0) {
        return ("feet can't be a negative or null value");
    }
    return mile;
}
console.log(feetToMile(5280));
// remainder: console.log shouldn't be added to assignment