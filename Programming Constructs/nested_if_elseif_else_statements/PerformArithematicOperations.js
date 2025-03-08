const findMaxMin = (a, b, c) => {
    if (b === 0) {
        console.log("Error: Division by zero is not allowed.");
        return;
    }

    const expr1 = a + b * c;
    const expr2 = a % b + c;
    const expr3 = c + a / b; 
    const expr4 = a * b + c;

    const values = [expr1, expr2, expr3, expr4];

    // Finding the min and max values "...copy the array values called spread operator."
    const max = Math.max(...values);
    const min = Math.min(...values);

    // Using template literals to print the values
    console.log(`a + b * c = ${expr1}`); 
    console.log(`a % b + c = ${expr2}`);
    console.log(`c + a / b = ${expr3}`);
    console.log(`a * b + c = ${expr4}`);
    console.log("Maximum Value:", max);
    console.log("Minimum Value:", min);
};

// Get user input
const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[3]);
const c = parseInt(process.argv[4]);

// Invike the function
findMaxMin(a, b, c);
