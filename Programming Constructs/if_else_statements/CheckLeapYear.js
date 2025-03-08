// Function to check if a year is a leap year
const isLeapYear = (year) => {
    if (typeof year !== "number" || year < 1000 || year > 9999) {
        console.log("Error: Please enter a valid 4-digit year.");
        return false;
    }

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
};

// Get the year from the command line
const args = process.argv.slice(2);
if (args.length !== 1) {
    console.log("Please enter the valid input \"node filename argument(Year)\"");
    process.exit(1);
}

const year = parseInt(args[0]);

console.log(year + " is " + (isLeapYear(year) ? "a Leap Year" : "not a Leap Year"));
