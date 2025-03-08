let factors = [];
let index = 0;
const primeFactors = (n) => {
    while (n % 2 === 0) {
        factors[index++] = 2;
        n /= 2;
    }

    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            factors[index++] = i;
            n /= i;
        }
    }

    if (n > 2) factors[index++] = n;
    return factors;
};


console.log(primeFactors(20));