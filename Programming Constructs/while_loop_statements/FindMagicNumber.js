const readline = require("readline");

// Readline is used to take input from the terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Think of a number between 1 and 100, and I will guess it.");

let low = 1, high = 100;

const askFromUser = () => {
    let mid = Math.floor((low + high) / 2);
    
    rl.question(`Is your number ${mid}? (yes/higher/lower): `, (response) => {
        findMagicNumber(response.trim().toLowerCase(), mid);
    });
};

const findMagicNumber = (response, mid) => {
    if (response === "yes") {
        console.log(`Great! Your magic number is ${mid}.`);
        rl.close();
    } else if (response === "higher") {
        low = mid + 1;
        askFromUser();
    } else if (response === "lower") {
        high = mid - 1;
        askFromUser();
    } else {
        console.log("Please respond with 'yes', 'higher', or 'lower'.");
        askFromUser();
    }
};

askFromUser();
