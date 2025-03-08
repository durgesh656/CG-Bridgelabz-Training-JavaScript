function generateBirthMonths(numIndividuals) {
    let birthMonths = {};

    // Generate birth months for given number of individuals
    for (let i = 1; i <= numIndividuals; i++) {
        let month = Math.floor(Math.random() * 12) + 1; 
        
        if (!birthMonths[month]) {
            birthMonths[month] = [];
        }
        birthMonths[month].push(`Person${i}`);
    }

    return birthMonths;
}

// Generate birth months for 50 individuals
const birthMonthData = generateBirthMonths(50);

// Print the grouped birth months
console.log("Individuals grouped by birth month:");
for (let month in birthMonthData) {
    console.log(`Month ${month}: ${birthMonthData[month].join(", ")}`);
}