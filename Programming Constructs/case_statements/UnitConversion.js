
const convertLength = (option, value) => {
    switch (option) {
        case 1: return `${value} feet = ${value * 12} inches`; // 1. Feet to Inch
        case 2: return `${value} feet = ${(value * 0.3048).toFixed(2)} meters`; // 2. Feet to Meter
        case 3: return `${value} inches = ${(value / 12).toFixed(2)} feet`;// 3. Inch to Feet
        case 4: return `${value} meters = ${(value * 3.28084).toFixed(2)} feet`; // 4. Meter to Feet
        default: return "Invalid option (Choose between 1-4)";
    }
};

const option = parseInt(process.argv[2]);
const value = parseFloat(process.argv[3]);
console.log(convertLength(option, value));
