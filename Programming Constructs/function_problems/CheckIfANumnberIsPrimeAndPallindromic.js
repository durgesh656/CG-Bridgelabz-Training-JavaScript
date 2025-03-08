const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Function to check if the number is prime or not
const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
};

// Function to check if the number is pallindromic or not
const getPalindrome = (num) => parseInt(num.toString().split("").reverse().join(""));


// Check if the number is prime and pallindromic both
const primePalindromeCheck = () => {
    rl.question("Enter a number to check if it's prime and if its palindrome is also prime: ", (num) => {
        num = parseInt(num);

        if (!isPrime(num)) {
            console.log(`${num} is not a prime number.`);
            rl.close();
            return;
        }

        let palindrome = getPalindrome(num);
        console.log(`${num} is prime number and it's palindrome is ${palindrome}.`);

        isPrime(palindrome)
            ? console.log(`Palindrome ${palindrome} is also prime.`)
            : console.log(`Palindrome ${palindrome} is NOT prime.`);

        rl.close();
    });
};

primePalindromeCheck()


