// Function to check if the number is prime or not
const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

// Find the prime number in range and print them
const findPrimesInRange = (start, end) => {
    for (let num = start; num <= end; num++) {
        if (isPrime(num)) console.log(num);
    }
};

const start = parseInt(process.argv[2]);
const end = parseInt(process.argv[3]);
console.log(`Prime numbers between ${start} and ${end}:`);
findPrimesInRange(start, end);
