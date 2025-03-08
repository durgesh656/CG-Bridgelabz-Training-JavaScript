const harmonicNumber = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += 1 / i;
    }
    return sum.toFixed(2);
};

const n = parseInt(process.argv[2]);
console.log(`Harmonic Number H(${n}) =`, harmonicNumber(n));
