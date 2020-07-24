// calculating GCD using for loop
function gcdCalculator(num1, num2) {
    for (var i = 2; i <= num1; i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            var gcd = i;
        }
    }
    return gcd;
}
console.log(gcdCalculator(20, 40));

// calculating GCD using recursion method
function getGcd(a, b) {
    if (b == 0) {
        return a;
    } else {
        return getGcd(b, a % b);
    }
}
console.log(getGcd(15, 20));