const getWeekday = (num) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return num >= 1 && num <= 7 ? days[num - 1] : "Invalid input";
};

const dayNum = parseInt(process.argv[2]);
console.log(getWeekday(dayNum));
