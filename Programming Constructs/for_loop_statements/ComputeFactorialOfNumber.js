const factorial = (n) => {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
};

const n = parseInt(process.argv[2]);
console.log(`${n}! =`, factorial(n));
