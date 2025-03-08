const numberToWord = (num) => {
    const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    return num >= 0 && num <= 9 ? words[num] : "Invalid input";
};

// Reads the command line argument
const num = parseInt(process.argv[2]);

console.log(numberToWord(num));
