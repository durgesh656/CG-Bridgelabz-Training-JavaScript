const printPowersOfTwo = (n) => {
    let i = 0;
    while (i <= n) {
        console.log(`2^${i} = ${Math.pow(2, i)}`);
        i++;
    }
};

const n = parseInt(process.argv[2]);
printPowersOfTwo(n);