const getPlaceValue = (num) => {
    switch (num) {
        case 1: return "Unit";
        case 10: return "Ten";
        case 100: return "Hundred";
        case 1000: return "Thousand";
        case 10000: return "Ten Thousand";
        case 100000: return "Lakh";
        case 1000000: return "Million";
        default: return "Invalid input (Enter valid unit value)";
    }
};

const value = parseInt(process.argv[2]);
console.log(getPlaceValue(value));
