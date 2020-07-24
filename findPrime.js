// code to find prime number 
function isPrime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            return ("not prime");
        }
        return ("prime");
    }
}
console.log(isPrime(17))