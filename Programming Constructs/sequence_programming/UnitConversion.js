// Function to convert the ft into the inches
const InchesToFeet = (inches) => {
    if (typeof inches === "number") {
        return inches / 12;
    } else {
        console.log("Error input value");
        return false;
    }
}

// Function to convert ft into meter
const ftToMeter = (ft1, ft2) => {
    if (typeof ft1 === "number" && typeof ft2 === "number") {
        return [ft1 * 0.3048, ft2 * 0.3048]
    } else {
        console.log("Error input value");
        return false;
    }
}

let dimensions = ftToMeter(60, 40)

// Function to find the area in meters^2
const findArea = () => {
    if (typeof dimensions[0] === "number" && typeof dimensions[1] === "number") {
        return dimensions[0] * dimensions[1];
    } else {
        console.log("Error input value");
        return false;
    }
}

// Printing the values
console.log("" + InchesToFeet(12));
console.log("Unit dimension in meter: " + ftToMeter(60, 40));
console.log("Area of rectangle " +findArea() + "m^2");









