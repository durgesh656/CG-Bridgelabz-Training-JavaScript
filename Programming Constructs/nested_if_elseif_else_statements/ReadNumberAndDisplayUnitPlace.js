const getPlaceValue = (num) => {
    // Object contains key values pair key as the unit place
    const placeValues = {
        1: "Unit",
        10: "Ten",
        100: "Hundred",
        1000: "Thousand",
        10000: "Ten Thousand",
        100000: "Lakh",
        1000000: "Million"
    };
    return placeValues[num] || "Invalid input"; // If invlid inout case hits
};

const value = parseInt(process.argv[2]);
console.log(getPlaceValue(value));
