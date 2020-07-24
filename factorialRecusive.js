// code to calculate factorial by recursive way
function factorial(num) {
    if (num == 0) {
        return 1;
    }
    return num = num * factorial(num - 1);
}
console.log(factorial(6))