const getWeekday = (num) => {
    switch (num) {
        case 1: return "Sunday";
        case 2: return "Monday";
        case 3: return "Tuesday";
        case 4: return "Wednesday";
        case 5: return "Thursday";
        case 6: return "Friday";
        case 7: return "Saturday";
        default: return "Invalid input (Enter a number between 1-7)";
    }
};

const dayNum = parseInt(process.argv[2]);
console.log(getWeekday(dayNum));
